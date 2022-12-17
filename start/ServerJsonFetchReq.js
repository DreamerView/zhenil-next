
const AesEncryption = require('aes-encryption')

const ServerJsonFetchReq = async({method,body,path,cookie,server}) =>{
    const aes = new AesEncryption();
    aes.setSecretKey(process.env.aesKey);
    const getCookie = (cookieName) => {
        let cookies = {};
        cookie.split(';').forEach(function(el) {
          let [key,value] = el.split('=');
          cookies[key.trim()] = value;
        })
        return cookies[cookieName];
    };
    const userAccessToken = getCookie("accessToken");
    if(userAccessToken!==undefined) {
        const accessToken = aes.encrypt(userAccessToken)
        let requestOptions;
        if(method==="POST") {
            requestOptions = {
                method: 'POST',
                headers: {
                    "WWW-Authenticate": process.env.authHeader,
                    "Authorization": `Bearer ${accessToken}`,
                    "Accept":"application/json; charset=utf-8",
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(body)
            };
        } else if(method==="GET") {
            requestOptions = {
                method: 'GET',
                headers: {
                    "WWW-Authenticate": process.env.authHeader,
                    "Authorization": `Bearer ${accessToken}`,
                    "Accept":"application/json; charset=utf-8",
                    "Content-Type": "application/json; charset=utf-8"
                },
            };
        }
        const login = await fetch(process.env.backend+path, requestOptions);
        if (login.status === 406) {
            const tokenOptions = {
                method: 'POST',
                headers: {
                    "WWW-Authenticate": process.env.authHeader,
                    "Accept":"application/json; charset=utf-8",
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({token:accessToken})
            };
            const send = await fetch(process.env.backend+"/generate-token",tokenOptions);
            if(send.status === 409) {
                console.log("It's conflict!");
                server.res.setHeader('set-cookie', ["accessToken=;Max-Age=0;path=/"]);
                return "redirect";
            } else {
                const result = await send.json();
                if(result.accessToken!==undefined) {
                    const response = aes.decrypt(result.accessToken);
                    server.res.setHeader('set-cookie', ['accessToken='+response+";path=/"])
                    console.log("token updated, new token is "+response);
                    let sendReqOpt;
                    if(method==="POST") {
                        sendReqOpt = {
                            method: 'POST',
                            headers: {
                                "WWW-Authenticate": process.env.authHeader,
                                "Authorization": `Bearer ${aes.encrypt(response)}`,
                                "Accept":"application/json; charset=utf-8",
                                "Content-Type": "application/json; charset=utf-8"
                            },
                            body: JSON.stringify(body)
                        };
                    } else if(method==="GET") {
                        sendReqOpt = {
                            method: 'GET',
                            headers: {
                                "WWW-Authenticate": process.env.authHeader,
                                "Authorization": `Bearer ${aes.encrypt(response)}`,
                                "Accept":"application/json; charset=utf-8",
                                "Content-Type": "application/json; charset=utf-8"
                            },
                        };
                    }
                    const send = await fetch(process.env.backend+path, sendReqOpt);
                    const res = await send.json()
                    return res;
                    // window.location.reload();
                }
            }
        } else {
            const result = await login.json()
            return result
        }
    }
}
export default ServerJsonFetchReq;
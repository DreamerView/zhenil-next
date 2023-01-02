import { useEffect, useState,useCallback } from "react";
import { signIn,signOut, useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
const AesEncryption = require('aes-encryption');

const Login = () =>{
    const send = useDispatch();
    const [wait,setWait] = useState(false);
    const {data:session} = useSession({required:true});
    // const setNotification = useCallback(({user,content,title,image}) => {
    //     send({
    //         type:"setNotification",
    //         set:{
    //             user:user,
    //             title:title,
    //             content:content,
    //             image:image
    //         }
    //     });
    // },[send]);
    // const handlerLogin = useCallback(async() =>{
    //     if(wait===false && localStorage.getItem('signInClient')!==null) {
    //         const result = session;
    //         const aes = new AesEncryption();
    //         aes.setSecretKey(process.env.aesKey);
    //         const email = aes.encrypt(result.user.email);
    //         const name = aes.encrypt(result.user.name);
    //         const image = aes.encrypt(result.user.image);
    //         const client = aes.encrypt(localStorage.getItem('signInClient'));
    //         setWait(true);
    //         try {
    //             if (typeof window !== 'undefined') {
    //                 const hostname = window.location.hostname;
    //                 const requestOptions = {
    //                     method: 'POST',
    //                     headers: {
    //                         "WWW-Authenticate": process.env.authHeader,
    //                         "Proxy-Authenticate":"sdadasdsa",
    //                         "Accept":"application/json; charset=utf-8",
    //                         "Content-Type": "application/json; charset=utf-8"
    //                     },
    //                     body: JSON.stringify({email:email,name:name,image:image,client:client})
    //                 };
    //                 const login = await fetch(process.env.backend+"/signin-with-socialnetwork", requestOptions);
    //                 if (login.status ===404) {
    //                     setNotification({user:"admin",content:"User email or password is not correct!"});
    //                     setTimeout(()=>setWait(false),[1000]);
    //                 } else if(login.status ===500) {
    //                     setNotification({user:"admin",content:"Something going wrong"});
    //                     setTimeout(()=>setWait(false),[1000]);
    //                 }
    //                 const result = await login.json();
    //                 const accessToken = aes.decrypt(result.accessToken);
    //                 const nameUser = aes.decrypt(result.name);
    //                 const surnameUser = aes.decrypt(result.surname);
    //                 const avatarUser = aes.decrypt(result.avatar);
    //                 const today = new Date();
    //                 const expire = new Date();
    //                 expire.setTime(today.getTime() + 3600000*24*14);
    //                 document.cookie=`accessToken=${accessToken};path=/;secure;expires=${expire.toGMTString()}`;
    //                 setNotification({title:nameUser+" "+surnameUser,content:"Welcome to the system!",image:avatarUser});
    //                 setTimeout(()=>setWait(false),[1000]);
    //                 setTimeout(()=>window.location.href="/",[2000]);
    //                 send({
    //                     type:"setAuth",
    //                     set:true
    //                 });
    //                 signOut()
    //             }
    //         } catch(e) {
    //             console.log(e);
    //         }
    //     }
    // },[send,session,setNotification,wait]);
    useEffect(()=>{
        const setNotification = ({user,content,title,image}) => {
            send({
                type:"setNotification",
                set:{
                    user:user,
                    title:title,
                    content:content,
                    image:image
                }
            });
        };
        const handlerLogin = async() =>{
            if(wait===false && localStorage.getItem('signInClient')!==null) {
                const result = session;
                const aes = new AesEncryption();
                aes.setSecretKey(process.env.aesKey);
                const email = aes.encrypt(result.user.email);
                const name = aes.encrypt(result.user.name);
                const image = aes.encrypt(result.user.image);
                const client = aes.encrypt(localStorage.getItem('signInClient'));
                setWait(true);
                try {
                    if (typeof window !== 'undefined') {
                        const hostname = window.location.hostname;
                        const requestOptions = {
                            method: 'POST',
                            headers: {
                                "WWW-Authenticate": process.env.authHeader,
                                "Proxy-Authenticate":"sdadasdsa",
                                "Accept":"application/json; charset=utf-8",
                                "Content-Type": "application/json; charset=utf-8"
                            },
                            body: JSON.stringify({email:email,name:name,image:image,client:client})
                        };
                        const login = await fetch(process.env.backend+"/signin-with-socialnetwork", requestOptions);
                        if (login.status ===404) {
                            setNotification({user:"admin",content:"User email or password is not correct!"});
                            setTimeout(()=>setWait(false),[1000]);
                        } else if(login.status ===500) {
                            setNotification({user:"admin",content:"Something going wrong"});
                            setTimeout(()=>setWait(false),[1000]);
                        }
                        const result = await login.json();
                        const accessToken = aes.decrypt(result.accessToken);
                        const nameUser = aes.decrypt(result.name);
                        const surnameUser = aes.decrypt(result.surname);
                        const avatarUser = aes.decrypt(result.avatar);
                        const today = new Date();
                        const expire = new Date();
                        expire.setTime(today.getTime() + 3600000*24*14);
                        document.cookie=`accessToken=${accessToken};path=/;secure;expires=${expire.toGMTString()}`;
                        setNotification({title:nameUser+" "+surnameUser,content:"Welcome to the system!",image:avatarUser});
                        setTimeout(()=>setWait(false),[1000]);
                        setTimeout(()=>window.location.href="/",[2000]);
                        send({
                            type:"setAuth",
                            set:true
                        });
                        signOut()
                    }
                } catch(e) {
                    console.log(e);
                }
            }
        };
        if(session) handlerLogin();
        return () => {
            return false;
        };
    },[session])
};
export default Login;
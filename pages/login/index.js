import {useState} from "react";
import Head from "next/head";
import NavbarApp from '/pages/navbar_app/nav';
import style from "/styles/login/index.module.css";
import { useDispatch } from "react-redux";
const AesEncryption = require('aes-encryption')
import Image from "next/image";

const LoginForm = () => {
    const send = useDispatch();
    const [wait,setWait] = useState(false);
    const [passValue,setPassValue] = useState('password');
    const handlerLogin = async(e) =>{
        e.preventDefault();
        if(wait===false) {
            const aes = new AesEncryption();
            aes.setSecretKey(process.env.aesKey);
            const email = aes.encrypt(e.target[0].value);
            const password = aes.encrypt(e.target[1].value);
            console.log(e);
            setWait(true);
            try {
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({email:email,password:password})
                };
                const login = await fetch(process.env.backend+"/login", requestOptions)
                if (login.status ===404) {
                    send({
                        type:"setNotification",
                        set:{
                            title:"Support Service Okki.kz",
                            content:"User email or password is not correct!"
                        }
                    });
                    setTimeout(()=>setWait(false),[1000]);
                }
                const result = await login.json();
                localStorage.setItem("AccessToken",result)
                send({
                    type:"setNotification",
                    set:{
                        title:"Support Service Okki.kz",
                        content:"Welcome to the system!"
                    }
                });
                setTimeout(()=>setWait(false),[1000]);
                console.log(result);
                console.log(email,password)
                
                // console.log(login.status);
            } catch(e) {
                
            }
        }
    }
    return(
        <>
            <Head>
                <title>Okki ID</title>
                <meta property="og:title" content={`Okki ID`} />
                <meta name="description" content={`Welcome to Okki ID`} />
            </Head>
            <NavbarApp to={{href:"/"}} choice="alone"/>
            <div className="main_app block_animation">
            <div className={style.login_form}>
                <h1 className={style.head_center} onClick={()=>send({
                        type:"setNotification",
                        set:{
                            title:"Support Service Okki.kz",
                            content:"User email or password is not correct!"
                        }
                    })}>Welcome back!</h1>
                <p className={style.text_center}>Please enter your log in details below</p>
                <form onSubmit={(e) => handlerLogin(e)}>
                    <div className={style.login_row}>
                        <input type="email" name="email" className={`${style.login_input} ${style.email}`} placeholder="Email" required />
                        <div className={style.password}>
                            <div className={style.password__show_row}>
                                <div className={style.password__show}>
                                    <Image layout="fill" alt="password" onClick={()=>{setPassValue(passValue==="password"?"text":"password")}} src={`/img/visibility${passValue==='password'?``:`_off`}.svg`}/>
                                </div>
                            </div>
                            <input type={passValue}  name="password" className={`${style.password_input} ${style.key}`} placeholder="Password" required/>
                        </div>
                        <p className={style.text_center}>Forgot password?</p>
                        <button type="submit" className={style.login_button}>{wait===true?<img src="/img/button-preloader.svg"/>:"Login"}</button>
                    </div>
                </form>
            </div>
            <div className={style.notification}></div>
        </div>
      </>
    );
};

export default LoginForm;
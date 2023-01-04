/*jshint esversion: 6 */
/*jshint esversion: 8 */
import {useState,useEffect, useCallback} from "react";
import Head from "next/head";
import NavbarApp from '/pages/navbar_app/nav';
import style from "/styles/signin/index.module.css";
import { useDispatch } from "react-redux";
const AesEncryption = require('aes-encryption');
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import ServerJsonFetchReq from "/start/ServerJsonFetchReq";
import { getCsrfToken, getProviders, useSession, signIn,getSession,signOut } from "next-auth/react";

export async function getServerSideProps(context) {
    const session = await getSession(context);
    const data = await ServerJsonFetchReq({
        method:"GET",
        path:"/get-data",
        cookie:context.req.headers.cookie,
        server:context,
        auth:"yes"
    });
    const ReturnTo = async() => {
        return {
            props: {
                providers: await getProviders(context),
            }
        }; 
    };
    const ReturnBack = async() => {
        return {
            redirect: {
                permanent: false,
                destination: '/',
            },
            props: {}
        }; 
    };
    const SocialNetwork = async() => {
        return {
            // redirect: {
            //     permanent: false,
            //     destination: '/signin/auth',
            // },
            props: {data:session}
        }; 
    };
    if(session!==null) return SocialNetwork();
    if(data.result==='redirect') return ReturnTo();
    else return ReturnBack();
};

const LoginForm = ({providers,data}) => {
    const send = useDispatch();
    const router = useRouter();
    const [wait,setWait] = useState(false);
    const [passValue,setPassValue] = useState('password');
    const [verified,setVerify] = useState(false);
    const setNotification = useCallback(({user,content,title,image}) => {
        send({
            type:"setNotification",
            set:{
                user:user,
                title:title,
                content:content,
                image:image
            }
        });
    },[send]);
    const handlerEmail = async(e) =>{
        e.preventDefault();
        if(wait===false) {
            const aes = new AesEncryption();
            aes.setSecretKey(process.env.aesKey);
            const email = aes.encrypt(e.target[0].value);
            const client = aes.encrypt("okki");
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
                        body: JSON.stringify({email:email,client:client})
                    };
                    const login = await fetch(process.env.backend+"/verify-email", requestOptions);
                    if (login.status ===404) {
                        setNotification({user:"admin",content:"User email is not found!"});
                        setTimeout(()=>setWait(false),[1000]);
                    } else if(login.status ===500) {
                        setNotification({user:"admin",content:"Something going wrong"});
                        setTimeout(()=>setWait(false),[1000]);
                    }
                    const result = await login.json();
                    if(result.success===true) {
                        const nameResult = aes.decrypt(result.name);
                        const surnameResult = aes.decrypt(result.surname);
                        const avatarResult = aes.decrypt(result.avatar);
                        const emailResult = aes.decrypt(result.email);
                        const resultAll = {name:nameResult,surname:surnameResult,avatar:avatarResult,email:emailResult};
                        setWait(prev=>prev=false);
                        setVerify(prev=>prev=resultAll);
                    }
                }
            } catch(e) {
                console.log(e);
            }
        }
    };
    const handlerLogin = async(e) =>{
        e.preventDefault();
        if(wait===false) {
            const aes = new AesEncryption();
            aes.setSecretKey(process.env.aesKey);
            const email = aes.encrypt(e.target[0].value);
            const password = aes.encrypt(e.target[1].value);
            const client = aes.encrypt("okki");
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
                        body: JSON.stringify({email:email,password:password,client:client})
                    };
                    const login = await fetch(process.env.backend+"/signin", requestOptions);
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
                }
            } catch(e) {
                console.log(e);
            }
        }
    };
    const SignInWithSN = (name,client) =>{
        localStorage.setItem('signInClient',client);
        signIn(name)
    };
    const handlerSocialNetwork = useCallback(async() =>{
        if(wait===false && localStorage.getItem('signInClient')!==null) {
            const result = data;
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
                    setWait(false);
                    send({
                        type:"setAuth",
                        set:true
                    });
                    signOut({callbackUrl: '/'})
                }
            } catch(e) {
                console.log(e);
            }
        }
    },[send,data,setNotification,wait]);
    useEffect(()=>{
        if(data!==undefined) handlerSocialNetwork();
        return () => {
            return false;
        };
    },[data,handlerSocialNetwork]);
    useEffect(()=>{
        send({type:"hideRequest",set:true});
    },[send]);
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
                <h1 className={style.head_center} onClick={()=>router.push("/signup")}>Welcome back!</h1>
                <p className={style.text_center}>Please enter your log in details below</p>
                {verified===false?
                <>
                <div>
                    {providers!==null&&providers!==undefined  && Object.values(providers).map((provider) => {
                        return (
                        <div className={style.login_sn} key={provider.name}>
                            <button className={`${style.login_sn_row} anim_hover`} onClick={() => SignInWithSN(provider.id,provider.name)}>
                                <div className={style.login_sn_row_img_row}>
                                <Image priority className={style.login_sn_row_img} width={20} height={20} alt={provider.name} src={`/social-network/${provider.name}.webp`}/></div>Sign in with {provider.name}
                            </button>
                        </div>
                        );
                    })}
                </div>
                <p className="text_center">или через электронную почту:</p>
                <form onSubmit={(e) => handlerEmail(e)}>
                    <div className={style.login_row}>
                        <input type="email" name="email" className={`${style.login_input} ${style.email}`} placeholder="Email" required />
                        <button type="submit" className={`${style.login_button} anim_hover`}>{wait===true?<div className="button__preloader"><Image width={320} height={50} alt="preloader" src="/img/button-preloader.svg"/></div>:"Continue"}</button>
                    </div>
                </form></>:
                <form onSubmit={(e) => handlerLogin(e)}>
                    {/* <p>{verified.name+" "+verified.surname+" "+verified.avatar}</p> */}
                    <input type="hidden" name="email" value={verified.email} required />
                    <div className={style.signin_auth_form}>
                        <div className={style.signin_auth_form_image}>
                            <Image priority width={50} height={50} className={style.signin_auth_form_pic} src={verified.avatar} alt="avatar" />
                        </div>
                        <div>
                            <h3>{verified.name+" "+verified.surname}</h3>
                            <p className={style.sub}>{verified.email}</p>
                        </div>
                    </div>
                    <div className={style.login_row}>
                        <div className={style.password}>
                            <div className={style.password__show_row}>
                                <div className={style.password__show}>
                                    <Image priority width={24} height={24} alt="password" onClick={()=>{setPassValue(passValue==="password"?"text":"password")}} src={`/img/visibility${passValue==='password'?``:`_off`}.svg`}/>
                                </div>
                            </div>
                            <input type={passValue}  name="password" className={`${style.password_input} ${style.key}`} placeholder="Password" required/>
                        </div>
                        <Link href="/signin/forget" className={style.text_center}>Forgot password?</Link>
                        <button type="submit" className={`${style.login_button} anim_hover`}>{wait===true?<div className="button__preloader"><Image width={320} height={50} alt="preloader" src="/img/button-preloader.svg"/></div>:"Continue"}</button>
                    </div>
                </form>}
            </div>
        </div>
      </>
    );
};

export default LoginForm;
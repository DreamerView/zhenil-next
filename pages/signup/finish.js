/*jshint esversion: 6 */
import Head from "next/head";
import NavbarApp from '/pages/navbar_app/nav';
import style from "/styles/signin/index.module.css";
import {useState,useEffect} from 'react';
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
const AesEncryption = require('aes-encryption');
import ServerJsonFetchReq from "/start/ServerJsonFetchReq";

export async function getServerSideProps(context) {
    const data = await ServerJsonFetchReq({
        method:"GET",
        path:"/get-data",
        cookie:context.req.headers.cookie,
        server:context,
        auth:"yes"
    });
    if(data.result==='redirect') {
        return {
            props: {}
        }; 
    } else {
        return {
            redirect: {
                permanent: false,
                destination: '/',
            },
            props: {}
        }; 
    }
};

const SignUp = () => {
    const [name,setName] = useState("");
    const router = useRouter();
    const send = useDispatch();
    useEffect(()=>{
        const nameUser = localStorage.getItem("RegistrationName");
        const surnameUser = localStorage.getItem("RegistrationSurname");
        const emailUser = localStorage.getItem("RegistrationEmail");
        const otpUser = localStorage.getItem("RegistrationOTP");
        const otpUserVerified = localStorage.getItem("RegistrationOTPVerified");
        const passwordUser = localStorage.getItem("RegistrationPassword");
        if(!nameUser) router.push('/signup');
        else if(!surnameUser) router.push('/signup/surname');
        else if(!emailUser) router.push('/signup/email');
        else if(!otpUser) router.push('/signup/email');
        else if(otpUserVerified) {
            const aes = new AesEncryption();
            aes.setSecretKey(process.env.aesKey);
            if(otpUser) {
                const dectryptOTP = aes.decrypt(otpUser);
                const decryptVerified = aes.decrypt(otpUserVerified);
                if(decryptVerified!=="verified-"+dectryptOTP) router.push('/signup/email');
            } else router.push('/signup/email');
        } else if(passwordUser) {
            router.push('/signup/password');
        }
        return () =>{ 
            return false;
        };
    },[router]);
    useEffect(()=>{
        let loader=true
        loader===true&&send({type:"hideRequest",set:true});
        return() =>{
            loader=false;
        }
    },[send]);
    const actionState = (e) => {
        setName(prev=>prev=e);
        localStorage.setItem("RegistrationName",e);
    };
    const createAcc = async() =>{
        const aes = new AesEncryption();
        aes.setSecretKey(process.env.aesKey);
        const nameUser = localStorage.getItem("RegistrationName");
        const surnameUser = localStorage.getItem("RegistrationSurname");
        const emailUser = localStorage.getItem("RegistrationEmail");
        const passwordUser = localStorage.getItem("RegistrationPassword");
        const requestOptions = {
            method: 'POST',
            headers: {
                "WWW-Authenticate": process.env.authHeader,
                "Accept":"application/json; charset=utf-8",
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({name:aes.encrypt(nameUser),surname:aes.encrypt(surnameUser),email:aes.encrypt(emailUser),password:aes.encrypt(passwordUser),client:aes.encrypt("okki")})
        };
        const login = await fetch(process.env.backend+"/register-id", requestOptions);
        const result = await login.json();
        if(result.email===true) {
            router.push("/signup/email");
        }
        if(result.success === true) {
            const accessToken = aes.decrypt(result.accessToken);
            const today = new Date();
            const expire = new Date();
            expire.setTime(today.getTime() + 3600000*24*14);
            document.cookie=`accessToken=${accessToken};path=/;secure;expires=${expire.toGMTString()}`;
            send({
                type:"setAuth",
                set:true
            });
            localStorage.removeItem("RegistrationName");
            localStorage.removeItem("RegistrationSurname");
            localStorage.removeItem("RegistrationEmail");
            localStorage.removeItem("RegistrationOTP");
            localStorage.removeItem("RegistrationOTPVerified");
            localStorage.removeItem("RegistrationPassword");
            router.push("/");
        }
    }
    return(
        <>
            <Head>
                <title>Okki ID</title>
                <meta property="og:title" content={`Okki ID`} />
                <meta name="description" content={`Welcome to Okki ID`} />
            </Head>
            <NavbarApp to={{href:"/signin"}} choice="alone"/>
            <div className="main_app block_animation">
                <div className={style.login_form}>
                    <h1 className={style.head_center} onClick={()=>createAcc()}>Creating your account!</h1>
                    <p className={style.text_center}>Please wait a minute!</p>
                </div>
            </div>
        </>
    )
};
export default SignUp;
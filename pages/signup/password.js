/*jshint esversion: 6 */
import Head from "next/head";
import NavbarApp from '/pages/navbar_app/nav';
import style from "/styles/login/index.module.css";
import {useState,useEffect} from 'react';
import { useRouter } from "next/router";
import Image from "next/image";
const AesEncryption = require('aes-encryption');

const SignUp = () => {
    const [name,setName] = useState("");
    const [passValue,setPassValue] = useState('password');
    const router = useRouter();
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
        }
        if(passwordUser) setName(prev=>prev=passwordUser);
        return () =>{ 
            return false;
        };
    },[router]);
    const actionState = (e) => {
        setName(prev=>prev=e);
        localStorage.setItem("RegistrationPassword",e);
    };
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
                    <h1 className={style.head_center}>Create your password!</h1>
                    <p className={style.text_center}>Creating more secure password will help to you save your data in our service!</p>
                        <div className={style.login_row}>
                            <div className={style.password}>
                                <div className={style.password__show_row}>
                                    <div className={style.password__show}>
                                        <Image layout="fill" alt="password" onClick={()=>{setPassValue(passValue==="password"?"text":"password")}} src={`/img/visibility${passValue==='password'?``:`_off`}.svg`}/>
                                    </div>
                                </div>
                                <input type={passValue} value={name} onChange={(e)=>actionState(e.target.value)} name="password" className={`${style.password_input} ${style.key}`} placeholder="Password" required/>
                            </div>
                            <button type="button" onClick={()=>name!==""?router.push('/'):""} className={`${style.login_button} ${name===""?style.disable:"block_animation"}`}>Submit</button>
                        </div>
                </div>
            </div>
        </>
    )
};
export default SignUp;
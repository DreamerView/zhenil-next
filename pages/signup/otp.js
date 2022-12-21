/*jshint esversion: 6 */
import Head from "next/head";
import NavbarApp from '/pages/navbar_app/nav';
import style from "/styles/signin/index.module.css";
import {useState,useEffect,useCallback} from 'react';
import { useRouter } from "next/router";
import { useDispatch } from 'react-redux';
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
    const send = useDispatch();
    const [name,setName] = useState("");
    const router = useRouter();
    const [OTP, setOTP] = useState(new Array(4).fill(""));
    const [OtpContinue,setOtpContinue] = useState(false);
    const Notification = useCallback(({user,content,title,image}) => {
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
    const checkOTP = useCallback((res) => {
        const aes = new AesEncryption();
        aes.setSecretKey(process.env.aesKey);
        const otpKey = aes.decrypt(localStorage.getItem("RegistrationOTP"));
        if(otpKey===res) {Notification({user:"admin",content:"OTP Right!"});setOtpContinue(prev=>prev=true);}
        else setOtpContinue(prev=>prev=false);
    },[Notification]);
    useEffect(()=>{
        const res = OTP.join("");
        if(res.length===4) checkOTP(res);
        else setOtpContinue(prev=>prev=false);
        return () => {
            return false;
        };
    },[OTP,checkOTP]);
    useEffect(()=>{
        const nameUser = localStorage.getItem("RegistrationName");
        const surnameUser = localStorage.getItem("RegistrationSurname");
        const emailUser = localStorage.getItem("RegistrationEmail");
        const otpUser = localStorage.getItem("RegistrationOTP");
        if(!nameUser) router.push('/signup');
        else if(!surnameUser) router.push('/signup/surname');
        else if(!emailUser) router.push('/signup/email');
        else if(!otpUser) router.push('/signup/email');
        if(emailUser&&otpUser) setName(prev=>prev=emailUser);
        return () => {
            return false;
        };
    },[router]);
    const OTPChange = (element,index) => {
        if (isNaN(element.value)) return false;

        setOTP([...OTP.map((d, idx) => (idx === index ? element.value : d))]);

        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };
    const OTPVerified = () => {
        const otpUser = localStorage.getItem("RegistrationOTP");
        const aes = new AesEncryption();
        aes.setSecretKey(process.env.aesKey);
        const OTPDectrypt = aes.decrypt(otpUser);
        const verified = "verified-"+OTPDectrypt;
        const verifiedOTP = aes.encrypt(verified);
        localStorage.setItem("RegistrationOTPVerified",verifiedOTP);
        router.push("/signup/password");
    };
    return(
        <>
            <Head>
                <title>Okki ID</title>
                <meta property="og:title" content={`Okki ID`} />
                <meta name="description" content={`Welcome to Okki ID`} />
            </Head>
            <NavbarApp to={{href:"/signup/email"}} choice="alone"/>
            <div className="main_app block_animation">
                <div className={style.login_form}>
                    <h1 className={style.head_center}>Verify your email</h1>
                    <p className={style.text_center}>We send for <b className="green_font">{name}</b> your otp code, please enter this!</p>
                        <div className={style.login_row}>
                            <div className={style.otp}>
                                {OTP.map((result,index)=>{
                                    return(
                                        <input
                                            className={style.otp_keys}
                                            type="tel"
                                            name="otp"
                                            maxLength="1"
                                            key={index}
                                            value={result}
                                            onChange={e=>OTPChange(e.target,index)}
                                            onFocus={e=>e.target.select()}
                                        />
                                    )
                                })}
                            </div>
                            <button type={OtpContinue===false?"button":"submit"} onClick={()=>OtpContinue===false?"":OTPVerified()} className={`${style.login_button} ${OtpContinue===false?style.disable:"block_animation"}`}>Submit</button>
                        </div>
                </div>
            </div>
        </>
    )
};
export default SignUp;
/*jshint esversion: 6 */
import Head from "next/head";
import NavbarApp from '/pages/navbar_app/nav';
import style from "/styles/login/index.module.css";
import {useState,useEffect} from 'react';
import { useRouter } from "next/router";

const SignUp = () => {
    const [name,setName] = useState("");
    const router = useRouter();
    useEffect(()=>{
        const nameUser = localStorage.getItem("RegistrationName");
        if(nameUser) setName(prev=>prev=nameUser);
        return () =>{
            return false;
        };
    },[]);
    const actionState = (e) => {
        setName(prev=>prev=e);
        localStorage.setItem("RegistrationName",e);
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
                    <h1 className={style.head_center}>Let&apos;s introduce you!</h1>
                    <p className={style.text_center}>For example, my name is Andrey</p>
                        <div className={style.login_row}>
                            <input type="text" name="text" value={name} onChange={(e)=>actionState(e.target.value)} className={`${style.login_input} ${style.email}`} placeholder="My name is" required />
                            <button type="button" onClick={()=>name!==""?router.push('/signup/surname'):""} className={`${style.login_button} ${name===""?style.disable:"block_animation"}`}>Submit</button>
                        </div>
                </div>
            </div>
        </>
    )
};
export default SignUp;
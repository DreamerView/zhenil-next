/*jshint esversion: 6 */
import Head from "next/head";
import NavbarApp from '/pages/navbar_app/nav';
import style from "/styles/signin/index.module.css";
import {useState,useEffect} from 'react';
import { useRouter } from "next/router";
import ServerJsonFetchReq from "/start/ServerJsonFetchReq";
import { useDispatch } from "react-redux";

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
    const [surname,setSurname] = useState("");
    const router = useRouter();
    useEffect(() => {
        const nameUser = localStorage.getItem("RegistrationName");
        const surnameUser = localStorage.getItem("RegistrationSurname");
        if(nameUser) setName(prev=>prev=nameUser);
        else router.push('/signup');
        if(surnameUser) setSurname(prev=>prev=surnameUser);
        return () => {
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
        setSurname(prev=>prev=e);
        localStorage.setItem("RegistrationSurname",e);
    };
    
    return(
        <>
            <Head>
                <title>Okki ID</title>
                <meta property="og:title" content={`Okki ID`} />
                <meta name="description" content={`Welcome to Okki ID`} />
            </Head>
            <NavbarApp to={{href:"/signup"}} choice="alone"/>
            <div className="main_app block_animation">
                <div className={style.login_form}>
                    <h1 className={style.head_center}>Okey {name}!</h1>
                    <p className={style.text_center}>For example, my surname is Alekseev</p>
                        <div className={style.login_row}>
                            <input type="text" name="surname" value={surname} onChange={(e)=>actionState(e.target.value)} className={`${style.login_input} ${style.email}`} placeholder="My name is" required />
                            <button type="button" onClick={()=>surname!==""?router.push('/signup/email'):""} className={`${style.login_button} ${surname===""?style.disable:"block_animation"}`}>Submit</button>
                        </div>
                </div>
            </div>
        </>
    )
};
export default SignUp;
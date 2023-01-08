/*jshint esversion: 6 */

import NavbarApp from '/pages/navbar_app/nav';
import dynamic from 'next/dynamic';
import style from "/styles/user/index.module.css";
import { useMediaQuery } from 'react-responsive';
import Head from 'next/head';
import useTranslateText from "/start/translate";
import ux from "/translate/user/index_translate";
import { useEffect,useState } from 'react';
const HeaderUser = dynamic(()=>import('/pages/user/headerModule'),{ssr:false});
const HistoryUser =  dynamic(()=>import('/pages/user/historyModule'),{ssr:false});
import ServerJsonFetchReq from '/start/ServerJsonFetchReq';

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
            redirect: {
                permanent: false,
                destination: '/signin',
            },
            props: {}
        }; 
    } else {
        return {
            props: {}
        }; 
    }
};


const UserInterface = () => {
    const [lazy,setLazy] = useState(false);
    const lang  = useTranslateText();
    const isTabletOrMobile = useMediaQuery({ query: '(min-width:1px) and (max-width:750px)' });
    useEffect(()=>{
        setLazy((lazy)=>lazy=true);
        return()=>{
            setLazy((lazy)=>lazy=false);
        }
    },[]);
    const titleHead = `${ux['recent'][lang]} | Okki.kz`;
    return(
    <>
        <Head>
                <title>{titleHead}</title>
        </Head>
        <NavbarApp to={{href:"/"}} choice="alone" mode="standalone"/>
        <div className="main_app">
            <div className={style.user__main}>
                <HeaderUser/>
                {lazy&&!isTabletOrMobile&&<HistoryUser/>}
            </div>
        </div>
    </>
    );
};

export default UserInterface;
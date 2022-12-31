/*jshint esversion: 6 */

import NavbarApp from '/pages/navbar_app/nav';
import style from "/styles/user/index.module.css";
import { useMediaQuery } from 'react-responsive';
import Head from 'next/head';
import useTranslateText from "/start/translate";
import ux from "/translate/user/index_translate";
import { useEffect,useState } from 'react';
import HeaderUser from './headerModule';
import HistoryUser from './historyModule';
import ServerJsonFetchReq from "/start/ServerJsonFetchReq";

export async function getServerSideProps(context) {
    const data = await ServerJsonFetchReq({
        method:"GET",
        path:"/get-data",
        cookie:context.req.headers.cookie,
        server:context
    });
    if(data.result==='redirect') {
        return {
            redirect: {permanent: false,destination: data.location,},
            props: {}
        }; 
    } else {
        return {
            props: {data}
        };
    }
};

const UserInterface = ({data}) => {
    const [lazy,setLazy] = useState(false);
    const lang  = useTranslateText();
    const isTabletOrMobile = useMediaQuery({ query: '(min-width:1px) and (max-width:750px)' });
    useEffect(()=>{
        setLazy((lazy)=>lazy=true);
        return()=>{
            return false;
        }
    },[]);
    return(
    <>
        <Head>
                <title>{ux['recent'][lang]} | Okki.kz</title>
        </Head>
        <NavbarApp to={{href:"/"}} choice="alone"/>
        <div className="main_app block_animation">
            <div className={style.user__main}>
                {data!==undefined&&<HeaderUser item={data}/>}
                {lazy===true&&!isTabletOrMobile&&<HistoryUser/>}
            </div>
        </div>
    </>
    );
};

export default UserInterface;
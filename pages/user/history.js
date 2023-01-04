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
import { useDispatch } from 'react-redux';


const UserInterface = () => {
    const send = useDispatch();
    const [lazy,setLazy] = useState(false);
    const lang  = useTranslateText();
    const isTabletOrMobile = useMediaQuery({ query: '(min-width:1px) and (max-width:750px)' });
    useEffect(()=>{
        setLazy((lazy)=>lazy=true);
        return()=>{
            return false;
        }
    },[]);
    useEffect(()=>{
        send({type:"hideRequest",set:isTabletOrMobile?true:false});
    },[send,isTabletOrMobile]);
    return(
    <>
        <Head>
                <title>{ux['recent'][lang]} | Okki.kz</title>
        </Head>
        <NavbarApp to={{href:"/user"}} choice="alone"/>
        <div className="main_app">
            <div className={style.user__main}>
                {lazy===true&&!isTabletOrMobile&&<HeaderUser/>}
                <HistoryUser/>
            </div>
        </div>
    </>
    );
};

export default UserInterface;
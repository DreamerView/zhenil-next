/*jshint esversion: 6 */
import NavbarApp from '/pages/navbar_app/nav';
import style from "/styles/user/index.module.css";
import { useMediaQuery } from 'react-responsive';
import Head from 'next/head';
import useTranslateText from "/start/translate";
import ux from "/translate/user/index_translate";
import { useEffect,useState } from 'react';
import HeaderUser from '/pages/user/headerModule';
import HistoryUser from '/pages/user/historyModule';


const UserInterface = () => {
    const [lazy,setLazy] = useState(false);
    const lang  = useTranslateText();
    const isTabletOrMobile = useMediaQuery({ query: '(min-width:1px) and (max-width:750px)' });
    useEffect(()=>{
        setLazy((lazy)=>lazy=true);
        return()=>{
            return false;
        }
    },[]);
    const titleHead = `${ux['recent'][lang]} | Okki.kz`;
    return(
    <>
        <Head>
                <title>{titleHead}</title>
        </Head>
        <NavbarApp to={{href:"/user"}} choice="alone" mode="standalone"/>
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
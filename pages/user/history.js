/*jshint esversion: 6 */
import NavbarApp from '/pages/navbar_app/nav';
import style from "/styles/user/index.module.css";
import HistoryUser from './historyModule';
import HeaderUser from './headerModule';
import { useMediaQuery } from 'react-responsive';
import Head from 'next/head';
import useTranslateText from "/start/translate";
import ux from "/translate/user/index_translate";


const UserInterface = () => {
    const lang  = useTranslateText();
    const isTabletOrMobile = useMediaQuery({ query: '(min-width:1px) and (max-width:750px)' });
    return(
    <>
        <Head>
                <title>{ux['recent'][lang]} | Okki.kz</title>
        </Head>
        <NavbarApp to={{href:"/user"}} choice="alone"/>
        <div className="main_app">
            <div className={style.user__main}>
                {isTabletOrMobile?"":<HeaderUser/>}
                <HistoryUser/>
            </div>
        </div>
    </>
    );
};

export default UserInterface;
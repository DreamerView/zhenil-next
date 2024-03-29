/*jshint esversion: 6 */
import dynamic from 'next/dynamic';
import NavbarApp from '/pages/navbar_app/nav';
import style from "/styles/user/index.module.css";
import { useMediaQuery } from 'react-responsive';
import Head from 'next/head';
import ux from "/translate/user/index_translate";
import { useEffect,useState } from 'react';
const HeaderUser = dynamic(()=>import('/pages/user/headerModule'),{ssr:false});
const HistoryUser =  dynamic(()=>import('/pages/user/historyModule'),{ssr:false});
import ServerJsonFetchReq from '/start/ServerJsonFetchReq';

export const getServerSideProps = async (context) => {
    context.res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    );
    const locale = context.locale;
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
            }
        }; 
    }
    return {
        props: {locale:locale}
    }; 
};

const UserInterface = ({locale}) => {
    const [lazy,setLazy] = useState(false);
    const lang  = locale;
    const isTabletOrMobile = useMediaQuery({ query: '(min-width:1px) and (max-width:750px)' });
    useEffect(()=>{
        setLazy((lazy)=>lazy=true);
        return()=>{
            return false;
        }
    },[]);
    const titleHead = `${ux['recent'][lang]} | Zhenil.kz`;
    return(
    <>
        <Head>
                <title>{titleHead}</title>
        </Head>
        <NavbarApp lang={lang} to={{href:"/user"}} choice="alone" mode="standalone"/>
        <div className="main_app">
            <div className={style.user__main}>
                {lazy===true&&!isTabletOrMobile&&<HeaderUser lang={lang}/>}
                <HistoryUser lang={lang}/>
            </div>
        </div>
    </>
    );
};

export default UserInterface;
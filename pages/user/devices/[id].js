/*jshint esversion: 6 */
/*jshint esversion: 9 */
import NavbarApp from '/pages/navbar_app/nav';
import style from "/styles/user/index.module.css";
import SearchResult from "/start/services/all.json";
import { useMediaQuery } from 'react-responsive';
import { useEffect,useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useTranslateText from "/start/translate";
import ux from "/translate/user/index_translate";
import services from "/translate/services/all_translate";
import Head from 'next/head';
import HeaderUser from '/pages/user/headerModule';
import ClientJsonFetchReq from "/start/ClientJsonFetchReq";

export async function getServerSideProps({params}) {
    const id = params.id;
    return {
        props: { getId: id},
    };
}

const UserInterface = ({getId}) => {
    const [lazy,setLazy] = useState(false);
    const lang = useTranslateText();
    const isTabletOrMobile = useMediaQuery({ query: '(min-width:1px) and (max-width:750px)' });
    const [prev,setPrev] = useState(null);
    const [sortItem,setSortItem] = useState('new');
    const [sortItemRes,setSortItemRes] = useState('all');
    const response = SearchResult;
    useEffect(()=>{
        setLazy((lazy)=>lazy=true);
        return()=>{
            return false;
        }
    },[]);
    const historyAction = (service) => {
        const history = JSON.parse(localStorage.getItem('favouriteAction'));
        const action = history?history:[];
        const checkExp = [...action,{name:service,time:Date.now()}];
        const key = 'name';
        const historyResult = [...new Map(checkExp.map(item =>[item[key], item])).values()];
        return localStorage.setItem('favouriteAction',JSON.stringify(historyResult));
    };
    useEffect(() => {
        const startScript = async() =>{
            const send = await ClientJsonFetchReq({method:"GET",path:'/get-devices',cookie:document.cookie});
            setPrev(prev=>prev=send);
        };
        startScript();
        return () => {
            return false;
        };
    }, []);
    // prev!==null&&prev.map(e=>console.log(e));
    const ConvertTime = (unix_timestamp) => {
        const date = new Date(unix_timestamp);
        const day = String(date.getDate()).length===1?"0"+String(date.getDate()):date.getDate();
        const month = String(date.getMonth()+1).length===1?"0"+String(date.getMonth()+1):String(date.getMonth()+1);
        const year = date.getFullYear();
        const hours = String(date.getHours()).length===1?"0"+String(date.getHours()):date.getHours();
        const minutes = String(date.getMinutes()).length===1?"0"+String(date.getMinutes()):date.getMinutes();
        return day+"."+month+"."+year+" "+hours+":"+minutes;
    };
    const colorChanger = (event) => {
        let color;
        switch(event) {
            case 0:color="grey_background";break;
            case 1:color="brand_background";break;
            case 2:color="green_background";break;
            case 3:color="red_background";break;
            case 4:color="purple_background";break;
            case 5:color="orange_background";break;
            default: color="brand_background";break;
        }
        return color;
    }
    return(
    <>
        <Head>
                <title>{ux['devices'][lang]} | Okki.kz</title>
        </Head>
        <NavbarApp to={{href:"/user"}} choice="alone"/>
        <div className="main_app">
            <div className={style.user__main}>
                {lazy===true&&isTabletOrMobile?"":<HeaderUser/>}
                <div className={style.main__user_action}>
                    <h1>{ux['devices'][lang]}</h1>
                    <p className='sub_content'>Выбран клиент</p>
                    {prev!==null&&prev.result.filter(e=>e.clientId===getId).map(e=>
                    <div className={style.standalone_device}>
                        <div className={style.standalone_device_block_1}>
                            <div className={style.standalone_device_block_1_image}>
                                <Image src="/img/devices.svg" width={40} height={40} />
                            </div>
                        </div>
                        <div className={style.standalone_device_block_2}>
                            <div className={style.standalone_device_block_row}>
                            <p className={style.subber}>Клиент</p>
                            <h4>{JSON.parse(e.clientInfo).name+" v."+JSON.parse(e.clientInfo).version}</h4>
                            </div>
                            <div className={style.standalone_device_block_row}>
                            <p className={style.subber}>{ux['devices'][lang]}</p>
                            <h4>{JSON.parse(e.clientInfo).product!==null?JSON.parse(e.clientInfo).product:"Неизвестно"}</h4>
                            </div>
                            <div className={style.standalone_device_block_row}>
                            <p className={style.subber}>Операционная система</p>
                            <h4>{JSON.parse(e.clientInfo).os!==null&&" "+JSON.parse(e.clientInfo).os.family+" "+JSON.parse(e.clientInfo).os.version}</h4>
                            </div>
                        </div>
                    </div>)}
                    {prev!==null&&prev.result.filter(e=>e.clientId===getId).map(()=><div className={`${style.session_signout} anim_hover`}>Завершить сеанс</div>)}
                </div>
            </div>
        </div>
    </>
    );
};

export default UserInterface;
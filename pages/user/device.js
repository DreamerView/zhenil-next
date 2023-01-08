/*jshint esversion: 6 */
/*jshint esversion: 9 */
import NavbarApp from '/pages/navbar_app/nav';
import style from "/styles/user/index.module.css";
import { useMediaQuery } from 'react-responsive';
import { useEffect,useState } from 'react';
import Image from 'next/image';
import useTranslateText from "/start/translate";
import ux from "/translate/user/index_translate";
import Head from 'next/head';
import HeaderUser from '/pages/user/headerModule';
import ClientJsonFetchReq from "/start/ClientJsonFetchReq";
import { useRouter } from 'next/router';


const UserInterface = () => {
    const [lazy,setLazy] = useState(false);
    const router = useRouter();
    const lang = useTranslateText();
    const isTabletOrMobile = useMediaQuery({ query: '(min-width:1px) and (max-width:750px)' });
    const [prev,setPrev] = useState(null);
    useEffect(()=>{
        setLazy((lazy)=>lazy=true);
        return()=>{
            return false;
        }
    },[]);
    useEffect(() => {
        const startScript = async() =>{
            const send = await ClientJsonFetchReq({method:"GET",path:'/get-devices',cookie:document.cookie});
            setPrev(prev=>prev=send);
        };
        if(typeof Window !== 'undefined') startScript();
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
    };
    const brandChanger = (event) => {
        let color;
        switch(event) {
            case "chrome":color="orange_background";break;
            case "safari":color="blue_background";break;
            case "firefox":color="red_background";break;
            case "microsoftedge":color="brand_background";break;
            case "opera":color="red_background";break;
            default: color="brand_background";break;
        }
        return color;
    };
    const brandCheker = (event) => {
        let color;
        switch(event) {
            case "chrome":color="/platforms/chrome.svg";break;
            case "safari":color="/platforms/safari.svg";break;
            case "firefox":color="/platforms/firefox.svg";break;
            case "microsoftedge":color="/platforms/microsoftedge.svg";break;
            case "opera":color="/platforms/opera.svg";break;
            default: color="/img/devices.svg";break;
        }
        return color;
    };
    const titleHead = `${ux['devices'][lang]} | Okki.kz`;
    return(
    <>
        <Head>
                <title>{titleHead}</title>
        </Head>
        <NavbarApp to={{href:"/user"}} choice="alone"/>
        <div className="main_app">
            <div className={style.user__main}>
                {lazy===true&&isTabletOrMobile?"":<HeaderUser/>}
                <div className={style.main__user_action}>
                    <h1>{ux['devices'][lang]}</h1>
                    <p className='sub_content'>Текущий сеанс</p>
                    <div className={style.devices_row_main}>
                            {prev!==null&&prev!==undefined&&prev.result.filter(e=>e.clientId===prev.clientId).map((e,index)=><div onClick={()=>router.push('/user/devices/'+e.clientId)} key={index} className={`${style.devices} anim_hover`}>
                                <div onClick={()=>router.push('/user/devices/'+e.clientId)} key={index} className={`${style.devices_row}`}>
                                    <div className={`${style.devices_row_image} ${JSON.parse(e.clientInfo).name===null?'blue_background':brandChanger(JSON.parse(e.clientInfo).name.toLowerCase().split(' ').join(''))}`}><Image width={30} height={30} src={JSON.parse(e.clientInfo).name===null?"/img/devices.svg":brandCheker(JSON.parse(e.clientInfo).name.toLowerCase().split(' ').join(''))} alt="device"/></div>
                                    <div className={style.devices_row_block}>
                                        <h4>{JSON.parse(e.clientInfo).name===null?"Неизвестно":JSON.parse(e.clientInfo).name} - {JSON.parse(e.clientInfo).product!==null&&JSON.parse(e.clientInfo).product}{JSON.parse(e.clientInfo).os!==null&&" "+JSON.parse(e.clientInfo).os.family+" "+JSON.parse(e.clientInfo).os.version}</h4>
                                        {/* <p className={style.subber}>{JSON.parse(e.clientInfo).name+" "+JSON.parse(e.clientInfo).version}</p> */}
                                        <p className={style.sub}>{ConvertTime(JSON.parse(e.getTime))}</p>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                    <p className={style.subber}>Активные сеансы</p>
                    <div className={style.devices_row_main}>
                            {prev!==null&&prev!==undefined&&prev.result.filter(e=>e.clientId!==prev.clientId).map((e,index)=>
                                <div onClick={()=>router.push('/user/devices/'+e.clientId)} key={index} className={`${style.devices} anim_hover`}>
                                    <div key={index} className={style.devices_row}>
                                        <div className={`${style.devices_row_image} ${JSON.parse(e.clientInfo).name===null?colorChanger(Math.floor(Math.random() * 6)):brandChanger(JSON.parse(e.clientInfo).name.toLowerCase().split(' ').join(''))}`}><Image alt="icon" width={30} height={30} src={JSON.parse(e.clientInfo).name===null?"/img/devices.svg":brandCheker(JSON.parse(e.clientInfo).name.toLowerCase().split(' ').join(''))}/></div>
                                        <div className={style.devices_row_block}>
                                            <h4>{JSON.parse(e.clientInfo).name===null?"Неизвестно":JSON.parse(e.clientInfo).name} - {JSON.parse(e.clientInfo).product!==null&&JSON.parse(e.clientInfo).product}{JSON.parse(e.clientInfo).os!==null&&" "+JSON.parse(e.clientInfo).os.family+" "+JSON.parse(e.clientInfo).os.version}</h4>
                                            {/* <p className={style.subber}>{JSON.parse(e.clientInfo).name+" "+JSON.parse(e.clientInfo).version}</p> */}
                                            <p className={style.sub}>{ConvertTime(JSON.parse(e.getTime))}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default UserInterface;
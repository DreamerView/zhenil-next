/*jshint esversion: 6 */
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import Header from "/start/header";
const ConfirmMode = dynamic(()=>import('/start/confirm'),{ssr:false});
const FullFrame = dynamic(()=>import('/start/fullframe'),{ssr:false});
const ResizeImage = dynamic(()=>import('/start/cropimage'),{ssr:false});
const NotificationModule = dynamic(()=>import('/start/notification'),{ssr:false});
const AesEncryption = require('aes-encryption');
import ClientJsonFetchReq from "/start/ClientJsonFetchReq";
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';

const DocumentResult = ({children}) => {
    const router = useRouter();
    const [lazy,setLazy] = useState(false);
    const isTabletOrMobile = useMediaQuery({ query: '(min-width:1px) and (max-width:750px)' });
    const mobileHeader = ['/user','/user/history','/user/favourite','/user/device','/user/devices/[id]'];
    const desktopHeader = ['/signin','/signup','/signup/surname','/signup/email','/signup/otp','/signup/password','/signup/finish'];
    const headerHide = isTabletOrMobile?[...mobileHeader,...desktopHeader]:desktopHeader;
    const action = useSelector(state=>state.act);
    const frame = useSelector(state=>state.fullframe);
    const url = useSelector(state=>state.urlframe);
    const image = useSelector(state=>state.crop);
    const main = useSelector(state=>state.main);
    const notification = useSelector(state=>state.notification);
    useEffect(()=>{
        setLazy((lazy)=>lazy=true);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let long = position.coords.longitude;
            
                console.log(lat.toFixed(2));
                console.log(longText.innerText = long.toFixed(2));
              });
        } else {
            alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
        }
        return () =>{
            return false;
        }
    },[])
    useEffect(()=>{
        action||frame||image?document.querySelector('html,body').style.cssText = "overflow: hidden;":document.querySelector('html,body').style.cssText = "";
        return () =>{
            return false;
        };
    },[action,frame,image]);
    useEffect(()=>{
        let lazy = true;
        const result = async() => {
            const aes = new AesEncryption();
            aes.setSecretKey(process.env.aesKey);
            const res = await ClientJsonFetchReq({method:"GET",path:'/get-data',cookie:document.cookie});
            if(res!==undefined) {
                const response = {avatar:aes.decrypt(res.avatar),name:aes.decrypt(res.name),surname:aes.decrypt(res.surname),login:aes.decrypt(res.login)};
                return localStorage.setItem('loginParams',JSON.stringify(response));
            } else return localStorage.setItem('loginParams',null);
        };
        lazy===true&&typeof Window !== 'undefined'&&result();
        return () =>{
            lazy=false;
        };
    },[]);
    return(
        <div>
            {notification&&<NotificationModule/>}
            {frame&&<FullFrame item={url} key={Date.now()}/>}
            {action&&<ConfirmMode item={action} key={Date.now}/>}
            {image&&<ResizeImage item={image} key={Date.now}/>}
            {lazy&&!headerHide.includes(router.pathname)&&<Header/>}
            {main&&<div className="main_hide"/>}
            <div className="result">{children}</div>
        </div>
    );
}

export default DocumentResult;
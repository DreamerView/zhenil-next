/*jshint esversion: 6 */
import dynamic from 'next/dynamic';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from "/start/header";
const ConfirmMode = dynamic(()=>import('/start/confirm'),{ssr:false});
const FullFrame = dynamic(()=>import('/start/fullframe'),{ssr:false});
const ResizeImage = dynamic(()=>import('/start/cropimage'),{ssr:false});
const NotificationModule = dynamic(()=>import('/start/notification'),{ssr:false});
const AesEncryption = require('aes-encryption');
import ClientJsonFetchReq from "/start/ClientJsonFetchReq";

const DocumentResult = ({children}) => {
    const send = useDispatch();
    useEffect(()=>{
        const result = async() => {
            const aes = new AesEncryption();
            aes.setSecretKey(process.env.aesKey);
            const res = await ClientJsonFetchReq({method:"GET",path:'/get-data',cookie:document.cookie});
            if(res!==undefined) {
                const response = {avatar:aes.decrypt(res.avatar),name:aes.decrypt(res.name),surname:aes.decrypt(res.surname),login:aes.decrypt(res.login)};
                return localStorage.setItem('loginParams',JSON.stringify(response));
            } else return localStorage.setItem('loginParams',null);
        };
        result();
        return () =>{
            return false;
        };
    },[]);
    const action = useSelector(state=>state.act);
    const frame = useSelector(state=>state.fullframe);
    const url = useSelector(state=>state.urlframe);
    const image = useSelector(state=>state.crop);
    const main = useSelector(state=>state.main);
    const notification = useSelector(state=>state.notification);
    const hide = useSelector(state=>state.hideReq);
    useEffect(()=>{
        action||frame||image?document.querySelector('html,body').style.cssText = "overflow: hidden;":document.querySelector('html,body').style.cssText = "";
        return () =>{
            return false;
        };
    },[action,frame,image]);
    return(
        <div>
            {notification?<NotificationModule/>:""}
            {frame?<FullFrame item={url} key={Date.now()}/>:""}
            {action?<ConfirmMode item={action} key={Date.now}/>:""}
            {image?<ResizeImage item={image} key={Date.now}/>:""}
            {hide?"":<Header/>}
            {main?<div className="main_hide"/>:""}
            <div className="result">{children}</div>
        </div>
    );
}

export default DocumentResult;
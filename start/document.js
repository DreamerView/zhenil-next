/*jshint esversion: 6 */
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const Header = dynamic(()=>import('/start/header'),{ssr:false});
const ConfirmMode = dynamic(()=>import('/start/confirm'),{ssr:false});
const FullFrame = dynamic(()=>import('/start/fullframe'),{ssr:false});
const ResizeImage = dynamic(()=>import('/start/cropimage'),{ssr:false});

const DocumentResult = ({children}) => {
    const action = useSelector(state=>state.act);
    const frame = useSelector(state=>state.fullframe);
    const url = useSelector(state=>state.urlframe);
    const image = useSelector(state=>state.crop);
    const main = useSelector(state=>state.main);
    const hide = useSelector(state=>state.hideReq);
    useEffect(()=>{
        if(action||frame||image) {
            document.querySelector('html').style.cssText = "overflow: hidden;";
            document.querySelector('body').style.cssText = "overflow: hidden;";
        }
        else {
            document.querySelector('html').style.cssText = "";
            document.querySelector('body').style.cssText = "";
        }
    },[action,frame,image]);
    return(
        <div>
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
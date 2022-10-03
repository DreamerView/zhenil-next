/*jshint esversion: 6 */
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const Header = dynamic(()=>import('./header'));
const ConfirmMode = dynamic(()=>import('./confirm'));
const FullFrame = dynamic(()=>import('./fullframe'));
const ResizeImage = dynamic(()=>import('./cropimage'));


const DocumentResult = ({children}) => {
    const action = useSelector(state=>state.act);
    const frame = useSelector(state=>state.fullframe);
    const url = useSelector(state=>state.urlframe);
    const image = useSelector(state=>state.crop);
    const main = useSelector(state=>state.main);
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
            <Header/>
            {main?<div className="main_hide"/>:""}
            <div className="result">{children}</div>
        </div>
    );
}

export default DocumentResult;
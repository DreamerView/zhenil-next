/*jshint esversion: 6 */
import Header from './header';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import ConfirmMode from './confirm';
import FullFrame from './fullframe';
import ResizeImage from './cropimage';


const DocumentResult = ({children}) => {
    const action = useSelector(state=>state.act);
    const frame = useSelector(state=>state.fullframe);
    const url = useSelector(state=>state.urlframe);
    const image = useSelector(state=>state.crop);
    const main = useSelector(state=>state.main);
    useEffect(()=>{
        if(action||frame||image) {
            document.querySelector('html').style.cssText = "margin: 0;height: 100%;overflow: hidden;";
            document.querySelector('body').style.cssText = "margin: 0;height: 100%;overflow: hidden;";
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
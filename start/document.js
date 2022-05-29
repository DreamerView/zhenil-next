/*jshint esversion: 6 */
import ConfirmMode from './confirm';
import FullFrame from './fullframe';
import Header from './header';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


const DocumentResult = ({children}) => {
    const action = useSelector(state=>state.act);
    const frame = useSelector(state=>state.fullframe);
    const url = useSelector(state=>state.urlframe);
    useEffect(()=>{
        if(action) {
            document.querySelector('html').style.cssText = "overflow-y:hidden;";
            document.querySelector('body').style.cssText = "overflow-y:hidden;";
        }
        else {
            document.querySelector('html').style.cssText = "";
            document.querySelector('body').style.cssText = "";
        }
    },[action]);
    useEffect(()=>{
        if(frame) {
            document.querySelector('html').style.cssText = "overflow-y:hidden;";
            document.querySelector('body').style.cssText = "overflow-y:hidden;";
        }
        else {
            document.querySelector('html').style.cssText = "";
            document.querySelector('body').style.cssText = "";
        }
    },[frame]);
    return(
        <div>
            {frame?<FullFrame item={url} key={Date.now()}/>:""}
            {action?<ConfirmMode item={action} key={Date.now}/>:""}
            <Header/>
            <div className="result">{children}</div>
        </div>
    );
}

export default DocumentResult;
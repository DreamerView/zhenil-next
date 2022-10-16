/*jshint esversion: 6 */
import dynamic from "next/dynamic";
import Head from "next/head";
import Router from 'next/router';
import useTranslateText from "/start/translate";
import translate from "/translate/ux/loading_page";
import { useEffect,useState } from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import "/styles/globals.css";
const DocumentResult = dynamic(()=>import("/start/document"));


const Preloader = () => {
    const [color,setColor] = useState("#4634bc");
    const [timer,setTimer] = useState(false);
    const checkMode = useMediaQuery({query:'(prefers-color-scheme: dark)'});
    const locale = useTranslateText();
    useEffect(()=>{
        return checkMode?setColor("#7d7aff"):setColor("#4634bc");
    },[checkMode]);
    useEffect(()=>{
        setTimeout(()=>{
            setTimer(true);
        },[500])
    },[])
    return(
        <>
            <Head>
                <title>{translate["loading"][locale]}</title>
            </Head>
            <div className="main__preloader">
                {timer?
                <svg className="main__preloader_pic" xmlns="http://www.w3.org/2000/svg" style={{ margin: "auto" }} width="200" height="200" display="block" preserveAspectRatio="xMidYMid" viewBox="0 0 100 100">
                    <path fill={color} d="M10 50a40 40 0 0080 0 40 42 0 01-80 0"><animateTransform attributeName="transform" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="rotate" values="0 50 51;360 50 51"/></path>
                </svg>:""}
            </div>
        </>
    )
};

const MyApp = ({ Component, pageProps }) => {
    const [result,setResult] = useState(false);
    useEffect(()=>{
        Router.events.on('routeChangeStart', () => {
            setResult(true);
        });
        Router.events.on('routeChangeComplete', () => {
            setResult(false);
        });
    },[])
    useEffect(() => {
        if (typeof window !== 'undefined') {
          const loader = document.getElementById('globalLoader');
          if (loader)
            loader.remove();
        }
      }, []);
    useEffect(() => {
        if("serviceWorker" in navigator) {
           navigator.serviceWorker.register("/serviceworker.js").then(
              function (registration) {
                console.log("Service Worker registration successful with scope: ", registration.scope);
              },
              function (err) {
                console.log("Service Worker registration failed: ", err);
              }
            );
        }
    }, [])
    const defaultState = {act:false,confirm:false,fullframe:false,urlframe:false,crop:false,getcrop:false,main:false};


    const reducer = (state=defaultState,action) => {
    switch(action.type) {
        case "SetAction": return {...state,act:action.set};
        case "SetConfirm": return {...state,confirm:action.set};
        case "setFullFrame": return {...state,fullframe:action.set};
        case "setUrlFrame": return {...state,urlframe:action.set};
        case "setCropImage": return {...state,crop:action.set};
        case "getCropImage": return {...state,getcrop:action.set};
        case "actionMain": return {...state,main:action.set};
        default: return state;
    }
    };

    const store = createStore(reducer);

    return(
        <>
            <div id="globalLoader"><div/></div>
            <Provider store={store}>
                <DocumentResult>
                {result ? <Preloader/>:<Component {...pageProps} />}
                </DocumentResult>
            </Provider>
        </>
    )
}

export default MyApp;
/*jshint esversion: 6 */
import { useEffect,useState } from "react";
import "../styles/globals.css";
import Router from 'next/router';
import "../styles/acc.css";
import Head from "next/head";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { useMediaQuery } from 'react-responsive';
import DocumentResult from "../start/document";

const Preloader = () => {
    const [color,setColor] = useState("#4634bc");
    const checkMode = useMediaQuery({query:'(prefers-color-scheme: dark)'});
    useEffect(()=>{
        return checkMode?setColor("#7d7aff"):setColor("#4634bc");
    },[checkMode]);
    return(
        <>
            <Head>
                <title>Загрузка страницы</title>
            </Head>
            <div className="main__preloader">
                <svg className="main__preloader_pic" xmlns="http://www.w3.org/2000/svg" style={{ margin: "auto" }} width="200" height="200" display="block" preserveAspectRatio="xMidYMid" viewBox="0 0 100 100">
                    <path fill={color} d="M10 50a40 40 0 0080 0 40 42 0 01-80 0"><animateTransform attributeName="transform" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="rotate" values="0 50 51;360 50 51"/></path>
                </svg>
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
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register('/serviceworker.js')
                    .then((reg) => console.log('Success: ', reg.scope))
                    .catch((err) => console.log('Failure: ', err));
        }
  }, []);
const defaultState = {act:false,confirm:false,fullframe:false,urlframe:false};


const reducer = (state=defaultState,action) => {
  switch(action.type) {
    case "SetAction": return {...state,act:action.set};
    case "SetConfirm": return {...state,confirm:action.set};
    case "setFullFrame": return {...state,fullframe:action.set};
    case "setUrlFrame": return {...state,urlframe:action.set};
    default: return state;
  }
};

const store = createStore(reducer);

  return(
    <>
        <Provider store={store}>
            <DocumentResult>
            {result ? <Preloader/>:<Component {...pageProps} />}
            </DocumentResult>
        </Provider>
    </>
  )
}

export default MyApp
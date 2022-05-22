/*jshint esversion: 6 */
import { useEffect,useState } from "react";
import "../styles/globals.css";
import Router from 'next/router';
import "../styles/acc.css";
import Head from "next/head";

import { useMediaQuery } from 'react-responsive';
import DocumentResult from "../start/document";

const Preloader = () => {
    const [result,setResult] = useState("#4634bc");
    const [color,setColor] = useState('');
    const checkMode = useMediaQuery({query:'(prefers-color-scheme: dark)'});
    useEffect(()=>{
        if (checkMode===true) {setResult("#7d7aff");setColor("hsl(240, 3%, 11%)");}
        else {setResult("#4634bc");setResult("hsl(0, 0%, 100%)");}
    },[checkMode]);
    return(
        <>
            <Head>
                <title>Загрузка страницы</title>
                <meta name="theme-color" content={color} />
            </Head>
            <div className="main__preloader">
                <svg className="main__preloader_pic" xmlns="http://www.w3.org/2000/svg" style={{ margin: "auto" }} width="200" height="200" display="block" preserveAspectRatio="xMidYMid" viewBox="0 0 100 100">
                    <path fill={result} d="M10 50a40 40 0 0080 0 40 42 0 01-80 0"><animateTransform attributeName="transform" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="rotate" values="0 50 51;360 50 51"/></path>
                </svg>
            </div>
        </>
    )
};

const MyApp = ({ Component, pageProps }) => {
    const [color,setColor] = useState()
    const checkMode = useMediaQuery({query:'(prefers-color-scheme: dark)'});
    useEffect(()=>{
        checkMode===true?setColor("hsl(240, 3%, 11%)"):setColor("hsl(0, 0%, 100%)");
    },[checkMode]);
    const [result,setResult] = useState(false);
    useEffect(()=>{
        Router.events.on('routeChangeStart', (url) => {
            setResult(true);
        });
        Router.events.on('routeChangeComplete', (url) => {
            setResult(false)
        });
    },[])

  useEffect(() => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register('/serviceworker.js')
                    .then((reg) => console.log('Success: ', reg.scope))
                    .catch((err) => console.log('Failure: ', err));
        }
  }, [])

  return(
    <>
        <Head>
            <meta name="theme-color" content={color} />
        </Head>
        <DocumentResult>
        {result ? <Preloader/>:<Component {...pageProps} />}
        </DocumentResult>
    </>
  )
}

export default MyApp
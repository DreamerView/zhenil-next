import { useEffect,useState } from "react";
import "../styles/globals.css"
import Router from 'next/router';
import "../styles/acc.css";
import Head from "next/head";

import { useMediaQuery } from 'react-responsive';

const Preloader = () => {
    const [result,setResult] = useState("#4634bc");
    const checkMode = useMediaQuery({query:'(prefers-color-scheme: dark)'});
    useEffect(()=>{
        checkMode===true?setResult("#7d7aff"):setResult("#4634bc");
    },[checkMode])
    return(
        <>
            <Head>
                <title>Загрузка страницы</title>
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
    const [result,setResult] = useState(false);
    useEffect(()=>{
        Router.events.on('routeChangeStart', (url) => {
            console.log(`Loading: ${url}`);
            setResult(true);
        });
        Router.events.on('routeChangeComplete', (url) => {
            console.log(`Loading: ${url} completed`);
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
    {result ? <Preloader/>:<Component {...pageProps} />}
    </>
  )
}

export default MyApp
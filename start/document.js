import { useEffect,useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Head from 'next/head';
import Header from './header';

const DocumentResult = ({children}) => {
    const [result,setResult] = useState({color:'',mode:''})
    const checkMode = useMediaQuery({query:'(prefers-color-scheme: dark)'});
    useEffect(()=>{
        checkMode===true?setResult({color:"hsl(240, 3%, 11%)",mode:'/manifest-night.json'}):setResult({color:"hsl(0, 0%, 100%)",mode:'/manifest.json'});
    },[checkMode])
    return(
        <>
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
                <meta httpEquiv="Cache-Control" content="max-age=31536000" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content={result.color} />
                <meta name="description" content="Zhenil.kz" />
                <link rel="manifest" href={result.mode} />
                <meta name="apple-mobile-web-app-title" content="Zhenil" />
                <link rel="apple-touch-icon" href="/apple.png" />
                <meta name="application-name" content="Zhenil" />
                <meta name="apple-touch-fullscreen" content="yes" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capacity" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            </Head>
            <Header/>
            <div className="result">{children}</div>
        </>
    );
}

export default DocumentResult;
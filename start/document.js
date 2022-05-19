import { useEffect,useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Head from 'next/head';
import Header from './header';

const DocumentResult = ({children}) => {
    const [result,setResult] = useState({color:''})
    const checkMode = useMediaQuery({query:'(prefers-color-scheme: dark)'});
    useEffect(()=>{
        checkMode===true?setResult({color:"hsl(240, 3%, 11%)"}):setResult({color:"hsl(0, 0%, 100%)"});
    },[checkMode])
    return(
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header/>
            <div className="result">{children}</div>
        </>
    );
}

export default DocumentResult;
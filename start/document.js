/*jshint esversion: 6 */
import Header from './header';
import Head from "next/head";
import { useMediaQuery } from 'react-responsive';
import {useState,useEffect} from 'react';

const DocumentResult = ({children}) => {
    const [change,setChange] = useState('');
    const c1 = useMediaQuery({ query: 'screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)' });
    const c2 = useMediaQuery({ query: 'screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'});
    const c3 = useMediaQuery({ query: 'screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'});
    const c4 = useMediaQuery({ query: 'screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'});
    const c5 = useMediaQuery({ query: 'screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'});
    const c6 = useMediaQuery({ query: 'screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'});
    const c7 = useMediaQuery({ query: 'screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'});
    const c8 = useMediaQuery({ query: 'screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'});
    const c9 = useMediaQuery({ query: 'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'});
    const c10 = useMediaQuery({ query: 'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'});
    const c11 = useMediaQuery({ query: 'screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'});
    const c12 = useMediaQuery({ query: 'screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'});
    const c13 = useMediaQuery({ query: 'screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'});
    const c14 = useMediaQuery({ query: 'screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'});
    const c15 = useMediaQuery({ query: 'screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'});
    const c16 = useMediaQuery({ query: 'screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'});
    const c17 = useMediaQuery({ query: 'screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'});
    const c18 = useMediaQuery({ query: 'screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'});
    const c19 = useMediaQuery({ query: 'screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'});
    const c20 = useMediaQuery({ query: 'screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'});
    const c21 = useMediaQuery({ query: 'screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'});
    const c22 = useMediaQuery({ query: 'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'});
    const c23 = useMediaQuery({ query: 'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'});
    const c24 = useMediaQuery({ query: 'screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'});
    const c25 = useMediaQuery({ query: 'screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'});
    const c26 = useMediaQuery({ query: 'screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'});
    // switch(c25){
    //     case c25: console.log('yes'); break;
    //     case c25: console.log('not'); break;
    //     default: console.log('not found'); break;
    // }
    return(
        <>
            <Head>
                {c1?<link rel="apple-touch-startup-image" href="/splash_screens/12.9__iPad_Pro_landscape.webp" />:""}
                {c2?<link rel="apple-touch-startup-image" href="/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.webp" />:""}
                {c3?<link rel="apple-touch-startup-image" href="/splash_screens/10.5__iPad_Air_landscape.webp" />:""}
                {c4?<link rel="apple-touch-startup-image" href="/splash_screens/10.2__iPad_landscape.webp" />:""}
                {c5?<link rel="apple-touch-startup-image" media="" href="/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.webp" />:""}
                {c6?<link rel="apple-touch-startup-image" media="" href="/splash_screens/iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.webp" />:""}
                {c7?<link rel="apple-touch-startup-image" media="" href="/splash_screens/iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.webp" />:""}
                {c8?<link rel="apple-touch-startup-image" media="" href="/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.webp" />:""}
                {c9?<link rel="apple-touch-startup-image" media="" href="/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.webp" />:""}
                {c10?<link rel="apple-touch-startup-image" media="" href="/splash_screens/iPhone_11__iPhone_XR_landscape.webp" />:""}
                {c11?<link rel="apple-touch-startup-image" media="" href="/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.webp" />:""}
                {c12?<link rel="apple-touch-startup-image" media="" href="/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.webp" />:""}
                {c13?<link rel="apple-touch-startup-image" media="" href="/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.webp" />:""}
                {c14?<link rel="apple-touch-startup-image" media="" href="/splash_screens/12.9__iPad_Pro_portrait.webp" />:""}
                {c15?<link rel="apple-touch-startup-image" media="" href="/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.webp" />:""}
                {c16?<link rel="apple-touch-startup-image" media="" href="/splash_screens/10.5__iPad_Air_portrait.webp" />:""}
                {c17?<link rel="apple-touch-startup-image" media="" href="/splash_screens/10.2__iPad_portrait.webp" />:""}
                {c18?<link rel="apple-touch-startup-image" media="" href="/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.webp" />:""}
                {c19?<link rel="apple-touch-startup-image" media="" href="/splash_screens/iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.webp" />:""}
                {c20?<link rel="apple-touch-startup-image" media="" href="/splash_screens/iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.webp" />:""}
                {c21?<link rel="apple-touch-startup-image" media="" href="/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.webp" />:""}
                {c22?<link rel="apple-touch-startup-image" media="" href="/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.webp" />:""}
                {c23?<link rel="apple-touch-startup-image" media="" href="/splash_screens/iPhone_11__iPhone_XR_portrait.webp" />:""}
                {c24?<link rel="apple-touch-startup-image" media="" href="/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.webp" />:""}
                {c25?<link rel="apple-touch-startup-image" media="" href="/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.webp" />:""}
                {c26?<link rel="apple-touch-startup-image" media="" href="/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.webp" />:""}
            </Head>
            <Header/>
            <div className="result">{children}</div>
        </>
    );
}

export default DocumentResult;
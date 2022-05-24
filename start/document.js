/*jshint esversion: 6 */
import Header from './header';
import Head from "next/head";
import { useMediaQuery } from 'react-responsive';
import {useState,useEffect} from 'react';

const DocumentResult = ({children}) => {
    const [change,setChange] = useState('');
    const SendResult = (e) => {
        setTimeout(()=>{
            console.log(e)
        },[1000])
    };
    const c1 = useMediaQuery({query:"screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"},undefined, SendResult("/splash_screens/12.9__iPad_Pro_landscape.webp"));
    const c2 = useMediaQuery({query:"screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"},undefined, SendResult("/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.webp"));
    const c3 = useMediaQuery({query:"screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"},undefined, SendResult("/splash_screens/10.5__iPad_Air_landscape.webp"));
    const c4 = useMediaQuery({query:"screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"},undefined, SendResult("/splash_screens/10.2__iPad_landscape.webp"));
    const c5 = useMediaQuery({query:"screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"},undefined, SendResult("/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.webp"));
    const c6 = useMediaQuery({query:"screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"},undefined, SendResult("/splash_screens/iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.webp"));
    const c7 = useMediaQuery({query:"screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"},undefined, SendResult("/splash_screens/iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.webp"));
    const c8 = useMediaQuery({query:"screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"},undefined, SendResult("/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.webp"));
    const c9 = useMediaQuery({query:"screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"},undefined, SendResult("/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.webp"));
    const c10 = useMediaQuery({query:"screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"},undefined, SendResult("/splash_screens/iPhone_11__iPhone_XR_landscape.webp"));
    const c11 = useMediaQuery({query:"screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"},undefined, SendResult("/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.webp"));
    const c12 = useMediaQuery({query:"screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"},undefined, SendResult("/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.webp"));
    const c13 = useMediaQuery({query:"screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"},undefined, SendResult("/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.webp"));
    const c14 = useMediaQuery({query:"screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},undefined, SendResult("/splash_screens/12.9__iPad_Pro_portrait.webp"));
    const c15 = useMediaQuery({query:"screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},undefined, SendResult("/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.webp"));
    const c16 = useMediaQuery({query:"screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},undefined, SendResult("/splash_screens/10.5__iPad_Air_portrait.webp"));
    const c17 = useMediaQuery({query:"screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},undefined, SendResult("/splash_screens/10.2__iPad_portrait.webp"));
    const c18 = useMediaQuery({query:"screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},undefined, SendResult("/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.webp"));
    const c19 = useMediaQuery({query:"screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"},undefined, SendResult("/splash_screens/iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.webp"));
    const c20 = useMediaQuery({query:"screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"},undefined, SendResult("/splash_screens/iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.webp"));
    const c21 = useMediaQuery({query:"screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"},undefined, SendResult("/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.webp"));
    const c22 = useMediaQuery({query:"screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"},undefined, SendResult("/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.webp"));
    const c23 = useMediaQuery({query:"screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},undefined, SendResult("/splash_screens/iPhone_11__iPhone_XR_portrait.webp"));
    const c24 = useMediaQuery({query:"screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"},undefined, SendResult("/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.webp"));
    const c25 = useMediaQuery({query:"screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},undefined, SendResult("/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.webp"));
    const c26 = useMediaQuery({query:"screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},undefined, SendResult("/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.webp"));
    return(
        <>
            <Head>
                <link rel="apple-touch-startup-image" sizes="1024x1366" href="/splash_screens/12.9__iPad_Pro_landscape.webp" />
                <link rel="apple-touch-startup-image" sizes="834x1194" href="/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.webp" />
                <link rel="apple-touch-startup-image" sizes="834x1112" href="/splash_screens/10.5__iPad_Air_landscape.webp" />
                <link rel="apple-touch-startup-image" sizes="810x1080" href="/splash_screens/10.2__iPad_landscape.webp" />
                <link rel="apple-touch-startup-image" sizes="768x1024" href="/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.webp" />
                <link rel="apple-touch-startup-image" sizes="428x926" href="/splash_screens/iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.webp" />
                <link rel="apple-touch-startup-image" sizes="390x844" href="/splash_screens/iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.webp" />
                <link rel="apple-touch-startup-image" sizes="375x812" href="/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.webp" />
                <link rel="apple-touch-startup-image" sizes="414x896" href="/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.webp" />
                <link rel="apple-touch-startup-image" sizes="414x896" href="/splash_screens/iPhone_11__iPhone_XR_landscape.webp" />
                <link rel="apple-touch-startup-image" sizes="414x736" href="/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.webp" />
                <link rel="apple-touch-startup-image" sizes="375x667" href="/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.webp" />
                <link rel="apple-touch-startup-image" sizes="320x568" href="/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.webp" />
                <link rel="apple-touch-startup-image" sizes="1024x1366" href="/splash_screens/12.9__iPad_Pro_portrait.webp" />
                <link rel="apple-touch-startup-image" sizes="834x1194" href="/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.webp" />
                <link rel="apple-touch-startup-image" sizes="834x1112" href="/splash_screens/10.5__iPad_Air_portrait.webp" />
                <link rel="apple-touch-startup-image" sizes="810x1080" href="/splash_screens/10.2__iPad_portrait.webp" />
                <link rel="apple-touch-startup-image" sizes="768x1024" href="/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.webp" />
                <link rel="apple-touch-startup-image" sizes="428x926" href="/splash_screens/iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.webp" />
                <link rel="apple-touch-startup-image" sizes="390x844" href="/splash_screens/iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.webp" />
                <link rel="apple-touch-startup-image" sizes="375x812" href="/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.webp" />
                <link rel="apple-touch-startup-image" sizes="414x896" href="/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.webp" />
                <link rel="apple-touch-startup-image" sizes="414x896" href="/splash_screens/iPhone_11__iPhone_XR_portrait.webp" />
                <link rel="apple-touch-startup-image" sizes="414x736" href="/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.webp" />
                <link rel="apple-touch-startup-image" sizes="375x667" href="/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.webp" />
                <link rel="apple-touch-startup-image" sizes="320x568" href="/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.webp" />
            </Head>
            <Header/>
            <div className="result">{children}</div>
        </>
    );
}

export default DocumentResult;
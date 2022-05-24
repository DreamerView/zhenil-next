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
    const c1 = useMediaQuery({query:"screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"},undefined, SendResult("/splash_screens/12.9__iPad_Pro_landscape.png"));
    const c2 = useMediaQuery({query:"screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"},undefined, SendResult("/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png"));
    const c3 = useMediaQuery({query:"screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"},undefined, SendResult("/splash_screens/10.5__iPad_Air_landscape.png"));
    const c4 = useMediaQuery({query:"screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"},undefined, SendResult("/splash_screens/10.2__iPad_landscape.png"));
    const c5 = useMediaQuery({query:"screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"},undefined, SendResult("/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png"));
    const c6 = useMediaQuery({query:"screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"},undefined, SendResult("/splash_screens/iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png"));
    const c7 = useMediaQuery({query:"screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"},undefined, SendResult("/splash_screens/iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png"));
    const c8 = useMediaQuery({query:"screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"},undefined, SendResult("/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png"));
    const c9 = useMediaQuery({query:"screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"},undefined, SendResult("/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png"));
    const c10 = useMediaQuery({query:"screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"},undefined, SendResult("/splash_screens/iPhone_11__iPhone_XR_landscape.png"));
    const c11 = useMediaQuery({query:"screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"},undefined, SendResult("/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png"));
    const c12 = useMediaQuery({query:"screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"},undefined, SendResult("/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png"));
    const c13 = useMediaQuery({query:"screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"},undefined, SendResult("/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png"));
    const c14 = useMediaQuery({query:"screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},undefined, SendResult("/splash_screens/12.9__iPad_Pro_portrait.png"));
    const c15 = useMediaQuery({query:"screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},undefined, SendResult("/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png"));
    const c16 = useMediaQuery({query:"screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},undefined, SendResult("/splash_screens/10.5__iPad_Air_portrait.png"));
    const c17 = useMediaQuery({query:"screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},undefined, SendResult("/splash_screens/10.2__iPad_portrait.png"));
    const c18 = useMediaQuery({query:"screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},undefined, SendResult("/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png"));
    const c19 = useMediaQuery({query:"screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"},undefined, SendResult("/splash_screens/iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png"));
    const c20 = useMediaQuery({query:"screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"},undefined, SendResult("/splash_screens/iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png"));
    const c21 = useMediaQuery({query:"screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"},undefined, SendResult("/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png"));
    const c22 = useMediaQuery({query:"screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"},undefined, SendResult("/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png"));
    const c23 = useMediaQuery({query:"screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},undefined, SendResult("/splash_screens/iPhone_11__iPhone_XR_portrait.png"));
    const c24 = useMediaQuery({query:"screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"},undefined, SendResult("/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png"));
    const c25 = useMediaQuery({query:"screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},undefined, SendResult("/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png"));
    const c26 = useMediaQuery({query:"screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},undefined, SendResult("/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png"));
    return(
        <>
            <Head>
                <link rel="apple-touch-startup-image" href={change} />
            </Head>
            <Header/>
            <div className="result">{children}</div>
        </>
    );
}

export default DocumentResult;
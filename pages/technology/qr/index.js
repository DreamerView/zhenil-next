import { useEffect,useState } from "react";
import {Html5Qrcode} from "html5-qrcode";
import NavbarApp from "/pages/navbar_app/nav";
import style from "/styles/technology/qr/index.module.css";
import dynamic from "next/dynamic";
const LazyImage = dynamic(()=>import("/start/lazyimage"),{ssr:false});

const QR = () => {
    const [hide,setHide] = useState(false);
    const [html5QrCode] = useState(typeof window !== "undefined"?new Html5Qrcode(/* element id */ "reader"):"");
    const [camera,setCamera] = useState({id:null,name:null});
    const [resQR,setResQR] = useState({text:null,content:null});
    const [qr,setQR] = useState(false);
    const resumeQR = ()=> {
        html5QrCode.resume();
        setQR(false);
    };
    const startQR = ()=> {
        Html5Qrcode.getCameras().then(devices => {
            if (devices && devices.length) {
                setCamera({id:devices[0].id,name:devices[0].label});
                setHide(true);
                html5QrCode.start(devices[0].id, {fps:30,qrbox: { width: 350, height: 350 }},
                    (decodedText, decodedResult) => {
                        console.log(`Code matched = ${decodedText}`, decodedResult);
                        setResQR({text:decodedText,content:decodedResult});
                        if(decodedText) {
                            html5QrCode.pause();
                            setQR(true);
                        }    
                    },
                    (errorMessage) => {
                        // parse error, ignore it.
                    }).catch((err) => {
                        console.log("New error: "+err)
                    });
            }
          }).catch(err => {
            console.log("New error: "+err)
          });
    }
    const TextUI = (text,count) => {
        let str = text.length;
        if(str<=count) return text;
        else return text.substring(0, count)+"...";
    }
    return(
        <>
        <NavbarApp to={{href:"/technology"}} choice="alone"/>
        <div className="main_app block_animation">
            <h1 className="flex_text">Okki QR</h1>
            <p className="sub_content">Welcome to Okki QR</p>
            {hide===true?"":
            <div className={style.qr_row}>
                <div onClick={()=>startQR()}>
                    <div className={style.qr_image}>
                        <div className={style.qr_pic}>
                            <LazyImage src={"/img/add_a_photo.svg"}/>
                        </div>
                    </div>
                    <p>Open camera</p>
                </div>
                <div >
                    <div className={style.qr_image}>
                        <div className={style.qr_pic}>
                            <LazyImage src={"/img/add_a_photo.svg"}/>
                        </div>
                    </div>
                    <p>Click to start</p>
                </div>
            </div>}
            <div className={style.qr}>
                <div id="reader" width="250" height="250"/>
            </div>
        </div>
        {qr===true?
        <div className={style.modal_block}>
            <div className={`${style.modal} block_animation`}>
                <h1 className="text_center">Результат</h1>
                <div className={style.modal_row}><p>{TextUI(resQR.text,30)}</p></div>
                <div onClick={()=>{resumeQR()}} className={`${style.modal_button} red_background`}>Закрыть</div>
            </div>
        </div>:""
        }
        </>
    )
}
export default QR;
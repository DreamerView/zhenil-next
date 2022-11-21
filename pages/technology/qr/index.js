import { useEffect,useState } from "react";
import {Html5Qrcode} from "html5-qrcode";
import NavbarApp from "/pages/navbar_app/nav";
import style from "/styles/technology/qr/index.module.css";
import dynamic from "next/dynamic";
const LazyImage = dynamic(()=>import("/start/lazyimage"),{ssr:false});

const QR = () => {
    const [hide,setHide] = useState(false);
    const [html5QrCode] = useState(typeof window !== "undefined"?new Html5Qrcode("reader"):null);
    const [width,setWidth] = useState(null)
    const [camera,setCamera] = useState("environment");
    const [resQR,setResQR] = useState({text:null,content:null});
    const [qr,setQR] = useState(false);
    const resumeQR = ()=> {
        html5QrCode.resume();
        setQR(false);
    };
    useEffect(()=>{
        setWidth(document.body.clientWidth);
    },[])
    const startQR = (mode)=> {
        Html5Qrcode.getCameras().then(devices => {
            if (devices && devices.length) {
                // setCamera({id:devices[0].id,name:devices[0].label});
                setHide(true);
                let s="";
                if(width<=768) {
                    s={ facingMode: mode };
                } else {
                    s=devices[0].id;
                }
                if(html5QrCode!==null) {
                    html5QrCode.start(s, {fps:10,qrbox: { width: 200, height: 200 }},
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
            <h1 className="flex_text" onClick={()=>checkDevice()}>Okki QR</h1>
            <p className="sub_content">Welcome to Okki QR</p>
            {hide===true?"":
            <div className={style.qr_row}>
                <div onClick={()=>startQR(width<=768?"environment":"")}>
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
                <div id="reader"/>
            </div>
            {width!==null&&width<=768?
            camera!=="environment"?
                <div onClick={()=>{startQR('environment');setCamera("environment");}}>ENV</div>
            :
                <div onClick={()=>{startQR('user');setCamera("user");}}>User</div>
            :""}
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
/*jshint esversion: 6 */
import {useEffect, useState} from "react";
import Link from 'next/link';
import Head from "next/head";
import Image from "next/image";
import useTranslateText from '../translate';
import ux from "../../translate/ux/action";
import translate from "../../translate/acc/navbar_translate";
import text from "../../translate/acc/logo_translate";

const LogoAcc = () => {
    const lang = useTranslateText();
    const [logo,setLogo] = useState("/img/logo_round.svg");
    const [c,setC] = useState({logo:'logo',text:text['desc'][lang],div:''});
    const [ready,setReady] = useState(false);
    const CheckLogo = (event) => {
        let reader = new FileReader();
        reader.readAsDataURL(event);
        reader.onloadend = () => {
            const i = document.createElement('img');
            i.src = reader.result;
            i.onload = () => {
                const canvas = document.createElement('canvas');
                const maxWidth = 300;
                const scaleSize = maxWidth / i.width;
                canvas.width = maxWidth;
                canvas.height = i.height * scaleSize;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(i,0,0,canvas.width,canvas.height);
                const srcEnc = ctx.canvas.toDataURL("image/webp");
                localStorage.setItem('logo_acc',srcEnc);
                setLogo(srcEnc);
                setC({logo:'logo_s',text:text['complete'][lang],div:'alerts_g'});
            };
        };
    };
    useEffect(()=>{
        if(localStorage.getItem('logo_acc')) {
            setLogo(localStorage.getItem('logo_acc'));
            setReady(true);
            setC({logo:'logo_s',text:text['complete'][lang],div:'alerts_g'});
        }
    },[]);
    return(
        <>
            <Head>
                <title>{text['name'][lang]}</title>
            </Head>
            <div className="main__nav">
                <p className="nav"><Link href="/"><b className="b_color">{translate['home'][lang]}  /</b></Link>  <Link href="/acc"><a>{translate['step1'][lang]} /</a></Link>  {translate['step2'][lang]}</p>
            </div>
            <div className="main__block">
                <h1>{text['name'][lang]}</h1>
                <p className="sub_content">{text['content'][lang]}</p>
                <div className="main__block_interface_menu c-m block_animation" onClick={()=>{}}>
                    <div className="main__block_interface_menu_c">
                        <h1>{text['title'][lang]}</h1>
                    </div>
                    <div className="main__block_interface_menu_c_logo">
                        <label htmlFor="logoPreview">
                            <div className="main__block_interface_menu_logo_icon_pic">
                                <Image width={46} height={46} loading="lazy" className="main__block_interface_menu_logo_icon_img" src={"/img/add_a_photo.svg" } alt="icon" />
                            </div>
                        </label>
                        <input style={{display:'none'}} name="logoPreview" id="logoPreview" accept="image/*" type='file' onChange={(event)=>{CheckLogo(event.target.files[0]);setReady(true)}} />
                       
                            <Image width={135} height={135} loading="lazy" className="main__block_interface_menu_logo_img" src={logo} alt="logo" placeholder="blur" blurDataURL={logo} />
                        
                    </div>
                    <div className="main__block_interface_menu_c_end">
                        <div className={c.div}>
                            <span className={c.logo}>{c.text}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__block_fixed_confirm">
                <div className="main__block_interface_menu_c_end flex">
                            <Link href="/acc/size" className="main__block_interface_btn_back"><a className="main__block_interface_btn_back">{ux['skip'][lang]}</a></Link>
                            {!ready ? <button className="main__block_interface_btn_forward">{ux['continue'][lang]}</button>: <Link href="/acc/size" className="main__block_interface_btn_forward"><a className="main__block_interface_btn_forward">{ux['continue'][lang]}</a></Link>}    
                </div>
            </div>
        </>
    );
}

export default LogoAcc;
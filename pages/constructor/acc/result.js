/*jshint esversion: 6 */
import style from "../../../styles/constructor/acc/index.module.css";
import Head from "next/head";
import Link from "next/link";
import { useDispatch } from "react-redux";
import Image from "next/image";
import useTranslateText from "../../../start/translate";
import translate from "../../../translate/constructor/acc/navbar_translate";
import ux from "../../../translate/ux/action";
import nav_translate from "../../../translate/services/all_translate";
import text from "../../../translate/constructor/acc/result_translate";


const ResultAcc = () => {
    const send = useDispatch();
    const lang = useTranslateText();
    return(
        <>
            <Head>
                <title>{text['name'][lang]}</title>
            </Head>
            <div className="main__nav">
                <p className="nav"><Link href="/" prefetch={false}><b className="b_color">{nav_translate['home'][lang]}  /</b></Link>  <Link href="/constructor" prefetch={false}><a>{nav_translate['constructor'][lang]} /</a></Link>  <Link href="/constructor/acc" prefetch={false}><a>{nav_translate['acc_const'][lang]} /</a></Link>  <Link href="/constructor/acc/logo" prefetch={false}><a>{translate['step2'][lang]} /</a></Link>  <Link href="/constructor/acc/size" prefetch={false}><a>{translate['step3'][lang]} /</a></Link>  <Link href="/constructor/acc/info" prefetch={false}><a>{translate['step4'][lang]} /</a></Link>  {translate['step5'][lang]}</p>
            </div>
            <div className="main">
                <h1>{text['name'][lang]}</h1>
                <p className="sub_content">{text['content'][lang]}</p>
                <div className={`${style.main__block_interface_menu} c-m block_animation`}>
                    <div className={style.main__block_interface_menu_c}>
                        <h1>{text['title'][lang]}</h1>
                        <p className="sub_content">{text['desc'][lang]}</p>
                        <div className={`fullscreen__result_block blue_background`} onClick={()=>{send({type:"setFullFrame",set:true});send({type:"setUrlFrame",set:"/service-app/badge-constructor/convert.html"});}}>
                            <div className={`fullscreen__result_button`}><Image src={'/img/fullscreen.svg'} width={22} height={22} alt="icon"/></div>
                            <p className={`small`}>{ux['fullframe_open'][lang]}</p>
                        </div>
                    </div>
                    <iframe id="frame" title="converter result" src={"/service-app/badge-constructor/convert.html"}>
                        Your browser does not support floating frames!
                    </iframe>
                </div>
            </div>
            <div className={style.main__block_fixed_confirm}>
                <div className={`${style.main__block_interface_menu_c_end} flex`}>
                            <Link href="/constructor/acc/info" prefetch={false} className={style.main__block_interface_btn_back}><a className={style.main__block_interface_btn_back}>{ux['back'][lang]}</a></Link>
                            <Link href="/" prefetch={false} className={style.main__block_interface_btn_forward}><a className={style.main__block_interface_btn_forward}>{ux['home'][lang]}</a></Link>
                </div>
            </div>
        </>
    );
};

export default ResultAcc;
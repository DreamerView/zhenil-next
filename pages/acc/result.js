/*jshint esversion: 6 */
import Head from "next/head";
import Link from "next/link";
import { useDispatch } from "react-redux";
import Image from "next/image";
import useTranslateText from "../translate";
import translate from "../../translate/acc/navbar_translate";
import ux from "../../translate/ux/action";
import text from "../../translate/acc/result_translate";


const ResultAcc = () => {
    const send = useDispatch();
    const lang = useTranslateText()
    return(
        <>
            <Head>
                <title>{text['name'][lang]}</title>
            </Head>
            <div className="main__nav">
                <p className="nav"><Link href="/"><b className="b_color">{translate['home'][lang]}  /</b></Link>  <Link href="/acc"><a>{translate['step1'][lang]} /</a></Link>  <Link href="/acc/logo"><a>{translate['step2'][lang]} /</a></Link>  <Link href="/acc/size"><a>{translate['step3'][lang]} /</a></Link>  <Link href="/acc/info"><a>{translate['step4'][lang]} /</a></Link>  {translate['step5'][lang]}</p>
            </div>
            <div className="main__block">
                <h1>{text['name'][lang]}</h1>
                <p className="sub_content">{text['content'][lang]}</p>
                <div className="main__block_interface_menu c-m block_animation">
                    <div className="main__block_interface_menu_c">
                        <h1>{text['title'][lang]}</h1>
                        <p className="sub_content">{text['desc'][lang]}</p>
                        <div className="fullscreen__result_block blue_background" onClick={()=>{send({type:"setFullFrame",set:true});send({type:"setUrlFrame",set:"/convert.html"});}}>
                            <div className="fullscreen__result_button"><Image src={'/img/fullscreen.svg'} width={22} height={22} alt="icon"/></div>
                            <p className="small">{ux['fullframe_open'][lang]}</p>
                        </div>
                    </div>
                    <iframe id="frame" title="converter result" src={"/convert.html"}>
                        Your browser does not support floating frames!
                    </iframe>
                </div>
            </div>
            <div className="main__block_fixed_confirm">
                <div className="main__block_interface_menu_c_end flex">
                            <Link href="/acc/info" className="main__block_interface_btn_back"><a className="main__block_interface_btn_back">{ux['back'][lang]}</a></Link>
                            <Link href="/" className="main__block_interface_btn_forward"><a className="main__block_interface_btn_forward">{ux['home'][lang]}</a></Link>
                </div>
            </div>
        </>
    );
};

export default ResultAcc;
/*jshint esversion: 6 */
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import useTranslateText from "../../translate";
import ux from "../../../translate/ux/action";
import translate from "../../../translate/acc/navbar_translate";
import nav_translate from "../../../translate/services/all_translate";
import text from "../../../translate/acc/index_translate";

const Acc = () => {
    const lang = useTranslateText();
    return(
      <>
      <Head>
        <title>{text['name'][lang]} | Okki.kz</title>
        <meta name="description" content={text['seo_description'][lang]} />
      </Head>
        <div className="main__nav block_animation">
            <p className="nav"><Link href="/"><b className="b_color">{nav_translate['home'][lang]}  /</b></Link>  <Link href="/constructor"><a>{nav_translate['constructor'][lang]} /</a></Link>  {nav_translate["acc_const"][lang]}</p>
        </div>
        <div className="main__block block_animation">
            <h1>{text['name'][lang]}</h1>
            <p className="sub_content">{text['content'][lang]}</p>
            <div className="main__block_menu_select p-m">
            <div className="main__block_menu_select_block anim_hover">
            <Link href="/constructor/acc/logo">
            <a>
            <div className="main__block_menu_select_block_icon green_temp">
                <Image width={30} height={30} className="main__block_menu_select_block_icon_img" src="/img/person.svg" alt="icon" priority />
            </div>
            <div className="main__block_menu_select_main">
                <h2>{text['title1'][lang]}</h2>
            </div>
            <div className="main__block_menu_select_main">
                <p className="main__block_menu_select_main_p">{text['content1'][lang]}</p>
            </div>
            <div className="main__block_menu_select_main">
                <button className="main__block_menu_select_main_button green_border">{ux['start'][lang]}</button>
            </div>
            </a>
            </Link>
            </div>

            <div className="main__block_menu_select_block anim_hover">
            <Link href="/constructor/acc/logo">
            <a>
            <div className="main__block_menu_select_block_icon purple_temp">
                <Image width={30} height={30} className="main__block_menu_select_block_icon_img" src="/img/group.svg" alt="icon" priority/>
            </div>
            <div className="main__block_menu_select_main">
                <h2>{text['title2'][lang]}</h2>
            </div>
            <div className="main__block_menu_select_main">
                <p className="main__block_menu_select_main_p">{text['content2'][lang]}</p>
            </div>
            <div className="main__block_menu_select_main">
                <button className="main__block_menu_select_main_button purple_border">{ux['start'][lang]}</button>
            </div>
            </a>
            </Link>
            </div>

            <div className="main__block_menu_select_block anim_hover">
            <Link href="/constructor/acc/logosd">
            <a>
            <div className="main__block_menu_select_block_icon blue_temp">
                <Image width={30} height={30} className="main__block_menu_select_block_icon_img" src="/img/help.svg" alt="icon" priority/>
            </div>
            <div className="main__block_menu_select_main">
                <h2>{text['title3'][lang]}</h2>
            </div>
            <div className="main__block_menu_select_main">
                <p className="main__block_menu_select_main_p">{text['content3'][lang]}</p>
            </div>
            <div className="main__block_menu_select_main">
                <button className="main__block_menu_select_main_button blue_border">{ux['start'][lang]}</button>
            </div>
            </a>
            </Link>
            </div>

            </div>
        </div>
      </>  
    );
}

export default Acc;
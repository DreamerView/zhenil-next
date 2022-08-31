/*jshint esversion: 6 */
import style from "../../../styles/constructor/acc/index.module.css";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import useTranslateText from "../../../start/translate";
import ux from "../../../translate/ux/action";
import nav_translate from "../../../translate/services/all_translate";
import text from "../../../translate/constructor/acc/index_translate";
import seo from "../../../translate/constructor/acc/index_seo";

const Acc = () => {
    const lang = useTranslateText();
    return(
      <>
      <Head>
        <title>{seo['title'][lang]}</title>
        <meta property="og:title" content={`${seo['title'][lang]}`} />
        <meta name="description" content={seo['description'][lang]} />
        <meta name="keywords" content={seo['keywords'][lang]} />
      </Head>
        <div className={`main__nav block_animation`}>
            <p className="nav"><Link href="/"><b className="b_color">{nav_translate['home'][lang]}  /</b></Link>  <Link href="/constructor"><a title={nav_translate['constructor'][lang]}>{nav_translate['constructor'][lang]} /</a></Link>  {nav_translate["acc_const"][lang]}</p>
        </div>
        <div className={`${style.main__block} block_animation`}>
            <h1>{text['name'][lang]}</h1>
            <p className="sub_content">{text['content'][lang]}</p>
            <div className={`${style.main__block_menu_select} p-m`}>
            <div className={`${style.main__block_menu_select_block} anim_hover`}>
            <Link href="/constructor/acc/logo">
            <a title={text['title1'][lang]}>
            <div className={`${style.main__block_menu_select_block_icon} ${style.green_temp}`}>
                <div className={style.main__block_menu_select_block_i}>
                    <Image layout="fill" className={style.main__block_menu_select_block_icon_img} title="Person icon from Okki.kz" src="/img/person.svg" alt="icon" priority />
                </div>
            </div>
            <div className={style.main__block_menu_select_main}>
                <h2>{text['title1'][lang]}</h2>
            </div>
            <div className={style.main__block_menu_select_main}>
                <p className={style.main__block_menu_select_main_p}>{text['content1'][lang]}</p>
            </div>
            <div className={style.main__block_menu_select_main}>
                <button className={`${style.main__block_menu_select_main_button} ${style.green_border}`}>{ux['start'][lang]}</button>
            </div>
            </a>
            </Link>
            </div>

            <div className={`${style.main__block_menu_select_block} anim_hover`}>
            <Link href="/constructor/acc/logo">
            <a title={text['title2'][lang]}>
            <div className={`${style.main__block_menu_select_block_icon} ${style.purple_temp}`}>
                <div className={style.main__block_menu_select_block_i}>
                    <Image layout="fill" className={style.main__block_menu_select_block_icon_img} title="Group icon from Okki.kz" src="/img/group.svg" alt="icon" priority/>
                </div>
            </div>
            <div className={style.main__block_menu_select_main}>
                <h2>{text['title2'][lang]}</h2>
            </div>
            <div className={style.main__block_menu_select_main}>
                <p className={style.main__block_menu_select_main_p}>{text['content2'][lang]}</p>
            </div>
            <div className={style.main__block_menu_select_main}>
                <button className={`${style.main__block_menu_select_main_button} ${style.purple_border}`}>{ux['start'][lang]}</button>
            </div>
            </a>
            </Link>
            </div>

            <div className={`${style.main__block_menu_select_block} anim_hover`}>
            <Link href="/constructor/acc/logosd">
            <a title={text['title3'][lang]}>
            <div className={`${style.main__block_menu_select_block_icon} ${style.blue_temp}`}>
                <div className={style.main__block_menu_select_block_i}>
                    <Image layout="fill" className={style.main__block_menu_select_block_icon_img} title="Help icon from Okki.kz" src="/img/help.svg" alt="icon" priority/>
                </div>
            </div>
            <div className={style.main__block_menu_select_main}>
                <h2>{text['title3'][lang]}</h2>
            </div>
            <div className={style.main__block_menu_select_main}>
                <p className={style.main__block_menu_select_main_p}>{text['content3'][lang]}</p>
            </div>
            <div className={style.main__block_menu_select_main}>
                <button className={`${style.main__block_menu_select_main_button} ${style.blue_border}`}>{ux['start'][lang]}</button>
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
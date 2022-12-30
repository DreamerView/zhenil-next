/*jshint esversion: 6 */
import style from "/styles/constructor/acc/index.module.css";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import useTranslateText from "/start/translate";
import ux from "/translate/ux/action";
import text from "/translate/constructor/acc/index_translate";
import seo from "/translate/constructor/acc/index_seo";
import NavbarApp from '/pages/navbar_app/nav';

const Acc = () => {
    const lang = useTranslateText();
    return(
      <>
      <Head>
        <title>{seo['title'][lang]}</title>
        <meta name="keywords" content={seo['keywords'][lang]} />
        <meta name="description" content={seo['description'][lang]} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seo['title'][lang]} />
        <meta property="og:site_name" content={process.env.authorName} />
        <meta property="og:description" content={seo['description'][lang]} />
        <meta name="twitter:title" content={seo['title'][lang]}/>
        <meta name="twitter:description" content={seo['description'][lang]}/>
        <meta property="og:url" content={process.env.hostName} />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content={"@"+process.env.siteName}/>
        <meta property="og:image" content={process.env.hostName+"/seo_image/twitter.webp"} />
        <meta name="twitter:image" content={process.env.hostName+"/seo_image/twitter.webp"}/>
        <link rel="image_src" href={process.env.hostName+"/seo_image/twitter.webp"}/>
      </Head>
        <NavbarApp to={[{key:'constructor',location:'/constructor'},{key:'acc_const',path:'last'}]}/>
        <div className={`main block_animation`}>
            <h1>{text['name'][lang]}</h1>
            <p className="sub_content">{text['content'][lang]}</p>
            <div className={`${style.main__block_menu_select} p-m`}>
            <div className={`${style.main__block_menu_select_block} anim_hover`}>
            <Link title={text['title1'][lang]} href="/constructor/acc/logo" prefetch={false}>
            <div className={`${style.main__block_menu_select_block_icon} ${style.green_temp}`}>
                <div className={style.main__block_menu_select_block_i}>
                    <Image width={30} height={30} className={style.main__block_menu_select_block_icon_img} title="Person icon from Okki.kz" src="/img/person.svg" alt="icon" priority />
                </div>
            </div>
            <div className={style.main__block_menu_select_main}>
                <h2>{text['title1'][lang]} </h2>
            </div>
            <div className={style.main__block_menu_select_main}>
                <p className={style.main__block_menu_select_main_p}>{text['content1'][lang]}</p>
            </div>
            <div className={style.main__block_menu_select_main}>
                <button className={`${style.main__block_menu_select_main_button} ${style.green_border}`}>{ux['start'][lang]}</button>
            </div>
            </Link>
            </div>

            <div className={`${style.main__block_menu_select_block} anim_hover`}>
            <Link title={text['title2'][lang]} href="/constructor/acc/logo" prefetch={false}>
            <div className={`${style.main__block_menu_select_block_icon} ${style.purple_temp}`}>
                <div className={style.main__block_menu_select_block_i}>
                    <Image width={30} height={30} className={style.main__block_menu_select_block_icon_img} title="Group icon from Okki.kz" src="/img/group.svg" alt="icon" priority/>
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
            </Link>
            </div>

            <div className={`${style.main__block_menu_select_block} anim_hover`}>
            <Link href="/constructor/acc/logosd" prefetch={false}>
            <div className={`${style.main__block_menu_select_block_icon} ${style.blue_temp}`}>
                <div className={style.main__block_menu_select_block_i}>
                    <Image width={30} height={30} className={style.main__block_menu_select_block_icon_img} title="Help icon from Okki.kz" src="/img/help.svg" alt="icon" priority/>
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
            </Link>
            </div>

            </div>
        </div>
      </>  
    );
}

export default Acc;
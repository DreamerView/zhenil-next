/*jshint esversion: 6 */
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import useTranslateText from "/start/translate";
import translate from "/translate/constructor/acc/navbar_translate";
import style from "/styles/constructor/index.module.css";
import nav_translate from "/translate/services/all_translate";
import type_translate from "/translate/services/type_translate";
import seo from "/translate/health/index_seo";
import AllService from '/start/services/all.json';
import NavbarApp from '/pages/navbar_app/nav';

const HealthIndex = () => {
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
            <div className="main block_animation">
            <NavbarApp to={{href:"/"}} choice="alone"/>
            <h1 className="flex_text">{nav_translate["health"][lang]} <div className="emoji_h1"><Image title={'Microsoft red heart emoji (Used for informational purposes only)'} priority src={"/emoji-small/red_heart.webp"} layout="fill" alt="emoji"/></div></h1>
            <p className="sub_content">{translate["step0_description"][lang]}</p>
            <div className={style.main__module_row}>

                {/*  */}
                {AllService.filter(e=>{return e.category === 'health'}).map((e,index)=>
                    <Link href={e.location} prefetch={false} key={index+1}>
                    <a title={nav_translate[e.name][lang]}>
                    <div className={`${style.main__module_row_block} anim_hover`}>
                        <div>
                            <div className={`${style.main__module_row_block_img}`}>
                                <Image title={nav_translate[e.name][lang]} alt="service" layout="fill" className={style.main__module_row_block_pic} src={e.image}/>
                            </div>
                        </div>
                        <div className={style.main__module_row_block_f}>
                            <span className="head_1">{nav_translate[e.name][lang]}</span>
                            <p className={style.main__module_row_block_f_p}>{type_translate['services'][lang]}</p>
                        </div>
                    </div>
                    </a>
                    </Link>
                    )}
                {/*  */}
            </div>
        </div>
      </>
    );
};

export default HealthIndex;
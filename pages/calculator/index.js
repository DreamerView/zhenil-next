/*jshint esversion: 6 */
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import useTranslateText from "/start/translate";
import text from "/translate/constructor/acc/index_translate";
import nav_translate from "/translate/services/all_translate";
import translate from "/translate/constructor/acc/navbar_translate";
import style from "/styles/constructor/index.module.css";
import AllService from '/start/services/all.json';
import type_translate from "/translate/services/type_translate";
import NavbarApp from '/pages/navbar_app/nav';

const BusinessIndex = () => {
    const lang = useTranslateText();
    return(
        <>
            <Head>
                <title>{nav_translate['calculator'][lang]} | Okki.kz</title>
                <meta property="og:title" content={`${nav_translate['calculator'][lang]} | Okki.kz`} />
                <meta name="description" content={text['seo_description'][lang]} />
            </Head>
            <div className="main block_animation">
            <NavbarApp to={{href:"/"}} choice="alone"/>
            <h1 className="flex_text">{nav_translate['calculator'][lang]} <div className="emoji_h1"><Image title={'Microsoft fire emoji (Used for informational purposes only)'} priority src={"/emoji-small/fire.webp"} layout="fill" alt="emoji"/></div></h1>
            <p className="sub_content">{translate["step0_description"][lang]}</p>
            <div className={style.main__module_row}>
                {/*  */}
                {AllService.filter(e=>{return e.main === 'calculator'}).map((e,index)=>
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

export default BusinessIndex;
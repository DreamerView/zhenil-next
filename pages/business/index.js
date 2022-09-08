/*jshint esversion: 6 */
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import useTranslateText from "../../start/translate";
import translate from "../../translate/constructor/acc/navbar_translate";
import text from "../../translate/constructor/acc/index_translate";
import style from "../../styles/constructor/index.module.css";
import nav_translate from "../../translate/services/all_translate";
import type_translate from "../../translate/services/type_translate";
import seo from "../../translate/business/index_seo";

const BusinessIndex = () => {
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
            <div className="main__nav block_animation">
                <p className="nav"><Link href="/"><b className="b_color">{nav_translate['home'][lang]}  /</b></Link>    {nav_translate["business"][lang]}</p>
            </div>
            <div className="main block_animation">
            <h1 className="flex_text">{nav_translate['business'][lang]} <div className="emoji_h1"><Image title={'Microsoft briefcase emoji (Used for informational purposes only)'} priority src={"/emoji-small/briefcase.webp"} layout="fill" alt="emoji"/></div></h1>
            <p className="sub_content">{translate["step0_description"][lang]}</p>
            <div className={style.main__module_row}>
                {/*  */}
                <Link href="/business/margin-markup-calculator">
                <a title={nav_translate['margin_markup_calc'][lang]}>
                <div className={`${style.main__module_row_block} anim_hover`}>
                    <div>
                        <div className={`${style.main__module_row_block_img}`}>
                            <Image title={nav_translate['margin_markup_calc'][lang]} priority alt="service" layout="fill" className={style.main__module_row_block_pic} src="/services/margin-markup.webp" placeholder="blur" blurDataURL="/services/margin-markup.webp"/>
                        </div>
                    </div>
                    <div className={style.main__module_row_block_f}>
                        <span className="head_1">{nav_translate['margin_markup_calc'][lang]}</span>
                        <p className={style.main__module_row_block_f_p}>{type_translate['services'][lang]}</p>
                    </div>
                </div>
                </a>
                </Link>
                {/*  */}
            </div>
        </div>
      </>
    );
};

export default BusinessIndex;
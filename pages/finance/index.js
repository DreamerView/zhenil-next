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
import seo from "../../translate/finance/index_seo";

const FinanceIndex = () => {
    const lang = useTranslateText();
    return(
        <>
            <Head>
                <title>{seo['title'][lang]}</title>
                <meta property="og:title" content={seo['title'][lang]} />
                <meta name="description" content={seo['description'][lang]} />
                <meta name="keywords" content={seo['keywords'][lang]} />
            </Head>
            <div className="main__nav block_animation">
                <p className="nav"><Link href="/"><b className="b_color">{nav_translate['home'][lang]}  /</b></Link>    {nav_translate["finance"][lang]}</p>
            </div>
            <div className="main block_animation">
            <h1 className="flex_text">{nav_translate["finance"][lang]} <div className="emoji_h1"><Image title={'Microsoft money bag emoji (Used for informational purposes only)'} priority src={"/emoji-small/money_bag.webp"} layout="fill" alt="emoji"/></div></h1>
            <p className="sub_content">{translate["step0_description"][lang]}</p>
            <div className={style.main__module_row}>
                {/*  */}
                <Link href="/finance/deposit">
                <a title={nav_translate['deposit_calc'][lang]}>
                <div className={`${style.main__module_row_block} anim_hover`}>
                    <div>
                        <div className={`${style.main__module_row_block_img}`}>
                            <Image title={nav_translate['deposit_calc'][lang]} priority alt="service" layout="fill" className={style.main__module_row_block_pic} src="/services/deposit.webp" placeholder="blur" blurDataURL="/services/deposit.webp"/>
                        </div>
                    </div>
                    <div className={style.main__module_row_block_f}>
                        <span className="head_1">{nav_translate['deposit_calc'][lang]}</span>
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

export default FinanceIndex;
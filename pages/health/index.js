import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import useTranslateText from "../translate";
import translate from "../../translate/acc/navbar_translate";
import text from "../../translate/acc/index_translate";
import style from "../../styles/constructor/index.module.css";
import nav_translate from "../../translate/services/all_translate";
import type_translate from "../../translate/services/type_translate";

const ConstructorIndex = () => {
    const lang = useTranslateText();
    return(
        <>
            <Head>
                <title>{nav_translate['health'][lang]} | Okki.kz</title>
                <meta property="og:title" content={`${nav_translate['health'][lang]} | Okki.kz`} />
                <meta name="description" content={text['seo_description'][lang]} />
            </Head>
            <div className="main__nav block_animation">
                <p className="nav"><Link href="/"><b className="b_color">{nav_translate['home'][lang]}  /</b></Link>    {nav_translate["health"][lang]}</p>
            </div>
            <div className="main block_animation">
            <h1 className="flex_text">{nav_translate["health"][lang]} <div className="emoji_h1"><Image priority src={"/emoji/heart.webp"} layout="fill" alt="emoji"/></div></h1>
            <p className="sub_content">{translate["step0_description"][lang]}</p>
            <div className={style.main__module_row}>
                {/*  */}
                <Link href="/health/bmi-calculator">
                <a>
                <div className={`${style.main__module_row_block} anim_hover`}>
                    <div className={`${style.main__module_row_block_img}`}>
                        <Image alt="service" priority layout="fill" className={style.main__module_row_block_pic} src="/services/bmi.webp"/>
                    </div>
                    <div className={style.main__module_row_block_f}>
                        <span className="head_1">{nav_translate['bmi_calc'][lang]}</span>
                        <p className={style.main__module_row_block_f_p}>{type_translate['services'][lang]}</p>
                    </div>
                </div>
                </a>
                </Link>
                <Link href="/health/ideal-weight">
                <a>
                <div className={`${style.main__module_row_block} anim_hover`}>
                    <div className={`${style.main__module_row_block_img}`}>
                        <Image alt="service" priority layout="fill" className={style.main__module_row_block_pic} src="/services/ideal-weight.webp"/>
                    </div>
                    <div className={style.main__module_row_block_f}>
                        <span className="head_1">{nav_translate['ideal_weight_calc'][lang]}</span>
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

export default ConstructorIndex;
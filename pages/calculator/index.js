import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import useTranslateText from "../translate";
import translate from "../../translate/acc/navbar_translate";
import text from "../../translate/acc/index_translate";
import style from "../../styles/constructor/index.module.css"

const ConstructorIndex = () => {
    const lang = useTranslateText();
    return(
        <>
            <Head>
                <title>{text['name'][lang]} | Okki.kz</title>
                <meta name="description" content={text['seo_description'][lang]} />
            </Head>
            <div className="main__nav block_animation">
                <p className="nav"><Link href="/"><b className="b_color">{translate['home'][lang]}  /</b></Link>    {translate["step0"][lang]}</p>
            </div>
            <div className="main block_animation">
            <h1 className="flex_text">{translate["step0"][lang]} <div className="emoji_h1"><Image priority src={"/icons/fire.webp"} layout="fill" alt="emoji"/></div></h1>
            <p className="sub_content">{translate["step0_description"][lang]}</p>
            <div className={style.main__module_row}>
                <Link href="/calculator/deposit">
                <a>
                <div className={`${style.main__module_row_block} anim_hover`}>
                    <div className={`${style.main__module_row_block_img}`}>
                        <Image alt="service" priority layout="fill" className={style.main__module_row_block_pic} src="/services/badge.svg"/>
                    </div>
                    <div className={style.main__module_row_block_f}>
                        <span className="head_1">Конструктор бейджиков/аккредитации</span>
                        <p className={style.main__module_row_block_f_p}>Сервис</p>
                    </div>
                </div>
                </a>
                </Link>
                <div className={`${style.main__module_row_block} anim_hover`}>
                    <div className={style.main__module_row_block_img}>
                        <Image alt="service" priority layout="fill" className={style.main__module_row_block_pic} src="/services/badge.svg"/>
                    </div>
                    <div className={style.main__module_row_block_f}>
                        <span className="head_1">Конструктор бейджиков/аккредитации</span>
                        <p className={style.main__module_row_block_f_p}>Сервис</p>
                    </div>
                </div>
                <div className={`${style.main__module_row_block} anim_hover`}>
                    <div className={style.main__module_row_block_img}>
                        <Image alt="service" priority layout="fill" className={style.main__module_row_block_pic} src="/services/badge.svg"/>
                    </div>
                    <div className={style.main__module_row_block_f}>
                        <span className="head_1">Конструктор бейджиков/аккредитации</span>
                        <p className={style.main__module_row_block_f_p}>Сервис</p>
                    </div>
                </div>
                <div className={`${style.main__module_row_block} anim_hover`}>
                    <div className={style.main__module_row_block_img}>
                        <Image alt="service" priority layout="fill" className={style.main__module_row_block_pic} src="/services/badge.svg"/>
                    </div>
                    <div className={style.main__module_row_block_f}>
                        <span className="head_1">Конструктор бейджиков/аккредитации</span>
                        <p className={style.main__module_row_block_f_p}>Сервис</p>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
};

export default ConstructorIndex;
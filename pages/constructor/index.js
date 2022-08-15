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
                <p className="nav"><Link href="/"><b className="b_color">{translate['home'][lang]}  /</b></Link>    {translate["step1"][lang]}</p>
            </div>
            <div className="main block_animation">
            <h1>Конструкторы <Image loading="lazy" src={"/icons/fire.webp"} width={22} height={22} alt="emoji"/></h1>
            <p className="sub_content">Все сервисы по категории конструкторы</p>
            <div className={style.main__module_row}>
                <Link href="/constructor/acc">
                <a>
                <div className={`${style.main__module_row_block} anim_hover`}>
                    <div className={`${style.main__module_row_block_img}`}>
                        <Image loading="lazy" width={60} height={60} className={style.main__module_row_block_pic} src="/services/badge.svg"/>
                    </div>
                    <div className={style.main__module_row_block_f}>
                        <h5>Конструктор бейджиков/аккредитации</h5>
                        <p className={style.main__module_row_block_f_p}>Сервис</p>
                    </div>
                </div>
                </a>
                </Link>
                <div className={`${style.main__module_row_block} anim_hover`}>
                    <div className={style.main__module_row_block_img}>
                        <Image loading="lazy" width={60} height={60} className={style.main__module_row_block_pic} src="/services/badge.svg"/>
                    </div>
                    <div className={style.main__module_row_block_f}>
                        <h5>Конструктор бейджиков/аккредитации</h5>
                        <p className={style.main__module_row_block_f_p}>Сервис</p>
                    </div>
                </div>
                <div className={`${style.main__module_row_block} anim_hover`}>
                    <div className={style.main__module_row_block_img}>
                        <Image loading="lazy" width={60} height={60} className={style.main__module_row_block_pic} src="/services/badge.svg"/>
                    </div>
                    <div className={style.main__module_row_block_f}>
                        <h5>Конструктор бейджиков/аккредитации</h5>
                        <p className={style.main__module_row_block_f_p}>Сервис</p>
                    </div>
                </div>
                <div className={`${style.main__module_row_block} anim_hover`}>
                    <div className={style.main__module_row_block_img}>
                        <Image loading="lazy" width={60} height={60} className={style.main__module_row_block_pic} src="/services/badge.svg"/>
                    </div>
                    <div className={style.main__module_row_block_f}>
                        <h5>Конструктор бейджиков/аккредитации</h5>
                        <p className={style.main__module_row_block_f_p}>Сервис</p>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
};

export default ConstructorIndex;
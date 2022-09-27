/*jshint esversion: 6 */
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import useTranslateText from "../../start/translate";
import translate from "../../translate/constructor/acc/navbar_translate";
import soon from "../../translate/seo_index";
import text from "../../translate/constructor/acc/index_translate";
// import style from "../../styles/constructor/index.module.css";
import nav_translate from "../../translate/services/all_translate";
// import type_translate from "../../translate/services/type_translate";

const BusinessIndex = () => {
    const lang = useTranslateText();
    return(
        <>
            <Head>
                <title>{nav_translate['others'][lang]} | Okki.kz</title>
                <meta property="og:title" content={`${nav_translate['others'][lang]} | Okki.kz`} />
                <meta name="description" content={text['seo_description'][lang]} />
            </Head>
            <div className="main__nav block_animation">
                <p className="nav"><Link prefetch={false} href="/"><b className="b_color">{nav_translate['home'][lang]}  /</b></Link>    {nav_translate["others"][lang]}</p>
            </div>
            <div className="page_not_found">
                <div className="page_not_found_block">
                    <div className="page_not_found_block_img">
                        <Image priority layout="fill" src="/emoji/cowboy_hat_face.webp" alt="not found" />
                    </div>
                    <h1 className="page_not_found">{nav_translate['others'][lang]}</h1>
                    <p className="page_not_found">{soon['soon1'][lang]} {soon['soon2'][lang]}</p>
                    <Link prefetch={false} href="/" className="page_not_found"><a className="page_not_found">{soon['soon3'][lang]}</a></Link>
                </div>
            </div>
      </>
    );
};

export default BusinessIndex;
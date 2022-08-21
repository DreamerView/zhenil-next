import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import useTranslateText from '../../translate';
import translate from "../../../translate/finance/deposit/navbar_translate";
import text from "../../../translate/finance/deposit/index_translate";
import style from "../../../styles/calculator/index.module.css";
import nav_translate from "../../../translate/services/all_translate";

const Deposit = () => {
    const lang = useTranslateText();
    return(
        <>
            <Head>
                <title>{nav_translate['deposit_calc'][lang]} | Okki.kz</title>
                <meta property="og:title" content={`${nav_translate['deposit_calc'][lang]} | Okki.kz`} />
            </Head>
            <div className="main__nav">
                <p className="nav"><Link href="/"><b className="b_color">{nav_translate['home'][lang]}  /</b></Link>  <Link href="/finance">{nav_translate['finance'][lang]}</Link>  /  {nav_translate['deposit_calc'][lang]}</p>
            </div>
            <div className="main">
                <h1 className="flex_text">{nav_translate["deposit_calc"][lang]} <div className="emoji_h1"><Image priority src={"/icons/fire.webp"} layout="fill" alt="emoji"/></div></h1>
                <p className="sub_content">{text["description"][lang]}</p>
                <div className={style.main__calc}>
                    
                    <div className={style.main__result}>
                        <h1>Результаты</h1>
                        <p className="sub_content">За 12 месяцев я накоплю</p>
                        <h1>2 572 242</h1>
                        <p className="sub_content">Собственные средства</p>
                        <h1>2 400 000</h1>
                        <p className="sub_content">Начисленные проценты</p>
                        <h1>172 242</h1>

                    </div>
                    {/*  */}
                    <div className={style.main__calculator}>
                        {/* <h2>{text["description"][lang]}</h2> */}
                        <div className={style.main__calculator_module}>
                            <p className="sub_content">Годовая эффективная ставка (%)</p>
                            <input type="text" className={`${style.main__calculator_module_input}`} placeholder="Введите ставку"/>
                        </div>
                        <div className={style.main__calculator_module}>
                            <p className="sub_content">Сумма депозита</p>
                            <input type="text" className={`${style.main__calculator_module_input}`} placeholder="Введите сумму"/>
                        </div>
                        <div className={style.main__calculator_module}>
                            <p className="sub_content">Срок депозита</p>
                            <select className={`${style.main__calculator_module_select}`}>
                                <option>1 мес.</option>
                                <option>3 мес.</option>
                                <option>6 мес.</option>
                                <option>9 мес.</option>
                                <option>12 мес.</option>
                            </select>
                        </div>
                        <div className={style.main__calculator_module}>
                            <p className="sub_content">Ежемесячное пополнение</p>
                            <input type="text" className={`${style.main__calculator_module_input}`} placeholder="Введите сумму"/>
                        </div>
                    </div>
                    {/*  */}
                </div>
            </div>
        </>
    );
}

export default Deposit;
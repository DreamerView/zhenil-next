/*jshint esversion: 6 */
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import useTranslateText from '../../../start/translate';
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
                {/* New added */}
                <div className={style.main__calc}>
                    
                    <div className={style.main__result}>
                        <h2>Результаты</h2>
                        <div className={style.module_result_row}>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji-small/money_bag.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>За 12 месяцев я накоплю</p>
                                    <h3>2 572 242</h3>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji-small/dollar.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>Собственные средства</p>
                                    <h3>2 400 000</h3>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji-small/money_bag.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>Начисленные проценты</p>
                                    <h3>172 242</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className={style.main__calculator}>
                        <h2>{nav_translate['calculator'][lang]}</h2>
                        <div className={style.module_result_row}>
                            <div className={style.main__calculator_m}>
                                <p className={style.description}>Годовая эффективная ставка (%)</p>
                                <div className={style.main__calculator_module}>
                                    <div>
                                        <div className={style.main__calculator_module_pic}>
                                            <Image priority src={"/emoji-small/bar_chart.webp"} layout="fill" alt="emoji"/>
                                        </div>
                                    </div>
                                    <input type="tel" pattern="[0-9]*"  placeholder="Годовая эффективная ставка (%)" className={`${style.main__calculator_module_input}`}/>
                                </div>
                            </div>
                            <div className={style.main__calculator_m}>
                                <p className={style.description}>Сумма депозита</p>
                                <div className={style.main__calculator_module}>
                                    <div>
                                        <div className={style.main__calculator_module_pic}>
                                            <Image priority src={"/emoji-small/dollar.webp"} layout="fill" alt="emoji"/>
                                        </div>
                                    </div>
                                    <input type="tel" pattern="[0-9]*"  placeholder="Сумма депозита" className={`${style.main__calculator_module_input}`}/>
                                </div>
                            </div>
                            <div className={style.main__calculator_m}>
                                <p className={style.description}>Срок депозита</p>
                                <div className={style.main__calculator_module}>
                                    <div>
                                        <div className={style.main__calculator_module_pic}>
                                            <Image priority src={"/emoji-small/aim.webp"} layout="fill" alt="emoji"/>
                                        </div>
                                    </div>
                                    <select className={`${style.main__calculator_module_select}`}>
                                        <option>1 мес.</option>
                                        <option>3 мес.</option>
                                        <option>6 мес.</option>
                                        <option>9 мес.</option>
                                        <option>12 мес.</option>
                                    </select>
                                </div>
                            </div>
                            <div className={style.main__calculator_m}>
                                <p className={style.description}>Ежемесячное пополнение</p>
                                <div className={style.main__calculator_module}>
                                    <div>
                                        <div className={style.main__calculator_module_pic}>
                                            <Image priority src={"/emoji-small/money_bag.webp"} layout="fill" alt="emoji"/>
                                        </div>
                                    </div>
                                    <input type="tel" pattern="[0-9]*"  placeholder="Ежемесячное пополнение" className={`${style.main__calculator_module_input}`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                </div>
            </div>
        </>
    );
}

export default Deposit;
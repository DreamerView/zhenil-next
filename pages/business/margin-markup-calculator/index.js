import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import useTranslateText from '../../translate';
// import translate from "../../../translate/finance/deposit/navbar_translate";
import text from "../../../translate/finance/deposit/index_translate";
import style from "../../../styles/calculator/index.module.css";
import nav_translate from "../../../translate/services/all_translate";
import { useEffect, useState } from 'react';

const MarginMarkup = () => {
    const [n1,setN1] = useState(0);
    const [n1Total,setN1Total] = useState(0);
    const [n2, setN2] = useState(0);
    const [delivery,setDelivery] = useState('');
    const [marketing,setMarketing] = useState('');
    const [other,setOther] = useState('');
    const [markUp,setMarkUp] = useState(0);
    const [marginPrice,setMargin] = useState(0);
    const [total,setTotal] = useState(0);
    const lang = useTranslateText();
    useEffect(()=>{
        if(n1!=''&&n2!='') {
            setN1Total((+n1+Number(delivery===''?0:delivery)+Number(marketing===''?0:marketing)+Number(other===''?0:other)))
            setMargin(Math.round((n2-(+n1+Number(delivery===''?0:delivery)+Number(marketing===''?0:marketing)+Number(other===''?0:other)))/n2*100));
            setMarkUp(Math.round((n2-(+n1+Number(delivery===''?0:delivery)+Number(marketing===''?0:marketing)+Number(other===''?0:other)))/n1*100));
            setTotal(n2-(+n1+Number(delivery===''?0:delivery)+Number(marketing===''?0:marketing)+Number(other===''?0:other)));
        }
    },[n1,n2,delivery,marketing,other]);
    return(
        <>
            <Head>
                <title>{nav_translate['margin_markup_calc'][lang]} | Okki.kz</title>
                <meta property="og:title" content={`${nav_translate['margin_markup_calc'][lang]} | Okki.kz`} />
            </Head>
            <div className="main__nav">
                <p className="nav"><Link href="/"><b className="b_color">{nav_translate['home'][lang]}  /</b></Link>  <Link href="/finance">{nav_translate['finance'][lang]}</Link>  /  {nav_translate['deposit_calc'][lang]}</p>
            </div>
            <div className="main">
                <h1>{nav_translate["margin_markup_calc"][lang]}</h1>
                <p className="sub_content">{text["description"][lang]}</p>
                <div className={style.main__calc}>
                    
                    <div className={style.main__result}>
                        <h1>Результаты</h1>
                        <div className={(delivery===''&&other===''&&marketing==='')?style.module_result_row:style.module_result_row_block}>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji/ledger.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>Себестоимость</p>
                                    <h2>{n1Total} ₸</h2>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji/dollar.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>Цена</p>
                                    <h2>{n2}₸</h2>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji/money_bag.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>Чистая прибыль</p>
                                    <h2 className={`${total===0?"":total>0?"green_font":"red_font"}`}>{total}₸</h2>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={`${marginPrice===0?"/emoji/bar_chart.webp":marginPrice>0?"/emoji/chart_increasing.webp":"/emoji/chart_decreasing.webp"}`} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>Маржа (Margin)</p>
                                    <h2 className={`${marginPrice===0?"":marginPrice>0?"green_font":"red_font"}`}>{marginPrice}%</h2>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={`${markUp===0?"/emoji/bar_chart.webp":markUp>0?"/emoji/chart_increasing.webp":"/emoji/chart_decreasing.webp"}`} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>Наценка (Markup)</p>
                                    <h2 className={`${markUp===0?"":markUp>0?"green_font":"red_font"}`}>{markUp}%</h2>
                                </div>
                            </div>
                        </div>
                        <h1 style={(delivery===''&&other===''&&marketing==='')?{display:'none'}:{display:'block'}} className="top_header">Дополнительно</h1>
                        <div className={style.module_result_row_block}>
                            <div style={delivery===''?{display:'none'}:{display:'flex'}} className={`${style.module_result_block} block_animation`}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji/package.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>Доставка</p>
                                    <h2>{delivery}₸</h2>
                                </div>
                            </div>
                            <div style={marketing===''?{display:'none'}:{display:'flex'}} className={`${style.module_result_block} block_animation`}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji/newspaper.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>Реклама</p>
                                    <h2>{marketing}₸</h2>
                                </div>
                            </div>
                            <div style={other===''?{display:'none'}:{display:'flex'}} className={`${style.module_result_block} block_animation`}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji/aim.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>Другое</p>
                                    <h2>{other}₸</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className={style.main__calculator}>
                        {/* <h2>{text["description"][lang]}</h2> */}
                        <h2>Калькулятор</h2>
                        <div className={style.module_result_row}>
                            <div className={style.main__calculator_module}>
                                <div>
                                    <div className={style.main__calculator_module_pic}>
                                        <Image priority src={"/emoji/ledger.webp"} layout="fill" alt="emoji"/>
                                    </div>
                                </div>
                                <div>
                                    <input type="tel" onChange={e=>setN1(e.target.value)} className={`${style.main__calculator_module_input}`} placeholder="Себестоимость"/>
                                </div>
                            </div>
                            <div className={style.main__calculator_module}>
                                <div>
                                    <div className={style.main__calculator_module_pic}>
                                        <Image priority src={"/emoji/dollar.webp"} layout="fill" alt="emoji"/>
                                    </div>
                                </div>
                                <div>
                                    <input type="tel" onChange={e=>setN2(e.target.value)} className={`${style.main__calculator_module_input}`} placeholder="Цена"/>
                                </div>
                            </div>
                        </div>
                        <h2>Дополнительно</h2>
                        <div className={style.module_result_row}>
                            <p className={`${style.click_event}`} style={delivery!==''?{display:'none'}:{display:'block',textAlign:'center'}} onClick={()=>{setDelivery(0)}}>+ Добавить пункт (Доставка)</p>
                            {delivery===''?"":
                            <div className={style.main__calculator_module}>
                                <div>
                                    <div className={style.main__calculator_module_pic}>
                                        <Image priority src={"/emoji/package.webp"} layout="fill" alt="emoji"/>
                                    </div>
                                </div>
                                <div>
                                    <input type="tel" onChange={e=>setDelivery(e.target.value)} className={`${style.main__calculator_module_input}`} placeholder="Доставка"/>
                                </div>
                            </div>
                            }
                            <p className={`${style.click_event}`} style={marketing!==''?{display:'none'}:{display:'block',textAlign:'center'}} onClick={()=>{setMarketing(0)}}>+ Добавить пункт (Реклама)</p>
                            {marketing===''?"":
                            <div className={style.main__calculator_module}>
                                <div>
                                    <div className={style.main__calculator_module_pic}>
                                        <Image priority src={"/emoji/newspaper.webp"} layout="fill" alt="emoji"/>
                                    </div>
                                </div>
                                <div>
                                    <input type="tel" onChange={e=>setMarketing(e.target.value)} className={`${style.main__calculator_module_input}`} placeholder="Реклама"/>
                                </div>
                            </div>
                            }
                            <p className={`${style.click_event}`} style={other!==''?{display:'none'}:{display:'block',textAlign:'center'}} onClick={()=>{setOther(0)}}>+ Добавить пункт (Другое)</p>
                            {other===''?"":
                            <div className={style.main__calculator_module}>
                                <div>
                                    <div className={style.main__calculator_module_pic}>
                                        <Image priority src={"/emoji/aim.webp"} layout="fill" alt="emoji"/>
                                    </div>
                                </div>
                                <div>
                                    <input type="tel" onChange={e=>setOther(e.target.value)} className={`${style.main__calculator_module_input}`} placeholder="Другое"/>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                    {/*  */}
                </div>
            </div>
        </>
    );
}

export default MarginMarkup;
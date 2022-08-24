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
                <h1 className="flex_text">{nav_translate["margin_markup_calc"][lang]} <div className="emoji_h1"><Image priority src={"/emoji/fire.webp"} layout="fill" alt="emoji"/></div></h1>
                <p className="sub_content">{text["description"][lang]}</p>
                <div className={style.main__calc}>
                    
                    <div className={style.main__result}>
                        <h1>Результаты</h1>
                        <div className={style.module_result_row}>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji/Writing-hand-skin-1.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>Себестоимость</p>
                                    <h2>{n1Total===0?n1:`${n1Total} ~(${n1})`} ₸</h2>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji/Check mark.svg"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>Цена</p>
                                    <h2>{n2} ₸</h2>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji/Smiling face with sunglasses.svg"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>Чистая прибыль</p>
                                    <h2>{total} ₸</h2>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji/High voltage.svg"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>Маржа (Margin)</p>
                                    <h2>{marginPrice}%</h2>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji/High voltage.svg"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>Наценка (Markup)</p>
                                    <h2>{markUp}%</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className={style.main__calculator}>
                        {/* <h2>{text["description"][lang]}</h2> */}
                        <div className={style.main__calculator_module}>
                            <p className="sub_content">Себестоимость</p>
                            <input type="tel" onChange={e=>setN1(e.target.value)} className={`${style.main__calculator_module_input}`} placeholder="Введите ставку"/>
                        </div>
                        <div className={style.main__calculator_module}>
                            <p className="sub_content">Цена</p>
                            <input type="tel" onChange={e=>setN2(e.target.value)} className={`${style.main__calculator_module_input}`} placeholder="Введите сумму"/>
                        </div>
                        <h2>Дополнительно</h2>
                        <div className={style.main__calculator_module}>
                            <p className="sub_content">Доставка</p>
                            <p className={`${style.click_event}`} style={delivery!==''?{display:'none'}:{display:'block'}} onClick={()=>{setDelivery(0)}}>+ Добавить пункт доставки</p>
                            <input style={delivery===''?{display:'none'}:{display:'block'}} type="tel" onChange={e=>setDelivery(e.target.value)} className={`${style.main__calculator_module_input}`} placeholder="Введите сумму"/>
                        </div>
                        <div className={style.main__calculator_module}>
                            <p className="sub_content">Реклама и маркетинг</p>
                            <p className={`${style.click_event}`} style={marketing!==''?{display:'none'}:{display:'block'}} onClick={()=>{setMarketing(0)}}>+ Добавить пункт реклама и маркетинг</p>
                            <input style={marketing===''?{display:'none'}:{display:'block'}} type="tel" onChange={e=>setMarketing(e.target.value)} className={`${style.main__calculator_module_input}`} placeholder="Введите сумму"/>
                        </div>
                        <div className={style.main__calculator_module}>
                            <p className="sub_content">Другое</p>
                            <p className={`${style.click_event}`} style={other!==''?{display:'none'}:{display:'block'}} onClick={()=>{setOther(0)}}>+ Добавить пункт</p>
                            <input style={other===''?{display:'none'}:{display:'block'}} type="tel" onChange={e=>setOther(e.target.value)} className={`${style.main__calculator_module_input}`} placeholder="Введите сумму"/>
                        </div>
                    </div>
                    {/*  */}
                </div>
            </div>
        </>
    );
}

export default MarginMarkup;
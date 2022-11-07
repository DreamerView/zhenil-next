/*jshint esversion: 6 */
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import useTranslateText from '/start/translate';
import translate from "/translate/business/margin-markup-calculator/index_translate";
import style from "/styles/calculator/index.module.css";
import nav_translate from "/translate/services/all_translate";
import { useEffect, useState } from 'react';
import NavbarApp from '/pages/navbar_app/nav';

const MarginMarkup = () => {
    const [n1,setN1] = useState('');
    const [n1Total,setN1Total] = useState(0);
    const [n2, setN2] = useState('');
    const [delivery,setDelivery] = useState('not');
    const [marketing,setMarketing] = useState('not');
    const [other,setOther] = useState('not');
    const [markUp,setMarkUp] = useState('');
    const [marginPrice,setMargin] = useState('');
    const [total,setTotal] = useState('');
    const [nds,setNDS] = useState('not');
    const [nds_total,setNDSTotal] = useState();
    const lang = useTranslateText();
    useEffect(()=>{
        setN1(Math.round((1-(marginPrice/100))*n2));
    },[marginPrice,n2]);
    useEffect(()=>{
        setN1Total((+n1+Number(delivery==='not'?0:delivery)+Number(marketing==='not'?0:marketing)+Number(other==='not'?0:other)));
        if(n1Total!=''&&n2!='') {
            setMarkUp(Math.round((n2-n1Total)/n1*100));
            setTotal(Math.round(n2-n1Total));
            setNDSTotal(+n2+(Number(n2*Number(nds==='not'?0:nds))/100));
        } else {
            setMarkUp(0);
            setTotal(0);
            setNDSTotal(+n2+(Number(n2*Number(nds==='not'?0:nds))/100));
        }
    },[n1,n2,markUp,delivery,marketing,other,n1Total,nds]);
    return(
        <>
            <Head>
                <title>{translate['markup_prime_calc'][lang]} | Okki.kz</title>
                <meta property="og:title" content={`${translate['markup_prime_calc'][lang]} | Okki.kz`} />
            </Head>
            <div className="main block_animation">
                <NavbarApp to={{href:"/business"}} choice="alone"/>
                <h1>{translate["markup_prime_calc"][lang]}</h1>
                <p className="sub_content">{translate['content'][lang]}</p>
                <div className={style.nav__block_menu}>
                    <Link prefetch={false} href="/business/margin-markup-calculator">
                        <a className='block_background'>
                            {translate['margin_markup_calc'][lang]}
                        </a>
                    </Link>
                    <Link prefetch={false} href="/business/margin-cost-calculator">
                        <a className='block_background'>
                            {translate['margin_cost_calc'][lang]}
                        </a>
                    </Link>
                    <Link prefetch={false} href="/business/markup-prime-calculator">
                        <a className='red_background white_font'>
                            {translate['markup_prime_calc'][lang]}
                        </a>
                    </Link>
                </div>
                <div className={style.main__calc}>
                    
                    <div className={style.main__result}>
                        <h2>{translate['results'][lang]}</h2>
                        <div className={(delivery==='not'&&other==='not'&&marketing==='not'&&nds==='not')?style.module_result_row:style.module_result_row_block}>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji-small/ledger.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>{translate['prime_cost'][lang]}</p>
                                    <h3>{n1Total} ₸</h3>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji-small/dollar.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>{translate['cost'][lang]}</p>
                                    <h3>{n2}₸</h3>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji-small/money_bag.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>{translate['net_profit'][lang]}</p>
                                    <h3 className={`${total===0?"":total>0?"green_font":"red_font"}`}>{total}₸</h3>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={`${marginPrice===0?"/emoji-small/bar_chart.webp":marginPrice>0?"/emoji-small/chart_increasing.webp":"/emoji-small/chart_decreasing.webp"}`} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>{translate['margin'][lang]}</p>
                                    <h3 className={`${marginPrice===0?"":marginPrice>0?"green_font":"red_font"}`}>{marginPrice}%</h3>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={`${markUp===0?"/emoji-small/bar_chart.webp":markUp>0?"/emoji-small/chart_increasing.webp":"/emoji-small/chart_decreasing.webp"}`} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>{translate['markup'][lang]}</p>
                                    <h3 className={`${markUp===0?"":markUp>0?"green_font":"red_font"}`}>{markUp}%</h3>
                                </div>
                            </div>
                        </div>
                        <h2 style={(delivery==='not'&&other==='not'&&marketing==='not'&&nds==='not')?{display:'none'}:{display:'block'}} className="top_header">{translate['extra'][lang]}</h2>
                        <div className={style.module_result_row_block}>
                            <div style={nds==='not'?{display:'none'}:{display:'flex'}} className={`${style.module_result_block} block_animation`}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji-small/spiral_notepad.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>{translate['with_nds'][lang]}</p>
                                    <h3>{nds_total} <span className='sup'>({nds}%)</span> ₸</h3>
                                </div>
                            </div>
                            <div style={delivery==='not'?{display:'none'}:{display:'flex'}} className={`${style.module_result_block} block_animation`}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji-small/package.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>{translate['delivery'][lang]}</p>
                                    <h3>{delivery}₸</h3>
                                </div>
                            </div>
                            <div style={marketing==='not'?{display:'none'}:{display:'flex'}} className={`${style.module_result_block} block_animation`}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji-small/newspaper.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>{translate['ads'][lang]}</p>
                                    <h3>{marketing}₸</h3>
                                </div>
                            </div>
                            <div style={other==='not'?{display:'none'}:{display:'flex'}} className={`${style.module_result_block} block_animation`}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji-small/aim.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>{translate['other'][lang]}</p>
                                    <h3>{other}₸</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className={style.main__calculator}>
                        <h2>{nav_translate['calculator'][lang]}</h2>
                        <div className={style.module_result_row}>
                            <div className={style.main__calculator_m}>
                                <p className={style.description}>{translate['margin'][lang]}</p>
                                <div className={style.main__calculator_module}>
                                    <div>
                                        <div className={style.main__calculator_module_pic}>
                                            <Image priority src={"/emoji-small/infinity.webp"} layout="fill" alt="emoji"/>
                                        </div>
                                    </div>
                                    <input type="tel" pattern="[0-9,.]*" onChange={(e)=>{setMargin((v) => (e.target.validity.valid ? e.target.value : v).replace(/,/g, "."))}} value={marginPrice} className={`${style.main__calculator_module_input}`} placeholder={translate['margin'][lang]}/>
                                    {marginPrice!==''?
                                    <div className={style.main__calculator_module_close} onClick={()=>{setMargin('')}}>
                                        <div className={style.main__calculator_module_close_img}>
                                            <Image layout='fill' alt="icon" src="/img/close.svg"/>
                                        </div>
                                    </div>:""}
                                </div>
                            </div>
                            <div className={style.main__calculator_m}>
                                <p className={style.description}>{translate['cost'][lang]}</p>
                                <div className={style.main__calculator_module}>
                                    <div>
                                        <div className={style.main__calculator_module_pic}>
                                            <Image priority src={"/emoji-small/dollar.webp"} layout="fill" alt="emoji"/>
                                        </div>
                                    </div>
                                    <input type="tel" pattern="[0-9,.]*" onChange={(e)=>{setN2((v) => (e.target.validity.valid ? e.target.value : v).replace(/,/g, "."))}} value={n2} className={`${style.main__calculator_module_input}`} placeholder={translate['cost'][lang]}/>
                                    {n2!==''?
                                    <div className={style.main__calculator_module_close} onClick={()=>{setN2('')}}>
                                        <div className={style.main__calculator_module_close_img}>
                                            <Image layout='fill' alt="icon" src="/img/close.svg"/>
                                        </div>
                                    </div>:""}
                                </div>
                            </div>
                        </div>
                        <h2>{translate['extra'][lang]}</h2>
                        <div className={style.module_result_row}>
                            <p className={`${style.click_event}`} style={nds!=='not'?{display:'none'}:{display:'block',textAlign:'center'}} onClick={()=>{setNDS('')}}>+ {translate['ad'][lang]} ({translate['nds'][lang]})</p>
                            {nds==='not'?"":
                            <div className={`${style.main__calculator_m} ${nds=='close'?'remove_animation':'block_animation'}`}>
                            <p className={style.description}>{translate['nds'][lang]}</p>
                                <div className={style.main__calculator_module}>
                                    <div>
                                        <div className={style.main__calculator_module_pic}>
                                            <Image priority src={"/emoji-small/spiral_notepad.webp"} layout="fill" alt="emoji"/>
                                        </div>
                                    </div>
                                    <input type="tel" pattern="[0-9,.]*" onChange={(e)=>{setNDS((v) => (e.target.validity.valid ? e.target.value : v).replace(/,/g, "."))}} value={nds} className={`${style.main__calculator_module_input}`} placeholder={translate['nds'][lang]}/>
                                    {nds!=='not'?
                                    nds!==''?
                                    <div className={style.main__calculator_module_close} onClick={()=>{setNDS('')}}>
                                        <div className={style.main__calculator_module_close_img}>
                                            <Image layout='fill' alt="icon" src="/img/close.svg"/>
                                        </div>
                                    </div>:
                                    <div className={style.main__calculator_module_close} onClick={()=>{setNDS('close');setTimeout(()=>setNDS('not'),[200])}}>
                                        <div className={style.main__calculator_module_close_img}>
                                            <Image layout='fill' alt="icon" src="/img/delete.svg"/>
                                        </div>
                                    </div>
                                    :""}
                                </div>
                            </div>
                            }
                            <p className={`${style.click_event}`} style={delivery!=='not'?{display:'none'}:{display:'block',textAlign:'center'}} onClick={()=>{setDelivery('')}}>+ {translate['ad'][lang]} ({translate['delivery'][lang]})</p>
                            {delivery==='not'?"":
                            <div className={`${style.main__calculator_m} ${delivery==='close'?'remove_animation':'block_animation'}`}>
                            <p className={style.description}>{translate['delivery'][lang]}</p>
                                <div className={style.main__calculator_module}>
                                    <div>
                                        <div className={style.main__calculator_module_pic}>
                                            <Image priority src={"/emoji-small/package.webp"} layout="fill" alt="emoji"/>
                                        </div>
                                    </div>
                                    <input type="tel" pattern="[0-9,.]*" onChange={(e)=>{setDelivery((v) => (e.target.validity.valid ? e.target.value : v).replace(/,/g, "."))}} value={delivery} className={`${style.main__calculator_module_input}`} placeholder={translate['delivery'][lang]}/>
                                    {delivery!=='not'?
                                    delivery!==''?
                                    <div className={style.main__calculator_module_close} onClick={()=>{setDelivery('')}}>
                                        <div className={style.main__calculator_module_close_img}>
                                            <Image layout='fill' alt="icon" src="/img/close.svg"/>
                                        </div>
                                    </div>:
                                    <div className={style.main__calculator_module_close} onClick={()=>{setDelivery('close');setTimeout(()=>setDelivery('not'),[200])}}>
                                        <div className={style.main__calculator_module_close_img}>
                                            <Image layout='fill' alt="icon" src="/img/delete.svg"/>
                                        </div>
                                    </div>
                                    :""}
                                </div>
                            </div>
                            }
                            <p className={`${style.click_event}`} style={marketing!=='not'?{display:'none'}:{display:'block',textAlign:'center'}} onClick={()=>{setMarketing('')}}>+ {translate['ad'][lang]} ({translate['ads'][lang]})</p>
                            {marketing==='not'?"":
                            <div className={`${style.main__calculator_m} ${marketing==='close'?'remove_animation':'block_animation'}`}>
                            <p className={style.description}>{translate['ads'][lang]}</p>
                                <div className={style.main__calculator_module}>
                                    <div>
                                        <div className={style.main__calculator_module_pic}>
                                            <Image priority src={"/emoji-small/newspaper.webp"} layout="fill" alt="emoji"/>
                                        </div>
                                    </div>
                                    <input type="tel" pattern="[0-9,.]*" onChange={(e)=>{setMarketing((v) => (e.target.validity.valid ? e.target.value : v).replace(/,/g, "."))}} value={marketing} className={`${style.main__calculator_module_input}`} placeholder={translate['ads'][lang]}/>
                                    {marketing!=='not'?
                                    marketing!==''?
                                    <div className={style.main__calculator_module_close} onClick={()=>{setMarketing('')}}>
                                        <div className={style.main__calculator_module_close_img}>
                                            <Image layout='fill' alt="icon" src="/img/close.svg"/>
                                        </div>
                                    </div>:
                                    <div className={style.main__calculator_module_close} onClick={()=>{setMarketing('close');setTimeout(()=>setMarketing('not'),[200])}}>
                                        <div className={style.main__calculator_module_close_img}>
                                            <Image layout='fill' alt="icon" src="/img/delete.svg"/>
                                        </div>
                                    </div>
                                    :""}
                                </div>
                            </div>
                            }
                            <p className={`${style.click_event}`} style={other!=='not'?{display:'none'}:{display:'block',textAlign:'center'}} onClick={()=>{setOther('')}}>+ {translate['ad'][lang]} ({translate['other'][lang]})</p>
                            {other==='not'?"":
                            <div className={`${style.main__calculator_m} ${other==='close'?'remove_animation':'block_animation'}`}>
                            <p className={style.description}>{translate['other'][lang]}</p>
                                <div className={style.main__calculator_module}>
                                    <div>
                                        <div className={style.main__calculator_module_pic}>
                                            <Image priority src={"/emoji-small/aim.webp"} layout="fill" alt="emoji"/>
                                        </div>
                                    </div>
                                    <input type="tel" pattern="[0-9,.]*" onChange={(e)=>{setOther((v) => (e.target.validity.valid ? e.target.value : v).replace(/,/g, "."))}} value={other} className={`${style.main__calculator_module_input}`} placeholder={translate['other'][lang]}/>
                                    {other!=='not'?
                                    other!==''?
                                    <div className={style.main__calculator_module_close} onClick={()=>{setOther('')}}>
                                        <div className={style.main__calculator_module_close_img}>
                                            <Image layout='fill' alt="icon" src="/img/close.svg"/>
                                        </div>
                                    </div>:
                                    <div className={style.main__calculator_module_close} onClick={()=>{setOther('close');setTimeout(()=>setOther('not'),[200])}}>
                                        <div className={style.main__calculator_module_close_img}>
                                            <Image layout='fill' alt="icon" src="/img/delete.svg"/>
                                        </div>
                                    </div>
                                    :""}
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
/*jshint esversion: 6 */
import Image from 'next/image';
import Head from 'next/head';
import useTranslateText from '/start/translate';
import text from "/translate/finance/deposit/index_translate";
import style from "/styles/calculator/index.module.css";
import nav_translate from "/translate/services/all_translate";
import NavbarApp from '/pages/navbar_app/nav';
import {useState,useEffect,useCallback} from 'react';

const Deposit = () => {
    const lang = useTranslateText();
    const [bet,setBet] = useState(0);
    const [sum,setSum] = useState(0);
    const [term,setTerm] = useState('not');
    const [every,setEvery] = useState(0);
    const [percent,setPercent] = useState(0);
    const [own,setOwn] = useState(0);
    const [total,setTotal] = useState(0);
    const [result,setResult] = useState([{}]);
    const getMonthName = useCallback((e) => {
        let MonthNumber;
        switch((e+1)) {
            case 1: MonthNumber =text.jan[lang]; break;
            case 2: MonthNumber =text.feb[lang]; break;
            case 3: MonthNumber =text.march[lang]; break;
            case 4: MonthNumber =text.april[lang]; break;
            case 5: MonthNumber =text.may[lang]; break;
            case 6: MonthNumber =text.june[lang]; break;
            case 7: MonthNumber =text.july[lang]; break;
            case 8: MonthNumber =text.aug[lang]; break;
            case 9: MonthNumber =text.sep[lang]; break;
            case 10: MonthNumber =text.oct[lang]; break;
            case 11: MonthNumber =text.nov[lang]; break;
            case 12: MonthNumber =text.dec[lang]; break;
        }
        return MonthNumber;
    },[lang]);
    useEffect(()=>{
        if(bet!==0 && term!=='not' && sum!==0) {
            let b;
            const daysInMonth = (e) => {
                const date = Date.now();
                let s=0;
                for(let i=1;i<=e;i++) {
                    let c = date+((2629743*1000)*i)
                    let m = new Date(c).getMonth();
                    let y = new Date(c).getFullYear();
                    s+=new Date(y,m+1,0).getDate()
                }
                return s;
            }
            switch(true) {
                case term === 1: b=daysInMonth(1);break;
                case term === 3: b=daysInMonth(3);break;
                case term === 6: b=daysInMonth(6);break;
                case term === 9: b=daysInMonth(9);break;
                case term === 12: b = daysInMonth(12); break;
                default: b=1;
            }
            const NewResult = (e,check) => {
                let w=[];
                const date = Date.now();
                for(let i=1;i<=e;i++) {
                    let c = date+((2629743*1000)*i)
                    let m = new Date(c).getMonth();
                    let y = new Date(c).getFullYear();
                    let s=getMonthName(m)+" "+new Date(y,m+1,0).getFullYear();

                    let p = check===1?((Number(own)*Number(bet)*Number(Number(daysInMonth(i))/365))/100).toFixed(0):(((Number(own))*Number(bet/2)*(Number(daysInMonth(i))/365))/100).toFixed(0);
                    let o = check===1?Number(sum)+Number(p):Number((Number(every)*Number(i-1))+Number(sum))+Number(p);
                    w.push({percent:p,own:o,index:s});
                }
                setResult(w);
            }
            if(every===0||every===""||term===1) {
                setOwn(Number(sum));
                setPercent(((Number(own)*Number(bet)*Number(Number(b)/365))/100).toFixed(0));
                NewResult(term,1)
            }
            else {
                setOwn(Number((Number(every)*Number(term-1))+Number(sum)));
                setPercent((((Number(own))*Number(bet/2)*(Number(b)/365))/100).toFixed(0));
                NewResult(term,0)
            }
            setTotal(Number(percent)+Number(own));
        }
    },[bet,term,sum,percent,every,own])
    console.log(result);
    return(
        <>
            <Head>
                <title>{nav_translate['deposit_calc'][lang]} | Okki.kz</title>
                <meta property="og:title" content={`${nav_translate['deposit_calc'][lang]} | Okki.kz`} />
            </Head>
            <NavbarApp to={[{key:'finance',location:'/finance'},{key:'deposit_calc',path:'last'}]}/>
            <div className="main block_animation">
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
                                    <p className={style.module_result_block_desc}>За {term} месяцев я накоплю</p>
                                    <h3>{total}</h3>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji-small/dollar.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>Собственные средства</p>
                                    <h3>{own}</h3>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji-small/money_bag.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>Начисленные проценты</p>
                                    <h3>{percent}</h3>
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
                                    <input type="tel" pattern="[0-9]*"  placeholder="Годовая эффективная ставка (%)" className={`${style.main__calculator_module_input}`} onChange={e=>setBet(e.target.value)}/>
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
                                    <input type="tel" pattern="[0-9]*"  placeholder="Сумма депозита" className={`${style.main__calculator_module_input}`} onChange={e=>setSum(e.target.value)}/>
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
                                    <select onChange={e=>setTerm(Number(e.target.value))} className={`${style.main__calculator_module_select}`}>
                                        <option value="not">Выберите</option>
                                        <option value="1">1 мес.</option>
                                        <option value="3">3 мес.</option>
                                        <option value="6">6 мес.</option>
                                        <option value="9">9 мес.</option>
                                        <option value="12">12 мес.</option>
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
                                    <input type="tel" onChange={e=>setEvery(e.target.value)} pattern="[0-9]*"  placeholder="Ежемесячное пополнение" className={`${style.main__calculator_module_input}`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                </div>
                {bet!==0 && term!=='not' && sum!==0?
                <>
                <div className={style.head}>
                        <h1>График начислений</h1>
                    </div>
                <div className={style.calc__table}>
                    <div className={style.calc__table_header}>
                        <div>
                            <h5>Месяц</h5>
                        </div>
                        <div>
                            <h5>Начисленные проценты</h5>
                        </div>
                        <div>
                            <h5 className='green_font'>Общая сумма</h5>
                        </div>
                    </div>
                    {result.map((e,index)=> e == [{}]?"":
                        index%2===0?
                        <div className={`${style.calc__table_content} block_background`}>
                        <div><h4>{e.index}</h4></div><div><h4>{e.percent} ₸</h4></div><div><h4 className='green_font'>{e.own} ₸</h4></div>
                        </div>:<div className={style.calc__table_content}>
                        <div><h4>{e.index}</h4></div><div><h4>{e.percent} ₸</h4></div><div><h4 className='green_font'>{e.own} ₸</h4></div>
                        </div>
                    )}
                </div></>:""}
            </div>
        </>
    );
}

export default Deposit;
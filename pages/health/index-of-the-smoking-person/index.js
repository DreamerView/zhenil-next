/*jshint esversion: 6 */
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import {useState,useEffect} from 'react';
import useTranslateText from '../../../start/translate';
import text from "../../../translate/finance/deposit/index_translate";
import style from "../../../styles/calculator/index.module.css";
import nav_translate from "../../../translate/services/all_translate";

const Deposit = () => {
    const lang = useTranslateText();
    const [num,setNum] = useState('');
    const [exp,setExp] = useState('');
    const [result,setResult] = useState(0);
    const [alert,setAlert] = useState({text:'Неизвестно',color:''});
    useEffect(()=>{
        if(num !=='' && exp !=='') {
            setResult((num*exp)/20);
        };
        let s = result.toFixed(0);
        if(s>=1&&s<=9) setAlert({text:'Нормально',color:'green_font'});
        //Развития хронической обструктивной болезни легких
        else if (s>=10) setAlert({text:'Развития болезни ХОБЛ',color:'red_font'});
        else setAlert({text:'Неизвестно',color:''});
    },[num,exp,result]);
    return(
        <>
            <Head>
                <title>{nav_translate['index_of_the_smoking_person'][lang]} | Okki.kz</title>
                <meta property="og:title" content={`${nav_translate['index_of_the_smoking_person'][lang]} | Okki.kz`} />
            </Head>
            <div className="main__nav">
                <p className="nav"><Link href="/" prefetch={false}><b className="b_color">{nav_translate['home'][lang]}  /</b></Link>  <Link href="/health" prefetch={false}>{nav_translate['health'][lang]}</Link>  /  {nav_translate['index_of_the_smoking_person'][lang]}</p>
            </div>
            <div className="main">
                <h1 className="flex_text">{nav_translate['index_of_the_smoking_person'][lang]}<div className="emoji_h1"><Image priority src={"/emoji-small/cigarette.webp"} layout="fill" alt="emoji"/></div></h1>
                <p className="sub_content">Рассчитайте индекс курящего человека в несколько кликов.</p>
                {/* New added */}
                <div className={style.main__calc}>
                    
                    <div className={style.main__result}>
                        <h2>Результаты</h2>
                        <div className={style.module_result_row}>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji-small/calendar.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>Стаж курения (в годах)</p>
                                    <h3>{exp===''?0:exp}</h3>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji-small/bookmark.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>Индекс курящего человека</p>
                                    <h3>{result}</h3>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji-small/microscope.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>Результат</p>
                                    <h3 className={alert?alert.color:''}>{alert?alert.text:''}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className={style.main__calculator}>
                        <h2>{nav_translate['calculator'][lang]}</h2>
                        <div className={style.module_result_row}>
                            <div className={style.main__calculator_m}>
                                <p className={style.description}>Сколько сигарет вы курите в день?</p>
                                <div className={style.main__calculator_module}>
                                    <div>
                                        <div className={style.main__calculator_module_pic}>
                                            <Image priority src={"/emoji-small/cigarette.webp"} layout="fill" alt="emoji"/>
                                        </div>
                                    </div>
                                    <input type="tel" pattern="[0-9,.]*" onChange={(e)=>{setNum((v) => (e.target.validity.valid ? e.target.value : v).replace(/,/g, "."))}} placeholder="Введите данные" className={`${style.main__calculator_module_input}`} value={num}/>
                                </div>
                            </div>
                            <div className={style.main__calculator_m}>
                                <p className={style.description}>Стаж курения (в годах)</p>
                                <div className={style.main__calculator_module}>
                                    <div>
                                        <div className={style.main__calculator_module_pic}>
                                            <Image priority src={"/emoji-small/calendar.webp"} layout="fill" alt="emoji"/>
                                        </div>
                                    </div>
                                    <input type="tel" pattern="[0-9,.]*" onChange={(e)=>{setExp((v) => (e.target.validity.valid ? e.target.value : v).replace(/,/g, "."))}} placeholder="Введите данные" className={`${style.main__calculator_module_input}`} value={exp}/>
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
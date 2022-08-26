import { useState,useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import useTranslateText from '../../translate';
import text from "../../../translate/health/ideal-weight/index_translate";
import style from "../../../styles/calculator/index.module.css";
import nav_text from "../../../translate/services/all_translate";

const Deposit = () => {
    const lang = useTranslateText();
    const [male,setMale] = useState('other');
    const [maleText,setMaleText] = useState(text['other'][lang]);
    const [n1,setN1] = useState('');
    const [n1text,setN1text] = useState('');
    const [result,setResult] = useState(0);
    useEffect(()=>{
        if(male==='male') n1!='0'&&n1!=''?setResult(Math.round((n1-100)*1.15)):setResult(text['loading'][lang]);
        else if(male==='female') n1!='0'&&n1!=''?setResult(Math.round((n1-110)*1.15)):setResult(text['loading'][lang]);
        else setResult(text['loading'][lang]);
        switch(male) {
            case 'male': setMaleText(text['male'][lang]);break;
            case 'female': setMaleText(text['female'][lang]);break;
            case 'other': setMaleText(text['other'][lang]);break;
        }
    },[n1,male,lang]);
    useEffect(()=>{
        n1==='' ? setN1text(0): setN1text(n1);
    },[n1])
    return(
        <>
            <Head>
                <title>{nav_text['ideal_weight_calc'][lang]} | Okki.kz</title>
                <meta property="og:title" content={`${nav_text['ideal_weight_calc'][lang]} | Okki.kz`} />
            </Head>
            <div className="main__nav">
                <p className="nav"><Link href="/"><b className="b_color">{nav_text['home'][lang]}  /</b></Link>  <Link href="/health">{nav_text['health'][lang]}</Link>  /  {nav_text['ideal_weight_calc'][lang]}</p>
            </div>
            <div className="main">
                <h1>{nav_text['ideal_weight_calc'][lang]}</h1>
                <p className="sub_content">{text['desc'][lang]}</p>
                {/* New added */}
                <div className={style.main__calc}>
                    
                    <div className={style.main__result}>
                        <h2>{text['results'][lang]}</h2>
                        <div className={style.module_result_row}>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={male==='other'?"/emoji/restroom.webp":male==='male'?"/emoji/man_raising_hand.webp":"/emoji/woman_raising_hand.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>{text['male_selected'][lang]}</p>
                                    <h3>{maleText}</h3>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={male==='other'?"/emoji/restroom.webp":male==='male'?"/emoji/man_standing.webp":"/emoji/woman_standing.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>{text['h_selected'][lang]}</p>
                                    <h2>{n1text}</h2>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={male==='other'?"/emoji/restroom.webp":male==='male'?"/emoji/man_gesturing_ok.webp":"/emoji/woman_gesturing_ok.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>{text['result'][lang]}</p>
                                    <h3>{result}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className={style.main__calculator}>
                        <h2>{nav_text['calculator'][lang]}</h2>
                        <div className={style.module_result_row}>
                            <div className={style.main__calculator_m}>
                                <p className={style.description}></p>
                                <div className={style.main__calculator_module}>
                                    <div>
                                        <div className={style.main__calculator_module_pic}>
                                            <Image priority src={male==='other'?"/emoji/restroom.webp":male==='male'?"/emoji/man_raising_hand.webp":"/emoji/woman_raising_hand.webp"} layout="fill" alt="emoji"/>
                                        </div>
                                    </div>
                                    <select onChange={(e)=>{setMale(e.target.value)}} className={`${style.main__calculator_module_select}`}>
                                        <option value="other">{text['other'][lang]}</option>
                                        <option value="male">{text['male'][lang]}</option>
                                        <option value="female">{text['female'][lang]}</option>
                                    </select>
                                </div>
                            </div>
                            <div className={style.main__calculator_m} style={male==='other'?{opacity:'0.5'}:{opacity:'1'}}>
                                <p className={style.description}>{text['h_text'][lang]}</p>
                                <div className={style.main__calculator_module}>
                                    <div>
                                        <div className={style.main__calculator_module_pic}>
                                            <Image priority src={male==='other'?"/emoji/restroom.webp":male==='male'?"/emoji/man_standing.webp":"/emoji/woman_standing.webp"} layout="fill" alt="emoji"/>
                                        </div>
                                    </div>
                                    <input type="tel" pattern="[0-9]*" onChange={(e)=>{setN1((v) => (e.target.validity.valid ? e.target.value : v))}} value={n1} placeholder={text['enter'][lang]} className={`${style.main__calculator_module_input}`} disabled={male==='other'?true:false}/>
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
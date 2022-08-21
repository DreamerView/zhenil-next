import { useState,useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import useTranslateText from '../../translate';
import text from "../../../translate/health/ideal-weight/index_translate";
import style from "../../../styles/calculator/index.module.css";
import nav_translate from "../../../translate/services/all_translate";

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
                <title>{nav_translate['ideal_weight_calc'][lang]} | Okki.kz</title>
            </Head>
            <div className="main__nav">
                <p className="nav"><Link href="/"><b className="b_color">{nav_translate['home'][lang]}  /</b></Link>  <Link href="/health">{nav_translate['health'][lang]}</Link>  /  {nav_translate['ideal_weight_calc'][lang]}</p>
            </div>
            <div className="main">
                <h1>{nav_translate['ideal_weight_calc'][lang]}</h1>
                <p className="sub_content">{text['desc'][lang]}</p>
                <div className={style.main__calc}>
                    
                    <div className={style.main__result}>
                        <h1>{text['results'][lang]}</h1>
                        <p className="sub_content">{text['male_selected'][lang]}</p>
                        <h2>{maleText}</h2>
                        <p className="sub_content">{text['h_selected'][lang]}</p>
                        <h2>{n1text}</h2>
                        <p className="sub_content">{text['result'][lang]}</p>
                        <h2>{result}</h2>

                    </div>
                    {/*  */}
                    <div className={style.main__calculator}>
                        {/* <h2>{text["description"][lang]}</h2> */}
                        <div className={style.main__calculator_module}>
                            <p className="sub_content">{text['male_choose'][lang]}</p>
                            <select onChange={e=>setMale(e.target.value)} className={`${style.main__calculator_module_select}`}>
                                <option value="other">{text['other'][lang]}</option>
                                <option value="male">{text['male'][lang]}</option>
                                <option value="female">{text['female'][lang]}</option>
                            </select>
                        </div>
                        <div className={style.main__calculator_module}>
                            <p className="sub_content">{text['h_text'][lang]}</p>
                            <input type="tel" pattern="[0-9]*" onChange={(e)=>{setN1((v) => (e.target.validity.valid ? e.target.value : v))}} value={n1} className={`${style.main__calculator_module_input}`} placeholder={text['enter'][lang]}/>
                        </div>
                    </div>
                    {/*  */}
                </div>
            </div>
        </>
    );
}

export default Deposit;
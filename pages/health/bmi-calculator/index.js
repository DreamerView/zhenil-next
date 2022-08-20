import Link from 'next/link';
import Head from 'next/head';
import useTranslateText from '../../translate';
import translate from "../../../translate/health/bmi_calculator/index_translate";
import text from "../../../translate/finance/deposit/index_translate";
import style from "../../../styles/calculator/index.module.css"
import {useEffect,useState,useRef} from "react";
import setBmiApi from './api';
import nav_translate from "../../../translate/services/all_translate";

const Health = () => {
    const lang = useTranslateText();
    const [n1,setN1] = useState(0);
    const [n2,setN2] = useState(0);
    const [result,setResult] = useState(0);
    const [check,setCheck] = useState(translate['loading'][lang]);
    const [age,setAge] = useState(0);
    const [male,setMale] = useState('other');
    const [show,setShow] = useState({});
    const i1 = useRef();
    const i2 = useRef();
    const i3 = useRef();
    const s = setBmiApi(male,age,n1,n2);
    useEffect(()=>{
        setShow(JSON.parse(s));
        console.log(s);
    },[s]);
    useEffect(()=>{
        setCheck(translate['loading'][lang]);
        setResult(0);
        setN1(0);
        setN2(0);
        i1.current.value='';
        i2.current.value='';
    },[male,age,lang]);
    useEffect(()=>{
        setAge(0);
        i3.current.value='';
    },[male]);
    
    return(
        <>
            <Head>
                <title>{translate['step1'][lang]} | Okki.kz</title>
            </Head>
            <div className="main__nav">
                <p className="nav"><Link href="/"><b className="b_color">{nav_translate['home'][lang]}  /</b></Link>  <Link href="/health">{nav_translate['health'][lang]}</Link>  /  {nav_translate['bmi_calc'][lang]}</p>
            </div>
            <div className="main">
                <h1>{translate['step1'][lang]}</h1>
                <p className="sub_content">{translate['desctiption'][lang]}</p>
                <div className={style.main__calc}>
                    
                    <div className={style.main__result}>
                        <h1>{translate['results'][lang]}</h1>
                        <p className="sub_content">{translate['male_text'][lang]}</p>
                        <h1>{show.maleText}</h1>
                        <p className="sub_content">{translate['age'][lang]}</p>
                        <h1>{show.age}</h1>
                        <p className="sub_content">{translate['bmi_result'][lang]}</p>
                        <h1>{show.res}</h1>
                        <p className="sub_content">{translate['result'][lang]}</p>
                        <h1 className={`${show.color}_font`}>{show.check}</h1>

                    </div>
                    {/*  */}
                    <div className={style.main__calculator}>
                        <h2>{translate['desc_calc'][lang]}</h2>
                        <div className={style.main__calculator_module}>
                            <p className="sub_content">{translate['male_choose'][lang]}</p>
                            <select onChange={(e)=>{setMale(e.target.value)}} className={`${style.main__calculator_module_select}`}>
                                <option value="other">{translate['male_result_other'][lang]}</option>
                                <option value="male">{translate['male_result_male'][lang]}</option>
                                <option value="female">{translate['male_result_female'][lang]}</option>
                            </select>
                        </div>
                        <div className={style.main__calculator_module}>
                            <p className="sub_content">{translate['age'][lang]}</p>
                            <input ref={i3} type="number" onChange={(e)=>{setAge(e.target.value)}} className={`${style.main__calculator_module_input}`} placeholder={translate['enter'][lang]}/>
                        </div>
                        <div className={style.main__calculator_module}>
                            <p className="sub_content">{translate['m_text'][lang]}</p>
                            <input ref={i1} type="number" onChange={(e)=>{setN1(e.target.value);}} className={`${style.main__calculator_module_input}`} placeholder={translate['enter'][lang]}/>
                        </div>
                        <div className={style.main__calculator_module}>
                            <p className="sub_content">{translate['h_text'][lang]}</p>
                            <input ref={i2} type="number" onChange={(e)=>{setN2(e.target.value/100);}} className={`${style.main__calculator_module_input}`} placeholder={translate['enter'][lang]}/>
                        </div>
                    </div>
                    {/*  */}
                </div>
            </div>
        </>
    );
}

export default Health;
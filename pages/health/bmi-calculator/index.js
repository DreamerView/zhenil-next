import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import useTranslateText from '../../../start/translate';
import translate from "../../../translate/health/bmi_calculator/index_translate";
import style from "../../../styles/calculator/index.module.css"
import {useEffect,useState,useRef} from "react";
import setBmiApi from './api';
import nav_translate from "../../../translate/services/all_translate";

const Health = () => {
    const lang = useTranslateText();
    const [n1,setN1] = useState('');
    const [n2,setN2] = useState('');
    const [age,setAge] = useState('');
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
        setN1('');
        setN2('');
        i1.current.value='';
        i2.current.value='';
    },[male,age,lang]);
    useEffect(()=>{
        setAge('');
        i3.current.value='';
    },[male]);
    return(
        <>
            <Head>
                <title>{translate['step1'][lang]} | Okki.kz</title>
                <meta property="og:title" content={`${translate['step1'][lang]} | Okki.kz`} />
            </Head>
            <div className="main__nav">
                <p className="nav"><Link href="/"><b className="b_color">{nav_translate['home'][lang]}  /</b></Link>  <Link href="/health">{nav_translate['health'][lang]}</Link>  /  {nav_translate['bmi_calc'][lang]}</p>
            </div>
            <div className="main">
                <h1>{translate['step1'][lang]}</h1>
                <p className="sub_content">{translate['desctiption'][lang]}</p>
                {/* New added */}
                <div className={style.main__calc}>
                    
                    <div className={style.main__result}>
                        <h2>{translate['results'][lang]}</h2>
                        <div className={style.module_result_row}>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={male==='other'?"/emoji-small/restroom.webp":male==='male'?"/emoji-small/man_raising_hand.webp":"/emoji-small/woman_raising_hand.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>{translate['male_text'][lang]}</p>
                                    <h3>{show.maleText}</h3>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji-small/thought_balloon.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>{translate['age'][lang]}</p>
                                    <h2>{show.age}</h2>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji-small/magnifying_glass_tilted_right_3d.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>{translate['bmi_result'][lang]}</p>
                                    <h3>{show.res}</h3>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={show.color===undefined?"/emoji-small/white_question_mark.webp":show.color==='green'?"/emoji-small/check_mark_button.webp":"/emoji-small/double_exclamation_mark.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>{translate['result'][lang]}</p>
                                    <h3 className={`${show.color}_font`}>{show.check}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className={style.main__calculator}>
                        <h2>{nav_translate['calculator'][lang]}</h2>
                        <div className={style.module_result_row}>
                            <div className={style.main__calculator_m}>
                                <p className={style.description}>{translate['male_choose'][lang]}</p>
                                <div className={style.main__calculator_module}>
                                    <div>
                                        <div className={style.main__calculator_module_pic}>
                                            <Image priority src={male==='other'?"/emoji-small/restroom.webp":male==='male'?"/emoji-small/man_raising_hand.webp":"/emoji-small/woman_raising_hand.webp"} layout="fill" alt="emoji"/>
                                        </div>
                                    </div>
                                    <select onChange={(e)=>{setMale(e.target.value)}} className={`${style.main__calculator_module_select}`}>
                                        <option value="other">{translate['male_result_other'][lang]}</option>
                                        <option value="male">{translate['male_result_male'][lang]}</option>
                                        <option value="female">{translate['male_result_female'][lang]}</option>
                                    </select>
                                </div>
                            </div>
                            <div className={style.main__calculator_m} style={male==='other'?{opacity:'0.5'}:{opacity:'1'}}>
                                <p className={style.description}>{translate['age'][lang]}</p>
                                <div className={style.main__calculator_module}>
                                    <div>
                                        <div className={style.main__calculator_module_pic}>
                                            <Image priority src={"/emoji-small/thought_balloon.webp"} layout="fill" alt="emoji"/>
                                        </div>
                                    </div>
                                    <input ref={i3} type="tel" pattern="[0-9]*" onChange={(e)=>{setAge((v) => (e.target.validity.valid ? e.target.value : v))}} value={age} className={`${style.main__calculator_module_input}`} placeholder={translate['age'][lang]} disabled={male==='other'?true:false}/>
                                </div>
                            </div>
                            <div className={style.main__calculator_m} style={male==='other'?{opacity:'0.5'}:{opacity:'1'}}>
                                <p className={style.description}>{translate['h_text'][lang]}</p>
                                <div className={style.main__calculator_module}>
                                    <div>
                                        <div className={style.main__calculator_module_pic}>
                                            <Image priority src={male==='other'?"/emoji-small/restroom.webp":male==='male'?"/emoji-small/man_standing.webp":"/emoji-small/woman_standing.webp"} layout="fill" alt="emoji"/>
                                        </div>
                                    </div>
                                    <input ref={i2} type="tel" pattern="[0-9]*" onChange={(e)=>{setN2((v) => (e.target.validity.valid ? e.target.value : v))}} value={n2} className={`${style.main__calculator_module_input}`} placeholder={translate['h_text'][lang]} disabled={male==='other'?true:false}/>
                                </div>
                            </div>
                            <div className={style.main__calculator_m} style={male==='other'?{opacity:'0.5'}:{opacity:'1'}}>
                                <p className={style.description}>{translate['m_text'][lang]}</p>
                                <div className={style.main__calculator_module}>
                                    <div>
                                        <div className={style.main__calculator_module_pic}>
                                            <Image priority src={male==='other'?"/emoji-small/restroom.webp":male==='male'?"/emoji-small/man_gesturing_ok.webp":"/emoji-small/woman_gesturing_ok.webp"} layout="fill" alt="emoji"/>
                                        </div>
                                    </div>
                                    <input ref={i1} type="tel" pattern="[0-9]*" onChange={(e)=>{setN1((v) => (e.target.validity.valid ? e.target.value : v))}} value={n1} className={`${style.main__calculator_module_input}`} placeholder={translate['m_text'][lang]} disabled={male==='other'?true:false}/>
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

export default Health;
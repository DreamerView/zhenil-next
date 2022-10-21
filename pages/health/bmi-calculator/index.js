/*jshint esversion: 6 */
import Head from 'next/head';
import Image from 'next/image';
import useTranslateText from '/start/translate';
import translate from "/translate/health/bmi_calculator/index_translate";
import style from "/styles/calculator/index.module.css";
import {useEffect,useState,useRef} from "react";
import setBmiApi from '/pages/health/bmi-calculator/api';
import NavbarApp from '/pages/navbar_app/nav';


const BMICalc = () => {
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
            <NavbarApp to={[{key:'health',location:'/health',path:''},{key:'bmi_calc',path:'last'}]}/>
            <div className="main block_animation">
                <h1>{translate['step1'][lang]}</h1>
                <p className="sub_content">{translate['desctiption'][lang]}</p>
                {/* New added */}
                {}
                <div className={style.main__calc}>
                    
                    <div className={style.main__result}>
                        <h2>{translate['results'][lang]}</h2>
                        <div className={style.module_result_row}>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={male==='other'?"/emoji/restroom.webp":male==='male'?"/emoji/man_raising_hand.webp":"/emoji/woman_raising_hand.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>{translate['male_text'][lang]}</p>
                                    <h3>{show.maleText}</h3>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji/thought_balloon.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>{translate['age'][lang]}</p>
                                    <h3>{show.age}</h3>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={"/emoji/magnifying_glass_tilted_right_3d.webp"} layout="fill" alt="emoji"/>
                                </div>
                                <div>
                                    <p className={style.module_result_block_desc}>{translate['bmi_result'][lang]}</p>
                                    <h3>{show.res}</h3>
                                </div>
                            </div>
                            <div className={style.module_result_block}>
                                <div className={style.module_result_block_pic}>
                                    <Image priority src={show.color===undefined?"/emoji/white_question_mark.webp":show.color==='green'?"/emoji/check_mark_button.webp":"/emoji/double_exclamation_mark.webp"} layout="fill" alt="emoji"/>
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
                        <h2>{translate['calc'][lang]}</h2>
                        <div className={style.module_result_row}>
                            <div className={style.main__calculator_m}>
                                <p className={style.description}>{translate['male_choose'][lang]}</p>
                                <div className={style.main__calculator_module}>
                                    <div>
                                        <div className={style.main__calculator_module_pic}>
                                            <Image priority src={male==='other'?"/emoji/restroom.webp":male==='male'?"/emoji/man_raising_hand.webp":"/emoji/woman_raising_hand.webp"} layout="fill" alt="emoji"/>
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
                                            <Image priority src={"/emoji/thought_balloon.webp"} layout="fill" alt="emoji"/>
                                        </div>
                                    </div>
                                    <input ref={i3} type="tel" pattern="[0-9,.]*" onChange={(e)=>{setAge((v) => (e.target.validity.valid ? e.target.value : v).replace(/,/g, "."))}} value={age} className={`${style.main__calculator_module_input}`} placeholder={translate['age'][lang]} disabled={male==='other'?true:false}/>
                                    {age!==''?
                                    <div className={style.main__calculator_module_close} onClick={()=>{setAge('')}}>
                                        <div className={style.main__calculator_module_close_img}>
                                            <Image layout='fill' alt="icon" src="/img/close.svg"/>
                                        </div>
                                    </div>:""}
                                </div>
                            </div>
                            <div className={style.main__calculator_m} style={male==='other'?{opacity:'0.5'}:{opacity:'1'}}>
                                <p className={style.description}>{translate['h_text'][lang]}</p>
                                <div className={style.main__calculator_module}>
                                    <div>
                                        <div className={style.main__calculator_module_pic}>
                                            <Image priority src={male==='other'?"/emoji/restroom.webp":male==='male'?"/emoji/man_standing.webp":"/emoji/woman_standing.webp"} layout="fill" alt="emoji"/>
                                        </div>
                                    </div>
                                    <input ref={i2} type="tel" pattern="[0-9,.]*" onChange={(e)=>{setN2((v) => (e.target.validity.valid ? e.target.value : v).replace(/,/g, "."))}} value={n2} className={`${style.main__calculator_module_input}`} placeholder={translate['h_text'][lang]} disabled={male==='other'?true:false}/>
                                    {n2!==''?
                                    <div className={style.main__calculator_module_close} onClick={()=>{setN2('')}}>
                                        <div className={style.main__calculator_module_close_img}>
                                            <Image layout='fill' alt="icon" src="/img/close.svg"/>
                                        </div>
                                    </div>:""}
                                </div>
                            </div>
                            <div className={style.main__calculator_m} style={male==='other'?{opacity:'0.5'}:{opacity:'1'}}>
                                <p className={style.description}>{translate['m_text'][lang]}</p>
                                <div className={style.main__calculator_module}>
                                    <div>
                                        <div className={style.main__calculator_module_pic}>
                                            <Image priority src={male==='other'?"/emoji/restroom.webp":male==='male'?"/emoji/man_gesturing_ok.webp":"/emoji/woman_gesturing_ok.webp"} layout="fill" alt="emoji"/>
                                        </div>
                                    </div>
                                    <input ref={i1} type="tel" pattern="[0-9,.]*" onChange={(e)=>{setN1((v) => (e.target.validity.valid ? e.target.value : v).replace(/,/g, "."))}} value={n1} className={`${style.main__calculator_module_input}`} placeholder={translate['m_text'][lang]} disabled={male==='other'?true:false}/>
                                    {n1!==''?
                                    <div className={style.main__calculator_module_close} onClick={()=>{setN1('')}}>
                                        <div className={style.main__calculator_module_close_img}>
                                            <Image layout='fill' alt="icon" src="/img/close.svg"/>
                                        </div>
                                    </div>:""}
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

export default BMICalc;
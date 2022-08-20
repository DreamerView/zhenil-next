import Link from 'next/link';
import useTranslateText from '../../translate';
import translate from "../../../translate/calculator/deposit/navbar_translate";
import text from "../../../translate/calculator/deposit/index_translate";
import style from "../../../styles/calculator/index.module.css"
import {useEffect,useState,useRef} from "react";
import setBmiApi from './api';

const Health = () => {
    const lang = useTranslateText();
    const [n1,setN1] = useState(0);
    const [n2,setN2] = useState(0);
    const [result,setResult] = useState(0);
    const [check,setCheck] = useState("Ожидаем результатов");
    const [age,setAge] = useState(0);
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
        setCheck('Ожидаем результатов');
        setResult(0);
        setN1(0);
        setN2(0);
        i1.current.value='';
        i2.current.value='';
    },[male,age]);
    useEffect(()=>{
        setAge(0);
        i3.current.value='';
    },[male]);
    
    return(
        <>
            <div className="main__nav">
                <p className="nav"><Link href="/"><b className="b_color">{translate['home'][lang]}  /</b></Link>  <Link href="/calculator">{translate['step0'][lang]}</Link>  /  {translate['step1'][lang]}</p>
            </div>
            <div className="main">
                <h1>ИМТ калькулятор (Взрослый)</h1>
                <p className="sub_content">Чтобы провести расчет индекса массы тела, введите данные в поля калькулятора ИМТ:</p>
                <div className={style.main__calc}>
                    
                    <div className={style.main__result}>
                        <h1>Результаты</h1>
                        <p className="sub_content">Ваш пол:</p>
                        <h1>{show.maleText}</h1>
                        <p className="sub_content">Ваш возраст</p>
                        <h1>{show.age}</h1>
                        <p className="sub_content">Ваш индекс массы тела (ИМТ) равен:</p>
                        <h1>{show.res}</h1>
                        <p className="sub_content">Результат</p>
                        <h1 className={`${show.color}_font`}>{show.check}</h1>

                    </div>
                    {/*  */}
                    <div className={style.main__calculator}>
                        <h2>Введите ваши параметры для расчета индекса массы тела</h2>
                        <div className={style.main__calculator_module}>
                            <p className="sub_content">Выберите пол</p>
                            <select onChange={(e)=>{setMale(e.target.value)}} className={`${style.main__calculator_module_select}`}>
                                <option value="other">Выберите ваш пол</option>
                                <option value="male">Мужчина</option>
                                <option value="female">Женщина</option>
                            </select>
                        </div>
                        <div className={style.main__calculator_module}>
                            <p className="sub_content">Ваш возраст</p>
                            <input ref={i3} type="number" onChange={(e)=>{setAge(e.target.value)}} className={`${style.main__calculator_module_input}`} placeholder="Введите сумму"/>
                        </div>
                        <div className={style.main__calculator_module}>
                            <p className="sub_content">Вес, кг (кг):</p>
                            <input ref={i1} type="number" onChange={(e)=>{setN1(e.target.value);}} className={`${style.main__calculator_module_input}`} placeholder="Введите значение"/>
                        </div>
                        <div className={style.main__calculator_module}>
                            <p className="sub_content">Рост, см (см):</p>
                            <input ref={i2} type="number" onChange={(e)=>{setN2(e.target.value/100);}} className={`${style.main__calculator_module_input}`} placeholder="Введите значение"/>
                        </div>
                    </div>
                    {/*  */}
                </div>
            </div>
        </>
    );
}

export default Health;
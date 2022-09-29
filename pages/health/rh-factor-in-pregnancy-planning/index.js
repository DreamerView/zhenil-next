import Image from "next/image";
import {useState,useEffect} from 'react';
import style from "../../../styles/health/rh-factor-in-pregnancy-planning/index.module.css";
const RhFactorInPregnancyPlanning = () => {
    const [manRh,setManRh] = useState('I');
    const [womanRh,setWomanRh] = useState('I'); 
    const [result,setResult] = useState('');
    const [manSymbol,setManSymbol] = useState('+');
    const [womanSymbol,setWomanSymbol] = useState('+');
    const [symbol,setSymbol] = useState('')
    useEffect(()=>{
        switch(true) {
            case manSymbol==='+'&&womanSymbol==='+': setSymbol('Rh+');break;
            case manSymbol==='+'&&womanSymbol==='-': setSymbol('50% плюс, 50% минус');break;
            case manSymbol==='-'&&womanSymbol==='+': setSymbol('50% плюс, 50% минус');break;
            case manSymbol==='-'&&womanSymbol==='-': setSymbol('минус');break;
        }
        switch(true) {
            case manRh==='I'&&womanRh==='I':setResult('нет');break;
            case manRh==='I'&&womanRh==='II':setResult('нет');break;
            case manRh==='I'&&womanRh==='III':setResult('нет');break;
            case manRh==='I'&&womanRh==='IV':setResult('нет');break;
            case manRh==='II'&&womanRh==='I':setResult('50% вероятность конфликта');break;
            case manRh==='II'&&womanRh==='II':setResult('нет');break;
            case manRh==='II'&&womanRh==='III':setResult('25% вероятность конфликта');break;
            case manRh==='II'&&womanRh==='IV':setResult('нет');break;
            case manRh==='III'&&womanRh==='I':setResult('50% вероятность конфликта');break;
            case manRh==='III'&&womanRh==='II':setResult('50% вероятность конфликта');break;
            case manRh==='III'&&womanRh==='III':setResult('нет');break;
            case manRh==='III'&&womanRh==='IV':setResult('нет');break;
            case manRh==='IV'&&womanRh==='I':setResult('100% вероятность конфликта');break;
            case manRh==='IV'&&womanRh==='II':setResult('66% вероятность конфликта');break;
            case manRh==='IV'&&womanRh==='III':setResult('66% вероятность конфликта');break;
            case manRh==='IV'&&womanRh==='IV':setResult('нет');break;
        }
    })
    return(
        <>
            <div className="main">
                <h1>Резус фактор при планировании семьи</h1>
                <p className="sub_content">Укажите группа крови</p>
                <div>
                    <div className={style.comparitive__block}>
                        <div className={style.comparitive__block_row}>
                            <div className={style.comparitive__block_row_image}>
                                <Image src="/emoji-small/man_raising_hand.webp" layout="fill" alt="emoji"/>
                            </div>
                            <div className={style.comparitive__block_row_flex}>
                                <h1>Rh</h1>
                                <select onChange={e=>setManRh(e.target.value)} className={style.comparitive__block_row_select}>
                                    <option value="I">I</option>
                                    <option value="II">II</option>
                                    <option value="III">III</option>
                                    <option value="IV">IV</option>
                                </select>
                                <select onChange={e=>setManSymbol(e.target.value)} className={style.comparitive__block_row_select}>
                                    <option value="+">+</option>
                                    <option value="-">-</option>
                                </select>
                            </div>
                        </div>
                        <div className={style.comparitive__block_row}>
                            <div className={style.comparitive__block_row_image}>
                                <Image src="/emoji-small/woman_raising_hand.webp" layout="fill" alt="emoji"/>
                            </div>
                            <div className={style.comparitive__block_row_flex}>
                                <h1>Rh</h1>
                                <select onChange={e=>setWomanRh(e.target.value)} className={style.comparitive__block_row_select}>
                                    <option value="I">I</option>
                                    <option value="II">II</option>
                                    <option value="III">III</option>
                                    <option value="IV">IV</option>
                                </select>
                                <select onChange={e=>setWomanSymbol(e.target.value)} className={style.comparitive__block_row_select}>
                                    <option value="+">+</option>
                                    <option value="-">-</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <h1>{symbol}</h1>
                <h1>Вероятность конфликта: {result}</h1>
            </div>
        </>
    )
}

export default RhFactorInPregnancyPlanning;
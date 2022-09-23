import { useState,useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import nav_text from "../../../translate/services/all_translate";
import setTranslateText from '../../../start/translate';
import style from "../../../styles/health/index.module.css";

const PregnancyCalendar = ()=>{
    const lang = setTranslateText();
    const [date,setDate] = useState(0);
    const [result,setResult] = useState({date:'Ожидаем',month:'результатов',year:''});
    const [ownWeek,setWeek] = useState('0');
    const [timePregrant,setTimePregnant] = useState('0');
    console.log(date);
    useEffect(()=>{
        // var myDate = "24-09-2021";
        if(date!==0) {
            let MonthNumber;
            let d = Date.now();
            let myDate = date;
            myDate = myDate.toString().split("-");
            let newDate = new Date( myDate[0], myDate[1], myDate[2]);
            const convert = (604800*1000)*40;
            const results = newDate.getTime()+convert;
            console.log('Convert: '+convert);
            console.log('New Date: '+newDate.getTime());
            console.log(results);
            let calendar = new Date(results);
            let solve = (d-newDate.getTime())/(604800*1000);
            console.log("s "+d+' d '+newDate.getTime());
            switch(calendar.getMonth()) {
                case 1: MonthNumber ='января'; break;
                case 2: MonthNumber ='февраля'; break;
                case 3: MonthNumber ='марта'; break;
                case 4: MonthNumber ='апреля'; break;
                case 5: MonthNumber ='мая'; break;
                case 6: MonthNumber ='июня'; break;
                case 7: MonthNumber ='июля'; break;
                case 8: MonthNumber ='августа'; break;
                case 9: MonthNumber ='сентября'; break;
                case 10: MonthNumber ='октября'; break;
                case 11: MonthNumber ='ноября'; break;
                case 12: MonthNumber ='декабря'; break;
            }
            setResult({date:calendar.getDate(),month:MonthNumber,year:calendar.getFullYear()});
            setWeek(solve.toFixed(0)<=0?'Неизвестно':solve.toFixed(0));
            let week = solve.toFixed(0);
            
            if(week>=1 && week<=4) setTimePregnant('1-4 неделя');
            else if(week>=5 && week<=8) setTimePregnant('5-8 неделя');
            else if(week>=9 && week<=12) setTimePregnant('9-12 неделя');
            else if(week>=13 && week<=16) setTimePregnant('13-16 неделя');
            else if(week>=17 && week<=20) setTimePregnant('17-20 неделя');
            else if(week>=21 && week<=24) setTimePregnant('21-24 неделя');
            else if(week>=25 && week<=28) setTimePregnant('25-28 неделя');
            else if(week>=29 && week<=32) setTimePregnant('29-32 неделя');
            else if(week>=33 && week<=36) setTimePregnant('33-36 неделя');
            else if(week>=37 && week<=40) setTimePregnant('37-40 неделя');
            else if(week>=40) setTimePregnant('Больше 40 недель');
            else setTimePregnant('Неизвестно');
        }
    },[date])
    return(
        <>
            <div className="main__nav">
                <p className="nav"><Link href="/"><b className="b_color">{nav_text['home'][lang]}  /</b></Link>  <Link href="/health">{nav_text['health'][lang]}</Link>  /  {nav_text['ideal_weight_calc'][lang]}</p>
            </div>
            <div className="main">
                <h1 className={style.header}>Календарь беременности</h1>
                <p className={`${style.headers} sub_content`}>Укажите 1-й день последнего периода месячных</p>
                <div className={style.date_block}>
                    <input type='date' onChange={e=>setDate(e.target.value)} className={style.date}/>
                </div>
                <div className={style.calendar_row}>
                    <div className={style.calendar_block}>
                        <div className={style.calendar_block_emoji}>
                            <Image priority layout="fill" alt="emoji" src="/emoji-small/breast_feeding.webp"/>
                        </div>
                        <div>
                            <p>Вероятная дата рождения</p>
                            <h4>{result.date} {result.month} {result.year}</h4>
                        </div>
                    </div>
                    <div className={style.calendar_block}>
                        <div className={style.calendar_block_emoji}>
                            <Image priority layout="fill" alt="emoji" src="/emoji-small/calendar.webp"/>
                        </div>
                        <div>
                            <p>Неделя</p>
                            <h4>{ownWeek}</h4>
                        </div>
                    </div>
                    <div className={style.calendar_block}>
                        <div className={style.calendar_block_emoji}>
                            <Image priority layout="fill" alt="emoji" src="/emoji-small/hourglass_not_done.webp"/>
                        </div>
                        <div>
                            <p>Течение беременности</p>
                            <h4>{timePregrant}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PregnancyCalendar;
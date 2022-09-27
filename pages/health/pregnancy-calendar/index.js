import { useState,useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import nav_text from "../../../translate/services/all_translate";
import setTranslateText from '../../../start/translate';
import style from "../../../styles/health/index.module.css";

const PregnancyCalendar = ()=>{
    const lang = setTranslateText();
    const [date,setDate] = useState(0);
    const [result,setResult] = useState({date:'Ожидаем',month:'результатов',year:''});
    const [ownWeek,setWeek] = useState('0');
    const [timePregrant,setTimePregnant] = useState('0');
    const [weeks,setWeeks] = useState([{}]);
    const [full,setFull] = useState('not');
    const getMonthName = (e) => {
        let MonthNumber;
        switch((e+1)) {
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
        return MonthNumber;
    };
    useEffect(()=>{
        if(date!==0) {
            let today = Date.now();
            let myDate = date;
            myDate = myDate.toString().split("-");
            let newDate = new Date( myDate[0], myDate[1]-1, myDate[2]);
            const convert = (604800*1000)*40;
            const results = newDate.getTime()+convert;
            let calendar = new Date(results);
            let solve = parseInt((today-newDate.getTime())/(604800*1000));
            setResult({date:calendar.getDate(),month:getMonthName(calendar.getMonth()),year:calendar.getFullYear()});
            setWeek(solve<=0?'Неизвестно':solve);
            let week = solve;

            switch(true) {
                case (week>=1 && week<=4): setTimePregnant('1-4 неделя'); break;
                case (week>=5 && week<=8): setTimePregnant('5-8 неделя'); break;
                case (week>=9 && week<=12): setTimePregnant('9-12 неделя'); break;
                case (week>=13 && week<=16): setTimePregnant('13-16 неделя'); break;
                case (week>=17 && week<=20): setTimePregnant('17-20 неделя'); break;
                case (week>=21 && week<=24): setTimePregnant('21-24 неделя'); break;
                case (week>=25 && week<=28): setTimePregnant('25-28 неделя'); break;
                case (week>=29 && week<=32): setTimePregnant('29-32 неделя'); break;
                case (week>=33 && week<=36): setTimePregnant('33-36 неделя'); break;
                case (week>=37 && week<=40): setTimePregnant('37-40 неделя'); break;
                case (week>=40): setTimePregnant('Больше 40 недель'); break;
                default: setTimePregnant('Неизвестно'); break;    
            }
        }
    },[date])
    useEffect(()=>{
        if(date!==0) {
            const findDays = (num,e) => {
                let number = num;
                let alert = (num===4||num===8||num===12||num===16)?'red':'default';
                let weekStart = e;
                let weekEnd = e+(86400*1000*6);
                let weekStartDay = new Date(weekStart);
                let weekEndDay = new Date(weekEnd);
                let resultWeekStart = weekStartDay.getDate()+' '+getMonthName(weekStartDay.getMonth())+' '+weekStartDay.getFullYear();
                let resultWeekEnd = weekEndDay.getDate()+' '+getMonthName(weekEndDay.getMonth())+' '+weekEndDay.getFullYear();
                return {number,weekStart,weekEnd,resultWeekStart,resultWeekEnd,alert}
            }
            var w = [];
            for(let i=0;i<=42;i++) {
                let myDate = date;
                myDate = myDate.toString().split("-");
                let day = new Date( myDate[0], myDate[1]-1, myDate[2]);
                let days = day.getTime()+(604800*1000*i);
                let c = new Date(days);
                w.push(findDays(i,days));
            }
            setWeeks(w);
        }
    },[date])
    // useEffect(()=>{
    //     setDate('2021-09-24')
    // },[])
    return(
        <>
            <Head>
                <title>{nav_text['pregnancy_calendar'][lang]} | Okki.kz</title>
                <meta property="og:title" content={`${nav_text['pregnancy_calendar'][lang]} | Okki.kz`} />
            </Head>
            <div className="main__nav">
                <p className="nav"><Link href="/" prefetch={false}><b className="b_color">{nav_text['home'][lang]}  /</b></Link>  <Link href="/health" prefetch={false}>{nav_text['health'][lang]}</Link>  /  {nav_text['pregnancy_calendar'][lang]}</p>
            </div>
            <div className="main">
                <h1 className={style.header}>{nav_text['pregnancy_calendar'][lang]}</h1>
                <p className={`${style.headers} sub_content`}>Укажите 1-й день последнего периода месячных</p>
                <div className={style.date_block}>
                    <input type="date" placeholder="Введите дату"  onChange={e=>setDate(e.target.value)} className={style.date} required/>
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
                {date!==0?
                <>
                <h1 className={style.head}>Все дни недели беременности</h1>
                <div className={full==='not'?style.not__full:''}>
                    {weeks.map(result=> result == [{}]?"":
                        <div className={`${style.calendar__planner}`} key={result.number}>
                            <div className={`${style.calendar__day}`}>
                                <div className={`${result.alert==='red'?'red_background white_font':''}`}>
                                    <h1>{result.number}</h1>
                                    <p>неделя</p>
                                </div>
                            </div>
                            <div className={style.calendar__block}>
                                <div className={`${style.calendar__block_row} ${result.alert==='red'?'red_background white_font':'block_background'}`}>
                                    <p>Дни недели беременности</p>
                                    <h4>C {result.resultWeekStart} по {result.resultWeekEnd}</h4>
                                </div>
                                {result.alert==='red'?
                                <div className={`${style.calendar__block_row} blue_background white_font`}>
                                    <p>Осторожно!!!</p>
                                    <h4>Срок повышенной вероятности к выкидышу</h4>
                                </div>
                                :""
                                }
                                {result.number===40?
                                <div className={`${style.calendar__block_row} green_background white_font`}>
                                    <p>Поздравляем</p>
                                    <h4>Проект Okki.kz поздравляет вас с рождением ребенка на свет!</h4>
                                </div>
                                :""
                                }
                                {(result.number>=4 && result.number<=16)?
                                <div className={`${style.calendar__block_row} orange_background white_font`}>
                                    <p>Будьте бдительны</p>
                                    <h4>Период возможного выкидыша</h4>
                                </div>
                                :""
                                }
                                {/* <div className={`${style.calendar__block_row} block_background`}>

                                </div> */}
                            </div>
                        </div>
                    )}
                </div>
                <div className={style.check__full}>
                    <button className={style.button__full} onClick={()=>{full==='not'?setFull('full'):setFull('not')}}>{full==='not'?'Посмотреть полностью':'Свернуть'}</button>
                </div>
                </>
                :""}
            </div>
        </>
    )
}
export default PregnancyCalendar;
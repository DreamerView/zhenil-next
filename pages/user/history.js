import { useEffect,useState } from 'react';
import SearchResult from "/start/services/all.json";
import style from "/styles/user/index.module.css";
import Image from 'next/image';
import Link from 'next/link';

const HistoryUser = () => {
    const [prev,setPrev] = useState([{}]);
    const [timeStamp,setTimeStamp] = useState('');
    const historyAction = (service) => {
        const history = JSON.parse(localStorage.getItem('historyAction'));
        const action = history?history:[];
        const checkExp = [...action,{name:service,time:Date.now()}];
        const key = 'name';
        const historyResult = [...new Map(checkExp.map(item =>[item[key], item])).values()];
        localStorage.setItem('historyAction',JSON.stringify(historyResult))
    };
    useEffect(() => {
        if(typeof window !== "undefined") {
            const mergeByTime = (a1, a2) =>
                a1.map(itm => ({
                    ...a2.find((item) => (item.name === itm.name) && item),
                    ...itm
                }));
            const history = JSON.parse(localStorage.getItem('historyAction'));
            let action = history?history:[{}];
            action=JSON.stringify(action)!=="[{}]"?action.sort((a,b)=>b.time-a.time):[{}];
            const response = SearchResult;
            const result = mergeByTime(action,response);
            setPrev(pre=>pre=result);
        }
        return () => {
            return false;
        }
    }, [])
    const ConvertTime = (unix_timestamp) => {
        var date = new Date(unix_timestamp);
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var hours = date.getHours().length===1?"0"+date.getHours():date.getHours();
        var minutes = date.getMinutes().length===1?"0"+date.getMinutes():date.getMinutes();
        return day+"."+month+"."+year+" "+hours+":"+minutes;
    }
    return(
        <>
            <h1>Недавние</h1>
            <p className='sub_content'>Список недавних зашедших сервисов</p>
                <div className={style.main__user_action_prev}>
                    {prev.map((result,index)=>{return JSON.stringify(result)!=="{}"?
                    <Link href={result.location}>
                        <a onClick={()=>historyAction(result.name)}>
                            <div key={index} className={`${style.main__user_action_prev_row} anim_hover`}>
                                <div className={style.main__user_action_prev_row_block}>
                                    <Image layout='fill' className={style.main__user_action_prev_row_block_img} alt="services" src={result.image}/>
                                </div>
                                <span>{result?.title?.split(' ').slice(0,2).join(" ")}</span>
                                <p className={style.main__user_action_prev_row_block_text}>{ConvertTime(result.time)}</p>
                            </div>
                        </a>
                    </Link>:""
                        }
                    )}
                </div>
    </>
    );
};

export default HistoryUser;


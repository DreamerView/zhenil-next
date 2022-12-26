import { useEffect,useState } from 'react';
import SearchResult from "/start/services/all.json";
import style from "/styles/user/index.module.css";
import Image from 'next/image';
import Link from 'next/link';

const HistoryUser = () => {
    const [prev,setPrev] = useState([{}]);
    const [sortItem,setSortItem] = useState('all');
    const [sortItemRes,setSortItemRes] = useState('');
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
            if(sortItem==="all") action=JSON.stringify(action)!=="[{}]"?action.sort((a,b)=>b.time-a.time):[{}];
            else if (sortItem==="time") {
                if(sortItemRes==="min") action=JSON.stringify(action)!=="[{}]"?action.sort((a,b)=>a.time-b.time):[{}];
                else action=JSON.stringify(action)!=="[{}]"?action.sort((a,b)=>b.time-a.time):[{}];
            }
            const response = SearchResult;
            const result = mergeByTime(action,response);
            setPrev(pre=>pre=result);
        }
        return () => {
            return false;
        }
    }, [sortItem,sortItemRes])
    const ConvertTime = (unix_timestamp) => {
        const date = new Date(unix_timestamp);
        const day = String(date.getDate()).length===1?"0"+date.getDate():date.getDate();
        const month = String(date.getMonth()+1).length===1?"0"+date.getMonth()+1:date.getMonth()+1;
        const year = date.getFullYear();
        const hours = String(date.getHours()).length===1?"0"+date.getHours():date.getHours();
        const minutes = String(date.getMinutes()).length===1?"0"+date.getMinutes():date.getMinutes();
        return day+"."+month+"."+year+" "+hours+":"+minutes;
    }
    return(
        <div className={style.main__user_action}>
            <h1>Недавние</h1>
            <p className='sub_content'>Список недавних зашедших сервисов</p>
            <div className={style.sort_item}>Сортировать по 
                        <select onChange={e=>setSortItem(e.target.value)} className={style.sort}>
                            <option value="all">Все</option>
                            <option value="time">Времени</option>
                            <option value="category">Категориям</option>
                        </select>
                        {sortItem!=="all"?
                        sortItem==="time"?
                        <select onChange={e=>setSortItemRes(e.target.value)} className={style.sort}>
                            <option value="max">Новые</option>
                            <option value="min">Старые</option>
                        </select>:""
                        :""}
                    </div>
                <div className={style.main__user_action_prev}>
                    {prev.map((result,index)=>{return JSON.stringify(result)!=="{}"?
                    <Link href={result.location}>
                        <a onClick={()=>historyAction(result.name)}>
                            <div key={index} className={`${style.main__user_action_prev_row} anim_hover`}>
                                <div className={style.main__user_action_prev_row_block}>
                                    <Image layout='fill' className={style.main__user_action_prev_row_block_img} alt="services" src={result.image}/>
                                </div>
                                <span><b>{result?.title?.split(' ').slice(0,2).join(" ")}</b></span>
                                <p className={style.main__user_action_prev_row_block_text}>{ConvertTime(result.time)}</p>
                            </div>
                        </a>
                    </Link>:""
                        }
                    )}
                </div>
    </div>
    );
};

export default HistoryUser;


import NavbarApp from '/pages/navbar_app/nav';
import style from "/styles/user/index.module.css";
import SearchResult from "/start/services/all.json";
import HeaderUser from './headerModule';
import { useMediaQuery } from 'react-responsive';
import { useEffect,useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const UserInterface = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(min-width:1px) and (max-width:750px)' });
    const [prev,setPrev] = useState([{}]);
    const [timeStamp,setTimeStamp] = useState('');
    const historyAction = (service) => {
        const history = JSON.parse(localStorage.getItem('favouriteAction'));
        const action = history?history:[];
        const checkExp = [...action,{name:service,time:Date.now()}];
        const key = 'name';
        const historyResult = [...new Map(checkExp.map(item =>[item[key], item])).values()];
        localStorage.setItem('favouriteAction',JSON.stringify(historyResult))
    };
    useEffect(() => {
        if(typeof window !== "undefined") {
            const mergeByTime = (a1, a2) =>
                a1.map(itm => ({
                    ...a2.find((item) => (item.name === itm.name) && item),
                    ...itm
                }));
            const history = JSON.parse(localStorage.getItem('favouriteAction'));
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
        const date = new Date(unix_timestamp);
        const day = String(date.getDate()).length===1?"0"+date.getDate():date.getDate();
        const month = String(date.getMonth()+1).length===1?"0"+date.getMonth()+1:date.getMonth()+1;
        const year = date.getFullYear();
        const hours = String(date.getHours()).length===1?"0"+date.getHours():date.getHours();
        const minutes = String(date.getMinutes()).length===1?"0"+date.getMinutes():date.getMinutes();
        return day+"."+month+"."+year+" "+hours+":"+minutes;
    }
    return(
    <>
        <NavbarApp to={{href:"/user"}} choice="alone"/>
        <div className="main_app">
            <div className={style.user__main}>
                {isTabletOrMobile?"":<HeaderUser/>}
                <div className={style.main__user_action}>
                    <h1>Избранные</h1>
                    <p className='sub_content'>Список понравившихся сервисов</p>
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
            </div>
        </div>
    </>
    );
};

export default UserInterface;
import { useState,useEffect } from 'react';
import Link from 'next/link';
import Head from "next/head";
import InfoBlock from './info_block';

const InfoAcc = () => {
    const [ready,setReady] = useState(false);
    const [results,setResults] = useState([]);
    const [send,setSend] = useState([{}])
    useEffect(()=>{
        if(localStorage.getItem('check_massive')) setResults(JSON.parse(localStorage.getItem('check_massive')));
        
    },[]);
    const AddNewPerson = () => {
        setResults([...results,{id:(results.length-1)+1}]);
        localStorage.setItem('check_massive',JSON.stringify([...results,{id:(results.length-1)+1}]));
    }
    const RemovePerson = (res) => {
        setResults(results.filter(info=>info.id !== res.id));
        localStorage.setItem('check_massive',JSON.stringify(results.filter(info=>info.id !== res.id)));
    }
    const SaveResult = (res) => {
        let s = JSON.parse(localStorage.getItem('check_massive'));
        s[res.info.id] = res.info;
        setResults(s);
        localStorage.setItem('check_massive',JSON.stringify(s));
    }
    return(
        <>
            <Head>
                <title>[Этап 3/4] Заполнение информации</title>
            </Head>
            <div className="main__nav">
            <p className="nav"><b className="b_color">Главная  /</b>  <Link href="/"><a>Конструктор бейджиков /</a></Link>  <Link href="/acc/logo"><a>Логотип /</a></Link>  <Link href="/acc/size"><a>Размер /</a></Link>  Информация</p>
            </div>
            <div className="main__block">
                <h1>[Этап 3/4] Заполнение информации</h1>
                <p className="sub_content">Этап 3/4. Заполните все необходимые информации о пользователе</p>
                {results.map(result=> result == [{}]?"":<InfoBlock change={SaveResult} remove={RemovePerson} item={result} key={result.id} />)}
                <div className="main__block_interface_menu c-m click" onClick={()=>AddNewPerson()}>
                    <div className="main__block_interface_menu_c_end">
                        <div className="main__block_interface_menu_background">
                            <img width={46} height={46} className="main__block_interface_menu_logo_icon_img_back" src={"/img/person_add.svg" } alt="icon" />
                        </div>
                        <p className="sub_content">Добавить пользователя</p>
                    </div>
                </div>
            </div>
            <div className="main__block_fixed_confirm">
                <div className="main__block_interface_menu_c_end flex">
                            <Link href="/acc/size" className="main__block_interface_btn_back"><a className="main__block_interface_btn_back">Назад</a></Link>
                            {!ready ? <button className="main__block_interface_btn_forward">Завершить?</button>: <Link href="/acc/result" className="main__block_interface_btn_forward"><a className="main__block_interface_btn_forward">Завершить?</a></Link>}    
                </div>
            </div>
        </>
    );
};

export default InfoAcc;
import { useState,useEffect } from 'react';
import Link from 'next/link';
import Head from "next/head";
import Image from 'next/image';

const InfoAcc = () => {
    const [logo,setLogo] = useState("/img/logo_round.svg");
    const [ready,setReady] = useState(false);
    const [name,setName] = useState('Введите имя');
    const [surname,setSurname] = useState('Введите фамилию');
    const [status,setStatus] = useState('Необзязательное поле');
    const [info,setInfo] = useState('');
    const CheckAvatar = (event) => {
        let reader = new FileReader();
        let baseString;
        reader.onloadend = function () {
            baseString = reader.result;
            console.log(baseString);
            localStorage.setItem('avatar_acc',baseString);
            setInfo({...info,avatar:baseString})
        };
        reader.readAsDataURL(event);
    }
    useEffect(()=>{
        let s = JSON.parse(localStorage.getItem('check_massive'));
        if(s) {
            setLogo(s[0].avatar);
            setName(s[0].name);
            setSurname(s[0].surname);
            setStatus(s[0].status);
            setReady(true);
        }
    },[]);
    useEffect(()=>{
        if(localStorage.getItem('check_massive')) {
            let l = JSON.parse(localStorage.getItem('check_massive')).length;
            console.log(l);
            setInfo(JSON.parse(localStorage.getItem('check_massive'))[0]);
        }
        else {
            setInfo('');
        }
    },[]);
    useEffect(()=>{
        if(info==='') return;
        else localStorage.setItem('check_massive',JSON.stringify([info]));
    },[info]);
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
                <div className="main__block_interface_menu c-m">
                    <div className="main__block_menu_close">
                        <svg id="close" xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26">
                            <path id="Контур_24" data-name="Контур 24" d="M0,0H26V26H0Z" fill="none" />
                            <path id="Контур_25" data-name="Контур 25" d="M20.256,5.756a1.147,1.147,0,0,0-1.624,0L13,11.376,7.368,5.744A1.148,1.148,0,0,0,5.744,7.368L11.376,13,5.744,18.632a1.148,1.148,0,0,0,1.624,1.624L13,14.624l5.632,5.632a1.148,1.148,0,0,0,1.624-1.624L14.624,13l5.632-5.632A1.154,1.154,0,0,0,20.256,5.756Z" transform="translate(0 0)" fill="#aaa" />
                        </svg>
                    </div>
                    <div className="main__block_interface_menu_c">
                        <h1>Заполнение информации</h1>
                    </div>
                    <div className="main__block_interface_menu_c_info_block">
                        <div className="main__block_interface_menu_c_info_block_avatar">
                            <label className="main__block_interface_menu_logo_icon" htmlFor="logoPreview">
                                <img width={46} height={46} loading="lazy" className="main__block_interface_menu_logo_icon_img" src={"/img/add_a_photo.svg" } alt="icon" />
                            </label>
                            <input style={{display:'none'}} name="logoPreview" id="logoPreview" accept="image/*" type='file' onChange={(event)=>{setLogo(URL.createObjectURL(event.target.files[0]));setReady(true);CheckAvatar(event.target.files[0]);}} />
                            <img width={135} height={135} loading="lazy" className="main__block_interface_menu_logo_img" src={logo} alt="logo" />
                            <p className="sub_content">Выберите фото</p>
                        </div>
                        <div className="main__block_interface_menu_c_info_block_text">
                            <div className="main__block_interface_menu_c_s flex">
                                <input className="main__block_interface_menu_c_s_i" placeholder={name} onChange={(e)=>{setInfo({...info,id:0,name:e.target.value})}} type="text" name="" id="" />
                                <span className="main__block_interface_menu_c_s_t">Имя</span>
                            </div>
                            <div className="main__block_interface_menu_c_s flex">
                                <input className="main__block_interface_menu_c_s_i" placeholder={surname} onChange={(e)=>{setInfo({...info,surname:e.target.value})}} type="text" name="" id="" />
                                <span className="main__block_interface_menu_c_s_t">Фамилия</span>
                            </div>
                            <div className="main__block_interface_menu_c_s flex">
                                <input className="main__block_interface_menu_c_s_i" placeholder={status} onChange={(e)=>{setInfo({...info,status:e.target.value})}} type="text" name="" id="" />
                                <span className="main__block_interface_menu_c_s_t">Должность</span>
                            </div>
                        </div>
                    </div>
                    <div className="main__block_interface_menu_c_end">
                        <div className=''>
                            <span className='logo'>* Выберите фото и заполните все необходимые информации пожалуйста</span>
                        </div>
                    </div>
                </div>
                <div className="main__block_interface_menu c-m click">
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
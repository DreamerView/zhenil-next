/*jshint esversion: 6 */
import {useEffect, useState} from "react";
import Link from 'next/link';
import Head from "next/head";
import Image from "next/image";

const LogoAcc = () => {
    const [logo,setLogo] = useState("/img/logo_round.svg");
    const [c,setC] = useState({logo:'logo',text:"* Выберите файл и загрузите ваш логотип пожалуйста",div:''});
    const [ready,setReady] = useState(false);
    const CheckLogo = (event) => {
        let reader = new FileReader();
        let baseString;
        reader.onloadend = function () {
            baseString = reader.result;
            console.log(baseString);
            localStorage.setItem('logo_acc',baseString);
            setC({logo:'logo_s',text:'Логотип загружен ✔',div:'alerts_g'});
        };
        reader.readAsDataURL(event);
    };
    useEffect(()=>{
        if(localStorage.getItem('logo_acc')) {
            setLogo(localStorage.getItem('logo_acc'));
            setReady(true);
            setC({logo:'logo_s',text:'Логотип загружен ✔',div:'alerts_g'});
        }
    },[]);
    return(
        <>
            <Head>
                <title>[Этап 1/4] Загрузка логотипа</title>
            </Head>
            <div className="main__nav">
                <p className="nav"><b className="b_color">Главная  /</b>  <Link href="/"><a>Конструктор бейджиков /</a></Link>  Логотип</p>
            </div>
            <div className="main__block">
                <h1>[Этап 1/4] Загрузка логотипа</h1>
                <p className="sub_content">Этап 1/4. Загрузите ваш логотип организации/компаний</p>
                <div className="main__block_interface_menu c-m">
                    <div className="main__block_interface_menu_c">
                        <h1>Загрузка логотипа</h1>
                    </div>
                    <div className="main__block_interface_menu_c_logo">
                        <label htmlFor="logoPreview">
                            <div className="main__block_interface_menu_logo_icon_pic">
                                <Image width={46} height={46} loading="lazy" className="main__block_interface_menu_logo_icon_img" src={"/img/add_a_photo.svg" } alt="icon" />
                            </div>
                        </label>
                        <input style={{display:'none'}} name="logoPreview" id="logoPreview" accept="image/*" type='file' onChange={(event)=>{setLogo(URL.createObjectURL(event.target.files[0]));CheckLogo(event.target.files[0]);setReady(true)}} />
                       
                            <Image width={135} height={135} loading="lazy" className="main__block_interface_menu_logo_img" src={logo} alt="logo" />
                        
                    </div>
                    <div className="main__block_interface_menu_c_end">
                        <div className={c.div}>
                            <span className={c.logo}>{c.text}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__block_fixed_confirm">
                <div className="main__block_interface_menu_c_end flex">
                            <Link href="/acc/size" className="main__block_interface_btn_back"><a className="main__block_interface_btn_back">Пропустить</a></Link>
                            {!ready ? <button className="main__block_interface_btn_forward">Продолжить</button>: <Link href="/acc/size" className="main__block_interface_btn_forward"><a className="main__block_interface_btn_forward">Продолжить</a></Link>}    
                </div>
            </div>
        </>
    );
}

export default LogoAcc;
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
        reader.readAsDataURL(event);
        reader.onloadend = () => {
            const i = document.createElement('img');
            i.src = reader.result;
            i.onload = () => {
                const canvas = document.createElement('canvas');
                const maxWidth = 300;
                const scaleSize = maxWidth / i.width;
                canvas.width = maxWidth;
                canvas.height = i.height * scaleSize;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(i,0,0,canvas.width,canvas.height);
                const srcEnc = ctx.canvas.toDataURL("image/webp");
                localStorage.setItem('logo_acc',srcEnc);
                setC({logo:'logo_s',text:'Логотип загружен ✔',div:'alerts_g'});
            };
        };
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
            {/* <div className="confirm__back">
                <div className="confirm__block">
                    <h3>
                        Title Here
                    </h3>
                    <p class="sm">
                        Here’s an alert description that uses Auto Layout!
                    </p>
                    <div className="confirm__block_action">
                        <div className="confirm__block_action_2">
                            <div>
                                <button>Action</button>
                            </div>
                            <div>
                                <button className="confirm_custom red_background">Action</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="main__nav">
                <p className="nav"><Link href="/"><b className="b_color">Главная  /</b></Link>  <Link href="/acc"><a>Конструктор бейджиков /</a></Link>  Логотип</p>
            </div>
            <div className="main__block">
                <h1>[Этап 1/4] Загрузка логотипа</h1>
                <p className="sub_content">Этап 1/4. Загрузите ваш логотип организации/компаний</p>
                <div className="main__block_interface_menu c-m block_animation" onClick={()=>{}}>
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
                       
                            <Image width={135} height={135} loading="lazy" className="main__block_interface_menu_logo_img" src={logo} alt="logo" placeholder="blur" blurDataURL={logo} />
                        
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
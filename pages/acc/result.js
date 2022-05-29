/*jshint esversion: 6 */
import Head from "next/head";
import Link from "next/link";
import { useDispatch } from "react-redux";
import Image from "next/image";

const ResultAcc = () => {
    const send = useDispatch();
    return(
        <>
            <Head>
                <title>[Этап 4/4] Результаты</title>
            </Head>
            <div className="main__nav">
                <p className="nav"><Link href="/"><b className="b_color">Главная  /</b></Link>  <Link href="/acc"><a>Конструктор бейджиков /</a></Link>  <Link href="/acc/logo"><a>Логотип /</a></Link>  <Link href="/acc/size"><a>Размер /</a></Link>  <Link href="/acc/info"><a>Информация /</a></Link>  Результаты</p>
            </div>
            <div className="main__block">
                <h1>[Этап 1/4] Загрузка логотипа</h1>
                <p className="sub_content">Этап 1/4. Загрузите ваш логотип организации/компаний</p>
                <div className="main__block_interface_menu c-m block_animation">
                    <div className="main__block_interface_menu_c">
                        <h1>Результаты</h1>
                        <p className="sub_content">Поздравляю! 🎉 Ваш документ готов!</p>
                        <div className="fullscreen__result_block blue_background" onClick={()=>{send({type:"setFullFrame",set:true});send({type:"setUrlFrame",set:"/convert.html"});}}>
                            <div className="fullscreen__result_button"><Image src={'/img/fullscreen.svg'} width={22} height={22}/></div>
                            <p className="small">Смотреть в полноэкранном режиме</p>
                        </div>
                    </div>
                    <iframe id="frame" title="converter result" src={"/convert.html"}>
                        Ваш браузер не поддерживает плавающие фреймы!
                    </iframe>
                </div>
            </div>
            <div className="main__block_fixed_confirm">
                <div className="main__block_interface_menu_c_end flex">
                            <Link href="/acc/info" className="main__block_interface_btn_back"><a className="main__block_interface_btn_back">Назад</a></Link>
                            {<Link href="/" className="main__block_interface_btn_forward"><a className="main__block_interface_btn_forward">Домой</a></Link>}    
                </div>
            </div>
        </>
    );
};

export default ResultAcc;
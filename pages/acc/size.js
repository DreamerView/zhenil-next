import { useState,useEffect } from "react";
import Link from "next/link";
import DocumentResult from "../../start/document";
import Head from "next/head";

const SizeAcc = () => {
    const [select,setSelect] = useState(false);
    const [checked,setChecked] = useState('')
    const [result,setResult] = useState('Choose-origin');
    const [ss,setSS] = useState('Choose-origin');
    const [cc,setCC] = useState(false)
    const [orient,setOrient] = useState()
    const [ready,setReady] = useState(false);
    const [width,setWidth] = useState('Введите ширину');
    const [height,setHeight] = useState('Введите высоту')
    const Check = (e) => {
        localStorage.setItem('orient_acc',e);
        setChecked(true);
    }
    const Check1 = (e) => {
        localStorage.setItem('template_acc',e);
        if(e==='ready') {
            setCC(false);
            localStorage.removeItem('get_ss_acc');
            localStorage.removeItem('width_acc');
            localStorage.removeItem('height_acc');
            setReady(false);
        }
    }
    const Check2 = (e) => {
        localStorage.setItem('get_ss_acc',e);
    }
    useEffect(() => {
        if(localStorage.getItem('orient_acc')) {
            setChecked(true);
            console.log('yes')
        }
        setOrient(localStorage.getItem('orient_acc'));
    }, [])
    useEffect(()=>{
        if(localStorage.getItem('template_acc')) {
            setResult(localStorage.getItem('template_acc'))
            setCC(false);
        }
        if(localStorage.getItem('get_ss_acc')) {
            setSS(localStorage.getItem('get_ss_acc'));
            setCC(true);
        }
        if(localStorage.getItem('width_acc')) {
            setWidth(localStorage.getItem('width_acc'));
        }
        if(localStorage.getItem('height_acc')) {
            setHeight(localStorage.getItem('height_acc'));
            setReady(true);
        }  
    },[])
    return(
    <DocumentResult>
            <Head>
                <title>[Этап 2/4] Выбор ориентации и размер бумаги</title>
            </Head>
            <div className="main__nav">
                <p className="nav"><b className="b-color">Главная  /</b>  <Link href="/"><a>Конструктор бейджиков /</a></Link>  <Link href="/acc/logo"><a>Логотип /</a></Link>  Размер</p>
            </div>
            <div className="main__block">
                <h1>[Этап 2/4] Выбор ориентации и размер бумаги</h1>
                <p className="sub_content">Этап 2/4. Выберите ориентацию и размер вашей бумаги</p>
                <div className="main__block_interface_menu c-m">
                    <div className="main__block_interface_menu_c">
                        <h1>Выбор ориентации бумаги</h1>
                    </div>

                    <div className="main__block_interface_menu_c flex" onChange={(event)=>Check(event.target.value)}>
                        <label className="main__block_i_l">
                            <input type="radio" name="choice" value="book" id="bookChoice" defaultChecked={'book'===orient} />
                            <div className="main__block_interface_menu_c_book choice_land">
                                <div className="main__block_interface_menu_c_book_block"></div>
                                <span>Книжная</span>
                            </div>
                        </label>
                        
                        <label className="main__block_i_l">
                            <input type="radio" name="choice" value="album" id="albumChoice" defaultChecked={'album'===orient}  />
                            <div className="main__block_interface_menu_c_album choice_land">
                                <div className="main__block_interface_menu_c_album_block"></div>
                                <span>Альбомная</span>
                            </div>
                        </label>
                        
                    </div>
                    <div className="main__block_interface_menu_c">
                    <div>
                    {checked?
                        <select defaultValue={result} onChange={(e)=>{setResult(e.target.value);Check1(e.target.value);setSelect(false);}} className="main__block_interface_menu_c_select" name="" id="">
                            <option value="Choose-origin" disabled>Выберите шаблон</option>
                            <option value="ready">Готовые размеры</option>
                            <option value="selectable">Настраиваемый размер</option>
                        </select>:''}
                    </div>
                        {result==='selectable'?
                        <select defaultValue={ss} onChange={(e)=>{setSelect(true);Check2(e.target.value)}} className="main__block_interface_menu_c_select" name="" id="">
                            <option value="Choose-origin" disabled>Выберите единицу измерения</option>
                            <option value="sm">Сантиментр (см)</option>
                            <option value="dm">Дециметр (дм)</option>
                            <option value="px">Пискель (pix)</option>
                        </select>:''}
                        {!result==='ready'||(select||cc)?<>
                            <div className="main__block_interface_menu_c_s flex">
                                <input className="main__block_interface_menu_c_s_i" onChange={(e)=>{localStorage.setItem('width_acc',e.target.value)}} placeholder={width} type="text" name="" id="" />
                                <span className="main__block_interface_menu_c_s_t">Ширина</span>
                            </div>
                            <div className="main__block_interface_menu_c_s flex">
                                <input className="main__block_interface_menu_c_s_i" onChange={(e)=>{localStorage.setItem('height_acc',e.target.value);setReady(true);}} placeholder={height} type="text" name="" id="" />
                                <span className="main__block_interface_menu_c_s_t">Высота</span>
                            </div>
                        </>:''}

                    </div>
                    
                </div>
            </div>
            <div className="main__block_fixed_confirm">
                <div className="main__block_interface_menu_c_end flex">
                            <Link href="/acc/logo" className="main__block_interface_btn_back"><a className="main__block_interface_btn_back">Назад</a></Link>
                            {!ready ? <button className="main__block_interface_btn_forward">Продолжить</button>: <Link href="/acc/info" className="main__block_interface_btn_forward"><a className="main__block_interface_btn_forward">Продолжить</a></Link>}    
                </div>
            </div>
    </DocumentResult>
    );
}
export default SizeAcc;
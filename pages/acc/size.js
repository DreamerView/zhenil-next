/*jshint esversion: 6 */
import { useState,useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import useTranslateText from '../translate';
import translate from "../../translate/acc/navbar_translate";
import ux from "../../translate/ux/action";
import text from "../../translate/acc/size_translate";

const SizeAcc = () => {
    const lang = useTranslateText();
    const [select,setSelect] = useState(false);
    const [checked,setChecked] = useState('');
    const [result,setResult] = useState('Choose-origin');
    const [ss,setSS] = useState('Choose-origin');
    const [cc,setCC] = useState(false);
    const [orient,setOrient] = useState();
    const [ready,setReady] = useState(false);
    const [width,setWidth] = useState(text['enter_width'][lang]);
    const [height,setHeight] = useState(text['enter_height'][lang]);
    const Check = (e) => {
        localStorage.setItem('orient_acc',e);
        setChecked(true);
    };
    const Check1 = (e) => {
        localStorage.setItem('template_acc',e);
        if(e==='ready') {
            setCC(false);
            localStorage.removeItem('get_ss_acc');
            localStorage.removeItem('width_acc');
            localStorage.removeItem('height_acc');
            setReady(false);
        }
    };
    const Check2 = (e) => {
        localStorage.setItem('get_ss_acc',e);
    };
    useEffect(() => {
        if(localStorage.getItem('orient_acc')) {
            setChecked(true);
        }
        setOrient(localStorage.getItem('orient_acc'));
    }, []);
    useEffect(()=>{
        if(localStorage.getItem('template_acc')) {
            setResult(localStorage.getItem('template_acc'));
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
    },[]);
    return(
    <>
            <Head>
                <title>{text['name'][lang]}</title>
            </Head>
            <div className="main__nav">
                <p className="nav"><Link href="/"><b className="b_color">{translate['home'][lang]}  /</b></Link>  <Link href="/acc"><a>{translate['step1'][lang]} /</a></Link>  <Link href="/acc/logo"><a>{translate['step2'][lang]} /</a></Link>  {translate['step3'][lang]}</p>
            </div>
            <div className="main__block">
                <h1>{text['name'][lang]}</h1>
                <p className="sub_content">{text['content'][lang]}</p>
                <div className="main__block_interface_menu c-m block_animation">
                    <div className="main__block_interface_menu_c">
                        <h1>{text['title'][lang]}</h1>
                    </div>

                    <div className="main__block_interface_menu_c flex" onChange={(event)=>Check(event.target.value)}>
                        <label className="main__block_i_l">
                            <input type="radio" name="choice" value="book" id="bookChoice" defaultChecked={'book'===orient} />
                            <div className="main__block_interface_menu_c_book choice_land">
                                <div className="main__block_interface_menu_c_book_block"></div>
                                <span>{text['book'][lang]}</span>
                            </div>
                        </label>
                        
                        <label className="main__block_i_l">
                            <input type="radio" name="choice" value="album" id="albumChoice" defaultChecked={'album'===orient}  />
                            <div className="main__block_interface_menu_c_album choice_land">
                                <div className="main__block_interface_menu_c_album_block"></div>
                                <span>{text['album'][lang]}</span>
                            </div>
                        </label>
                        
                    </div>
                    <div className="main__block_interface_menu_c">
                    <div>
                    {checked?
                        <select defaultValue={result} onChange={(e)=>{setResult(e.target.value);Check1(e.target.value);setSelect(false);}} className="main__block_interface_menu_c_select" name="" id="">
                            <option value="Choose-origin" disabled>{text['template'][lang]}</option>
                            <option value="ready">{text['template_ready'][lang]}</option>
                            <option value="selectable">{text['template_custom'][lang]}</option>
                        </select>:''}
                    </div>
                        {result==='selectable'?
                        <select defaultValue={ss} onChange={(e)=>{setSelect(true);Check2(e.target.value)}} className="main__block_interface_menu_c_select" name="" id="">
                            <option value="Choose-origin" disabled>{text['selectable'][lang]}</option>
                            <option value="sm">{text['selectable_sm'][lang]}</option>
                            <option value="dm">{text['selectable_dm'][lang]}</option>
                            <option value="px">{text['selectable_pix'][lang]}</option>
                        </select>:''}
                        {!result==='ready'||(select||cc)?<>
                            <div className="main__block_interface_menu_c_s flex">
                                <input className="main__block_interface_menu_c_s_i" onChange={(e)=>{localStorage.setItem('width_acc',e.target.value)}} placeholder={width} type="text" name="" id="" />
                                <span className="main__block_interface_menu_c_s_t">{text['width'][lang]}</span>
                            </div>
                            <div className="main__block_interface_menu_c_s flex">
                                <input className="main__block_interface_menu_c_s_i" onChange={(e)=>{localStorage.setItem('height_acc',e.target.value);setReady(true);}} placeholder={height} type="text" name="" id="" />
                                <span className="main__block_interface_menu_c_s_t">{text['height'][lang]}</span>
                            </div>
                        </>:''}

                    </div>
                    
                </div>
            </div>
            <div className="main__block_fixed_confirm">
                <div className="main__block_interface_menu_c_end flex">
                            <Link href="/acc/logo" className="main__block_interface_btn_back"><a className="main__block_interface_btn_back">{ux['back'][lang]}</a></Link>
                            {!ready ? <button className="main__block_interface_btn_forward">{ux['continue'][lang]}</button>: <Link href="/acc/info" className="main__block_interface_btn_forward"><a className="main__block_interface_btn_forward">{ux['continue'][lang]}</a></Link>}    
                </div>
            </div>
    </>
    );
}
export default SizeAcc;
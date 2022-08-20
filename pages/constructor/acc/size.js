/*jshint esversion: 6 */
/*jshint sub:true*/
import { useState,useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import useTranslateText from '../../translate';
import translate from "../../../translate/acc/navbar_translate";
import ux from "../../../translate/ux/action";
import text from "../../../translate/acc/size_translate";
import nav_translate from "../../../translate/services/all_translate";

const SizeAcc = () => {
    const lang = useTranslateText();
    const [select,setSelect] = useState(false);
    const [checked,setChecked] = useState('');
    const [result,setResult] = useState('Choose-origin');
    const [ss,setSS] = useState('Choose-origin');
    const [ss_ready,setSSReady] = useState('Choose-origin')
    const [cc,setCC] = useState(false);
    const [orient,setOrient] = useState();
    const [ready,setReady] = useState(false);
    const [width,setWidth] = useState(text['enter_width'][lang]);
    const [height,setHeight] = useState(text['enter_height'][lang]);
    const Check = (e) => {
        localStorage.setItem('orient_acc',e);
        setChecked(true);
        setOrient(e);
    };
    const Check1 = (e) => {
        localStorage.setItem('template_acc',e);
        if(e==='ready' || e==='selectable') {
            setCC(false);
            localStorage.removeItem('get_ss_acc');
            localStorage.removeItem('width_acc');
            localStorage.removeItem('height_acc');
            setWidth(text['enter_width'][lang]);
            setHeight(text['enter_height'][lang]);
            setReady(false);
            setSS('Choose-origin');
        }
    };
    const Check2 = (e) => {
        localStorage.setItem('get_ss_acc',e);
    };
    const Check3 = (e) => {
        localStorage.setItem('get_ss_acc','sm');
        switch(e){
            // Portrait
            case "6х9":localStorage.setItem('width_acc',6);localStorage.setItem('height_acc',9);break;
            case "7,4х10,5":localStorage.setItem('width_acc',7.4);localStorage.setItem('height_acc',10.5);break;
            case "8х10,6":localStorage.setItem('width_acc',8);localStorage.setItem('height_acc',10.6);break;
            case "8,1х12":localStorage.setItem('width_acc',8.1);localStorage.setItem('height_acc',12);break;
            case "9,7х14":localStorage.setItem('width_acc',9.7);localStorage.setItem('height_acc',14);break;
            case "10,5x15,1":localStorage.setItem('width_acc',10.5);localStorage.setItem('height_acc',15.1);break;
            case "11x15":localStorage.setItem('width_acc',11);localStorage.setItem('height_acc',15);break;
            case "11,1х12,7":localStorage.setItem('width_acc',11.1);localStorage.setItem('height_acc',12.7);break;
            // Album
            case "9х6":localStorage.setItem('width_acc',9);localStorage.setItem('height_acc',6);break;
            case "9х6,5":localStorage.setItem('width_acc',9);localStorage.setItem('height_acc',6.5);break;
            case "10х7,5":localStorage.setItem('width_acc',10);localStorage.setItem('height_acc',7.5);break;
            case "11,9х7,7":localStorage.setItem('width_acc',11.9);localStorage.setItem('height_acc',7.7);break;
            case "11,2х9,3":localStorage.setItem('width_acc',11.2);localStorage.setItem('height_acc',9.3);break;
            case "12х8,5":localStorage.setItem('width_acc',12);localStorage.setItem('height_acc',8.5);break;
            default: return 0;
        }
        localStorage.setItem('get_ss_ready_acc',e);
    };
    useEffect(() => {
        if(localStorage.getItem('orient_acc')) {
            setChecked(true);
            setOrient(localStorage.getItem('orient_acc'));
        }
    }, []);
    useEffect(()=>{
        if(result==="selectable") {
            if(width>height) {
                localStorage.setItem('orient_acc','album');
                setOrient('album');
            } else if(width<height||width===height) {
                localStorage.setItem('orient_acc','book');
                setOrient('book');
            }
        }
    },[width,height,result])
    useEffect(()=>{
        if(localStorage.getItem('template_acc')) {
            setResult(localStorage.getItem('template_acc'));
            setCC(false);
        }
        if(localStorage.getItem('get_ss_acc')&&localStorage.getItem('template_acc')==='selectable') {
            setSS(localStorage.getItem('get_ss_acc'));
            setCC(true);
        }
        if(localStorage.getItem('get_ss_ready_acc')&&localStorage.getItem('template_acc')==='ready') {
            setSSReady(localStorage.getItem('get_ss_ready_acc'));
        }
        if(localStorage.getItem('width_acc')) {
            setWidth(localStorage.getItem('width_acc'));
        }
        if(localStorage.getItem('height_acc')) {
            setHeight(localStorage.getItem('height_acc'));
            setReady(true);
        }  
    },[]);
    console.log(orient);
    return(
    <>
            <Head>
                <title>{text['name'][lang]}</title>
            </Head>
            <div className="main__nav">
                <p className="nav"><Link href="/"><b className="b_color">{nav_translate['home'][lang]}  /</b></Link>  <Link href="/constructor"><a>{nav_translate['constructor'][lang]} /</a></Link>  <Link href="/constructor/acc"><a>{nav_translate['acc_const'][lang]} /</a></Link>  <Link href="/constructor/acc/logo"><a>{translate['step2'][lang]} /</a></Link>  {translate['step3'][lang]}</p>
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
                                <div className="main__block_interface_menu_c_book_block"/>
                                <span>{text['book'][lang]}</span>
                            </div>
                        </label>
                        
                        <label className="main__block_i_l">
                            <input type="radio" name="choice" value="album" id="albumChoice" defaultChecked={'album'===orient}  />
                            <div className="main__block_interface_menu_c_album choice_land">
                                <div className="main__block_interface_menu_c_album_block"/>
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
                        {result==='ready' && orient==='book'?
                        <select defaultValue={ss_ready} onChange={(e)=>{Check3(e.target.value);setReady(true);}} className="main__block_interface_menu_c_select" name="" id="">
                            <option value="Choose-origin" disabled>{text['ready'][lang]}</option>
                            <option value="6х9">{text['width'][lang]}: 6cm, {text['height'][lang]}: 9cm (6х9 cm)</option>
                            <option value="7,4х10,5">{text['width'][lang]}: 7,4cm, {text['height'][lang]}: 10,5cm (7,4х10,5 cm)</option>
                            <option value="8х10,6">{text['width'][lang]}: 8cm, {text['height'][lang]}: 10,6cm (8х10,6 cm)</option>
                            <option value="8,1х12">{text['width'][lang]}: 8,1cm, {text['height'][lang]}: 12cm (8,1х12 cm)</option>
                            <option value="9,7х14">{text['width'][lang]}: 9,7cm, {text['height'][lang]}: 14cm (9,7х14 cm)</option>
                            <option value="10,5x15,1">{text['width'][lang]}: 10,5cm, {text['height'][lang]}: 15,1cm (10,5x15,1 cm)</option>
                            <option value="11x15">{text['width'][lang]}: 11cm, {text['height'][lang]}: 15cm (11x15 cm)</option>
                            <option value="11,1х12,7">{text['width'][lang]}: 11,1cm, {text['height'][lang]}: 12,7cm (11,1х12,7 cm)</option>
                        </select>:''}
                        {result==='ready' && orient==='album'?
                        <select defaultValue={ss_ready} onChange={(e)=>{Check3(e.target.value);setReady(true);}} className="main__block_interface_menu_c_select" name="" id="">
                            <option value="Choose-origin" disabled>{text['ready'][lang]}</option>
                            <option value="9х6">{text['width'][lang]}: 9cm, {text['height'][lang]}: 6cm (9х6 cm)</option>
                            <option value="9х6,5">{text['width'][lang]}: 9cm, {text['height'][lang]}: 6,5cm (9х6,5 cm)</option>
                            <option value="10х7,5">{text['width'][lang]}: 10cm, {text['height'][lang]}: 7,5cm (10х7,5 cm)</option>
                            <option value="11,9х7,7">{text['width'][lang]}: 11,9cm, {text['height'][lang]}: 7,7cm (11,9х7,7 cm)</option>
                            <option value="11,2х9,3">{text['width'][lang]}: 11,2cm, {text['height'][lang]}: 9,3cm (11,2х9,3 cm)</option>
                            <option value="12х8,5">{text['width'][lang]}: 12cm, {text['height'][lang]}: 8,5cm (12х8,5 cm)</option>
                        </select>:''}
                        {result==='selectable'?
                        <select defaultValue={ss} onChange={(e)=>{setSelect(true);Check2(e.target.value)}} className="main__block_interface_menu_c_select" name="" id="">
                            <option value="Choose-origin" disabled>{text['selectable'][lang]}</option>
                            <option value="sm">{text['selectable_sm'][lang]}</option>
                            <option value="dm">{text['selectable_dm'][lang]}</option>
                            <option value="px">{text['selectable_pix'][lang]}</option>
                        </select>:''}
                        {!result==='ready'||(select||cc)?<>
                            <div className="main__block_interface_menu_c_s flex">
                                <input className="main__block_interface_menu_c_s_i" onChange={(e)=>{localStorage.setItem('width_acc',e.target.value);setWidth(e.target.value);}} placeholder={width} type="text" name="" id="" />
                                <span className="main__block_interface_menu_c_s_t">{text['width'][lang]}</span>
                            </div>
                            <div className="main__block_interface_menu_c_s flex">
                                <input className="main__block_interface_menu_c_s_i" onChange={(e)=>{localStorage.setItem('height_acc',e.target.value);setHeight(e.target.value);setReady(true);}} placeholder={height} type="text" name="" id="" />
                                <span className="main__block_interface_menu_c_s_t">{text['height'][lang]}</span>
                            </div>
                        </>:''}

                    </div>
                    
                </div>
            </div>
            <div className="main__block_fixed_confirm">
                <div className="main__block_interface_menu_c_end flex">
                            <Link href="/constructor/acc/logo" className="main__block_interface_btn_back"><a className="main__block_interface_btn_back">{ux['back'][lang]}</a></Link>
                            {!ready ? <button className="main__block_interface_btn_forward">{ux['continue'][lang]}</button>: <Link href="/constructor/acc/info" className="main__block_interface_btn_forward"><a className="main__block_interface_btn_forward">{ux['continue'][lang]}</a></Link>}    
                </div>
            </div>
    </>
    );
}
export default SizeAcc;
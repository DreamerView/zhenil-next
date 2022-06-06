/*jshint esversion: 6 */
/*jshint sub:true*/
import { useState,useEffect } from 'react';
import Link from 'next/link';
import Head from "next/head";
import InfoBlock from './info_block';
import Image from "next/image";
import useConfirm from "../conf";
import { useDispatch } from 'react-redux';
import useTranslateText from '../translate';
import ux from "../../translate/ux/action";
import translate from "../../translate/acc/navbar_translate";
import text from "../../translate/acc/info_translate";

const InfoAcc = () => {
    const lang = useTranslateText();
    const remove = useDispatch();
    const [confirm,setConfirm] = useState(null);
    const [con,setCon] = useState(false);
    const [conf] = useConfirm(confirm);
    const [ready,setReady] = useState(false);
    const [results,setResults] = useState([]);
    const [action,setAction] = useState('');
    useEffect(()=>{
        if(localStorage.getItem('check_massive')) setResults(JSON.parse(localStorage.getItem('check_massive')));
    },[]);
    useEffect(()=>{
        return results[0]?setReady(true):setReady(false);
    },[results]);
    const AddNewPerson = () => {
        const setId = Date.now();
        setResults([...results,{id:setId}]);
        localStorage.setItem('check_massive',JSON.stringify([...results,{id:setId}]));
        setReady(true);
        setAction('block_animation');
    };
    const RemovePerson = (res) => {
        let name,surname;
        if(res) {
            if(res.name === undefined) name=""; else name=" "+res.name;
            if(res.surname === undefined) surname=""; else surname=" "+res.surname;
        }
        setConfirm({type:"delete",name:text['alert_name'][lang],content:`${text['alert_content'][lang]}${name}${surname}?`,cancel:ux['cancel'][lang],accept_color:"red_background",accept:ux['delete'][lang]});
        setCon(res);
    };
    useEffect(()=>{
        if(conf===true) {
            setAction('remove_animation');
            setTimeout(()=>{
                setResults(results.filter(info=>info.id !== con.id));
                localStorage.setItem('check_massive',JSON.stringify(results.filter(info=>info.id !== con.id)));
                setAction('');
            },[200]);
            remove({type:"SetConfirm",set:false});
        }
    },[conf,con,remove,results]);
    const SaveResult = (res) => {
        let s = JSON.parse(localStorage.getItem('check_massive'));
        let i = s.findIndex(x => x.id === res.info.id);
        s[i] = res.info;
        setResults(s);
        localStorage.setItem('check_massive',JSON.stringify(s));
    };
    return(
        <>
            <Head>
                <title>{text['name'][lang]}</title>
            </Head>
            <div className="main__nav">
                <p className="nav"><Link href="/"><b className="b_color">{translate['home'][lang]}  /</b></Link>  <Link href="/acc"><a>{translate['step1'][lang]} /</a></Link>  <Link href="/acc/logo"><a>{translate['step2'][lang]} /</a></Link>  <Link href="/acc/size"><a>{translate['step3'][lang]} /</a></Link>  {translate['step4'][lang]}</p>
            </div>
            <div className="main__block">
                <h1>{text['name'][lang]}</h1>
                <p className="sub_content">{text['content'][lang]}</p>
                {results.map(result=> result == [{}]?"":<InfoBlock change={SaveResult} remove={RemovePerson} action={action} item={result} key={result.id} />)}
                <div className="main__block_interface_menu block_animation c-m click" onClick={()=>AddNewPerson()}>
                    <div className="main__block_interface_menu_c_end">
                        <div className="main__block_interface_menu_background">
                            <Image width={46} height={46} className="main__block_interface_menu_logo_icon_img_back" src={"/img/person_add.svg" } alt="icon" />
                        </div>
                        <p className="sub_content">{text['add_user'][lang]}</p>
                    </div>
                </div>
            </div>
            <div className="main__block_fixed_confirm">
                <div className="main__block_interface_menu_c_end flex">
                            <Link href="/acc/size" className="main__block_interface_btn_back"><a className="main__block_interface_btn_back">{ux['back'][lang]}</a></Link>
                            {!ready ? <button className="main__block_interface_btn_forward">{ux['finish'][lang]}</button>: <Link href="/acc/result" className="main__block_interface_btn_forward"><a className="main__block_interface_btn_forward">{ux['finish'][lang]}</a></Link>}    
                </div>
            </div>
        </>
    );
};

export default InfoAcc;
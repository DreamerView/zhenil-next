/*jshint esversion: 6 */
import style from "/styles/user/index.module.css";
import Image from 'next/image';
import Link from 'next/link';
import useTranslateText from "/start/translate";
import translate from "/translate/user/index_translate";
import ClientJsonFetchReq from "/start/ClientJsonFetchReq";
import { useEffect,useState } from "react";
const AesEncryption = require('aes-encryption');

const HeaderUser = () => {
    const lang = useTranslateText();
    const [data,setData] = useState(null);
    useEffect(()=>{
        const aes = new AesEncryption();
        aes.setSecretKey(process.env.aesKey);
        const result = async() => {
            const res = await ClientJsonFetchReq({method:"GET",path:'/get-data',cookie:document.cookie});
            if(res!==undefined) {
                const response = {avatar:aes.decrypt(res.avatar),name:aes.decrypt(res.name),surname:aes.decrypt(res.surname)}
                return setData(prev=>prev=response);
            }
        };
        result();
        return () =>{
            return false;
        };
    },[])
    const logOut = () => {
        document.cookie = 'accessToken' + '=;Max-Age=0;path=/';
        window.location.href="/";
    };
    return(
        <div className={style.user__main_row}>
                    {data!==null &&
                    <div className={style.user__main_portfolio}>
                        <div className={style.user__main_portfolio_avatar}>
                            <Image width={80} height={80} alt="avatar" src={data.avatar}/>
                        </div>
                        <div className={style.user__main_portfolio_row}>
                            <h3 className={style.need_center}>{data.name} {data.surname}</h3>
                            <p className={`${style.portfolio_sub} ${style.need_center}`}>@temirkhanrustemov</p>
                        </div>
                    </div>}
                    <div className={`${style.main__block_user_row}`}>
                        <Link href="/user/history" prefetch={false}>
                        <div className={`${style.main__block_user} anim_hover`}>
                            <div className={`${style.main__block_user_image} blue_background`}>
                                <div className={style.main__block_user_image_row}>
                                    <Image width={24} height={24} alt="icon" src="/img/history.svg"/>
                                </div>
                            </div>
                            <p>{translate['recent'][lang]}</p>
                        </div>
                        </Link>
                        <Link href="/user/favourite" prefetch={false}>
                        <div className={`${style.main__block_user} anim_hover`}>
                            <div className={`${style.main__block_user_image} red_background`}>
                                <div className={style.main__block_user_image_row}>
                                    <Image width={24} height={24} alt="icon" src="/img/heart.svg"/>
                                </div>
                            </div>
                            <p>{translate['favorites'][lang]}</p>
                        </div>
                        </Link>
                        <div className={`${style.main__block_user} anim_hover`}>
                            <div className={`${style.main__block_user_image} grey_background`}>
                                <div className={style.main__block_user_image_row}>
                                    <Image width={24} height={24} alt="icon" src="/img/manage_accounts.svg"/>
                                </div>
                            </div>
                            <p>{translate['settings'][lang]}</p>
                        </div>
                        <div onClick={()=>logOut()} className={`${style.main__block_user} anim_hover`}>
                            <div className={`${style.main__block_user_image} orange_background`}>
                                <div className={style.main__block_user_image_row}>
                                    <Image width={24} height={24} alt="icon" src="/img/logout.svg"/>
                                </div>
                            </div>
                            <p>{translate['logout'][lang]}</p>
                        </div>
                    </div>
                </div>
    );
};
export default HeaderUser; 
/*jshint esversion: 6 */
import style from "/styles/user/index.module.css";
import Image from 'next/image';
import Link from 'next/link';
import useTranslateText from "/start/translate";
import translate from "/translate/user/index_translate";
const AesEncryption = require('aes-encryption');


const HeaderUser = (item) => {
    const result = item.item!==null?item.item:null;
    const lang = useTranslateText();
    const aes = new AesEncryption();
    aes.setSecretKey(process.env.aesKey);
    const logOut = () => {
        document.cookie = 'accessToken' + '=;Max-Age=0;path=/';
        window.location.href="/";
    };
    return(
        <div className={style.user__main_row}>
            <div className={style.no_center}>
                    {result!==false &&
                    <div className={style.user__main_portfolio}>
                        <div className={style.user__main_portfolio_avatar}>
                            <Image priority width={80} height={80} alt="avatar" src={aes.decrypt(result.avatar)}/>
                        </div>
                        <div className={style.user__main_portfolio_row}>
                            <h3 className={style.need_center}>{aes.decrypt(result.name)} {aes.decrypt(result.surname)}</h3>
                            <p className={`${style.portfolio_sub} ${style.need_center}`}>@{aes.decrypt(result.login)}</p>
                        </div>
                    </div>}
                    <div className={`${style.main__block_user_row}`}>
                        <Link href="/user/history" prefetch={false}>
                        <div className={`${style.main__block_user} anim_hover`}>
                            <div className={`${style.main__block_user_image} blue_background`}>
                                <div className={style.main__block_user_image_row}>
                                    <Image priority width={24} height={24} alt="icon" src="/img/history.svg"/>
                                </div>
                            </div>
                            <p>{translate['recent'][lang]}</p>
                        </div>
                        </Link>
                        <Link href="/user/favourite" prefetch={false}>
                        <div className={`${style.main__block_user} anim_hover`}>
                            <div className={`${style.main__block_user_image} red_background`}>
                                <div className={style.main__block_user_image_row}>
                                    <Image priority width={24} height={24} alt="icon" src="/img/heart.svg"/>
                                </div>
                            </div>
                            <p>{translate['favorites'][lang]}</p>
                        </div>
                        </Link>
                        <div className={`${style.main__block_user} anim_hover`}>
                            <div className={`${style.main__block_user_image} grey_background`}>
                                <div className={style.main__block_user_image_row}>
                                    <Image priority width={24} height={24} alt="icon" src="/img/manage_accounts.svg"/>
                                </div>
                            </div>
                            <p>{translate['settings'][lang]}</p>
                        </div>
                        <div onClick={()=>logOut()} className={`${style.main__block_user} anim_hover`}>
                            <div className={`${style.main__block_user_image} orange_background`}>
                                <div className={style.main__block_user_image_row}>
                                    <Image priority width={24} height={24} alt="icon" src="/img/logout.svg"/>
                                </div>
                            </div>
                            <p>{translate['logout'][lang]}</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};
export default HeaderUser; 
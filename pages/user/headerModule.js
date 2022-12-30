/*jshint esversion: 6 */
import style from "/styles/user/index.module.css";
import Image from 'next/image';
import Link from 'next/link';
import useTranslateText from "/start/translate";
import translate from "/translate/user/index_translate";

const HeaderUser = () => {
    const lang = useTranslateText();
    return(
        <div className={style.user__main_row}>
                    <div className={style.user__main_portfolio}>
                        <div className={style.user__main_portfolio_avatar}>
                            <Image width={80} height={80} alt="avatar" src="/img/3600ABB7-7824-467A-BB26-6E86CDD1EC91.webp"/>
                        </div>
                        <div className={style.user__main_portfolio_row}>
                            <h3 className={style.need_center}>Temirkhan Rustemov</h3>
                            <p className={`${style.portfolio_sub} ${style.need_center}`}>@temirkhanrustemov</p>
                        </div>
                    </div>
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
                        <div className={`${style.main__block_user} anim_hover`}>
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
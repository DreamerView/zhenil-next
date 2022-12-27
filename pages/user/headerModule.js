/*jshint esversion: 6 */
import style from "/styles/user/index.module.css";
import Image from 'next/image';
import Link from 'next/link';
const HeaderUser = () => {
    return(
        <div className={style.user__main_row}>
                    <div className={style.user__main_portfolio}>
                        <div className={style.user__main_portfolio_avatar}>
                            <Image layout='fill' alt="avatar" src="/img/3600ABB7-7824-467A-BB26-6E86CDD1EC91.webp"/>
                        </div>
                        <div className={style.user__main_portfolio_row}>
                            <h3 className={style.need_center}>Temirkhan Rustemov</h3>
                            <p className={`${style.portfolio_sub} ${style.need_center}`}>@temirkhanrustemov</p>
                        </div>
                    </div>
                    <div className={`${style.main__block_user_row}`}>
                        <Link href="/user/history" prefetch={false}>
                        <a>
                        <div className={`${style.main__block_user} anim_hover`}>
                            <div className={`${style.main__block_user_image} blue_background`}>
                                <div className={style.main__block_user_image_row}>
                                    <Image layout='fill' alt="icon" src="/img/history.svg"/>
                                </div>
                            </div>
                            <p>Недавние</p>
                        </div>
                        </a>
                        </Link>
                        <Link href="/user/favourite" prefetch={false}>
                        <a>
                        <div className={`${style.main__block_user} anim_hover`}>
                            <div className={`${style.main__block_user_image} orange_background`}>
                                <div className={style.main__block_user_image_row}>
                                    <Image layout='fill' alt="icon" src="/img/favourite.svg"/>
                                </div>
                            </div>
                            <p>Избранные</p>
                        </div>
                        </a>
                        </Link>
                        <div className={`${style.main__block_user} anim_hover`}>
                            <div className={`${style.main__block_user_image} grey_background`}>
                                <div className={style.main__block_user_image_row}>
                                    <Image layout='fill' alt="icon" src="/img/manage_accounts.svg"/>
                                </div>
                            </div>
                            <p>Настройки</p>
                        </div>
                        <div className={`${style.main__block_user} anim_hover`}>
                            <div className={`${style.main__block_user_image} red_background`}>
                                <div className={style.main__block_user_image_row}>
                                    <Image layout='fill' alt="icon" src="/img/logout.svg"/>
                                </div>
                            </div>
                            <p>Выйти</p>
                        </div>
                    </div>
                </div>
    );
};
export default HeaderUser; 
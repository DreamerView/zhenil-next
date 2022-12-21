import NavbarApp from '/pages/navbar_app/nav';
import style from "/styles/user/index.module.css";
import Image from 'next/image';

const UserInterface = () => {
    return(
    <>
        <NavbarApp to={{href:"/"}} choice="alone"/>
        <div className="main_app block_animation">
            <div className={style.user__main}>
                <div className={style.user__main_row}>
                    <div className={style.user__main_portfolio}>
                        <div className={style.user__main_portfolio_avatar}>
                            <Image layout='fill' alt="avatar" src="/img/3600ABB7-7824-467A-BB26-6E86CDD1EC91.webp"/>
                        </div>
                        <div className={style.user__main_portfolio_row}>
                            <h1 className={style.need_center}>Temirkhan Rustemov</h1>
                            <p className={`${style.portfolio_sub} ${style.need_center}`}>@temirkhanrustemov</p>
                        </div>
                    </div>
                    <p>Founder @okki.kz</p>
                    <div className={style.user__main_action}>
                        <button className={`${style.button_follow} anim_hover`}>Follow</button>
                        <button className={`${style.button_more} anim_hover`}>Contact</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default UserInterface;
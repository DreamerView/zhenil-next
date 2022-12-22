import NavbarApp from '/pages/navbar_app/nav';
import style from "/styles/user/index.module.css";
import Image from 'next/image';
import Link from 'next/link';


const UserInterface = () => {
    // const [history,setHistory] = useState()
    const historyAction = () => {
        const history = JSON.parse(localStorage.getItem('historyAction'));
        const action = history?history:[];
        const checkExp = [...action,{name:'asdasd',time:Date.now()}];
        const key = 'name';
        const historyResult = [...new Map(checkExp.map(item =>[item[key], item])).values()];
        localStorage.setItem('historyAction',JSON.stringify(historyResult))
    };
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
                    <div className={`${style.main__block_user_row}`}>
                        <Link href="/" prefetch={false}>
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
                        <div onClick={()=>historyAction()} className={`${style.main__block_user} anim_hover`}>
                            <div className={`${style.main__block_user_image} orange_background`}>
                                <div className={style.main__block_user_image_row}>
                                    <Image layout='fill' alt="icon" src="/img/favourite.svg"/>
                                </div>
                            </div>
                            <p>Избранные</p>
                        </div>
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
            </div>
        </div>
    </>
    );
};

export default UserInterface;
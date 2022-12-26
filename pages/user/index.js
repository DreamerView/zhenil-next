import NavbarApp from '/pages/navbar_app/nav';
import style from "/styles/user/index.module.css";
import HistoryUser from './historyModule';
import HeaderUser from './headerModule';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';


const UserInterface = () => {
    const router = useRouter();
    console.log(router.query);
    const isTabletOrMobile = useMediaQuery({ query: '(min-width:1px) and (max-width:750px)' })
    return(
    <>
        <NavbarApp to={{href:"/"}} choice="alone"/>
        <div className="main_app block_animation">
            <div className={style.user__main}>
                <HeaderUser/>
                {isTabletOrMobile?"":<HistoryUser/>}
            </div>
        </div>
    </>
    );
};

export default UserInterface;
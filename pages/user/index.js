/*jshint esversion: 6 */

import NavbarApp from '/pages/navbar_app/nav';
import style from "/styles/user/index.module.css";
import HistoryUser from './historyModule';
import HeaderUser from './headerModule';
import { useMediaQuery } from 'react-responsive';

const UserInterface = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(min-width:1px) and (max-width:750px)' });
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
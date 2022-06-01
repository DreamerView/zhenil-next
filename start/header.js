/*jshint esversion: 6 */
import { useState,useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import Image from 'next/image';
import useConfirm from '../pages/conf';

const Header = () => {
  const [confirm,setConfirm] = useState(null);
  const [con,setCon] = useState(false);
  const [conf] = useConfirm(confirm);
  const [result,setResult] = useState("");
  const checkMode = useMediaQuery({query:'(prefers-color-scheme: dark)'});
  const SetLanguage = () => {
    setConfirm({type:"language",name:"Выбор языка",content:`Выберите пожалуйста ваш язык`});
    // setCon(res);
  }
  useEffect(()=>{
        return checkMode===true?setResult("-night"):setResult("");
  },[checkMode]);
    return(
        <header>
    <div className="header__logo">
      <Link href='/'>
        <a>
      <div className="header__logo_pic">
        <Image width={126} height={30} priority className="header__logo_img" src={"/img/logo"+result+".webp"} alt="Logo"  />
      </div>
      </a>
      </Link>
    </div>
    <div className="header__action">
      <div className="header__action_image">
        <Image width={46} height={46} className="header__action_avatar" src="/img/3600ABB7-7824-467A-BB26-6E86CDD1EC91.webp" alt="avatar" placeholder="blur" blurDataURL="/img/3600ABB7-7824-467A-BB26-6E86CDD1EC91.webp" />
      </div>
      <div className="header__action_block" onClick={()=>{SetLanguage()}}>
        <span className="header__action_block_text">EN</span>
        <div className="header__search_menu_pic">
          <Image width={22} height={22} className="header__search_menu_img" src={"/img/top"+result+".svg"} alt="icon" />
        </div>
      </div>
    </div>
    <div className="header__search">
      <input placeholder="Search over 30 million book titles" className="header__search_input" type="text" />

      <div className="header__search_menu">
        <div className="header__search_menu_pic" id="search_menu">
          <Image width={22} height={22} className="header__search_menu_img" src={"/img/menu"+result+".svg"} alt="icon" />
        </div>
        <span className="header__search_menu_text">Menu</span>
      </div>
    </div>
  </header>
    );
}

export default Header;
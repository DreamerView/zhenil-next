import { useState,useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';

const Header = () => {
  const [result,setResult] = useState("");
  const checkMode = useMediaQuery({query:'(prefers-color-scheme: dark)'});
  useEffect(()=>{
        checkMode===true?setResult("-night"):setResult("");
  },[checkMode])
    return(
        <header>
    <div className="header__logo">
      <Link href='/'>
        <a>
      <div className="header__logo_pic">
        <img width={126} height={30} loading="lazy" className="header__logo_img" src={"/img/logo"+result+".webp"} alt="Logo" />
      </div>
      </a>
      </Link>
    </div>
    <div className="header__action">
      <img width={46} height={46} loading="lazy" className="header__action_avatar" src="/img/3600ABB7-7824-467A-BB26-6E86CDD1EC91.webp" alt="avatar" />
      <div className="header__action_block">
        <span className="header__action_block_text">EN</span>
        <div className="header__search_menu_pic">
          <img width={22} height={22} loading='lazy' className="header__search_menu_img" src={"/img/top"+result+".svg"} alt="icon" />
        </div>
      </div>
    </div>
    <div className="header__search">
      <input placeholder="Search over 30 million book titles" className="header__search_input" type="text" />

      <div className="header__search_menu">
        <div className="header__search_menu_pic" id="search_menu">
          <img width={22} height={22} loading="lazy" className="header__search_menu_img" src={"/img/menu"+result+".svg"} alt="icon" />
        </div>
        <span className="header__search_menu_text">Menu</span>
      </div>
    </div>
  </header>
    );
}

export default Header;
/*jshint esversion: 6 */
import dynamic from 'next/dynamic';
import { useState,useEffect} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import translate from "/translate/header_translate";
import text from "/translate/seo_index";
import { useDispatch } from 'react-redux';
import Search from "/start/header_action/search";
const SearchBlocks = dynamic(()=>import('/start/header_action/searchblocks'),{ssr:false});
const UserIndex = dynamic(()=>import('/start/user/index'),{ssr:true});

const Header = () => {
    const send = useDispatch();
    const router = useRouter();
    const {locale} = router;
    const [search,setSearch] = useState([]);
    const [list,setList] = useState('');
    const [res,setRes] = useState(false);
    const [timeOut,setTime] = useState(false);
    const SetLanguage = () => {
        return send({type:"SetAction",set:{type:'language',name:translate.translate_title[locale],content:translate.translate_content[locale]}});
    };
    const GetResult = e => {
      return setSearch(e);
    };
    const GetList = e => {
      return setList(e);
    };
    const RefRes = s => {
      return setRes(s);
    };
    useEffect(()=>{
      let timer;
      if(res===false) {
        timer = setTimeout(()=>{
          setTime(false);
          send({type:"actionMain",set:false});
        },[150]);
      } else if (res===true) {
          setTime(true);
          send({type:"actionMain",set:true});
      }
      return () => {
        clearInterval(timer);
      };
    },[res]);
    useEffect(()=>{
        let box = document.querySelector('header');
        let height = box.clientHeight;
        send({type:"setHeaderHeight",set:height});
        return () => {
          return 0;
        };
    });
    return(
      <>
        <Head>
          <meta name="author" content={process.env.authorName}/>
          <meta name="publisher" content={process.env.authorName}/>
          <meta name="robots" content="index,follow"/>
        </Head>
        <header>
          <div className="header__logo">
            <Link href='/' prefetch={false}>
              <a title={text['title'][locale]}>
                <div className='header__logo_p'>
                  <div className="header__logo_pic anim_hover"></div>
                </div>
            </a>
            </Link>
          </div>
          <div className="header__action">
            <UserIndex item={{login:false}}/>
            <div onClick={()=>SetLanguage()} className="header__action_block anim_hover">
            <span className="header__action_block_text">{locale}</span>
            <div className="header__search_menu_pic"></div>
          </div>
          </div>
          <div className="header__search">
          {res?"":
            <Link href="/" prefetch={false}>
              <a title={text['title'][locale]}>
                <div className="header__search_menu anim_hover">
                  <div className="header__search_menu_pic1" id="search_menu"></div>
                  <span className="header__search_menu_text">{translate['menu'][locale]}</span>
                </div>
              </a>
            </Link>
            }
            <>
            <Search accept={RefRes} text={translate['search'][locale]} list={list} change={GetResult}/>
            {timeOut?
            <div className='header__search_blocks'>
              {search.length===0?
                <p>{translate['search_not'][locale]}</p>:
              <>
                <p>{translate['search_found'][locale]}</p>
                <div>{search.map((v,i)=><SearchBlocks item={v} key={i+1} send={GetList}/>)}</div>
              </>}
            </div>
            :""}
            </>
            
          </div>
        </header>
      </>
    );
}

export default Header;
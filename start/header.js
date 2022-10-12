/*jshint esversion: 6 */
import dynamic from 'next/dynamic';
import { useState,useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import translate from "/translate/header_translate";
import text from "/translate/seo_index";
import { useDispatch } from 'react-redux';
import Search from "/start/header_action/search";
const SearchBlocks = dynamic(()=>import('/start/header_action/searchblocks'),{ssr:false});

const Header = () => {
    useEffect(()=>{
        sessionStorage.setItem('p-key',process.env.private);
    },[])
    const send = useDispatch();
    const router = useRouter();
    const {locale} = router;
    const [search,setSearch] = useState([]);
    const [list,setList] = useState('')
    const [res,setRes] = useState(false);
    const [timeOut,setTime] = useState(false);
    const SetLanguage = () => {
        send({type:"SetAction",set:{type:'language',name:translate.translate_title[locale],content:translate.translate_content[locale]}});
    };
    const GetResult = (e) => {
      setSearch(e);
    };
    const GetList = (e) => {
      setList(e);
    };
    const RefRes = (s) => {
      setRes(s);
    };
    useEffect(()=>{
      if(res===false) {
        setTimeout(()=>{
          setTime(false);
          send({type:"actionMain",set:false});
        },[150]);
      } else if (res===true) {
          setTime(true);
          send({type:"actionMain",set:true});
      }
    },[res]);
    return(
      <>
        <Head>
          {/* <Script id="Adsense-id"
                  async="true"
                  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5806636427537486"
                  strategy="beforeInteractive"/> */}
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
            <div className="header__action_image anim_hover">
              <Image priority title={`Avatar`} layout='fill' className="header__action_avatar" src="/img/3600ABB7-7824-467A-BB26-6E86CDD1EC91.webp" alt="avatar" />
            </div>
          
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
/*jshint esversion: 6 */
import React,{memo} from "react";
import Link from "next/link";
import nav_translate from "/translate/services/all_translate";
import ux from "/translate/ux/action";
import useTranslateText from "/start/translate";

const NavbarApp = ({to,choice}) => {
    const lang = useTranslateText();
    const result = to!=='undefined'?to:[{}];
    return(
        <>
        {choice!=='alone'?
        <div className="main__nav block_animation">
            <p className="nav">
            <Link href="/" prefetch={false}><b className="b_color">{nav_translate['home'][lang]}  /</b></Link>  
            {result?
            result.map((sends,index)=>
                <React.Fragment key={index}>
                {sends.path==='last'?
                sends.text?<>{sends.text}</>:
                <>{nav_translate[sends.key][lang]}</>:
                sends.text?<><Link href={sends.location} prefetch={false}>{sends.text}</Link>  /  </>:
                <><Link href={sends.location} prefetch={false}>{nav_translate[sends.key][lang]}</Link>  /  </>
                 
                }
                </React.Fragment>
                )
            :''}
            </p>
        </div>:<Link href={to.href} prefetch={false}>
                <a>
                <div className='main_back anim_hover'>
                <div className='main_back_button'>
                    <div className='main_back_button_i'></div>
                </div>
                <p>{ux['back'][lang]}</p>
                </div>
                </a>
                </Link>
        }
        </>
    )
}

export default memo(NavbarApp);
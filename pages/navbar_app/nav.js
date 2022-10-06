import React from "react";
import Link from "next/link";
import nav_translate from "/translate/services/all_translate";
import useTranslateText from "/start/translate";

const NavbarApp = ({to}) => {
    const lang = useTranslateText();
    const result = to!=='undefined'?to:[{}];
    return(
        
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
        </div>
    )
}

export default NavbarApp;
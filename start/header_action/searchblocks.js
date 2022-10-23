/*jshint esversion: 6 */
import translate from "/translate/services/all_translate";
import type_translate from "/translate/services/type_translate";
import { useRouter } from "next/router";
import style from '/styles/search_block.module.css';
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

const SearchBlocks = (res) => {
    const router = useRouter();
    const {locale} = router;
    return(
        <>
            <Link href={res.item.location} prefetch={false} ><a>
            <div className={`${style.search__block} basic_animation`} onClick={()=>res.send(translate[res.item.name][locale])}>
                {res.item.type==='category'?
                <div>
                <div className={`${style.search__block_image} ${res.item.image_background}`}>
                    <div className={style.search__block_pic}>
                        <Image priority layout="fill" src={res.item.image}/>
                    </div>
                </div></div>:
                    <div><div className={`${style.search__block_image_s}`}>
                        <Image layout="fill" className={`${style.search__block_image_i}`} src={res.item.image}/>
                    </div></div>
                }
                <div className={style.search__block_content}>
                    <h5>{translate[res.item.name][locale]}</h5>
                    <p className={style.smaller}>{type_translate[res.item.type][locale]}</p>
                </div>
            </div>
            </a></Link>
        </>
    )
};
export default memo(SearchBlocks);
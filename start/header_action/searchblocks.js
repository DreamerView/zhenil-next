import translate from "../../translate/services/all_translate";
import type_translate from "../../translate/services/type_translate";
import { useRouter } from "next/router";
import style from '../../styles/search_block.module.css';
import Image from "next/image";
import Link from "next/link";

const SearchBlocks = (res) => {
    const router = useRouter();
    const {locale} = router;
    return(
        <>
            <Link href={res.item.location}><a>
            <div className={`${style.search__block} basic_animation`}>
                {res.item.type==='category'?
                <div className={`${style.search__block_image} ${res.item.image_background}`}>
                    <Image width={26} height={26} src={res.item.image}/>
                </div>:
                    <div className={`${style.search__block_image_s}`}>
                        <Image width={38} height={38} className={`${style.search__block_image_i}`} priority src={res.item.image}/>
                    </div>
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
export default SearchBlocks;
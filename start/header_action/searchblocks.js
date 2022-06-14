import translate from "../../translate/index_translate";
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
                <div className={`${style.search__block_image} ${res.item.image_background}`}>
                    <Image width={26} height={26} src={res.item.image}/>
                </div>
                <div className={style.search__block_content}>
                    <h5>{translate[res.item.name][locale]}</h5>
                    <p className={style.smaller}>Категория</p>
                </div>
            </div>
            </a></Link>
        </>
    )
};
export default SearchBlocks;
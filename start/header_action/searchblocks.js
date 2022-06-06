import translate from "../../translate/index_translate";
import { useRouter } from "next/router";
import style from '../../styles/search_block.module.css';
import Image from "next/image";
const SearchBlocks = (res) => {
    const router = useRouter();
    const {locale} = router;
    // console.log(res.item.length)
    // console.log(res.item.name)
    return(
        <>
            <div className={style.search__block}>
                <div className={`${style.search__block_image} ${res.item.image_background}`}>
                    <Image width={26} height={26} src={res.item.image}/>
                </div>
                <div className={style.search__block_content}>
                    <h5>{translate[res.item.name][locale]}</h5>
                    <p className={style.smaller}>Here’s notification text.</p>
                </div>
            </div>
        </>
    )
};
export default SearchBlocks;
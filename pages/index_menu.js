import Image from "next/image";
import Link from "next/link";
import translate from "../translate/index_translate";
import nav_translate from "../translate/services/all_translate";
import styles from '../styles/index_main.module.css';
import service from '../start/services/all.json';

const IndexMenu = (s) => {
    const locale = s.lang;
    return(
        <>
            <div itemScope itemType="https://schema.org/BreadcrumbList" className={`${styles.main__menu_nav} block_animation`}>
            <div className={styles.main__menu_nav_blocks}>
            {service.filter(e=>{return e.type === 'category'}).map((e,index)=>
                <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" key={index+1}>
                <Link href={e.location} prefetch={false}>
                <a title={nav_translate[e.name][locale]} itemID={e.location} itemType="https://schema.org/Thing" itemScope itemProp="item">
                    <div className={`${styles.main__menu_nav_block} anim_hover`}>
                    <div className={`${styles.main__menu_nav_block_image} ${e.image_background}`}>
                        <div className={`${styles.main__menu_nav_block_image_pic}`}>
                        <Image priority title={translate[e.name][locale]} layout="fill" src={e.image} alt="icon"/>
                        </div>
                    </div>
                    <span className={styles.nav_header} itemProp="name">{nav_translate[e.name][locale]}</span>
                    </div>
                </a>
                </Link>
                <meta itemProp="position" content={index+1} />
            </div>
            )}
            </div>
        </div>
        </>
    )
};

export default IndexMenu;
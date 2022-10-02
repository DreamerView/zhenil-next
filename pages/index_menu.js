import Image from "next/image";
import Link from "next/link";
import translate from "../translate/index_translate";
import nav_translate from "../translate/services/all_translate";
import styles from '../styles/index_main.module.css';

const IndexMenu = (s) => {
    const locale = s.lang;
    return(
        <>
            <div itemScope itemType="https://schema.org/BreadcrumbList" className={`${styles.main__menu_nav} block_animation`}>
        <div className={styles.main__menu_nav_blocks}>
          <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/constructor" prefetch={false}>
              <a title={nav_translate['constructor'][locale]} itemID="/constructor" itemType="https://schema.org/Thing" itemScope itemProp="item">
                <div className={`${styles.main__menu_nav_block} anim_hover`}>
                  <div className={`${styles.main__menu_nav_block_image} green_background`}>
                    <div className={`${styles.main__menu_nav_block_image_pic}`}>
                      <Image priority title={translate['constructor'][locale]} layout="fill" src={`/icons/constructor.svg`} alt="icon"/>
                    </div>
                  </div>
                  <span className={styles.nav_header} itemProp="name">{nav_translate['constructor'][locale]}</span>
                </div>
              </a>
            </Link>
            <meta itemProp="position" content="1" />
          </div>
          <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/calculator" prefetch={false}>
              <a title={nav_translate['calculator'][locale]} itemID="/calculator" itemType="https://schema.org/Thing" itemScope itemProp="item">
                <div className={`${styles.main__menu_nav_block} anim_hover`}>
                  <div className={`${styles.main__menu_nav_block_image} grey_background`}>
                    <div className={`${styles.main__menu_nav_block_image_pic}`}>
                      <Image priority title={translate['calculator'][locale]} layout="fill" src={`/icons/calculate.svg`} alt="icon"/>
                    </div>
                  </div>
                  <span className={styles.nav_header} itemProp="name">{nav_translate['calculator'][locale]}</span>
                </div>
              </a>
            </Link>
            <meta itemProp="position" content="2" />
          </div>
          <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/business" prefetch={false}>
              <a title={nav_translate['business'][locale]} itemID="/business" itemType="https://schema.org/Thing" itemScope itemProp="item">
                <div className={`${styles.main__menu_nav_block} anim_hover`}>
                  <div className={`${styles.main__menu_nav_block_image} blue_background`}>
                    <div className={`${styles.main__menu_nav_block_image_pic}`}>
                      <Image priority title={translate['business'][locale]} layout="fill" src={`/icons/work.svg`} alt="icon"/>
                    </div>
                  </div>
                  <span className={styles.nav_header} itemProp="name">{nav_translate['business'][locale]}</span>
                </div>
              </a>
            </Link>
            <meta itemProp="position" content="3" />
          </div>
          <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/education" prefetch={false}>
              <a title={translate['education'][locale]} itemID="/education" itemType="https://schema.org/Thing" itemScope itemProp="item">
                <div className={`${styles.main__menu_nav_block} anim_hover`}>
                  <div className={`${styles.main__menu_nav_block_image} purple_background`}>
                    <div className={`${styles.main__menu_nav_block_image_pic}`}>
                      <Image priority title={translate['education'][locale]} layout="fill" src={`/icons/education.svg`} alt="icon"/>
                    </div>
                  </div>
                  <span className={styles.nav_header} itemProp="name">{nav_translate['education'][locale]}</span>
                </div>
              </a>
            </Link>
            <meta itemProp="position" content="4" />
          </div>
          <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/health" prefetch={false}>
              <a title={translate['health'][locale]} itemID="/health" itemType="https://schema.org/Thing" itemScope itemProp="item">
                <div className={`${styles.main__menu_nav_block} anim_hover`}>
                  <div className={`${styles.main__menu_nav_block_image} red_background`}>
                    <div className={`${styles.main__menu_nav_block_image_pic}`}>
                      <Image priority title={translate['health'][locale]} layout="fill" src={`/icons/health.svg`} alt="icon"/>
                    </div>
                  </div>
                  <span className={styles.nav_header} itemProp="name">{nav_translate['health'][locale]}</span>
                </div>
              </a>
            </Link>
            <meta itemProp="position" content="5" />
          </div>
          <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/finance" prefetch={false}>
              <a title={translate['finance'][locale]} itemID="/finance" itemType="https://schema.org/Thing" itemScope itemProp="item">
                <div className={`${styles.main__menu_nav_block} anim_hover`}>
                  <div className={`${styles.main__menu_nav_block_image} green_background`}>
                    <div className={`${styles.main__menu_nav_block_image_pic}`}>
                      <Image priority title={translate['finance'][locale]} layout="fill" src={`/icons/finance.svg`} alt="icon"/>
                    </div>
                  </div>
                  <span className={styles.nav_header} itemProp="name">{nav_translate['finance'][locale]}</span>
                </div>
              </a>
            </Link>
            <meta itemProp="position" content="6" />
          </div>
          <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/technology" prefetch={false}>
              <a title={translate['tech'][locale]} itemID="/technology" itemType="https://schema.org/Thing" itemScope itemProp="item">
                <div className={`${styles.main__menu_nav_block} anim_hover`}>
                  <div className={`${styles.main__menu_nav_block_image} brand_background`}>
                    <div className={`${styles.main__menu_nav_block_image_pic}`}>
                      <Image priority title={translate['tech'][locale]} layout="fill" src={`/icons/tech.svg`} alt="icon"/>
                    </div>
                  </div>
                  <span className={styles.nav_header} itemProp="name">{translate['tech'][locale]}</span>
                </div>
              </a>
            </Link>
            <meta itemProp="position" content="7" />
          </div>
          <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/others" prefetch={false}>
              <a title={translate['others'][locale]} itemID="/others" itemType="https://schema.org/Thing" itemScope itemProp="item">
                <div className={`${styles.main__menu_nav_block} anim_hover`}>
                  <div className={`${styles.main__menu_nav_block_image} orange_background`}>
                    <div className={`${styles.main__menu_nav_block_image_pic}`}>
                      <Image priority title={translate['others'][locale]} layout="fill" src={`/icons/other.svg`} alt="icon"/>
                    </div>
                  </div>
                  <span className={styles.nav_header} itemProp="name">{translate['others'][locale]}</span>
                </div>
              </a>
            </Link>
            <meta itemProp="position" content="8" />
          </div>
        </div>
      </div>
        </>
    )
};

export default IndexMenu;
/*jshint esversion: 6 */
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from '../styles/index_main.module.css';
import useTranslateText from "../start/translate";
import translate from "../translate/index_translate";
import nav_translate from "../translate/services/all_translate";

const Home = () => {
  const locale = useTranslateText();
  return(
    <>
      <Head>
        <title>{translate['title'][locale]}</title>
      </Head>
      <div itemScope itemType="https://schema.org/BreadcrumbList" className={`${styles.main__menu_nav} block_animation`}>
        <div className={styles.main__menu_nav_blocks}>
          <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/constructor">
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
            <Link href="/calculator">
              <a title={nav_translate['calculator'][locale]} itemID="/calculator" itemType="https://schema.org/Thing" itemScope itemProp="item">
                <div className={`${styles.main__menu_nav_block} anim_hover`}>
                  <div className={`${styles.main__menu_nav_block_image} red_background`}>
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
            <Link href="/business">
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
            <Link href="/education">
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
            <Link href="/health">
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
            <Link href="/finance">
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
            <Link href="/technology">
              <a title={translate['tech'][locale]} itemID="/technology" itemType="https://schema.org/Thing" itemScope itemProp="item">
                <div className={`${styles.main__menu_nav_block} anim_hover`}>
                  <div className={`${styles.main__menu_nav_block_image} blue_background`}>
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
            <Link href="/others">
              <a title={translate['others'][locale]} itemID="/others" itemType="https://schema.org/Thing" itemScope itemProp="item">
                <div className={`${styles.main__menu_nav_block} anim_hover`}>
                  <div className={`${styles.main__menu_nav_block_image} purple_background`}>
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
      <div className="main block_animation">
          <h1 className="flex_text">{translate['popular'][locale]} <div className="emoji_h1"><Image title={`Apple emoji (Used for informational purposes only)`} priority src={"/icons/fire.webp"} layout="fill" alt="emoji"/></div></h1>
          <p className="sub_content">{translate['popular_subtext'][locale]}</p>
          <div className={styles.main__index_block_row}>
            <Link href="/constructor/acc">
              <a title={nav_translate['acc_const'][locale]}>
                <div className={`${styles.main__index_block_row_b} anim_hover`}>
                  <div className={styles.main__index_block}>
                    <div className={styles.main__index_block_pic}>
                      <Image priority title={nav_translate['acc_const'][locale]}  layout="fill" alt="service" className={styles.main__index_block_img} src="/services/badge.webp" placeholder="blur" blurDataURL="/services/badge.webp"/>
                    </div>
                  </div>
                  <span className="head">{nav_translate['acc_const'][locale]}</span>
                </div>
              </a>
            </Link>
            <Link href="/health/bmi-calculator">
              <a title={nav_translate['bmi_calc'][locale]}>
                <div className={`${styles.main__index_block_row_b} anim_hover`}>
                  <div className={styles.main__index_block}>
                    <div className={styles.main__index_block_pic}>
                      <Image priority title={nav_translate['bmi_calc'][locale]} layout="fill" alt="service" className={styles.main__index_block_img} src="/services/bmi.webp" placeholder="blur" blurDataURL="/services/bmi.webp"/>
                    </div>
                  </div>
                  <span className="head">{nav_translate['bmi_calc'][locale]}</span>
                </div>
              </a>
            </Link>
            <Link  href="/finance/deposit">
              <a title={nav_translate['deposit_calc'][locale]}>
                <div className={`${styles.main__index_block_row_b} anim_hover`}>
                  <div className={styles.main__index_block}>
                    <div className={styles.main__index_block_pic}>
                      <Image priority title={nav_translate['deposit_calc'][locale]} layout="fill" alt="service" className={styles.main__index_block_img} src="/services/deposit.webp" placeholder="blur" blurDataURL="/services/deposit.webp"/>
                    </div>
                  </div>
                  <span className="head">{nav_translate['deposit_calc'][locale]}</span>
                </div>
              </a>
            </Link>
            <Link href="/health/ideal-weight">
              <a title={nav_translate['ideal_weight_calc'][locale]}>
                <div className={`${styles.main__index_block_row_b} anim_hover`}>
                  <div className={styles.main__index_block}>
                    <div className={styles.main__index_block_pic}>
                      <Image priority title={nav_translate['ideal_weight_calc'][locale]} layout="fill" alt="service (Metabolism vector created by pch.vector)" className={styles.main__index_block_img} src="/services/ideal-weight.webp" placeholder="blur" blurDataURL="/services/ideal-weight.webp"/>
                    </div>
                  </div>
                  <span className="head">{nav_translate['ideal_weight_calc'][locale]}</span>
                </div>
              </a>
            </Link>
            <div className={`${styles.main__index_block_row_b} anim_hover`}>
              <div className={styles.main__index_block}>
                
              </div>
              <span className="head">Lorem Ipsum</span>
            </div>
            <div className={`${styles.main__index_block_row_b} anim_hover`}>
              <div className={styles.main__index_block}></div>
              <span className="head">Lorem Ipsum</span>
            </div>
            <div className={`${styles.main__index_block_row_b} anim_hover`}>
              <div className={styles.main__index_block}></div>
              <span className="head">Lorem Ipsum</span>
            </div>
            <div className={`${styles.main__index_block_row_b} anim_hover`}>
              <div className={styles.main__index_block}></div>
              <span className="head">Lorem Ipsum</span>
            </div>
            <div className={`${styles.main__index_block_row_b} anim_hover`}>
              <div className={styles.main__index_block}></div>
              <span className="head">Lorem Ipsum</span>
            </div>
            <div className={`${styles.main__index_block_row_b} anim_hover`}>
              <div className={styles.main__index_block}></div>
              <span className="head">Lorem Ipsum</span>
            </div>
          </div>
      </div>
    </>
  )
};

export default Home;

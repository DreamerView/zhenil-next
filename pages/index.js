/*jshint esversion: 6 */
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from '../styles/index_main.module.css';
import useTranslateText from "./translate";
import translate from "../translate/index_translate";
import nav_translate from "../translate/services/all_translate";

const Home = () => {
  const locale = useTranslateText();
  return(
    <>
      <Head>
        <title>{translate['title'][locale]}</title>
      </Head>
      <div className={`${styles.main__menu_nav} block_animation`}>
        <div className={styles.main__menu_nav_blocks}>
          <Link href="/constructor">
            <a>
              <div className={`${styles.main__menu_nav_block} anim_hover`}>
                <div className={`${styles.main__menu_nav_block_image} green_background`}>
                  <div className={`${styles.main__menu_nav_block_image_pic}`}>
                    <Image loading="lazy" layout="fill" src={`/icons/constructor.svg`} alt="icon"/>
                  </div>
                </div>
                <span className={styles.nav_header}>{nav_translate['constructor'][locale]}</span>
              </div>
            </a>
          </Link>
          <Link href="/calculator">
            <a>
              <div className={`${styles.main__menu_nav_block} anim_hover`}>
                <div className={`${styles.main__menu_nav_block_image} red_background`}>
                  <div className={`${styles.main__menu_nav_block_image_pic}`}>
                    <Image loading="lazy" layout="fill" src={`/icons/calculate.svg`} alt="icon"/>
                  </div>
                </div>
                <span className={styles.nav_header}>{nav_translate['calculator'][locale]}</span>
              </div>
            </a>
          </Link>
          <Link href="/business">
            <a>
              <div className={`${styles.main__menu_nav_block} anim_hover`}>
                <div className={`${styles.main__menu_nav_block_image} blue_background`}>
                  <div className={`${styles.main__menu_nav_block_image_pic}`}>
                    <Image loading="lazy" layout="fill" src={`/icons/work.svg`} alt="icon"/>
                  </div>
                </div>
                <span className={styles.nav_header}>{nav_translate['business'][locale]}</span>
              </div>
            </a>
          </Link>
          <Link href="/education">
            <a>
              <div className={`${styles.main__menu_nav_block} anim_hover`}>
                <div className={`${styles.main__menu_nav_block_image} purple_background`}>
                  <div className={`${styles.main__menu_nav_block_image_pic}`}>
                    <Image loading="lazy" layout="fill" src={`/icons/education.svg`} alt="icon"/>
                  </div>
                </div>
                <span className={styles.nav_header}>{nav_translate['education'][locale]}</span>
              </div>
            </a>
          </Link>
          <Link href="/health">
            <a>
              <div className={`${styles.main__menu_nav_block} anim_hover`}>
                <div className={`${styles.main__menu_nav_block_image} red_background`}>
                  <div className={`${styles.main__menu_nav_block_image_pic}`}>
                    <Image loading="lazy" layout="fill" src={`/icons/health.svg`} alt="icon"/>
                  </div>
                </div>
                <span className={styles.nav_header}>{nav_translate['health'][locale]}</span>
              </div>
            </a>
          </Link>
          <Link href="/finance">
            <a>
              <div className={`${styles.main__menu_nav_block} anim_hover`}>
                <div className={`${styles.main__menu_nav_block_image} green_background`}>
                  <div className={`${styles.main__menu_nav_block_image_pic}`}>
                    <Image loading="lazy" layout="fill" src={`/icons/finance.svg`} alt="icon"/>
                  </div>
                </div>
                <span className={styles.nav_header}>{nav_translate['finance'][locale]}</span>
              </div>
            </a>
          </Link>
          <Link href="/not-found">
            <a>
              <div className={`${styles.main__menu_nav_block} anim_hover`}>
                <div className={`${styles.main__menu_nav_block_image} orange_background`}>
                  <div className={`${styles.main__menu_nav_block_image_pic}`}>
                    <Image loading="lazy" layout="fill" src={`/icons/soon.svg`} alt="icon"/>
                  </div>
                </div>
                <span className={styles.nav_header}>{translate['soon'][locale]}</span>
              </div>
            </a>
          </Link>
          <Link href="/not-found">
            <a>
              <div className={`${styles.main__menu_nav_block} anim_hover`}>
                <div className={`${styles.main__menu_nav_block_image} orange_background`}>
                  <div className={`${styles.main__menu_nav_block_image_pic}`}>
                    <Image loading="lazy" layout="fill" src={`/icons/soon.svg`} alt="icon"/>
                  </div>
                </div>
                <span className={styles.nav_header}>{translate['soon'][locale]}</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="main block_animation">
          <h1 className="flex_text">{translate['popular'][locale]} <div className="emoji_h1"><Image priority src={"/icons/fire.webp"} layout="fill" alt="emoji"/></div></h1>
          <p className="sub_content">{translate['popular_subtext'][locale]}</p>
          <div className={styles.main__index_block_row}>
            <Link href="/constructor/acc">
              <a>
                <div className={`${styles.main__index_block_row_b} anim_hover`}>
                  <div className={styles.main__index_block}>
                    <div className={styles.main__index_block_pic}>
                      <Image layout="fill" alt="service" priority className={styles.main__index_block_img} src="/services/badge.webp"/>
                    </div>
                  </div>
                  <span className="head">{nav_translate['acc_const'][locale]}</span>
                </div>
              </a>
            </Link>
            <Link href="/health/bmi-calculator">
              <a>
                <div className={`${styles.main__index_block_row_b} anim_hover`}>
                  <div className={styles.main__index_block}>
                    <div className={styles.main__index_block_pic}>
                      <Image layout="fill" alt="service" priority className={styles.main__index_block_img} src="/services/bmi.webp"/>
                    </div>
                  </div>
                  <span className="head">{nav_translate['bmi_calc'][locale]}</span>
                </div>
              </a>
            </Link>
            <Link href="/finance/deposit">
              <a>
                <div className={`${styles.main__index_block_row_b} anim_hover`}>
                  <div className={styles.main__index_block}>
                    <div className={styles.main__index_block_pic}>
                      <Image layout="fill" alt="service" priority className={styles.main__index_block_img} src="/services/deposit.webp"/>
                    </div>
                  </div>
                  <span className="head">{nav_translate['deposit_calc'][locale]}</span>
                </div>
              </a>
            </Link>
            <Link href="/health/ideal-weight">
              <a>
                <div className={`${styles.main__index_block_row_b} anim_hover`}>
                  <div className={styles.main__index_block}>
                    <div className={styles.main__index_block_pic}>
                      <Image layout="fill" alt="service (Metabolism vector created by pch.vector)" priority className={styles.main__index_block_img} src="/services/ideal-weight.webp"/>
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

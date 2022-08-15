/*jshint esversion: 6 */
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from '../styles/index_main.module.css';
import useTranslateText from "./translate";
import translate from "../translate/index_translate";

const Home = () => {
  const locale = useTranslateText();
  return(
    <>
      <Head>
        <title>Okki - потому что проще!</title>
      </Head>
      <div className={`${styles.main__menu_nav} block_animation`}>
        <div className={styles.main__menu_nav_blocks}>
          <Link href="/constructor">
            <a>
              <div className={`${styles.main__menu_nav_block} anim_hover`}>
                <div className={`${styles.main__menu_nav_block_image} green_background`}>
                  <Image loading="lazy" width={32} height={32} src={`/icons/constructor.svg`} alt="icon"/>
                </div>
                <span className={styles.nav_header}>{translate['constructor'][locale]}</span>
              </div>
            </a>
          </Link>
          <Link href="/not-found">
            <a>
              <div className={`${styles.main__menu_nav_block} anim_hover`}>
                <div className={`${styles.main__menu_nav_block_image} red_background`}>
                  <Image loading="lazy" width={32} height={32} src={`/icons/calculate.svg`} alt="icon"/>
                </div>
                <span className={styles.nav_header}>{translate['calculator'][locale]}</span>
              </div>
            </a>
          </Link>
          <Link href="/not-found">
            <a>
              <div className={`${styles.main__menu_nav_block} anim_hover`}>
                <div className={`${styles.main__menu_nav_block_image} blue_background`}>
                  <Image loading="lazy" width={32} height={32} src={`/icons/work.svg`} alt="icon"/>
                </div>
                <span className={styles.nav_header}>{translate['business'][locale]}</span>
              </div>
            </a>
          </Link>
          <Link href="/not-found">
            <a>
              <div className={`${styles.main__menu_nav_block} anim_hover`}>
                <div className={`${styles.main__menu_nav_block_image} purple_background`}>
                  <Image loading="lazy" width={32} height={32} src={`/icons/education.svg`} alt="icon"/>
                </div>
                <span className={styles.nav_header}>{translate['education'][locale]}</span>
              </div>
            </a>
          </Link>
          <Link href="/not-found">
            <a>
              <div className={`${styles.main__menu_nav_block} anim_hover`}>
                <div className={`${styles.main__menu_nav_block_image} red_background`}>
                  <Image loading="lazy" width={32} height={32} src={`/icons/health.svg`} alt="icon"/>
                </div>
                <span className={styles.nav_header}>{translate['health'][locale]}</span>
              </div>
            </a>
          </Link>
          <Link href="/not-found">
            <a>
              <div className={`${styles.main__menu_nav_block} anim_hover`}>
                <div className={`${styles.main__menu_nav_block_image} orange_background`}>
                  <Image loading="lazy" width={32} height={32} src={`/icons/soon.svg`} alt="icon"/>
                </div>
                <span className={styles.nav_header}>{translate['soon'][locale]}</span>
              </div>
            </a>
          </Link>
          <Link href="/not-found">
            <a>
              <div className={`${styles.main__menu_nav_block} anim_hover`}>
                <div className={`${styles.main__menu_nav_block_image} orange_background`}>
                  <Image loading="lazy" width={32} height={32} src={`/icons/soon.svg`} alt="icon"/>
                </div>
                <span className={styles.nav_header}>{translate['soon'][locale]}</span>
              </div>
            </a>
          </Link>
          <Link href="/not-found">
            <a>
              <div className={`${styles.main__menu_nav_block} anim_hover`}>
                <div className={`${styles.main__menu_nav_block_image} orange_background`}>
                  <Image loading="lazy" width={32} height={32} src={`/icons/soon.svg`} alt="icon"/>
                </div>
                <span className={styles.nav_header}>{translate['soon'][locale]}</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="main block_animation">
          <h1>Популярные сервисы <Image loading="lazy" src={"/icons/fire.webp"} width={22} height={22} alt="emoji"/></h1>
          <p className="sub_content">Топ 5 лучших сервисов по выбору пользователей</p>
          <div className={styles.main__index_block_row}>
            <Link href="/constructor/acc">
              <a>
                <div className={`${styles.main__index_block_row_b} anim_hover`}>
                  <div className={styles.main__index_block}>
                    <Image loading="lazy" width={160} height={160} className={styles.main__index_block_img} src="/services/badge.svg"/>
                  </div>
                  <h6>Конструктор бейджиков/аккредитации</h6>
                </div>
              </a>
            </Link>
            <div className={`${styles.main__index_block_row_b} anim_hover`}>
              <div className={styles.main__index_block}></div>
              <h6>BMI калькулятор</h6>
            </div>
            <div className={`${styles.main__index_block_row_b} anim_hover`}>
              <div className={styles.main__index_block}></div>
              <h6>Lorem Ipsum</h6>
            </div>
            <div className={`${styles.main__index_block_row_b} anim_hover`}>
              <div className={styles.main__index_block}></div>
              <h6>Lorem Ipsum</h6>
            </div>
            <div className={`${styles.main__index_block_row_b} anim_hover`}>
              <div className={styles.main__index_block}>
                
              </div>
              <h6>Lorem Ipsum</h6>
            </div>
            <div className={`${styles.main__index_block_row_b} anim_hover`}>
              <div className={styles.main__index_block}></div>
              <h6>Lorem Ipsum</h6>
            </div>
            <div className={`${styles.main__index_block_row_b} anim_hover`}>
              <div className={styles.main__index_block}></div>
              <h6>Lorem Ipsum</h6>
            </div>
            <div className={`${styles.main__index_block_row_b} anim_hover`}>
              <div className={styles.main__index_block}></div>
              <h6>Lorem Ipsum</h6>
            </div>
            <div className={`${styles.main__index_block_row_b} anim_hover`}>
              <div className={styles.main__index_block}></div>
              <h6>Lorem Ipsum</h6>
            </div>
            <div className={`${styles.main__index_block_row_b} anim_hover`}>
              <div className={styles.main__index_block}></div>
              <h6>Lorem Ipsum</h6>
            </div>
          </div>
      </div>
    </>
  )
};

export default Home;

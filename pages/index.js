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
        <title>Okki.kz</title>
      </Head>
      <div className={`${styles.main__menu_nav} block_animation`}>
        <div className={styles.main__menu_nav_blocks}>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <div className={`${styles.main__menu_nav_block_image} green_background`}>
                  <Image width={32} height={32} src={`/icons/constructor.svg`} alt="icon"/>
                </div>
                <span className={styles.nav_header}>{translate['constructor'][locale]}</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <div className={`${styles.main__menu_nav_block_image} red_background`}>
                  <Image width={32} height={32} src={`/icons/calculate.svg`} alt="icon"/>
                </div>
                <span className={styles.nav_header}>{translate['calculator'][locale]}</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <div className={`${styles.main__menu_nav_block_image} blue_background`}>
                  <Image width={32} height={32} src={`/icons/work.svg`} alt="icon"/>
                </div>
                <span className={styles.nav_header}>{translate['business'][locale]}</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <div className={`${styles.main__menu_nav_block_image} purple_background`}>
                  <Image width={32} height={32} src={`/icons/education.svg`} alt="icon"/>
                </div>
                <span className={styles.nav_header}>{translate['education'][locale]}</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <div className={`${styles.main__menu_nav_block_image} orange_background`}>
                  <Image width={32} height={32} src={`/icons/soon.svg`} alt="icon"/>
                </div>
                <span className={styles.nav_header}>{translate['soon'][locale]}</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <div className={`${styles.main__menu_nav_block_image} orange_background`}>
                  <Image width={32} height={32} src={`/icons/soon.svg`} alt="icon"/>
                </div>
                <span className={styles.nav_header}>{translate['soon'][locale]}</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <div className={`${styles.main__menu_nav_block_image} orange_background`}>
                  <Image width={32} height={32} src={`/icons/soon.svg`} alt="icon"/>
                </div>
                <span className={styles.nav_header}>{translate['soon'][locale]}</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <div className={`${styles.main__menu_nav_block_image} orange_background`}>
                  <Image width={32} height={32} src={`/icons/soon.svg`} alt="icon"/>
                </div>
                <span className={styles.nav_header}>{translate['soon'][locale]}</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
};

export default Home;

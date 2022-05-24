/*jshint esversion: 6 */
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from '../styles/index_main.module.css';

const Home = () => {
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
                  <Image width={32} height={32} src={`/icons/constructor.svg`}/>
                </div>
                <span className={styles.nav_header}>Конструктор</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <div className={`${styles.main__menu_nav_block_image} red_background`}>
                  <Image width={32} height={32} src={`/icons/calculate.svg`}/>
                </div>
                <span className={styles.nav_header}>Калькулятор</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <div className={`${styles.main__menu_nav_block_image} blue_background`}>
                  <Image width={32} height={32} src={`/icons/work.svg`}/>
                </div>
                <span className={styles.nav_header}>Бизнес</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <div className={`${styles.main__menu_nav_block_image} purple_background`}>
                  <Image width={32} height={32} src={`/icons/education.svg`}/>
                </div>
                <span className={styles.nav_header}>Образование</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <div className={`${styles.main__menu_nav_block_image} orange_background`}>
                  <Image width={32} height={32} src={`/icons/soon.svg`}/>
                </div>
                <span className={styles.nav_header}>В разработке</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <div className={`${styles.main__menu_nav_block_image} orange_background`}>
                  <Image width={32} height={32} src={`/icons/soon.svg`}/>
                </div>
                <span className={styles.nav_header}>В разработке</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <div className={`${styles.main__menu_nav_block_image} orange_background`}>
                  <Image width={32} height={32} src={`/icons/soon.svg`}/>
                </div>
                <span className={styles.nav_header}>В разработке</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <div className={`${styles.main__menu_nav_block_image} orange_background`}>
                  <Image width={32} height={32} src={`/icons/soon.svg`}/>
                </div>
                <span className={styles.nav_header}>В разработке</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
};

export default Home;

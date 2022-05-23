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
      <div className={styles.main__menu_nav}>
        <div className={styles.main__menu_nav_blocks}>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <Image width={26} height={26} src="/img/test.svg"/>
                <span className={styles.nav_header}>Конструктор</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <Image width={26} height={26} src="/img/test.svg"/>
                <span className={styles.nav_header}>Калькулятор</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <Image width={26} height={26} src="/img/test.svg"/>
                <span className={styles.nav_header}>Бизнес</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <Image width={26} height={26} src="/img/test.svg"/>
                <span className={styles.nav_header}>Образование</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <Image width={26} height={26} src="/img/test.svg"/>
                <span className={styles.nav_header}>Дизайн</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <Image width={26} height={26} src="/img/test.svg"/>
                <span className={styles.nav_header}>Trending</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <Image width={26} height={26} src="/img/test.svg"/>
                <span className={styles.nav_header}>Trending</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <Image width={26} height={26} src="/img/test.svg"/>
                <span className={styles.nav_header}>Trending</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
};

export default Home;

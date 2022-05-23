/*jshint esversion: 6 */
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from '../styles/index_main.module.css';
import { useState,useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const Home = () => {
  const [result,setResult] = useState("");
  const checkMode = useMediaQuery({query:'(prefers-color-scheme: dark)'});
  useEffect(()=>{
        return checkMode===true?setResult("-night"):setResult("");
  },[checkMode]);
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
                <Image width={30} height={30} src={`/icons/constructor${result}.svg`}/>
                <span className={styles.nav_header}>Конструктор</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <Image width={30} height={30} src={`/icons/calculate${result}.svg`}/>
                <span className={styles.nav_header}>Калькулятор</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <Image width={30} height={30} src={`/icons/work${result}.svg`}/>
                <span className={styles.nav_header}>Бизнес</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <Image width={30} height={30} src={`/icons/education${result}.svg`}/>
                <span className={styles.nav_header}>Образование</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <Image width={30} height={30} src={`/icons/constructor${result}.svg`}/>
                <span className={styles.nav_header}>Дизайн</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <Image width={30} height={30} src={`/icons/constructor${result}.svg`}/>
                <span className={styles.nav_header}>Trending</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <Image width={30} height={30} src={`/icons/constructor${result}.svg`}/>
                <span className={styles.nav_header}>Trending</span>
              </div>
            </a>
          </Link>
          <Link href="/acc">
            <a>
              <div className={styles.main__menu_nav_block}>
                <Image width={30} height={30} src={`/icons/constructor${result}.svg`}/>
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

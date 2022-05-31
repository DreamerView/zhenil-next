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
        <div className={styles.main__menu_nav_blocks} itemScope itemType="https://schema.org/BreadcrumbList">
          <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/acc" itemID="/acc" itemType="https://schema.org/Thing" itemScope itemProp="item">
              <a itemID="/acc" itemType="https://schema.org/Thing" itemScope itemProp="item">
                <div className={styles.main__menu_nav_block}>
                  <div className={`${styles.main__menu_nav_block_image} green_background`}>
                    <Image width={32} height={32} src={`/icons/constructor.svg`} alt="icon"/>
                  </div>
                  <span className={styles.nav_header} itemProp="name">Конструктор</span>
                </div>
              </a>
            </Link>
            <meta itemProp="position" content="1" />
            <span> </span>
          </div>

          <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/acc" itemID="/acc" itemType="https://schema.org/Thing" itemScope itemProp="item">
              <a itemID="/acc" itemType="https://schema.org/Thing" itemScope itemProp="item">
                <div className={styles.main__menu_nav_block}>
                  <div className={`${styles.main__menu_nav_block_image} red_background`}>
                    <Image width={32} height={32} src={`/icons/calculate.svg`} alt="icon"/>
                  </div>
                  <span className={styles.nav_header} itemProp="name">Калькулятор</span>
                </div>
              </a>
            </Link>
            <meta itemProp="position" content="2" />
            <span> </span>
          </div>
          
          <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/acc" itemID="/acc" itemType="https://schema.org/Thing" itemScope itemProp="item">
              <a itemID="/acc" itemType="https://schema.org/Thing" itemScope itemProp="item">
              <div className={styles.main__menu_nav_block}>
                <div className={`${styles.main__menu_nav_block_image} blue_background`}>
                  <Image width={32} height={32} src={`/icons/work.svg`} alt="icon"/>
                </div>
                <span className={styles.nav_header} itemProp="name">Бизнес</span>
              </div>
            </a>
            </Link>
            <meta itemProp="position" content="3" />
            <span> </span>
          </div>

          <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/acc" itemID="/acc" itemType="https://schema.org/Thing" itemScope itemProp="item">
              <a itemID="/acc" itemType="https://schema.org/Thing" itemScope itemProp="item">
              <div className={styles.main__menu_nav_block}>
                <div className={`${styles.main__menu_nav_block_image} purple_background`}>
                  <Image width={32} height={32} src={`/icons/education.svg`} alt="icon"/>
                </div>
                <span className={styles.nav_header} itemProp="name">Образование</span>
                </div>
              </a>
            </Link>
            <meta itemProp="position" content="4" />
            <span> </span>
          </div>

          <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/acc" itemID="/acc" itemType="https://schema.org/Thing" itemScope itemProp="item">
              <a itemID="/acc" itemType="https://schema.org/Thing" itemScope itemProp="item">
              <div className={styles.main__menu_nav_block}>
                <div className={`${styles.main__menu_nav_block_image} orange_background`}>
                  <Image width={32} height={32} src={`/icons/soon.svg`} alt="icon"/>
                </div>
                <span className={styles.nav_header} itemProp="name">В разработке</span>
              </div>
              </a>
            </Link>
            <meta itemProp="position" content="5" />
            <span> </span>
          </div>
          <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/acc" itemID="/acc" itemType="https://schema.org/Thing" itemScope itemProp="item">
              <a itemID="/acc" itemType="https://schema.org/Thing" itemScope itemProp="item">
              <div className={styles.main__menu_nav_block}>
                <div className={`${styles.main__menu_nav_block_image} orange_background`}>
                  <Image width={32} height={32} src={`/icons/soon.svg`} alt="icon"/>
                </div>
                <span className={styles.nav_header} itemProp="name">В разработке</span>
              </div>
              </a>
            </Link>
            <meta itemProp="position" content="6" />
            <span> </span>
          </div>
          <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/acc" itemID="/acc" itemType="https://schema.org/Thing" itemScope itemProp="item">
              <a itemID="/acc" itemType="https://schema.org/Thing" itemScope itemProp="item">
              <div className={styles.main__menu_nav_block}>
                <div className={`${styles.main__menu_nav_block_image} orange_background`}>
                  <Image width={32} height={32} src={`/icons/soon.svg`} alt="icon"/>
                </div>
                <span className={styles.nav_header} itemProp="name">В разработке</span>
              </div>
              </a>
            </Link>
            <meta itemProp="position" content="7" />
            <span> </span>
          </div>
          <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/acc" itemID="/acc" itemType="https://schema.org/Thing" itemScope itemProp="item">
              <a itemID="/acc" itemType="https://schema.org/Thing" itemScope itemProp="item">
              <div className={styles.main__menu_nav_block}>
                <div className={`${styles.main__menu_nav_block_image} orange_background`}>
                  <Image width={32} height={32} src={`/icons/soon.svg`} alt="icon"/>
                </div>
                <span className={styles.nav_header} itemProp="name">В разработке</span>
              </div>
              </a>
              <meta itemProp="position" content="8" />
              <span> </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
};

export default Home;

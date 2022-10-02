import Link from 'next/link';
import Image from 'next/image';
import translate from "../translate/index_translate";
import nav_translate from "../translate/services/all_translate";
import styles from '../styles/index_main.module.css';
  

const IndexContent = (s) => {
    const locale = s.lang;
    return(
        <>
        <div className="main block_animation">
          <h1 className="flex_text">{translate['popular'][locale]} <div className="emoji_h1"><Image title={`Microsoft fire emoji (Used for informational purposes only)`} priority src={"/emoji-small/fire.webp"} layout="fill" alt="emoji"/></div></h1>
          <p className="sub_content">{translate['popular_subtext'][locale]}</p>
          <div className={styles.main__index_block_row}>
            <Link href="/constructor/acc" prefetch={false}>
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
            <Link href="/health/bmi-calculator" prefetch={false}>
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
            <Link  href="/finance/deposit" prefetch={false}>
              <a title={nav_translate['deposit_calc'][locale]}>
                <div className={`${styles.main__index_block_row_b} anim_hover`}>
                  <div className={styles.main__index_block}>
                    <div className={styles.main__index_block_pic}>
                      <Image priority title={nav_translate['deposit_calc'][locale]} layout="fill" alt={`Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>`} className={styles.main__index_block_img} src="/services/deposit.webp" placeholder="blur" blurDataURL="/services/deposit.webp"/>
                    </div>
                  </div>
                  <span className="head">{nav_translate['deposit_calc'][locale]}</span>
                </div>
              </a>
            </Link>
            <Link href="/health/ideal-weight" prefetch={false}>
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
            <Link href="/business/margin-markup-calculator" prefetch={false}>
              <a title={nav_translate['margin_markup_calc'][locale]}>
                <div className={`${styles.main__index_block_row_b} anim_hover`}>
                  <div className={styles.main__index_block}>
                    <div className={styles.main__index_block_pic}>
                      <Image priority title={nav_translate['margin_markup_calc'][locale]} layout="fill" alt="service (Metabolism vector created by pch.vector)" className={styles.main__index_block_img} src="/services/margin-markup.webp" placeholder="blur" blurDataURL="/services/margin-markup.webp"/>
                    </div>
                  </div>
                  <span className="head">{nav_translate['margin_markup_calc'][locale]}</span>
                </div>
              </a>
            </Link>
            <Link href="/health/pregnancy-calendar" prefetch={false}>
              <a title={nav_translate['pregnancy_calendar'][locale]}>
                <div className={`${styles.main__index_block_row_b} anim_hover`}>
                  <div className={styles.main__index_block}>
                    <div className={styles.main__index_block_pic}>
                      <Image priority title={nav_translate['pregnancy_calendar'][locale]} layout="fill" alt="service (Metabolism vector created by pch.vector)" className={styles.main__index_block_img} src="/services/pregnancy-calendar.webp" placeholder="blur" blurDataURL="/services/pregnancy-calendar.webp"/>
                    </div>
                  </div>
                  <span className="head">{nav_translate['pregnancy_calendar'][locale]}</span>
                </div>
              </a>
            </Link>
            <Link href="/health/index-of-the-smoking-person" prefetch={false}>
              <a title={nav_translate['index_of_the_smoking_person'][locale]}>
                <div className={`${styles.main__index_block_row_b} anim_hover`}>
                  <div className={styles.main__index_block}>
                    <div className={styles.main__index_block_pic}>
                      <Image priority title={nav_translate['index_of_the_smoking_person'][locale]} layout="fill" alt="service (Metabolism vector created by pch.vector)" className={styles.main__index_block_img} src="/services/index-of-the-smoking-person.webp" placeholder="blur" blurDataURL="/services/index-of-the-smoking-person.webp"/>
                    </div>
                  </div>
                  <span className="head">{nav_translate['index_of_the_smoking_person'][locale]}</span>
                </div>
              </a>
            </Link>
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
export default IndexContent;
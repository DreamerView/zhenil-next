/*jshint esversion: 6 */
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const Acc = () => {
    return(
      <>
      <Head>
        <title>Конструктор бейджиков/аккредитации</title>
      </Head>
        <div className="main__nav">
            <p className="nav"><b className="b_color">Главная  /</b>  Конструктор бейджиков</p>
        </div>
        <div className="main__block">
            <h1>Конструктор бейджиков/аккредитации</h1>
            <p className="sub_content">Выберите на сколько людей нужно будет это сделать?</p>
            <div className="main__block_menu_select p-m">
            <div className="main__block_menu_select_block green_back">
            <Link href="/acc/logo">
            <a>
            <div className="main__block_menu_select_block_icon green_temp">
                <Image width={30} height={30} className="main__block_menu_select_block_icon_img" src="/img/person.svg" alt="icon" priority />
            </div>
            <div className="main__block_menu_select_main">
                <h2>Для одного человека</h2>
            </div>
            <div className="main__block_menu_select_main">
                <p className="main__block_menu_select_main_p">Нужно для одного человека? Не беда, просто используйте наш удобный конструктор и создавайте</p>
            </div>
            <div className="main__block_menu_select_main">
                <button className="main__block_menu_select_main_button green_border">Начать</button>
            </div>
            </a>
            </Link>
            </div>

            <div className="main__block_menu_select_block purple_back">
            <Link href="/acc/logo">
            <a>
            <div className="main__block_menu_select_block_icon purple_temp">
                <Image width={30} height={30} className="main__block_menu_select_block_icon_img" src="/img/group.svg" alt="icon" priority/>
            </div>
            <div className="main__block_menu_select_main">
                <h2>Для несколько людей</h2>
            </div>
            <div className="main__block_menu_select_main">
                <p className="main__block_menu_select_main_p">Нужно для несколько людей? Не беда, просто используйте наш удобный конструктор и создавайте</p>
            </div>
            <div className="main__block_menu_select_main">
                <button className="main__block_menu_select_main_button purple_border">Начать</button>
            </div>
            </a>
            </Link>
            </div>

            <div className="main__block_menu_select_block blue_back">
            <Link href="/acc/logosd">
            <a>
            <div className="main__block_menu_select_block_icon blue_temp">
                <Image width={30} height={30} className="main__block_menu_select_block_icon_img" src="/img/help.svg" alt="icon" priority/>
            </div>
            <div className="main__block_menu_select_main">
                <h2>Инфографика</h2>
            </div>
            <div className="main__block_menu_select_main">
                <p className="main__block_menu_select_main_p">Хотите подробно узнать как можно использовать конструктор?</p>
            </div>
            <div className="main__block_menu_select_main">
                <button className="main__block_menu_select_main_button blue_border">Начать</button>
            </div>
            </a>
            </Link>
            </div>

            </div>
        </div>
      </>  
    );
}

export default Acc;
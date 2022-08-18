import Link from 'next/link';
import Image from 'next/image';
import useTranslateText from '../../translate';
import translate from "../../../translate/calculator/deposit/navbar_translate";
import text from "../../../translate/calculator/deposit/index_translate";
import style from "../../../styles/calculator/index.module.css"

const Deposit = () => {
    const lang = useTranslateText();
    return(
        <>
            <div className="main__nav">
                <p className="nav"><Link href="/"><b className="b_color">{translate['home'][lang]}  /</b></Link>  <Link href="/calculator">{translate['step0'][lang]}</Link>  /  {translate['step1'][lang]}</p>
            </div>
            <div className="main">
                <h1 className="flex_text">{text["title"][lang]} <div className="emoji_h1"><Image priority src={"/icons/fire.webp"} layout="fill" alt="emoji"/></div></h1>
                <p className="sub_content">{text["description"][lang]}</p>
                <div className={style.main__calc}>
                    
                    <div className={style.main__result}>
                        <h1>Результаты</h1>
                        <p className="sub_content">За 12 месяцев я накоплю</p>
                        <h1>2 572 242</h1>
                        <p className="sub_content">Собственные средства</p>
                        <h1>2 400 000</h1>
                        <p className="sub_content">Начисленные проценты</p>
                        <h1>172 242</h1>

                    </div>
                    {/*  */}
                    <div className={style.main__calculator}>
                        {/* <h2>{text["description"][lang]}</h2> */}
                        <div className={style.main__calculator_module}>
                            <p className="sub_content">Годовая эффективная ставка (%)</p>
                            <input type="text" className={`${style.main__calculator_module_input} anim_hover`} placeholder="Введите ставку"/>
                        </div>
                        <div className={style.main__calculator_module}>
                            <p className="sub_content">Сумма депозита</p>
                            <input type="text" className={`${style.main__calculator_module_input} anim_hover`} placeholder="Введите сумму"/>
                        </div>
                        <div className={style.main__calculator_module}>
                            <p className="sub_content">Срок депозита</p>
                            <select className={`${style.main__calculator_module_select} anim_hover`}>
                                <option>1 мес.</option>
                                <option>3 мес.</option>
                                <option>6 мес.</option>
                                <option>9 мес.</option>
                                <option>12 мес.</option>
                            </select>
                        </div>
                        <div className={style.main__calculator_module}>
                            <p className="sub_content">Ежемесячное пополнение</p>
                            <input type="text" className={`${style.main__calculator_module_input} anim_hover`} placeholder="Введите сумму"/>
                        </div>
                    </div>
                    {/*  */}
                </div>
            </div>
        </>
    );
}

export default Deposit;
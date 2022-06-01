/*jshint esversion: 6 */
import { useDispatch } from "react-redux";
import Image from "next/image";

const ConfirmMode = (result) => {
    const send = useDispatch();
    return(
        <>
        <div className="confirm__back">
                <div className="confirm__block basic_animation">
                    <h3>
                        {result.item.name}
                    </h3>
                    <p className="sm">
                        {result.item.content}
                    </p>
                    {result.item.type === 'delete'?
                    <div className="confirm__block_action_2">
                        <div>
                            <button onClick={()=>{send({type:"SetConfirm",set:false});send({type:"SetAction",set:false})}} className="confirm_custom">{result.item.text.cancel}</button>
                        </div>
                        <div>
                            <button onClick={()=>{send({type:"SetConfirm",set:true});send({type:"SetAction",set:false});}} className={`confirm_custom_a ${result.item.text.accept_color}`}>{result.item.text.accept}</button>
                        </div>
                    </div>:''}
                    {result.item.type === 'language'?
                    <div className="confirm__block_action">
                        <div>
                            <Image width={20} height={15} src="/language_img/kz.webp"/><span className="confirm__block_action_row">Қазақша</span>
                        </div>
                        <div>
                            <Image width={20} height={15} src="/language_img/ru.webp"/><span className="confirm__block_action_row">Русский</span>
                        </div>
                        <div>
                        <Image width={20} height={15} src="/language_img/gb.webp"/><span className="confirm__block_action_row">English</span>
                        </div>
                    </div>:''}
                </div>
            </div>
            </>
    );
};
export default ConfirmMode;
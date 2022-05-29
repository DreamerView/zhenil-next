/*jshint esversion: 6 */
import { useDispatch } from "react-redux";
import Image from "next/image";
const FullFrame = (result) => {
    const send = useDispatch();
    return(
        <div className="fullscreen__result">
            <div className="fullscreen__result_block red_background" onClick={()=>{send({type:"setFullFrame",set:false});send({type:"setUrlFrame",set:false});}}>
                <div className="fullscreen__result_button"><Image src={'/img/fullscreen_exit.svg'} width={22} height={22}/></div>
                <p className="small">Закрыть полноэкранный режим</p>
            </div>
            <iframe id="frame_f" title="converter result" src={result.item}>
                Ваш браузер не поддерживает плавающие фреймы!
            </iframe>
        </div>
    )
};

export default FullFrame;
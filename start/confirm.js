/*jshint esversion: 6 */
import { useDispatch,useSelector } from "react-redux";

const ConfirmMode = (result) => {
    const send = useDispatch();
    const getResult = useSelector(state=>state.confirm);
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
                </div>
            </div>
            </>
    );
};
export default ConfirmMode;
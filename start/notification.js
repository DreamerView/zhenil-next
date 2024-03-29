/*jshint esversion: 6 */

import { useSelector,useDispatch } from "react-redux";
import Image from "next/image";
const setNotification = () => {
    const send = useDispatch();
    const notification = useSelector(state=>state.notification);
    const status = notification.user;
    return(
        <>
            <div className="notification__back">
                <div className="notification__block block_animation">
                    <div className="notification__block_1">
                        <div className="notification__block_1_img_row">
                            <div className="notification__block_1_img">
                            {/* /img/support.webp */}
                                <Image className="notification__block_1_img_pic" width={45} height={45} alt="notification logo" src={status==='admin'?`/img/support.webp`:notification.image}/>
                            </div>
                        </div>
                        <div className="notification__block_1_row">
                            <h3>{status==='admin'?`Support Service Zhenil.kz`:notification.title}</h3>
                            <p className="small">{notification.content}</p>
                        </div>
                    </div>
                    <div className="notification__block_2" onClick={()=>send({type:"setNotification",set:false})}/>
                </div>
            </div>
        </>
    )
};
export default setNotification;
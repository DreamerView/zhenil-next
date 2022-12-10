import { useSelector,useDispatch } from "react-redux";
import Image from "next/image";
const Notification = () => {
    const send = useDispatch();
    const notification = useSelector(state=>state.notification);
    return(
        <>
            <div className="notification__back">
                <div className="notification__block block_animation">
                    <div className="notification__block_1">
                        <div className="notification__block_1_img_row">
                            <div className="notification__block_1_img">
                                <Image layout="fill" alt="notification logo" src="/img/support.webp"/>
                            </div>
                        </div>
                        <div className="notification__block_1_row">
                            <h3>{notification.title}</h3>
                            <p className="small">{notification.content}</p>
                        </div>
                    </div>
                    <div className="notification__block_2" onClick={()=>send({type:"setNotification",set:false})}/>
                </div>
            </div>
        </>
    )
};
export default Notification;
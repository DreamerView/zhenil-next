/*jshint esversion: 6 */
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";

const useConfirm = (res) => {
    const dis = useDispatch();
    const result = useSelector(state=>state.confirm);

    useEffect(() => {
        if(res) dis({type:"SetAction",set:{name:res.name,content:res.content,type:res.type,text:{cancel:'Закрыть',accept_color:'red_background',accept:'Удалить'}}});
    }, [res,dis]);

   return [result];
};

export default useConfirm;
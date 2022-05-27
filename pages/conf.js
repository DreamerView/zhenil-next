import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";

const useConfirm = (res) => {
    const dis = useDispatch();
    const result = useSelector(state=>state.confirm);
    // const [data, setData] = useState(null);
    // if(res) setData(res.name)

    useEffect(() => {
        if(res) dis({type:"SetAction",set:{name:res.name,content:res.content,type:res.type,text:{cancel:'Закрыть',accept_color:'red_background',accept:'Удалить'}}});
    }, [res]);

   return [result];
};

export default useConfirm;
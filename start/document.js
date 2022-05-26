/*jshint esversion: 6 */
import ConfirmMode from './confirm';
import Header from './header';
import { useSelector } from 'react-redux';


const DocumentResult = ({children}) => {
    const action = useSelector(state=>state.act);
    console.log(action)
    return(
        <>
            {action?<ConfirmMode item={action} key={Date.now}/>:""}
            <Header/>
            <div className="result">{children}</div>
        </>
    );
}

export default DocumentResult;
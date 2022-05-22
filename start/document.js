/*jshint esversion: 6 */
import Header from './header';

const DocumentResult = ({children}) => {
    return(
        <>
            <Header/>
            <div className="result">{children}</div>
        </>
    );
}

export default DocumentResult;
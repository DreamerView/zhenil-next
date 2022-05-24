/*jshint esversion: 6 */
import Link from 'next/link';
import Image from 'next/image';

const NotFound = () => {
    return(
        <>
            <div className="page_not_found">
                <div className="page_not_found_block">
                    <Image width={256} height={256} src="/img/404.webp" alt="not found" priority />
                    <h1 className="page_not_found">We are sorry,</h1>
                    <p className="page_not_found">but the page you were looking for can not be found</p>
                    <Link href="/" className="page_not_found"><a className="page_not_found">Go home</a></Link>
                </div>
            </div>
        </>
    )
};

export default NotFound;

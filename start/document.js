import Head from 'next/head';
import Header from './header';

const DocumentResult = ({children}) => {
    return(
        <>
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
                <meta httpEquiv="Cache-Control" content="max-age=31536000" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="hsl(0, 0%, 100%)" media="(prefers-color-scheme: light)" />
                <meta name="theme-color" content="hsl(240, 3%, 11%)" media="(prefers-color-scheme: dark)" />
                <meta name="theme-color" content="hsl(0, 0%, 100%)" />
                <meta name="description" content="Zhenil.kz" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="apple-mobile-web-app-title" content="Zhenil" />
                <link rel="apple-touch-icon" href="/apple.png" />
                <meta name="application-name" content="Zhenil" />
                <meta name="apple-touch-fullscreen" content="yes" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capacity" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            </Head>
            <Header/>
            <div className="result">{children}</div>
        </>
    );
}

export default DocumentResult;
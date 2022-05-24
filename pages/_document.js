/*jshint esversion: 6 */
import { Html, Head, Main, NextScript } from 'next/document';

const DocumentShow = () => {
  return (
    <Html lang="ru">
      <Head>
      <meta charSet="utf-8" />
      <meta name="theme-color" content="hsl(240, 3%, 11%)" />
                <link rel="icon" href="/favicon.ico" />
                <meta httpEquiv="Cache-Control" content="max-age=31536000" />
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
                <style dangerouslySetInnerHTML={ { __html: `</style>
                  <meta name="theme-color" content="hsl(0, 0%, 100%)" media="(prefers-color-scheme: light)"/>
                  <meta name="theme-color" content="hsl(240, 3%, 11%)" media="(prefers-color-scheme: dark)"/>
                <style>`} }></style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default DocumentShow;
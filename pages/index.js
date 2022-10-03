/*jshint esversion: 6 */
import Head from "next/head";
import dynamic from "next/dynamic";
import useTranslateText from "../start/translate";
import seo from "../translate/seo_index";
import AllService from '../start/services/all.json';
const IndexMenu = dynamic(()=>import('./index_menu'));
const IndexContent = dynamic(()=>import('./index_content'));


const Home = ({locales}) => {
  const locale = useTranslateText();
  return(
    <>
      <Head>
        <title>{seo['title'][locale]}</title>
        <meta name="keywords" content={seo['keywords'][locale]} />
        <meta name="description" content={seo['desc'][locale]} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seo['title'][locale]} />
        <meta property="og:site_name" content={process.env.siteName} />
        <meta property="og:description" content={seo['desc'][locale]} />
        <meta name="twitter:title" content={seo['title'][locale]}/>
        <meta name="twitter:description" content={seo['desc'][locale]}/>
        <meta property="og:url" content={process.env.hostName} />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content={"@"+process.env.siteName}/>
        <meta property="og:image" content={process.env.hostName+"/seo_image/twitter.webp"} />
        <meta name="twitter:image" content={process.env.hostName+"/seo_image/twitter.webp"}/>
        <link rel="image_src" href={process.env.hostName+"/seo_image/twitter.webp"}/>
      </Head>
      <IndexMenu lang={locale} service={AllService}/>
      <IndexContent lang={locale} service={AllService}/>
    </>
  )
};

export default Home;

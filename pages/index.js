import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import DocumentResult from "../start/document";
import Acc from './acc/index';

const Home = () => {
  return(
    <DocumentResult>
      <Head>
        <title>Hello world</title>
      </Head>
      <Acc></Acc>
    </DocumentResult>
  )
};

export default Home;

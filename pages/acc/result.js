import Head from "next/head";

const ResultAcc = () => {
    return(
        <>
            <Head>
                <title>[Этап 4/4] Результаты</title>
            </Head>
             <iframe id="frame" title="converter result" src={"/convert.html"} width={842} height={595} align="left">
                Ваш браузер не поддерживает плавающие фреймы!
            </iframe>
        </>
    );
};

export default ResultAcc;
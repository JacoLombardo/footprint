import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import "../app/styles/global.css";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Media/tree2.png" sizes="any" />
        <title>Carbon Footprint</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

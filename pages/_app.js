import React from "react";
import Head from "next/head";
import { GlobalStyle } from "../styles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mash-Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'styles/global';

function App({ Component, pageProps } : AppProps) {
  return (
    <>
      <Head>
        <title>leaning nextjs</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link 
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <meta name="theme-color" content="" />
        <meta name="description" content="A simple project starter to work with TypeScript, React, NextJS and Styled Components" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps}/>
    </>
  )
}

export default App;
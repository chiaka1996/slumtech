import {useState, useEffect} from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';
import {State} from "../context/context"
import '../styles/globals.css';

function LoadingNewPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>  setLoading(false);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  return (
    loading && (
      <div className={loading ? "pageLoader" : "pageLoaderInactive"}></div>
    )
  );
}


function MyApp({ Component, pageProps }) {
  return( 
    <div>
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
          <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      </Head>
    <State>
    <div className='font-primary'>
    <LoadingNewPage />
    <Component {...pageProps} />
    </div>
    </State>
    </div>
  )
}

export default MyApp;
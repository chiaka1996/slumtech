import {useState, useEffect} from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';
import {State} from "../context/context"
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return( 
    <div>
      <Head>
          <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      </Head>
    <State>
    <div className='font-primary'>
    <Component {...pageProps} />
    </div>
    </State>
    </div>
  )
}

export default MyApp;
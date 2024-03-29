import {useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import {State} from "../context/context"
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return( 
    <State>
    <div>
    <Component {...pageProps} />
    </div>
    </State>
  )
}

export default MyApp;
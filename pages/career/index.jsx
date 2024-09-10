import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import {Navigation, Sidebar, Newsletter, Footer} from "../../components"
import Head from 'next/head'

export default function Career() {
  return (
   <main className="text-primary">
    <Head>
    <title>Slumtech career page </title>
    <meta
      name="description"
      content="SlumTech Foundation is a US-based nonprofit organization with a bold mission 
      to establish world-class tech institutions across Africa"
      key="desc"
    />
    <meta name="keywords" content="nonprofit, foundation, slum, technology, africa" />
    </Head>
    <Navigation />
    <Sidebar /> 

    <div  className="relative w-full min-h-[20rem] max-large:min-h-[15rem] mt-[10em] max-large:mt-[7em]">
    <Image 
    src="/images/career1.png"
    fill
    alt="banner"
    /> 
    <div className="text-card1 text-h1 font-h2 absolut relative z-[10] min-h-[20rem] max-large:min-h-[13rem] flex flex-row justify-center items-center">
    <h2>Career</h2>
    </div>  
    </div>

    <h3 className="font-h1 text-[2em] text-primary mt-[2em] max-large:mt-[1em] text-center">Join Us in Building a Brighter Future</h3>
    <div className="font-[300] text-secondary max-large:text-h3 text-center">These roles are currently open, and we are hoping you can fill them.</div>

    <div className="bg-[#02AED633] rounded-[10px] px-[5em] max-large:px-[1em] py-[2em] mt-[3em] max-large:mt-[2em] w-[80%] max-large:w-[90%] mx-auto flex flex-row flex-wrap items-center justify-between">
        <span>Country Director/Representative at SlumTech Foundation</span>
        <span>Full Time</span>
        <button className="bg-btn_bg rounded-[12px] text-card1 text-[1em] min-h-[3.2em] px-[1em]">
        Apply Now 
        <span className="ml-5">&#129174;</span>
        </button>

    </div>

    <div className="flex justify-center items-center mt-[1rem]">
    <div className="relative w-[16px] h-[16px] max-large:h-[19px] mr-[0.7em] mt-[0.7em]">
    <Image 
    src="https://img.icons8.com/material-outlined/24/open-envelope.png"
    fill
    alt="mail"
    /> 
    </div>

    <span className="text-btn_bg text-h2 font-normal underline">career@slumtech.org</span>
    </div>
    <Newsletter />
    <Footer />
    </main>
  )
}
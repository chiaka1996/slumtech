import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import {Navigation, Sidebar, Newsletter, Footer} from "../../components"
import Head from 'next/head'


export default function Mission() {
  return (
   <main className="text-primary">
    <Head>
    <title>Slumtech about mission page </title>
    <meta
      name="description"
      content="SlumTech Foundation is a US-based nonprofit organization with a bold mission 
      to establish world-class tech institutions across Africa"
      key="desc"
    />
    <meta name="keywords" content="nonprofit, foundation, slum, technology, africa, mission, about" />
    </Head>
    <Navigation />
    <Sidebar /> 
    <div className="relative text-center mt-[10em] max-large:mt-[7em] w-[80%] mx-auto max-large:w-[90%]">
    <Link href='/about' className='no-underline'>
    <div className="text-secondary max-large:text-normal font-normal text-[#000] flex flex-row items-center absolute top-0 max-large:top-[0.5rem] left-0">
          <div className=" w-[50px] max-large:w-[30px] h-[50px] max-large:h-[30px] rounded-full bg-btn_bg flex flex-rows justify-center items-center mr-5">
          <div className="relative w-[30px] max-large:w-[15px] h-[30px] max-large:h-[15px]">
          <img 
          src="https://img.icons8.com/ios-glyphs/30/ffffff/left.png"
          alt="left"/>
          </div>
          </div>
          <span className="max-large:hidden"> Back to About</span>        
        </div>
        </Link>
    <header className="font-h1 text-heading text-h1 max-large:text-h4">OUR MISSION</header>
    </div>

    <div  className="relative w-full h-[27rem] max-large:h-[15rem] mt-[3em] max-large:mt-[2em]">
        <Image 
        src="/images/aboutbanner.png"
        fill
        alt="banner" 
        /> 
        </div>

    {/* sub links */}
    <div className="flex flex-row justify-center mt-[3em] max-large:mt-[2em]">
      <div className="font-normal text-h2 mr-[3em] max-large:mr-[1.5em] text-btn_bg underline">
        Our mission
      </div>
      <div className="font-normal text-primary text-h2 mr-[3em] max-large:mr-0">
      <Link href='/about/vision' className='no-underline'>
        Our Vision
        </Link>
        </div>
    </div>

    

    <section className="mt-[3em] max-large:mt-[2em] text-h2 max-large:text-h3 font-normal text-primary w-[80%] max-large:w-[90%] mx-auto">
    <p className="mb-[1em]">
    Our mission at SlumTech Foundation is to empower underserved communities worldwide through 
    technology. We are committed to bridging the digital divide and creating opportunities for 
    individuals living in slums and marginalized areas to thrive in the digital age. By providing 
    access to technology resources, education, and training, we aim to inspire innovation, foster 
    creativity, and drive positive change in the communities we serve. Together, 
    we are building a more inclusive and equitable society where everyone has the chance to succeed.
    </p>
    </section>
    <Newsletter />
    <Footer /> 
    </main>
  );
}
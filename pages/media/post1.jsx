import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import Head from 'next/head'
import {Navigation, Sidebar, Footer, Newsletter} from "../../components"


const MediaPost1 = () => {
    return (
        <main className="relative overflow-hidden text-primary">
           <Head>
          <title>SlumTech Foundation Joins US Chamber of Commerce</title>
          <meta
            name="description"
            content="Embracing Digital Transformation: Unlocking the Potential of Slum Communities,"
            key="desc"
          />
          <meta name="keywords" content="underprivileged, slum, nonprofit, foundation, technology, africa, africa slum" />
        </Head>
        <Navigation />
        <Sidebar /> 
        <div className="relative mt-[10em] max-large:mt-[7rem] w-[80%] max-large:w-[90%] mx-auto">
        <Link href='/media' className='no-underline'>
          <div className="text-secondary font-normal text-[#000] flex flex-row items-center">
          <div className=" w-[50px] max-large:w-[30px] h-[50px] max-large:h-[30px] rounded-full bg-btn_bg flex flex-rows justify-center items-center mr-5 max-large:mr-3">
          <div className="relative w-[30px] max-large:w-[15px] h-[30px] max-large:h-[15px]">
          <img 
          src="https://img.icons8.com/ios-glyphs/30/ffffff/left.png"
          alt="left"/>
          </div>
          </div>
          <span> Back to Media</span>        
        </div>
        </Link>
        </div>

        <section className="w-[80%] max-large:w-[90%] mx-auto text-center mt-[3em]">
            <header className="text-cente font-h2 text-h1 max-large:text-mHeader text-primary w-[75%] max-large:w-full mx-auto">
            SlumTech Foundation Joins US Chamber of Commerce
            </header>

            <div  className="relative w-full h-[24rem] max-large:h-[15rem] mt-[3em]">
            <Image 
            src="/images/media1.png"
            fill
            alt="banner"
            /> 
            </div>
           <div className="text-cente font-h4 text-[2em] max-large:text-h2 text-primary w-[75%] max-large:w-full mx-auto my-[1em]">
            We are thrilled to announce that SlumTech Foundation is 
            now a proud member of the prestigious US Chamber of Commerce!
            </div>
            <div className="text-secondary max-large:text-h3 font-normal text-left">
            <p>
            This partnership signifies a significant milestone for SlumTech Foundation, as it opens up new opportunities for collaboration and growth. By joining forces with the US Chamber of Commerce, we are poised to amplify our impact and reach a wider network of stakeholders.
            </p>
            <p className="mt-[1em]">
            Together, we will continue to drive innovation, empower communities, and create lasting change. We look forward to leveraging this partnership to advance our mission of bridging the digital divide and fostering economic empowerment in underserved areas.
            </p>
            <p className="mt-[1em]">
            Stay tuned for exciting initiatives and ventures as we embark on this new chapter with the US Chamber of Commerce by our side.
            </p>
            <p className="mt-[1em]">
            Join us in celebrating this momentous occasion as we work towards a brighter, more inclusive future for all.
            </p>
            <p className="mt-[1em]">Thank you for your continued support.</p>
            </div>
           
        </section>
        <Newsletter />
        <Footer />
        </main>
    )
}

export default MediaPost1;
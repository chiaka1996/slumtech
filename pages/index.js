import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "flowbite-react";
import {Navigation, Sidebar, Footer, Newsletter} from "../components"
import style from "./blog/index.module.css"


export default function Home() {

  return (
   <main className="font-primary text-primary">
    <Navigation />
    <Sidebar /> 
    <section className="mt-[10em]">
      <div className="flex flex-row items-center w-[65%] px-[3em] rounded-[12px] py-[3em] mx-auto border border-[btn_bg] border-t-0">
      <div className="mr-[1rem] text-h2 font-normal min-w-[55%]">
      <p className="mb-[0.5em]">
      At SlumTech Foundation, we are dedicated to leveraging the power of technology to uplift and empower 
      underserved communities worldwide. Our mission is to bridge the digital divide and create opportunities 
      for individuals living in slums and marginalized areas to thrive in the digital age. Through our innovative 
      programs and initiatives, we provide access to technology resources, education, and training to help build a 
      brighter future for all.
      </p>
      <button className="px-[2em] py-[1em] bg-btn_bg rounded-[12px] text-index text-[14px] font-h2">Learn more</button>
      </div>
      <div className="relative min-w-[45%] min-h-[26rem] max-large:h-[30px]">
      <Image 
      src="/images/home1.png" 
      fill
      alt="event"
      /> 
      </div>
      </div>
    </section>

    <section className="mt-[5rem] w-[50%] mx-auto text-center">
    <div className="relative max-w-[13rem] h-[10rem] max-large:h-[30px] mx-auto">
      <Image 
      src="/images/home1.png" 
      fill
      alt="home"
      /> 
      </div>
      <p className="mt-[2em] font-h4 text-h2">
      Join us in our mission to make a difference and 
      transform lives through technology. Explore our website to learn more about our work, 
      get involved, and support our cause.
      </p>
    </section>

    {/* upcoming events */}
    <section className="w-[65%] mx-auto mt-[5rem] rounded-t-[12px]">
      <div className="text-h4 font-h2 bg-btn_bg text-center py-[0.5em] rounded-t-[12px]">Upcoming Events</div>
      <div className="upcomingEvent p-[1.5rem] flex flex-row items-center justify-between">
      <div className="w-[25%] min-h-[15rem]">
      <div className="relative w-full h-[10rem] max-large:h-[30px] mx-auto">
      <Image 
      src="/images/event4.png" 
      fill
      alt="event"
      /> 
      </div>
      <p className="font-h4 text-secondary text-[#2C2543] mb-[0.3em]">
      2025 Event:<br/>
      Tech for Change: Empowering Communities Worldwide.
      </p>
      <button className="px-[1em] py-[0.5em] bg-btn_bg rounded-[12px] text-index text-[14px] font-h2">Read more</button>
      </div>      
      </div>
    </section>

    <section className="mt-[5rem] flex flex-row items-center w-[65%] mx-auto">
    <div className="relative w-[45%] min-h-[22rem] mr-[4em] max-large:h-[30px] mx-auto">
      <Image 
      src="/images/empower.png" 
      fill
      alt="event"
      /> 
      </div>
      <div className="text-center w-[55%] font-h3 text-h1">
      <p className="text-h2">Empower communities. Change lives.</p>
      <p className="text-h4">Join SlumTech Foundation today.</p>

      <div className="my-[1em] font-normal text-secondary px-[1em]">
      Join us in shaping a brighter future for Africa.
      Your support, no matter how big or small, 
      will make a meaningful impact on the lives of those we aim to serve.
      </div>
      <button className="px-6 py-3 bg-btn_bg rounded-[12px]">
        <div  className="relative min-w-[30px] min-h-[30px] max-large:h-[30px]">
        <Image 
        src="https://img.icons8.com/ios/50/fff/circled-right-2.png" 
        fill
        alt="right-btn"
        /> 
        </div>
    </button>
      </div>
    </section>

    {/* recent updates */}
    <section className="w-[65%] mx-auto mt-[5rem]">
      <header className="font-h2 text-h4">Recent Updates</header>
      <div className="upcomingEvent p-[1.5rem] flex flex-row items-center justify-between">
      <div className="w-[25%] min-h-[15rem]">
      <div className="relative w-full h-[10rem] max-large:h-[30px] mx-auto">
      <Image 
      src="/images/event1.png" 
      fill
      alt="event"
      /> 
      </div>
      <p className="font-normal text-secondary mb-[0.3em] text-center">
      Empowering Tomorrow's Leaders: The Global Impact of...
      </p>
      </div> 

       <div className="w-[25%] min-h-[15rem]">
      <div className="relative w-full h-[10rem] max-large:h-[30px] mx-auto">
      <Image 
      src="/images/media1.png" 
      fill
      alt="event"
      /> 
      </div>
      <p className="font-normal text-secondary mb-[0.3em] text-center">
      SlumTech Foundation Joins US Chamber of Commerce
      </p>
      </div> 

       <div className="w-[25%] min-h-[15rem]">
      <div className="relative w-full h-[10rem] max-large:h-[30px] mx-auto">
      <Image 
      src="/images/volunteer.png" 
      fill
      alt="event"
      /> 
      </div>
      <p className="font-normal text-secondary mb-[0.3em] text-center">
      Career: Country Director/Representative at SlumTech Foundation
      </p>
      </div>            
      </div>
    </section>

    <Newsletter />
    <Footer />
    </main>
  );
}

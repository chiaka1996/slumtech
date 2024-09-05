import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import {Navigation, Sidebar, Footer, Newsletter} from "../components"
import style from "./blog/index.module.css"

export const ProgramCard1 = () => {
  return (
    <div className="grid grid-cols-2 w-[45%]">
     <div className="text-center px-[2rem] flex items-center program_grid">
      <div>
     <div className="relative w-[66px] h-[71px] mx-auto">
      <Image 
      src="/icons/vector1.png" 
      fill
      alt="event"
      /> 
      </div>
      <p className="font-h3 text-secondary text-index mt-[1rem]">Community Tech Hubs</p>
      </div>
     </div>

     <div className="text-center px-[2rem] flex items-center program_grid">
      <div>
     <div className="relative w-[66px] h-[71px] mx-auto">
      <Image 
      src="/icons/vector6.png" 
      fill
      alt="vector"
      /> 
      </div>
      <p className="font-h3 text-secondary text-index mt-[1rem]">STEM Education Outreach</p>
      </div>
     </div>

     <div className="text-center px-[2rem] flex items-center program_grid">
      <div>
     <div className="relative w-[66px] h-[71px] mx-auto">
      <Image 
      src="/icons/vector4.png" 
      fill
      alt="event"
      /> 
      </div>
      <p className="font-h3 text-secondary text-index mt-[1rem]">Digital Literacy Workshops</p>
      </div>
     </div>

     <div className="text-center px-[2rem] flex items-center program_grid">
      <div>
     <div className="relative w-[66px] h-[71px] mx-auto">
      <Image 
      src="/icons/vector5.png" 
      fill
      alt="event"
      /> 
      </div>
      <p className="font-h3 text-secondary text-index mt-[1rem]">Tech for Good Initiatives</p>
      </div>
     </div>
    </div>

  )
}

export const ProgramCard2 = () => {
  return (
    <div className="grid grid-cols-2 w-[45%]">
     <div className="text-center px-[2rem] flex items-center program_grid">
      <div>
     <div className="relative w-[66px] h-[71px] mx-auto">
      <Image 
      src="/icons/vector1.png" 
      fill
      alt="event"
      /> 
      </div>
      <p className="font-h3 text-secondary text-index mt-[1rem]">Community Tech Hubs</p>
      </div>
     </div>

     <div className="text-center px-[2rem] flex items-center program_grid">
      <div>
     <div className="relative w-[66px] h-[71px] mx-auto">
      <Image 
      src="/icons/vector6.png" 
      fill
      alt="vector"
      /> 
      </div>
      <p className="font-h3 text-secondary text-index mt-[1rem]">STEM Education Outreach</p>
      </div>
     </div>

     <div className="text-center px-[2rem] flex items-center program_grid">
      <div>
     <div className="relative w-[66px] h-[71px] mx-auto">
      <Image 
      src="/icons/vector4.png" 
      fill
      alt="event"
      /> 
      </div>
      <p className="font-h3 text-secondary text-index mt-[1rem]">Digital Literacy Workshops</p>
      </div>
     </div>
    </div>

  )
}


export default function Home() {
  const bannerImages = ["/images/homebanner3.jfif", "/images/homebanner2.jfif", "/images/homebanner1.jfif"]
  const [imgCount, setImageCount] = useState(0);

  useEffect(() => {
    const interval =  setInterval(() => {
      imgCount > 1 ? setImageCount(0) : setImageCount((img) => img + 1)
    },5000)
    return () => clearInterval(interval)
  },[imgCount])

  const empowerImages = ["/images/empower.png", "/images/donation1.png", "/images/donation2.png"]
  const [empowerCount, setEmpowerCount] = useState(0);

  useEffect(() => {
    const interval =  setInterval(() => {
      imgCount > 1 ? setEmpowerCount(0) : setEmpowerCount((img) => img + 1)
    },7000)
    return () => clearInterval(interval)
  },[empowerCount])

  const [programSwitch, setProgramSwitch] = useState(false);
  useEffect(() => {
    const interval =  setInterval(() => {
      programSwitch ? setProgramSwitch(false) : setProgramSwitch(true)
    },7000)
    return () => clearInterval(interval)
  },[programSwitch])




  return (
   <main className="font-primary text-primary">
    <Navigation />
    <Sidebar /> 
    {/* banner */}
    <section className="relative mt-[7em] w-full min-h-[45.2rem] max-large:h-[30rem]">
    <Image 
       src={bannerImages[imgCount]}
      fill
      alt="home banner"
      /> 
      <div className="bannerOverlay absolute top-0 left-0 w-full min-h-[45.2rem] max-desktop:h-[20em] opacity-[1]"></div>
      <div className="absolute w-full text-center bottom-[7rem] left-0">
        <div className="text-index">
        <p className="font-h2 text-[2.5rem] max-large:text-[2.1rem] ">Welcome to SlumTech Foundation</p>
        <p className="font-normal text-[1.5rem] max-large:text-[1.1rem]">Empowering Communities Through Technology!</p>
        </div>

      </div>
    </section>
    
    <section className="">
      <div className="flex flex-row max-large:flex-col items-center w-[65%] max-large:w-[90%] px-[3em] max-large:px-[1em] rounded-[12px] py-[3em] max-large:py-[1em] mx-auto border border-[btn_bg] border-t-0">
      <div className="mr-[1rem] max-large:mr-[0] text-h2 max-large:text-h3 font-normal min-w-[55%] max-large:w-full max-large:mb-[2rem]">
      <p className="mb-[0.5em]">
      At SlumTech Foundation, we are dedicated to leveraging the power of technology to uplift and empower 
      underserved communities worldwide. Our mission is to bridge the digital divide and create opportunities 
      for individuals living in slums and marginalized areas to thrive in the digital age. Through our innovative 
      programs and initiatives, we provide access to technology resources, education, and training to help build a 
      brighter future for all.
      </p>
      <button className="px-[2em] py-[1em] bg-btn_bg rounded-[12px] text-index text-[14px] font-h2">Learn more</button>
      </div>
      <div className="relative min-w-[45%] max-large:w-full min-h-[26rem] max-large:h-[20rem]">
      <Image 
      src="/images/home1.png" 
      fill
      alt="event"
      /> 
      </div>
      </div>
    </section>

    <section className="relative mt-[5rem] max-large:mt-[3rem] w-[50%] max-large:w-[90%] mx-auto text-center z-[100]">
    <div className="relative max-w-[13rem] h-[10rem] max-large:h-[10rem] mx-auto z-[100]">
      <Image 
      src="/images/boylaptop.png" 
      fill
      alt="home"
      /> 
      </div>
      <p className="mt-[2em] font-h4 text-h2 max-large:text-h3 z-[100]">
      Join us in our mission to make a difference and 
      transform lives through technology. Explore our website to learn more about our work, 
      get involved, and support our cause.
      </p>
    </section>

    {/* our programs */}
    <section className="relative programSection text-btn_color px-[15%] py-2 mt-[5em] mb-[3em]">
      {/* semi circle */}
      <div className="absolute w-[38rem] h-[38rem] rounded-full bg-[#fff] left-[3rem] top-[-25rem] z-10"></div>
      <div className="absolute w-[38rem] h-[38rem] rounded-full bg-[#fff] left-[-30rem] top-[-25rem] z-10"></div>
    <div className="flex flex-row flex-wrap w-full justify-between z-[100]">
    <div className="w-[45%] my-[5em] z-[100]">
      <header className="text-btn_bg font-h2 text-h4 z-[100]">Our Programs</header>
    <p className="font-normal text-secondary mt-[5em] mb-[1em]">
    One of the key pillars of SlumTech Foundation is its focus on technology education. 
    The foundation offers training in coding, digital skills, and entrepreneurship, 
    preparing young people for the demands of the 21st-century workforce. By providing 
    hands-on learning experiences and practical skills development, SlumTech 
    Foundation empowers youth to become creators and innovators in an increasingly 
    digital world.
    </p>
    <button className="px-[0.8em] py-[0.6em] font-h2 text-normal rounded-[12px] text-btn_bg bg-btn_color">Learn more</button>
    </div>

    {programSwitch ? <ProgramCard1 /> : <ProgramCard2 />}
    </div>
    </section>

    {/* upcoming events */}
    <section className="w-[65%] max-large:w-[90%] mx-auto mt-[5rem] max-large:mt-[3rem] rounded-t-[12px]">
      <div className="text-h4 font-h2 bg-btn_bg text-center py-[0.5em] rounded-t-[12px]">Upcoming Events</div>
      <div className="upcomingEvent p-[1.5rem] flex flex-row max-large:flex-col items-center justify-between">
      <div className="w-[25%] max-large:w-full  min-h-[15rem]">
      <div className="relative w-full h-[10rem] mx-auto">
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

    <section className="mt-[5rem] max-large:mt-[3rem] flex flex-row max-large:flex-col items-center w-[65%] max-large:w-[90%] mx-auto">
    <div className="relative w-[45%] max-large:w-full min-h-[22rem] mr-[4em] max-large:mr-0 max-large:h-[20rem] mx-auto">
      <Image 
       src={empowerImages[imgCount]}
      fill
      alt="empower"
      /> 
      </div>
      <div className="text-center w-[55%] max-large:w-full max-large:mt-[1rem] font-h3 text-h1">
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
    <section className="w-[65%] max-medium:w-[90%] mx-auto mt-[5rem] max-large:mt-[3rem]">
      <header className="font-h2 text-h4">Recent Updates</header>
      <div className="upcomingEvent p-[1.5rem] flex flex-row max-medium:flex-col flex-wrap items-center justify-between">
      <div className="w-[25%] max-large:w-full min-h-[15rem]">
      <div className="relative w-full h-[10em] max-large:h-[10em] mx-auto">
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

       <div className="w-[25%] max-large:w-full min-h-[15rem] max-large:mt-[1em]">
      <div className="relative w-full h-[10rem] max-large:h-[10rem] mx-auto">
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

       <div className="w-[25%] max-large:w-full min-h-[15rem] max-large:mt-[2em]">
      <div className="relative w-full h-[10rem] max-large:h-[10rem] mx-auto">
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

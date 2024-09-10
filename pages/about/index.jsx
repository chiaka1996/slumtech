import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import {Navigation, Sidebar, Newsletter, Footer} from "../../components"
import Head from 'next/head'

export default function About() {
  return (
   <main className="text-primary">
    <Head>
    <title>Slumtech About page </title>
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
    <header className="font-h1 text-heading text-h1 max-large:text-h4 mt-[5em] max-large:mt-[3em] text-center">ABOUT SLUM TECH FOUNDATION</header>

    <div  className="relative w-full h-[27rem] max-large:h-[18rem] mt-[3em] max-large:mt-[2em]">
        <Image 
        src="/images/aboutbanner.png"
        fill
        alt="banner"
        /> 
        </div>

    {/* sub links */}
    <div className="flex flex-row justify-center mt-[3em] max-large:mt-[2em]">
      <div className="font-normal text-primary text-h2 mr-[3em] max-large:mr-[1.5em]">
      <Link href='/about/mission' className='no-underline hover:text-btn_bg'>
        Our mission
      </Link>
      </div>
      <div className="font-normal text-primary text-h2 mr-[3em] max-large:mr-0">
      <Link href='/about/vision' className='no-underline hover:text-btn_bg'>
        Our Vision
        </Link>
        </div>
    </div>

    <div className="font-[900] text-h1 max-large:text-[1.75em] w-[54.5rem] max-large:w-[90%] mx-auto mt-[3em] max-large:mt-[2em] relative text-[#000]">
    <span className="text-[#FD213E] font-tertiary text-[3em] max-large:text-head absolute -top-[0.57em] -left-[0.4em] max-large:-left-[0.3em]">“</span>
    <p>
    At the core of SlumTech Foundation's mission is the belief that every young person, 
    regardless of their background or circumstances, 
    should have access to quality education and opportunities to unlock their full potential.
    </p>
    </div>

    <section className="mt-[3em] max-large:mt-[2em] text-h2 max-large:text-h3 font-normal text-primary w-[80%] max-large:w-[90%] mx-auto">
    <p className="mb-[1em]">SlumTech Foundation is a transformative non-profit organization that is making a significant 
    impact in underserved communities across the globe by empowering youth through technology education and mentorship. 
    With a vision to bridge the digital divide and create opportunities for a brighter future, SlumTech Foundation is dedicated 
    to equipping young people with the skills and resources they need to thrive in the digital economy.
    </p>
    <p className="mb-[1em]">
    At the core of SlumTech Foundation's mission is the belief that every young person, regardless of their background
    or circumstances, should have access to quality education and opportunities to unlock their full potential. 
    Through innovative programs and initiatives, the foundation is working towards creating a more inclusive and 
    equitable society where all individuals have the chance to succeed.
    </p>
    <p className="mb-[1em]">
    One of the key pillars of SlumTech Foundation is its focus on technology education. 
    The foundation offers training in coding, digital skills, and entrepreneurship, preparing young people for 
    the demands of the 21st-century workforce. By providing hands-on learning experiences and practical skills development, 
    SlumTech Foundation empowers youth to become creators and innovators in an increasingly digital world.
    </p>
    <p className="mb-[1em]">
    Mentorship plays a vital role in the work of SlumTech Foundation. The foundation partners with industry professionals and 
    experts who serve as mentors to the youth, guiding them on their educational and career journeys. 
    These mentors provide valuable insights, support, and encouragement, helping young people build confidence and pursue their 
    aspirations with determination.
    </p>
    <p className="mb-[1em]">
    Collaboration is at the heart of SlumTech Foundation's approach. The foundation works closely with schools, 
    community organizations, and businesses to create a network of support for the youth it serves. By forging 
    strategic partnerships and leveraging collective expertise, SlumTech Foundation maximizes its impact and reaches 
    more young people with its programs and resources.
    </p> 

    <div  className="relative w-[28.6rem] max-large:w-[90%] h-[27rem] max-large:h-[15rem] my-[3em] max-large:my-[1em] mx-auto">
    <Image 
    src="/images/aboutChild.png"
    fill
    alt="about_child"
    /> 
    </div>
        <p className="mb-[1em] max-large:mt-0">
        SlumTech Foundation is committed to holistic youth development. In addition to technical skills training, 
        the foundation emphasizes the importance of soft skills such as communication, teamwork, and problem-solving. 
        By fostering a well-rounded approach to education, SlumTech Foundation equips young people with the tools they 
        need to navigate challenges, adapt to change, and thrive in a dynamic world.
        </p>
        <p className="mb-[1em]">
        The impact of SlumTech Foundation extends far beyond the individual participants it serves. By investing in the education and development of young 
        people, the foundation is contributing to the growth and sustainability of communities at large. Empowered youth 
        are more likely to become positive changemakers, role models, and leaders who can drive social and economic progress 
        in their communities.
        </p>
        <p className="mb-[1em]">
        SlumTech Foundation is a beacon of hope and opportunity for young people in underserved communities.
        Through its commitment to technology education, mentorship, collaboration, and holistic youth development, the foundation
        is shaping the next generation of digital leaders and creating a more inclusive society where all individuals have
        the chance to thrive.
        </p>
    </section>
    <Newsletter />
    <Footer /> 
    </main>
  );
}
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import {Navigation, Sidebar, Newsletter, Footer} from "../../components"
import Head from 'next/head'


export default function OurTeam() {
  return (
   <main className="text-primary">
    <Head>
    <title>Slumtech Our Teams page </title>
    <meta
      name="description"
      content="SlumTech Foundation is a US-based nonprofit organization with a bold mission 
      to establish world-class tech institutions across Africa"
      key="desc"
    />
    <meta name="keywords" content="nonprofit, foundation, slum, technology, africa, team" />
    </Head>
    <Navigation />
    <Sidebar /> 
    <section className="flex flex-row max-large:flex-col w-[90%] max-large:w-full mr-[10%] max-large:mr-0 mt-[12em] max-large:mt-[7em]">
        <div className="relative w-[50%] max-large:w-[90%] h-[28em] max-large:h-[18em]">
        <Image 
        src="/images/join_us.png"
        fill
        alt="join us"
        /> 
        </div>
        <div className="ml-[5em] max-large:ml-[5%] max-large:mt-[1em] text-basic w-[40%] max-large:w-[90%]">
            <header className="font-h2 text-[48px] max-large:text-h4 ">
            Join Us in Building a <br/>
            Brighter Future
            </header>

            <p className="text-h2 max-large:text-h3 font-normal mt-[1em]">
            At SlumTech Foundation, we believe that access to quality education and technology is a fundamental right.
            By establishing the SlumTech Institute, we aim to provide underserved communities with opportunities for 
            learning, skill development, and empowerment.
            </p>
 
            <div className="flex flex-row items-center mt-[1em]">
            <Link href="/register" className='no-underline'>
                <button className="px-4 py-3 bg-btn_bg rounded-[12px] border border-btn_bg font-h2 text-[#fff] text-[1em] max-large:text-[14px] mr-[2em]">
                    JOIN US AS A VOLUNTEER
                </button>
            </Link>
            <Link href="/career" className='no-underline'>
                <button className="p-3 bg-transparent rounded-[12px] border border-btn_bg font-h2 text-btn_bg text-[1em] max-large:text-[14px]">
                    Careers
                </button>
            </Link>

                <div className="relative w-[50px] h-[50px] ml-[1.4em]">
                    <Image 
                    src="https://img.icons8.com/ios/50/FD213E/long-arrow-right--v1.png"
                    fill
                    alt="join us"
                    /> 
                    </div>
            </div>
        </div>
    </section>

    <section>
        <div className="py-[5em] max-large:py-[2em] px-[7em] max-large:px-[1em] mx-auto mt-[8em] max-large:mt-[5em] min-h-[28em] w-[55%] max-large:w-[90%] rounded-[21px] bg-cover bg-no-repeat bg-[url('/images/team-background1.png')]">
        <header className="font-h2 text-[22px] text-basic">What SlumTech Institute will offer</header>
        <div>
            <ul className="list-disc pl-6 font-normal text-secondary max-large:text-h3 text-basic">
                <li className="mt-[1em] ">
                <h2 className="font-h3">Cutting-edge Technology Education:</h2>
                From coding to digital literacy, our curriculum will equip individuals with 
                the skills needed to thrive in the digital age.
                </li>
                <li className="mt-[1em] ">
                <h2 className="font-h3">Entrepreneurship Training:</h2>
                Empowering aspiring entrepreneurs with the knowledge and resources to launch 
                successful tech ventures.
                </li>
                <li className="mt-[1em] ">
                <h2 className="font-h3">
                Community Engagement:
                </h2>
                Fostering a culture of collaboration, innovation, and community impact through technology.      
                </li>
            </ul>
            
        </div>
        </div>

        <div className="text-primary py-[5em] max-large:py-[2em] px-[7em] max-large:px-[1em] mx-auto mt-[3em] min-h-[28em] w-[55%] max-large:w-[90%] rounded-[21px] bg-cover bg-no-repeat bg-[url('/images/team-background2.png')]">
        <header className="font-h2 text-[22px]">How You Can Help?</header>
        <div>
            <p className="mt-[1em] font-normal text-secondary">
                We cannot do this alone. To bring the SlumTech Institute to life and ensure its sustainability,
                 we are seeking support from individuals, 
                organizations, and partners who share our commitment to educational equity and social impact.
            </p>
            <ul className="list-disc pl-6 font-normal text-secondary">
                <li className="mt-[1em] ">
                <h2 className="font-h3">Entrepreneurship Training:</h2>
                Empowering aspiring entrepreneurs with the knowledge and resources to launch successful tech ventures.
                </li>
                <li className="mt-[1em] ">
                <h2 className="font-h3">
                Community Engagement:
                </h2>
                Fostering a culture of collaboration, innovation, and community impact through technology.     
                </li>
            </ul>
            
        </div>
        </div>
    </section>

    <section className="rounded-[20px] bg-btn_bg w-[70%] max-large:w-[90%] mx-auto px-[7em] max-large:px-[0.5em] py-[1em] mt-[3em] text-[#fff] font-normal text-secondary">
    <div className="relative w-[41px] h-[41px] mb-[0.5em] mx-auto">
    <Image 
    src="/icons/group_hand.png"
    fill
    alt="group_hand"
    /> 
    </div>
    <ul className="list-disc max-large:pl-[1.5em]">
        <li className="mt-[0.5em]">Together, we can make a difference in the lives of countless individuals 
            by providing them with the tools and opportunities they need to succeed.
        </li>

        <li className="mt-[0.5em]">
        Join us in shaping a brighter future for Africa. 
        Your support, no matter how big or small, will make a meaningful impact on the lives of those we aim to serve.
        </li>
    </ul>

    <div className="relative w-[32px] h-[32px] mx-auto mt-[0.5em]">
    <Image 
    src="/icons/jet.png"
    fill
    alt="jet"
    /> 
    </div>
    </section>

    <div className="w-[70%] max-large:w-[90%] mx-auto my-[3em]">
    <p className="text-secondary text-center text-basic font-normal">
        For more information on how you can contribute or partner with us, please contact 
        <span className="text-btn_bg"> supports@slumtech.org</span>
    </p>

    <p className="text-secondary text-center text-primary font-normal px-[4em] max-large:px-[1.5em] mt-[1em]">
    Thank you for standing with us on this journey towards empowering communities through education, 
    technology, and opportunity.
    </p>
    </div>
    <Footer />
    </main>
  )}
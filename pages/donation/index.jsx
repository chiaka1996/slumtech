import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import {Navigation, Sidebar, Newsletter, Footer} from "../../components"
import Head from 'next/head'

export default function Donation() {
  return (
   <main className="text-primary">
    <Head>
    <title>Slumtech Donation page </title>
    <meta
      name="description"
      content="SlumTech Foundation is a US-based nonprofit organization with a bold mission 
      to establish world-class tech institutions across Africa"
      key="desc"
    />
    <meta name="keywords" content="nonprofit, foundation, slum, technology, africa, donation" />
    </Head>
    <Navigation />
    <Sidebar /> 

    <div  className="relative w-full min-h-[22rem] max-large:min-h-[15rem] mt-[10em] max-large:mt-[7rem]">
    <Image 
    src="/images/donationbanner.png"
    fill
    alt="banner"
    /> 
    <div className="text-card1 text-h1 font-h2 relative z-[10] min-h-[22rem] flex flex-row justify-center items-center">
    Donation
    </div>  
    </div>

    <div className="w-[50%] max-large:w-[90%] mt-[3em] font-h2 text-h2 max-large:text-msubHeader mx-auto">
    Welcome to SlumTech Foundation, where every donation makes a difference in empowering the youth in underserved 
    communities through technology. 
    Your support enables us to provide access to education, skills training, and opportunities for a brighter future.
    </div>

    <form className="w-[60%] max-large:w-[90%] rounded-[16px] bg-[#FD213E] px-[3em] max-large:px-[1rem] py-[2em] max-large:py-[1rem] mt-[1.5em] mx-auto">
        <header className="font-h3 text-btn_color text-h1 max-large:text-mHeader">DONATE NOW</header>
        <div className="mt-[1em] flex flex-row flex-wrap items-center text-btn_color">
            <button className="mr-[2em] max-large:mr-[0.8em] p-[0.5em] border border-btn_color rounded-[12px]">$20</button>
            <button className="mr-[2em]  max-large:mr-[0.6rem] p-[0.5em] border border-btn_color rounded-[12px]">$50</button>
            <button className="mr-[2em]  max-large:mr-[0.6rem] p-[0.5em] border border-btn_color rounded-[12px]">$100</button>
            <button className="mr-[2em]  max-large:mr-[0.6rem] p-[0.5em] border border-btn_color rounded-[12px]">$200</button>
            <button className="mr-[2em]  max-large:mr-[0.6rem] p-[0.5em] border border-btn_color rounded-[12px]">$500</button>
        </div>
        <header className="font-normal mt-[0.5em] text-btn_color text-h4  max-large:text-h2">Payment Method</header>
        <div className="flex flex-row flex-wrap mt-[0.5em] text-btn_color items-center">
        <div className='flex flex-row items-center'>
                <input type="checkbox" className='appearance-none outline-none border border-btn_color rounded-full h-[15px] w-[15px]' />
                <span className='font-normal text-h2  max-large:text-msubHeader ml-[0.3em]'>
                Offline Donation
                </span>
            </div>
            <div className='flex flex-row items-center ml-[7em]  max-large:ml-0 max-large:mt-[0.5rem]'>
                <input type="checkbox" className='appearance-none outline-none border border-btn_color rounded-full h-[15px] w-[15px]' />
                <span className='font-normal text-h2 max-large:text-msubHeader ml-[0.3em]'>
                Stripe Credit Card
                </span>
            </div>
        </div>
        {/* grid 1 */}
        <div className="grid grid-cols-2 gap-5 mt-[1.5em]">
        <input 
            type="text"
            placeholder="First Name"
            name="firstName"
            value=''
            className=" rounded-[0.5rem] pl-[1.2em] outline-none border border-index
            w-[100%] h-[3rem] text-primary font-normal text-[18px] placeholder-primary"
            // onChange={onChangeInput}
            />

        <input 
            type="text"
            placeholder="Last Name"
            name="lastName"
            value=''
            className="rounded-[0.5rem] pl-[1.2em] outline-none border border-index
            w-[100%] h-[3rem] text-primary font-normal text-[18px] placeholder-primary"
            // onChange={onChangeInput}
            />
        </div>

        <div className="grid grid-cols-2 gap-5 mt-[1.5em]">
        <input 
            type="text"
            placeholder="Email Address"
            name="email"
            value=''
            className=" rounded-[0.5rem] pl-[1.2em] outline-none border border-index
            w-[100%] h-[3rem] text-primary font-normal text-[18px] placeholder-primary"
            // onChange={onChangeInput}
            />

        <input 
            type="text"
            placeholder="Phone no"
            name="phone"
            value=''
            className="rounded-[0.5rem] pl-[1.2em] outline-none border border-index
            w-[100%] h-[3rem] text-primary font-normal text-[18px] placeholder-primary"
            // onChange={onChangeInput}
            />
        </div>

        <div className="w-full my-[1.5em]">
        <input 
            type="text"
            placeholder="Address"
            name="email"
            value=''
            className=" rounded-[0.5rem] pl-[1.2em] outline-none border border-index
            w-[100%] h-[3rem] text-primary font-normal text-[18px] placeholder-primary"
            // onChange={onChangeInput}
            />
        </div>

        <button className="font-h2 p-[1em] text-btn_bg bg-btn_color rounded-[12px] text-[1em]">Send</button>
    </form>
    <section className="w-[60%] max-large:w-[90%] mx-auto mt-[1.5em]">
    <header className="text-h4 max-large:text-h2 text-basic font-h2">Ways to Donate</header>

    <ul className="list-disc pl-[1em] mt-[1em]">
        <li className="font-h2 text-h2">Monetary Donations</li>
        <p className="font-normal text-secondary max-large:text-normal">
        Your financial support fuels our programs and initiatives. Every dollar counts towards creating a 
        tech-driven change in the lives of our beneficiaries. Click here to make a donation and transform lives today.
        </p>

        <li className="font-h2 text-h2 mt-[1em]">Computers and Equipment</li>
        <p className="font-normal text-secondary max-large:text-normal">
        Donate pre-owned or new computers, laptops, tablets, or other tech equipment to equip our 
        learning centers and empower young minds with essential digital skills. Contact us to arrange a donation.
        </p>

        <li className="font-h2 text-h2 mt-[1em]">Customized SlumTech Souvenirs</li>
        <p className="font-normal text-secondary max-large:text-normal">
        Show your support with exclusive SlumTech souvenirs. Purchase t-shirts, mugs, badges, and more, 
        showcasing our mission and spreading awareness. Proceeds go directly to supporting our projects.
        </p>
    </ul>

    <div className="mt-[2em] px-[2em] max-large:px-[1em] font-normal text-h4 max-large:text-secondary text-center">
    <p>Your contribution, whether big or small, has a ripple effect on the communities we serve. 
    Join us in bridging the digital divide and fostering a generation of tech-savvy change-makers.
    </p>

    <p className="mt-[1em]">
    Thank you for being a part of the SlumTech Foundation's journey towards a more inclusive 
    and tech-empowered society. Together, we can build a brighter tomorrow.
    </p>
    </div>

    <div className="my-[2em] max-large:text-center py-[2.5em] max-large:py-[1em] px-[2em] max-large:px-[1em] bg-btn_bg text-btn_color text-h1 max-large:text-mHeader font-h2 rounded-[12px]">
    Donate today and be the catalyst for change!
    </div>
    </section>
    <Footer />
    </main>
  )
}

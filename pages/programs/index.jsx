import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import {Navigation, Sidebar, Newsletter, Footer, ProgramCard} from "../../components"
import Head from 'next/head'


export default function Programs() {
    const programList = [
        {
            img: "/images/card1.png",
            title: "Digital Literacy Workshops",
            list: [
                "Engage community members in hands-on training to develop essential digital skills.",
                "Provide access to technology and resources for individuals to navigate the digital landscape effectively."
            ]
        },
        {
            img: "/images/card7.png",
            title: "Tech Entrepreneurship Incubator",
            list: [
                "Support aspiring entrepreneurs from underserved communities in launching tech-based businesses.",
                "Offer mentorship, training, and resources to foster innovation and sustainable growth."
            ]
        },
        {
            img: "/images/card6.png",
            title: "STEM Education Outreach",
            list: [
                "Partner with schools and organizations to promote STEM education among youth in marginalized areas.",
                "Inspire the next generation of tech leaders through interactive workshops and mentorship programs."
            ]
        },
        {
            img: "/images/card2.png",
            title: "Tech for Good Initiatives",
            list: [
               "Implement projects leveraging technology to address social challenges, such as healthcare, environment, and education.",
                "Collaborate with local stakeholders to create impactful solutions for sustainable development."
            ]
        },
        {
            img: "/images/card3.png",
            title: "Digital Inclusion Campaign",
            list: [
                "Advocate for equal access to digital resources and opportunities for all community members.",
                "Bridge the digital divide through awareness campaigns, infrastructure development, and policy advocacy."
            ]
        },
        {
            img: "/images/card4.png",
            title: "Innovation Grants Program",
            list: [
                "Provide funding and support to innovative projects that harness technology for social impact.",
                 "Empower changemakers to turn their ideas into reality and drive positive change in their communities."
            ]
        },
        {
            img: "/images/card5.png",
            title: "Community Tech Hubs",
            list: [
                "Establish technology centers in underserved areas as hubs for learning, innovation, and collaboration.",
                "Offer resources, training, and support to empower communities to thrive in the digital age."
            ]
        }
    ]
  return (
   <main className="text-primary">
    <Head>
    <title>Slumtech Programs page </title>
    <meta
      name="Programs"
      content="SlumTech Foundation is a US-based nonprofit organization with a bold mission 
      to establish world-class tech institutions across Africa"
      key="desc"
    />
    <meta name="keywords" content="nonprofit, foundation, slum, technology, africa, tech programs" />
    </Head>
    <Navigation />
    <Sidebar /> 
    <header className="font-h1 text-heading text-h1 max-large:text-h4  mt-[5em] max-large:mt-[3em] text-center">OUR PROGRAMS</header>

    <section className="w-[60%] max-large:w-[90%] mx-auto mt-[3em] max-large:mt-[1em]">
        <div className="text-center px-16 max-large:px-0 text-heading text-h2 max-large:text-h3 font-h3">
        Our programs are designed to equip individuals with the skills and resources they need to 
        thrive in the digital age. From computer literacy classes and coding workshops to entrepreneurship 
        training and mentorship programs, 
        we offer a range of initiatives to support our beneficiaries on their journey to success.
        </div>

        <div className="mt-[3em] grid grid-cols-2 max-large:grid-cols-1 gap-[5em] max-large:gap-[2em]">
            {
                programList.map((program, i) => <div key={i}>
                    <ProgramCard
                    img={program.img}
                    title={program.title}
                    list={program.list}
                    />
                    </div>
                )
            }
        </div>
    </section>

    <section className="rounded-[20px] bg-[#02AED6] w-[70%] max-large:w-[90%] mx-auto text-center px-[1em] py-[1em] mt-[3em] max-large:mt-[2em] text-[#fff] font-h2 text-h2 max-large:text-secondary">
    <div className="flex flex-row items-center justify-center w-[38px] h-[38px] bg-btn_bg mx-auto rounded-full">
    <div className="relative w-[27px] h-[27px]">
    <Image 
    src="/images/sun.png"
    fill
    alt="sunimg"
    /> 
    </div>
    </div>
    <p className="my-2">
    These initiatives embody SlumTech Foundation's commitment to leveraging technology for positive social change and 
    empowering individuals in underserved communities to thrive in the digital era. Through these programs, 
    we aim to create a more inclusive and equitable society where everyone has the opportunity to access and benefit 
    from technology.
    </p>

    <div className="flex flex-row items-center justify-center w-[26px] h-[26px] bg-[#13CA88] mx-auto rounded-full">
    <div className="relative w-[18px] h-[18px]">
    <Image 
    src="/images/sun.png"
    fill
    alt="sunimg"
    /> 
    </div>
    </div>
    
    </section>
    <Newsletter />
    <Footer /> 
    </main>
  );
}
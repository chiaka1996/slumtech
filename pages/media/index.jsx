import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import {Navigation, Sidebar, Newsletter, Footer} from "../../components"
import Head from 'next/head'

export const Card = ({title, paragraph, link, img}) => {
    function googleTranslateElementInit() {
        new window.google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
      }
    
      useEffect(() => {
        googleTranslateElementInit()
      },[])
    return(
        <div className="relative  max-large:pb-[4rem] max-large:mb-[0.5rem]">
            <div  className="relative w-full min-h-[17.5rem] max-large:min-h-[15rem]">
                <Image 
                src={img}
                fill
                alt="event"
                /> 
            </div>

            <h2 className="font-h3 text-secondary">
            {title}
            </h2>
            <p className="text-[#044930] text-normal">
           {paragraph}
            </p>   
                <Link href={link}>
                <button className="px-3 max-large:px-4 py-3 bg-btn_bg rounded-[12px] absolute bottom-[0.5rem] right-0 no-underline">
                <div  className="relative min-w-[20px] min-h-[20px] max-large:min-h-[20px]">
                <Image 
                src="https://img.icons8.com/ios/20/000000/circled-right-2.png" 
                fill
                alt="event"
                /> 
                </div>
                </button>
                </Link>  
        </div>
    )
}

export default function Media() {

    const AllNews = [
        {
            title: "Embracing Digital Transformation: Unlocking the Potential of Slum Communities",
            img: "/images/event1.png",
            link: "blog/post1",
            paragraph: "In the bustling streets of urban slums, where challenges like poverty, limited resources, and inadequate infrastructure persist, a beacon of hope is emerging – digitalization."
        },
        {
            title: "Empowering Tomorrow's Leaders: The Global Impact of SlumTech Institutes' Future Expansion and Strategic Partnerships",
            img: "/images/event2.png",
            link: "blog/post2",
            paragraph: "The future of education is set to be transformed by the visionary plans of the SlumTech Foundation as it embarks on establishing SlumTech Institutes globally"
        },
        {
            title: "SlumTech Foundation Joins US Chamber of Commerce",
            img: "/images/event3.png",
            link: "media/post1",
            paragraph: "In the bustling streets of urban slums, where challenges like poverty, limited resources, and inadequate infrastructure persist, a beacon of hope is emerging – digitalization."
        }
    ]

    const AllEvents = [
        {
            title: "Tech for Change: Empowering Communities Worldwide.",
            img: "/images/event4.png",
            link: "media/post1",
            paragraph: "This event aims to bring together tech innovators, social entrepreneurs, policymakers, and community leaders from around the world to collaborate on solutions that address the unique challenges faced by underserved communities."
        }
    ]

  return (
   <main className="text-primary">
    <Head>
    <title>Slumtech Media page </title>
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

    <section className="flex flex-row max-large:flex-col items-center w-[80%] max-large:w-[90%] mx-auto mt-[10em] max-large:mt-[5em]">
    <div  className="relative w-[55%] max-large:w-full min-h-[32.5rem] max-large:min-h-[20rem] mt-[3em]">
    <Image 
    src="/images/event1.png"
    fill
    alt="event"
    /> 
    </div>

    <div className="w-[40%] max-large:w-full ml-[5rem] max-large:ml-0">
        <header className="font-h4 text-[2.5em] max-large:text-h4 text-primary">
        Embracing Digital Transformation: Unlocking the Potential of Slum Communities
        </header>
        <p className="text-[23px] max-large:text-h3 text-[#044930] font-normal mt-[1em]">
        In the bustling streets of urban slums, where challenges like poverty, limited resources, 
        and inadequate infrastructure persist, a beacon of hope is emerging – digitalization.
        </p>

        <div className="w-full text-right mt-[2rem] max-large:mt-[1rem]">
        <button className="px-6 py-3 bg-btn_bg rounded-[12px]">
        <div  className="relative min-w-[30px] min-h-[30px] max-large:h-[30px]">
        <Image 
        src="https://img.icons8.com/ios/50/000000/circled-right-2.png" 
        fill
        alt="event"
        /> 
        </div>
    </button>
    </div> 
    </div>
    </section>

    {/* all news */}
    <section className="mt-[3em] w-[80%] max-large:w-[90%] mx-auto">
        <header className="font-h4 text-[2.5em] max-large:text-mHeader">All news</header>

        <div className="mt-[1em] grid grid-cols-4 max-large:grid-cols-1 gap-4">
          {
            AllNews.map((item, i) => <Card title={item.title} paragraph={item.paragraph} img={item.img} link={item.link} key={i}/>)
          }
        </div>
    </section>

    {/* AllEvents */}
    <section className="mt-[3em] w-[80%] max-large:w-[90%] mx-auto">
        <header className="font-h4 text-[2.5em] max-large:text-mHeader">All Events</header>

        <div className="mt-[1em] grid grid-cols-4 max-large:grid-cols-1 gap-4">
          {
            AllEvents.map((item, i) => <Card title={item.title} paragraph={item.paragraph} img={item.img} link={item.link} key={i}/>)
          }
        </div>
    </section>
    <Newsletter />
    <Footer /> 
</main>
);
}
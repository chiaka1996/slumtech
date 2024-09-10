import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import { Carousel } from "flowbite-react";
import {Navigation, Sidebar, Newsletter, Footer} from "../../components"
import Head from 'next/head'
import style from "./index.module.css";

export const Card = ({title, paragraph, link, img}) => {
    return(
        <div className="relative max-large:pb-[4rem]">
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
            <Link href={link} className='no-underline'>
                <button className="px-3 py-3 bg-btn_bg rounded-[12px] absolute bottom-[0.5rem] right-0 text-index">
                    Read more
                </button>
              </Link>
        </div>
    )
}


export default function Blog() {
    const AllBlogs = [
        {
            title: "Embracing Digital Transformation: Unlocking the Potential of Slum Communities",
            img: "/images/event1.png",
            link: "/blog/post1",
            paragraph: "In the bustling streets of urban slums, where challenges like poverty, limited resources, and inadequate infrastructure persist, a beacon of hope is emerging – digitalization."
        },
        {
            title: "Empowering Tomorrow's Leaders: The Global Impact of SlumTech Institutes' Future Expansion and Strategic Partnerships",
            img: "/images/event2.png",
            link: "/blog/post2",
            paragraph: "The future of education is set to be transformed by the visionary plans of the SlumTech Foundation as it embarks on establishing SlumTech Institutes globally"
        },
    ]
  return (
   <main className="text-primary">
    <Head>
    <title>Slumtech Blog index page </title>
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
   
    <div className={`mt-[10em] max-large:mt-[5em] w-[100%] min-h-[40.2em] max-large:min-h-[20rem] relative`}>
      <Carousel>
        <div>
          <div className={`${style.blogBanner} flex justify-center items-center text-center text-index`}>
            <div>
            <p className="font-normal text-[2em]">
            5th August, 2024
            </p>
            <p className="font-h2 text-[2em]">Empowering Tomorrow's Leaders:</p>
            <p className="font-h2 text-[2em]">The Global Impact of SlumTech Institutes' Future</p>
            <p className="font-h2 mb-2 text-[2em]">Expansion and Strategic Partnerships</p>
            <Link href="/blog/post2" className='no-underline'>
            <button className="px-3 py-2 bg-btn_bg rounded-[12px] text-normal">View post</button>
            </Link>
            </div>
        </div>
        </div>

        <div className={`${style.blogBanner2} flex justify-center items-center text-center text-index `}>
        <div>
     
            <p className="font-normal text-[2em]">
            5th August, 2024
            </p>
            <p className="font-h2 text-[2em]"> Embracing Digital Transformation:</p>
            <p className="font-h2 text-[2em]">Unlocking the Potential of Slum Communities</p>
            <Link href="/blog/post1" className='no-underline'>
            <button className="px-3 py-2 bg-btn_bg rounded-[12px] text-normal">View post</button>
            </Link>
        </div>
        </div>    
      </Carousel> 
    </div>

     {/* all blogs */}
     <section className="mt-[3em] w-[80%] mx-auto">
        <header className="font-h4 text-[2.5em]">Blog Posts</header>

        <div className="mt-[1em] grid grid-cols-4  max-large:grid-cols-1 gap-4">
          {
            AllBlogs.map((item, i) => <Card title={item.title} paragraph={item.paragraph} link={item.link} img={item.img}  key={i}/>)
          }
        </div>
    </section>
    <Newsletter />
    <Footer />
    </main>
  )}
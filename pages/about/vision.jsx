import Image from "next/image";
import Link from 'next/link';
import {Navigation, Sidebar, Newsletter, Footer} from "../../components"
import Head from 'next/head'


export default function Vision() {
  return (
   <main className="text-primary">
    <Head>
    <title>Slumtech mission page </title>
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
    <div className="relative text-center">
    <span className="absolute top-[1em] left-[10%] text-secondary font-normal text-[#000]">
    <Link href='/about' className='no-underline'>
    Back to About
    </Link>
   </span>
    <header className="font-h1 text-head text-h1 mt-[5em] text-center">OUR MISSION</header>
    </div>

    <div  className="relative w-full h-[27rem] max-large:h-[29rem] mt-[3em]">
        <Image 
        src="/images/aboutbanner.png"
        fill
        alt="banner"
        /> 
        </div>

    {/* sub links */}
    <div className="flex flex-row justify-center mt-[3em]">
      <div className="font-normal text-h2 mr-[3em] text-primary">
      <Link href='/about/mission' className='no-underline'>
        Our mission
        </Link>
      </div>
      <div className="font-normal text-btn_bg text-h2 mr-[3em] underline">  
        Our Vision
        </div>
    </div>

    <section className="mt-[3em] text-h2 font-normal text-primary w-[80%] mx-auto">
    <p className="mb-[1em]">
    At SlumTech Foundation, our vision is a world where technology is a powerful force for good, 
    transforming the lives of individuals in underserved communities. We envision a future where 
    access to technology is universal, where digital skills are a pathway to empowerment, and where 
    innovation and opportunity abound for all. Through our work, we strive to create a more connected, 
    inclusive, and prosperous world, where every individual has the tools and resources they need to 
    reach their full potential. Together, 
    we are shaping a brighter tomorrow, one community at a time.
    </p>
    </section>
    <Newsletter />
    <Footer /> 
    </main>
  );
}
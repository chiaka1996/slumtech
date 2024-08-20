import Image from "next/image";
import Link from 'next/link';
import {Navigation, Sidebar, Newsletter, Footer} from "../../components"
import Head from 'next/head'


export default function Mission() {
  return (
   <main className="text-primary">
    <Head>
    <title>Slumtech abou mission page </title>
    <meta
      name="description"
      content="SlumTech Foundation is a US-based nonprofit organization with a bold mission 
      to establish world-class tech institutions across Africa"
      key="desc"
    />
    <meta name="keywords" content="nonprofit, foundation, slum, technology, africa, mission, about" />
    </Head>
    <Navigation />
    <Sidebar /> 
    <div className="relative text-center">
    <span className="absolute top-[1em] left-[10%] text-secondary font-normal text-[#000]">
    <Link href='/about' className='no-underline'>
    Back to About
    </Link>
   </span>
    <header className="font-h1 text-h1 text-h1 mt-[5em] text-center">OUR MISSION</header>
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
      <div className="font-normal text-h2 mr-[3em] text-btn_bg underline">
        Our mission
      </div>
      <div className="font-normal text-primary text-h2 mr-[3em]">
      <Link href='/about/vision' className='no-underline'>
        Our Vision
        </Link>
        </div>
    </div>

    

    <section className="mt-[3em] text-h2 font-normal text-primary w-[80%] mx-auto">
    <p className="mb-[1em]">
    Our mission at SlumTech Foundation is to empower underserved communities worldwide through 
    technology. We are committed to bridging the digital divide and creating opportunities for 
    individuals living in slums and marginalized areas to thrive in the digital age. By providing 
    access to technology resources, education, and training, we aim to inspire innovation, foster 
    creativity, and drive positive change in the communities we serve. Together, 
    we are building a more inclusive and equitable society where everyone has the chance to succeed.
    </p>
    </section>

    <Newsletter />

    <Footer /> 
    </main>
  );
}
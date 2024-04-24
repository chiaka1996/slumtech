import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Navigation, Sidebar, Footer} from "../components"


export default function Home() {
  const [toggleIdentity, setToggleIdentity] = useState(true)
  setInterval(() => setToggleIdentity(!toggleIdentity), 5000);
  const router = useRouter();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3800,
    pauseOnFocus: false, 
    pauseOnHover: true,
    centerMode: true,
    
    responsive: [
      {
        breakpoint: 760,
        settings: {
         dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        }
      }
    ],
  };

  const data = [
    {
      "header" : "Cloud Computing",
      "img": "/images/cloud.jpg",
      "text" : "Providing hands on experience in cloud infrastructure, Services and deployment"
    },
    {
      "header" : "Software Development",
      "img": "/images/software.jpg",
      "text" : "Empowering Students with knowledge and skills to excel in coding, programming and software engineering"
    },
    {
      "header" : "Artificial Intelligence",
      "img": "/images/education1.jpg",
      "text" : "Students will learn what AI is all about and understand the concept"
    },
    {
      "header" : "Devops Engineering",
      "img": "/images/devops.jpg",
      "text" : "Introducing to students the practices that combine IT operations with software development and ensure students deliver highly quality software"
    },
    {
      "header" : "UI/UX",
      "img": "/images/ux.jpg",
      "text" : "Cultivating creativity and attention to detail in user interface and user experience design"
    },
    {
      "header" : "Machine Learning",
      "img": "/images/machine.jpg",
      "text" : "Focused on building computer systems capable of learning from data, empowering software to enhance it's performance progressively"
    },
    {
      "header" : "Data Science",
      "img": "/images/data.jpg",
      "text" : "Students will acquire the skills to collect and analyze data, followed by presenting their discoveries."
    },
    {
      "header" : "Digital Transformation",
      "img": "/images/digital.jpg",
      "text" : "Guiding students through the process of digitizing businesses and processes to meet modern demands"
    },
    {
      "header" : "App Development",
      "img": "/images/app.jpg",
      "text" : "Enabling students to explore the world of mobile application development for various platforms"
    },

  ]

  return (
   <main className="relative overflow-hidden font-primary">
    <Navigation />
    <Sidebar /> 
  
    <div className="mt-[4%] max-large:mt-[22%] small:max-large:mt-[14%] w-full h-[100vh] max-large:h-[25rem] relative">
    <Image 
        src="/images/banner.png"
        fill
        alt="banner"
        className="filter brightness-[30%]"
          />
      <div className="animate__animated animate__slower animate__slideInLeft absolute top-[10%] xlarge:top-[15%] max-large:top-[5%] left-[10%] xlarge:left-[15%] max-large:left-[5%] w-[47%] xlarge:w-[45%] max-large:w-[90%] z-30">  
       <div className="h-[20em]  max-large:h-[12em]">
        <header className={`font-header text-[3rem] xlarge:text-[4.5em] max-large:text-[1.5rem] text-btn_color absolute top-[4%] left-0 ${toggleIdentity ? "header1" : "header2"}`}>
          Nurturing Young Talents from Slum Communities in Africa Into Tech
          </header>
          
          <header className={`font-header text-[3rem] xlarge:text-[4.5em] max-large:text-[1.5rem] text-btn_color absolute top-[3%] left-0 ${toggleIdentity ? "header2" : "header1"}`}>
          Let's Inspire and support the Next Generation of Tech-Savy Innovators as they Shape 
          the World of Tommorrow!
          </header>  
          </div> 

          <div className="z-30 mt-[7%] xlarge:mt-[20%] max-large:mt-0">
          <div className="font-normal text-normal max-large:text-twelve xlarge:text-[2.2em] max-large:text-[12px] text-btn_color w-[70%] max-large:w-[90%] xlarge:w-[90%]">
            Join us in our mission to empower Africa's youth through technology
            Together, we can build a more inclusive and empowered Africa
          </div>
          <div className="flex flex-row mt-[2%]">
            <button onClick={() => router.push('/partnership')} className="h-[3rem] xlarge:h-[3.5em] px-[6%] bg-btn_green hover:bg-[#8CCA9A] rounded-[8px] font-btn_weight  text-btn_color hover:text-[#093212] max-large:text-[14px] xlarge:text-xnormal mr-5 max-large:mr-3 outline-none">Partner with us</button>
            <button onClick={() => router.push('/contact')} className="h-[3rem] xlarge:h-[3.5em] px-[5%] bg-[#D1EAD7] hover:bg-[#8CCA9A] rounded-[8px] font-btn_weight text-[#093212] hover:text-[#093212] max-large:text-[14px] xlarge:text-xnormal outline-none" >Become a Volunteer</button>
          </div>
          </div>     
      </div>
      <div className="flex flex-row items-end absolute bottom-[10%] max-large:bottom-[2%] max-large:left-[5%] right-[10%] xlarge:right-[15%] text-btn_color">
                <div className="w-[15.625rem]">
                    <h2 className="flex flex-row">
                    <div className="relative w-[1rem] h-[1.25rem] mr-2">
                        <Image 
                        src="/icons/location.png"
                        fill
                        alt="location"
                            /> 
                        </div>
                    <span className="font-header text-normal max-large:text-twelve text-btn_color">Location</span>
                    </h2>
                    <p className="font-normal text-twelve max-large:text-ten text-btn_color">
                    801 Travis Street, Suite 2101, PMB 714, Houston Texas  77002
                    </p>         
                </div>

                <div className="ml-2 ">
                    <h2 className="flex flex-row">
                    <div className="relative w-[40px] h-[26px] max-large:w-[1.7rem] max-large:h-[1.25rem] mr-2">
                        <Image 
                        src="/icons/email.png"
                        fill
                        alt="location"
                            /> 
                    </div>
                    <span className="font-header text-normal max-large:text-twelve text-btn_color">Email</span>
                    </h2>
                    <p className="font-normal text-twelve max-large:text-ten text-btn_color">
                    contact@slumtechfoundation.com
                    </p>
                </div>
            </div>        
    </div> 
    
   
    <section className="approachBg pt-[10%]">
    {/* our approach */}
   <section className="w-full xlarge:mt-0 xlarge:pt-[10%] px-[10%] xlarge:px-[15%] max-md:px-[5%] flex flex-row  max-large:flex-col-reverse items-center justify-center z-5">
   <div className="z-50 w-[28.1rem] h-[28.1rem]  max-large:w-[12.5em] max-large:h-[12.5em] relative mr-[9.375em]  max-large:mr-0  max-large:mt-5">
    <Image
      src="/images/approach.png"
      fill
      alt="school children"
      className="approach"
        /> 
    </div>
    
    <div className="w-[40%] z-50  max-large:w-full">
    <header className="font-header text-header text-head max-large:text-mhead xlarge:text-xhead mb-3">Our Approach</header>
    <div className="text-normal max-large:text-fourteen xlarge:text-xnormal  font-normal text-text_color">
    Through strategic partnerships, 
    innovative curriculum, and dedicated mentors, we aim 
    to provide a comprehensive tech education experience that equips 
    young people with the skills, knowledge, and confidence to pursue rewarding 
    careers in technology and contribute meaningfully to their communities
    </div>
    </div>
   </section>

   
   <section className="relative mt-[3%] max-large:mt-0 h-[90em] xlarge:h-[150vh]">
   <div className='z-10 absolute w-[31.3rem]  xlarge:w-[50.2em]  max-large:w-[300px] h-[31.3rem] xlarge:h-[50.2em] max-large:h-[300px] rounded-full top-0 max-large:-top-[5%] -right-[5%] bg-[#F5FBF6]'>
   <div className="absolute z-50 bottom-[20%] left-[20%] w-[195px] xlarge:w-[20.5em]">
      <div className="text-[#0F01AF] font-header text-head max-large:text-[2em] xlarge:text-[4em]"><span className="free">100% </span>Free</div>
      <div className="text-normal xlarge:text-xnormal  max-large:text-twelve text-header font-header max-large:w-[10em]">Tech training for young African talents from the slum</div>
    </div>
   </div>

   <div className="absolute top-[30%] z-50  max-large:top-[15%] right-[30%] max-large:right-[50%] w-[9.1rem] xlarge:w-[20em]">
      <div className="text-[#FFCB2F] font-header text-head  xlarge:text-[4em] max-large:text-[2em] recruite"></div>
      <div className="text-normal  xlarge:text-xnormal  max-large:text-twelve max-large:w-[9em] text-header font-header">
      We are recruiting millions of young African talents into the tech industry
      </div>
    </div>

    <div className="absolute z-50 top-[36%] xlarge:top-[40%]  max-large:top-[20%] right-[12%] xlarge:right-[10%]  max-large:right-[10%] w-[12.9rem] xlarge:w-[25.2em]  max-large:w-[150px]">
      <div className="text-[#1A9635] font-header text-head  xlarge:text-[4em] max-large:text-[2em] mb-2 mission"></div>
      <div className="text-normal z-60 xlarge:text-xnormal max-large:text-twelve text-header font-header">
      We are on a mission to recruit thousands of secondary schools housing talented teens within the slum community
      </div>
    </div>
    <div className='z-10 opacity-50 absolute w-[40.6rem]  max-large:w-[450px] xlarge:w-[62em] h-[40.6rem] xlarge:h-[62em]  max-large:h-[450px] rounded-full top-[40%] xlarge:top-[45%]  max-large:top-[22%] -right-[1%]  max-large:-right-[35%] bg-[#FFE7E7]' > 
   </div>
  

    {/* our identity */}
    <div className="z-50 w-[45%] xlarge:w-[40%] xlarge:h-[70vh] max-large:h-[30em] max-large:w-[90%] bg-[#F5FBF6]  pt-[6%] pb-[10%] absolute top-[10%] max-large:top-[35%] left-[10%] xlarge:left-[15%] max-large:left-[5%]">
    <div className="max-large:hidden">
    {
        toggleIdentity ? 
      <div className="w-[60%] xlarge:w-[80%] xlarge:mx-[10%] mx-[20%] max-large:w-[90%]  max-large:mx-[5%]  max-large:mt-[15%]">
          <header className="font-header text-head max-large:text-mhead text-header">Our Identity</header>
      <div className="text-normal max-large:text-mnormal xlarge:text-xnormal font-normal text-text_color w-[23.5rem] xlarge:w-[100%] max-large:w-[100%]">
      SlumTech Foundation is committed to building a sustainable tech ecosystem 
      environment that thrives on diversity, inclusivity, and social responsibility. 
      We prioritize ethical tech practices, environmental sustainability, and social impact,
      ensuring that our initiatives contribute to a future where all African
      teens and youth [18 - 21 yrs] can participate in, and benefit from the digital economy
      </div>
      </div> 
       :
      <div> 
          <section className="flex flex-row  max-large:flex-col items-center justify-between w-[80%]  max-large:w-[90%] mx-[10%]  max-large:mx-[5%]">
            <div className="w-[50%]  max-large:w-[60%] bg-[#fff] h-full py-[5%] flex flex-row justify-center">
            <div className="w-[10.4em] max-large:w-full h-[10em] relative">
            <Image 
            src="/images/donate_book.png"
            fill
            alt="donate"
            /> 
            </div>
            </div>
            <div className="w-[40%]  max-large:w-[100%]  max-large:mt-3">
            <p className="text-text_color font-normal text-twelve xlarge:text-normal">
            "Tech Entrepreneurship and Career for 
            Africa Development" is a comprehensive guide by SlumTech Foundation, 
            focusing on leveraging technology for economic growth,
            entrepreneurship opportunities, and career development in Africa. 
            The book explores innovative strategies for sustainable development in the tech sector”
            </p>

            <p className="text-[#F32B04] font-header text-twelve mt-[2%] coming">Coming Soon..</p>
            </div>
          </section>
       </div>
      } 
      </div>

      {/* displays on mobile only */}
      <div className="large:hidden w-[60%] xlarge:w-[80%] xlarge:mx-[10%] mx-[20%] max-large:w-[90%]  max-large:mx-[5%]  max-large:mt-[15%]">
          <header className="font-header text-head max-large:text-mhead text-header">Our Identity</header>
      <div className="text-normal max-large:text-mnormal xlarge:text-xnormal font-normal text-text_color w-[23.5rem] xlarge:w-[100%] max-large:w-[100%]">
      SlumTech Foundation is committed to building a sustainable tech ecosystem 
      environment that thrives on diversity, inclusivity, and social responsibility. 
      We prioritize ethical tech practices, environmental sustainability, and social impact,
      ensuring that our initiatives contribute to a future where all African
      teens and youth [18 - 21 yrs] can participate in, and benefit from the digital economy
      </div>
      </div> 
     
    </div>

    <div className="z-50 flex flex-row justify-center items-center w-[45%] xlarge:w-[40%] max-large:w-[90%] h-[41.25em] xlarge:h-[45em]  max-large:h-[350px] bg-[#FDFEFD] absolute bottom-[15%] max-large:bottom-[13%] left-[10%] xlarge:left-[15%] max-large:left-[5%]">
      <div className="text-[1.5rem] xlarge:text-xnormal max-large:text-mnormal font-header text-text_color w-[25.5rem] xlarge:w-[80%]  max-large:px-[5%]">
      <p>
      SlumTech is committed to working closely with schools in Slum communities to identify
       and register students with a passion for technology and a drive to excel. 
      By fostering these partnerships, we aim to create a seamless pathway for 
      skilled students to participate in the SlumTech project and benefit from our
      educational programs
      </p>
      <button  onClick={() => router.push('/register')} className="h-[3em] px-[7%] bg-[#1A9635] hover:bg-[#66B978] font-btn_weight text-btn_color hover:text-text_color text-normal rounded-[8px] mt-7 max-large:mt-[5%]">Enroll Now</button>
      </div>
    </div>

    <div className="schoolboy absolute bottom-[3%] max-large:bottom-0 left-[10%] xlarge:left-[15%] max-large:left-[5%] z-10 max-large:z-[100] max-large:h-[12em] h-[80vh] xlarge:h-[40em] w-[80%] xlarge:w-[70%] max-large:w-[90%]">
    
    <Image 
      src="/images/schoolboy.png"
      style={{
        objectFit: 'cover',
        zIndex: '10'
      }}
      fill
      alt="school boy"
      className="schoolboy"
        /> 
    </div>
    </section>
    </section>

     <section className="w-[100%] h-[200vh] max-large:h-[1400px] xlarge:h-[200vh] py-[5%] max-large:py-[2%] px-[10%] xlarge:px-[15%] max-large:px-[5%] relative max-large:mt-[1%]">
    <Image 
      src="/images/what.png"
      fill
      className="filter brightness-[10%] -z-5"
      alt="what background"
        /> 
    
    <div className="z-10  max-large:top-[3%] max-large:left-[5%] absolute top-[5%] left-[10%] xlarge:left-[15%]">
        <header className="font-header text-head  max-large:text-mhead text-btn_color z-10">What We Do</header>
        <div className="text-normal  max-large:text-twelve xlarge:text-[1.2em] font-normal text-btn_color w-[20.56em] xlarge:w-[25em] max-large:w-[70%] z-100">
        At SlumTech, we understand the potential of every individual, 
        and we are dedicated to providing access, guidance, and education 
        to unlock their full capabilities through:
      </div>
      </div>
  
      <section className="relative h-[160vh] xlarge:h-[160vh] mt-[18%]  max-large:mt-[38%] xlarge:mt-[15%]">
      <div className="w-[70%] max-large:w-[100%] ml-[30%] max-large:ml-0 flex flex-row max-large:flex-col justify-between">
        <div className="font-header text-[1.5em] xlarge:text-[2.5em] max-large:text-mnormal text-btn_color w-[15.5em] max-large:w-[75%] xlarge:w-[40%] pt-[10%] max-large:pt-[15%]">
        Strategic partnerships with schools in Slum communities
        </div>
      <div className=" w-[45%] max-large:w-full max-md:h-[250px] h-[70vh] max-large:h-[200px] relative">
      <Image 
        src="/images/wedo1.png"
        fill
        alt="school boy" 
          /> 
          </div>
        </div>
 
        <div className="absolute bottom-[38%] max-large:bottom-[32%] left-0 w-[66%] max-large:w-[100%] xlarge:w-[65%]  flex flex-row max-large:flex-col justify-between max-large:justify-left items-center max-large:items-start">
        <div className="font-header text-[1.5em] max-large:text-mnormal xlarge:text-[2.5em] text-btn_color w-[21.875rem] xlarge:w-[58%] max-large:w-[75%] mx-0">
        Identifying and fostering tech skills and talents in students 
        and youths with creative minds and passion for technology
        </div> 
      <div className="w-[45%] max-large:w-full h-[70vh] max-large:h-[250px] relative">
      <Image 
        src="/images/wedo2.png"
        fill
        alt="school boy"
          /> 
          </div>
        </div> 

        <div className="absolute bottom-[9%] max-large:-bottom-[4%] right-[0] w-[70%] max-large:w-[100%] flex flex-row max-large:flex-col justify-between">
        <div className="font-header text-[1.5em] xlarge:text-[2.5em] max-large:text-mnormal text-btn_color w-[24.875rem] xlarge:w-[40%] max-large:w-[75%] mt-[30%] xlarge:mt-[35%] max-large:mt-0">
        Providing an inclusive and supportive 
        environment where teens and youth from slum 
        areas can explore and develop their tech skills
        </div>
      <div className="w-[45%] max-large:w-full h-[70vh] max-large:h-[250px] relative">
      <Image 
        src="/images/wedo3.png"
        fill
        alt="school boy"
          /> 
          </div>
        </div>
        </section>
    </section> 

      <section className="educationBg relative pb-[1%]"> 

      {/* eductional initiatives */}
      <section className="py-[5%] max-large:px-[5%] px-[10%] xlarge:px-[15%]">
      <header className="font-header text-head max-large:text-mhead text-header mb-3">Our Educational initiatives</header>
      <Slider {...settings}>
      {/* <div className="flex flex-row eduslide overflow-x-auto"> */}
      {data.map((option, i) =>  <div key={i} className="inline mb-[5%] w-[70px]  max-large:w-[40%]  h-[20rem] xlarge:h-[30rem] rounded-xl shadow-lg shadow-[#ffffff] bg-btn-color">
      <div className="h-[9.4rem] xlarge:h-[13rem] rounded-xl relative">
      <Image 
      src={option.img}
      fill
      alt="education"
      className="rounded-t-[8px] rounded-b-[20%]"
        /> 
      </div> 
        <div className="pt-[5%] px-[5%]">
        <h3 className="mt-1 text-text_color font-header text-sub_header xlarge:text-[2.2em] ">{option.header}</h3>
        <div className="text-[#7d7f82] text-fourteen xlarge:text-[1.6em] font-normal">{option.text}</div>
        </div>
      </div>
       )} 
       {/* </div> */}
    </Slider> 
    </section> 

    {/* our book launch */}
          <section className="large:hidden w-[90%] mx-auto mt-[15%] mb-[5%] ">
            <div className="w-[100%] bg-[#fff] h-[22.5em] flex flex-row justify-center items-center">
            <div className="w-[19.4em] h-[20em] relative">
            <Image 
            src="/images/donate_book.png"
            fill
            alt="donate"
            /> 
            </div>
            </div>
            <div className="">
            <p className="text-text_color font-normal text-mnormal mt-[5%]">
            "Tech Entrepreneurship and Career for 
            Africa Development" is a comprehensive guide by SlumTech Foundation, 
            focusing on leveraging technology for economic growth,
            entrepreneurship opportunities, and career development in Africa. 
            The book explores innovative strategies for sustainable development in the tech sector”
            </p>

            <p className="text-[#F32B04] font-header text-normal mt-[2%] coming">Coming Soon..</p>
            </div>
          </section>

      {/* partner with us */}
     <section className="z-50 px-[15%] xlarge:px-[20%] max-large:px-[5%] mt-[5%] max-large:mt-[15%] mb-[5%] w-full flex flex-row max-large:flex-col-reverse justify-between">
      <div className=" w-[45%] max-large:w-full max-large:mt-[5%] ">
      <p className="text-normal max-large:text-mnormal xlarge:text-about font-normal text-color">
      Being a part of SlumTech is a rewarding experience that allows 
      you to make a tangible difference in the lives of others. By giving your 
      time and skills, you have the opportunity to create positive change, build
       meaningful connections, and contribute to a cause you believe in. Whether 
       you're a programmer, designer, or enthusiast, your involvement can make a 
       profound difference in shaping the future of technology. Join us in our mission 
      to empower young Africans with the tools and self-assurance to excel in the world of 
      technology
      </p>
      <div className="flex flex-row justify-between mt-[5%]">
        <button className="w-[48%] h-[3rem] px-[5%] bg-btn_green hover:bg-[#8CCA9A] rounded-[8px] font-btn_weight  text-btn_color hover:text-[#093212] max-large:text-[14px] mr-5 max-large:mr-3 outline-none">Partner with us</button>
        <button className="w-[48%] h-[3rem] px-[5%] bg-[#D1EAD7] hover:bg-[#8CCA9A] rounded-[8px] font-btn_weight text-[#093212] hover:text-[#093212] max-large:text-[14px] outline-none" >Become a Volunteer</button>
      </div>
      </div>
      <div className="w-[45%] max-large:w-full">
        <div className="flex flex-row items-center justify-center">
        <div  className="relative w-[4rem] max-large:w-[50px] h-[4rem] max-large:h-[50px] mr-[3.125rem]">
          <Image 
          src="/images/partner2.png"
          fill
          alt="logo"
          className="blackshirt"
          /> 
      </div>
      <div  className="relative w-[9.375rem] max-large:w-[120px] h-[9.375rem] max-large:h-[120px]">
          <Image 
          src="/images/partner3.png"
          fill
          alt="logo"
          className="yellowshirt"
          /> 
      </div>
      </div> 
       <div className="flex flex-row justify-center">
      <div  className="relative w-[16.25rem] max-large:w-[200px] h-[16.25rem] max-large:h-[200px]">
      <Image 
      src="/images/partner1.png"
      fill
      alt="slumtech shirt"
      className="whiteshirt"
      /> 
      </div>
      </div>
      </div>
    </section> 
    </section> 

    {/* donate */}
     <section className="w-[100%] h-[25rem] max-large:h-[9.63em] relative"> 
     <Image 
      src="/images/donate_banner.png"
      fill
      alt="banner"
        /> 

    <div className="absolute top-[30%] max-large:hidden left-[10%] xlarge:left-[15%]  w-[26.3125em] text-btn_color">
      <p className="text-normal max-large:text-[12px] font-normal text-color">
      Your donation has the power to change lives.
       By contributing to SlumTech Foundation, you're not just giving, 
       you're impacting lives, opportunity, and a chance for a brighter future.
      Every donation, makes a difference
      Together, we can build a better world
      </p>
      <div className="mt-[5%]">
        <button onClick={() => router.push('/donation')}  className="hover:bg-[#8CCA9A] w-[16.187rem] max-large:w-[170px] h-[3em] max-large:h-[3em] px-[5%] max-large:px-0 max-large:text-[12px] bg-btn_green rounded-[8px] font-btn_weight text-btn_color hover:text-[#093212] mr-5 outline-none">Donate</button>
      </div>
    </div>
    </section> 
    <div className="hidden max-large:block px-[5%] py-[5%]">
    <p className="text-mnormal font-normal text-[#2B2B2B]">
      Your donation has the power to change lives.
       By contributing to SlumTech Foundation, you're not just giving, 
       you're impacting lives, opportunity, and a chance for a brighter future.
      Every donation, makes a difference
      Together, we can build a better world
      </p>
      <div className="mt-[5%]">
        <button onClick={() => router.push('/donation')}  className="w-[170px] h-[3em]  bg-btn_green rounded-[8px] font-btn_weight text-normal text-btn_color outline-none">Donate</button>
      </div>
    </div>
    <Footer />
    </main>
  );
}

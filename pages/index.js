import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Navigation, Sidebar, Footer} from "../components"

export default function Home() {
  const [toggleIdentity, setToggleIdentity] = useState(true)
  setInterval(() => setToggleIdentity(!toggleIdentity), 9000);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
  
    <div className="mt-[5%] max-large:mt-[22%] w-full h-[700px] max-large:h-[350px] relative">
      <div className="animate__animated animate__slower animate__slideInLeft absolute top-[5%] max-large:top-[3%] left-[10%] max-large:left-[5%] w-[45%] max-large:w-[90%] z-30">  
        <header className={`font-header text-[48px] max-large:text-[24px] text-btn_color absolute top-[5%] left-0 ${toggleIdentity ? "header1" : "header2"}`}>
          Nurturing Young Talents from Slum Communities in Africa Into Tech
          </header>
          
          <header className={`font-header text-[48px] max-large:text-[24px] text-btn_color absolute top-[5%] left-0 ${toggleIdentity ? "header2" : "header1"}`}>
          Let's Inspire and support the Next Generation of Tech-Savy Innovators as they Shape 
          the World of Tommorrow!
          </header>        
      </div>
      <div className="animate__animated animate__slower animate__slideInLeft z-30 absolute top-[46%] left-[10%] w-[35%]">
      <div className="join font-normal text-normal max-large:text-[10px] max-large:h-[310px] text-btn_color">
        Join us in our mission to empower Africa's youth through technology
        Together, we can build a more inclusive and empowered Africa
      </div>
      </div>
    <Image 
      src="/images/banner.png"
      fill
      alt="banner"
      className="filter brightness-[30%]"
        /> 

        <div className="absolute z-30 bottom-[25%] max-large:bottom-[15%] right-[10%] max-large:right-[5%] w-[22%] max-large:w-[40%]">
          <header className="font-header text-[22px] max-large:text-[10px] text-btn_color">Brands Supporting Our Mission</header>
          <div className="flex flex-row justify-around">
          <div className="relative w-[110px] max-large:w-[64px] h-[35px] max-large:h-[12px]">
          <Image 
          src="/logo/a2z.png"
          fill
          alt="a2z"
            /> 
          </div>
          <div className="relative w-[115px] max-large:w-[64px] h-[35px] max-large:h-[12px]">
          <Image 
          src="/logo/gtech.png"
          fill
          alt="banner"
            /> 
          </div>
          </div>
        </div>
    </div> 
    
   

    {/* our approach */}
   <section className="w-full mt-[10%] px-[10%] max-md:px-[5%] flex flex-row  max-large:flex-col-reverse items-center">
   <div className="w-[450px] h-[450px]  max-md:w-[250px] max-md:h-[250px] relative mr-[150px]  max-large:mr-0  max-large:mt-5">
    <Image
      src="/images/approach.png"
      fill
      alt="school children"
      className="approach"
        /> 
    </div>
    <div className="w-[40%]  max-large:w-full">
    <header className="font-header text-header text-head mb-3">Our Approach</header>
    <div className="text-normal font-normal text-text_color">
    Through strategic partnerships, 
    innovative curriculum, and dedicated mentors, we aim 
    to provide a comprehensive tech education experience that equips 
    young people with the skills, knowledge, and confidence to pursue rewarding 
    careers in technology and contribute meaningfully to their communities
    </div>
    </div>
   </section>

   
   <section className="relative mt-[3%] h-[1440px]  max-large:h-[1800]">
   <div className='absolute w-[500px]  max-large:w-[300px] h-[500px] max-large:h-[300px] rounded-full top-0 -right-[5%] bg-[#F5FBF6]'>
   <div className="absolute bottom-[20%] left-[20%] w-[195px]">
      <div className="text-[#0F01AF] font-header text-head"><span className="free">100% </span>Free</div>
      <div className="text-normal  max-large:text-[14px] text-header font-header">Tech training for young African talents from the slum</div>
    </div>
   </div>

   <div className="absolute top-[30%]  max-large:top-[20%] right-[30%]  max-large:right-[50%] w-[146px]">
      <div className="text-[#FFCB2F] font-header text-head recruite"></div>
      <div className="text-normal  max-large:text-[14px] text-header font-header">
      We are recruiting millions of young African talents into the tech industry
      </div>
    </div>

    <div className='absolute w-[650px]  max-large:w-[450px] h-[650px]  max-large:h-[450px] rounded-full top-[40%]  max-large:top-[30%] -right-[1%]  max-large:-right-[35%] bg-[#FFE7E7]' >
   <div className="absolute z-50 -top-[8%]  max-large:-top-[10%] right-[25%]  max-large:right-[35%] w-[206px]  max-large:w-[150px]">
      <div className="text-[#1A9635] font-header text-head mb-2 mission"></div>
      <div className="text-normal  max-large:text-[14px] text-header font-header">
      We are on a mission to recruit thousands of secondary schools housing talented teens within the slum community
      </div>
    </div>
   </div>

    {/* our identity */}
    <div className="w-[697px] max-large:w-[90%] bg-[#F5FBF6]  pt-[6%] pb-[10%] absolute top-[10%] max-large:top-[43%] left-0 max-large:left-[5%]">
    {
        toggleIdentity ? 
      <div className="w-[60%] mx-[20%] max-large:w-[90%]  max-large:mx-[5%]">
          <header className="font-header text-head text-header">Our Identity</header>
      <div className="text-normal font-normal text-text_color w-[376px] max-large:w-[100%]">
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
            <div className="w-[167px] max-large:w-full h-[158px] relative">
            <Image 
            src="/images/donate_book.png"
            fill
            alt="donate"
            /> 
            </div>
            </div>
            <div className="w-[40%]  max-large:w-[100%]  max-large:mt-3">
            <p className="text-text_color font-normal text-[12px]">
            "Tech Entrepreneurship and Career for 
            Africa Development" is a comprehensive guide by SlumTech Foundation, 
            focusing on leveraging technology for economic growth,
            entrepreneurship opportunities, and career development in Africa. 
            The book explores innovative strategies for sustainable development in the tech sector”
            </p>

            <p className="text-[#F32B04] font-header text-[12px] mt-[2%] coming">Coming Soon..</p>
            </div>
          </section>
       </div>
      } 
     
    </div>

    <div className="z-50 flex flex-row justify-center items-center w-[692px] max-large:w-[90%] h-[660px]  max-large:h-[350px] bg-[#FDFEFD] absolute bottom-[15%] max-large:bottom-[5%] left-[10%] max-large:left-[5%]">
      <div className="text-[24px] max-large:text-[14px] font-header text-text_color w-[408px]  max-large:px-[5%]">
      <p>
      SlumTech is committed to working closely with schools in Slum communities to identify
       and register students with a passion for technology and a drive to excel. 
      By fostering these partnerships, we aim to create a seamless pathway for 
      skilled students to participate in the SlumTech project and benefit from our
      educational programs
      </p>
      <button className="h-[48px] px-[7%] bg-[#1A9635] font-btn_weight text-btn_color text-normal rounded-[8px] mt-7">Enroll Now</button>
      </div>
    </div>

    <div className="absolute bottom-[3%] max-large:bottom-0 left-[10%] max-large:left-[5%] z-10 max-large:z-[100] max-large:h-[100px] h-[500px] w-[80%] max-large:w-[90%]">
    {/* <div className="w-[90%] h-[500px] max-md:h-[200px] relative"> */}
    <Image 
      src="/images/schoolboy.png"
      style={{
        objectFit: 'cover',
        zIndex: '10'
      }}
      fill
      alt="school boy"
        /> 
    </div>
    </section>

    <section className="bg-[#F5FBF6] w-[100%] h-[1356px] py-[5%] px-[10%] max-md:px-[5%] relative max-md:mt-[5%]">
      <div>
        <header className="font-header text-head text-header">What We Do</header>
        <div className="text-normal font-normal text-text_color w-[329px] max-large:w-full">
        At SlumTech, we understand the potential of every individual, 
        and we are dedicated to providing access, guidance, and education 
        to unlock their full capabilities through:
      </div>
      </div>

      <div className="w-[70%] max-large:w-[100%] ml-[30%] max-large:ml-0 flex flex-row max-large:flex-col justify-between">
        <div className="font-header text-[20px] max-large:text-[16px] text-header w-[274px] pt-[20%] max-large:pt-[15%]">
        strategic partnerships with schools in Slum communities
        </div>
      <div className="w-[382px] max-large:w-full max-md:h-[250px] h-[500px] max-large:h-[200px] relative">
      <Image 
        src="/images/wedo1.png"
        fill
        alt="school boy"
          /> 
          </div>
        </div>
 
        <div className="absolute bottom-[25%] max-large:bottom-[35%] right-[37%] max-large:right-[5%] w-[53%] max-large:w-[90%] flex flex-row max-large:flex-col justify-between items-center max-large:items-top">
        <div className="font-header text-[20px] max-large:text-[16px] text-header w-[350px]">
        Identifying and fostering tech skills and talents in students 
        and youths with creative minds and passion for technology
        </div>
      <div className="w-[382px] max-large:w-full h-[500px] max-large:h-[250px] relative">
      <Image 
        src="/images/wedo2.png"
        fill
        alt="school boy"
          /> 
          </div>
        </div>

        <div className="absolute bottom-[9%] max-large:bottom-[5%] right-[10%] max-large:right-[5%] w-[56%] max-large:w-[90%] flex flex-row max-large:flex-col justify-between">
        <div className="font-header text-[20px] max-large:text-[16px] text-header w-[390px] w-[382px] max-large:w-full  mt-[40%] max-large:mt-0">
        Providing an inclusive and supportive 
        environment where teens and youth from slum 
        areas can explore and develop their tech skills
        </div>
      <div className="w-[382px] max-large:w-full h-[500px] max-large:h-[250px] relative">
      <Image 
        src="/images/wedo3.png"
        fill
        alt="school boy"
          /> 
          </div>
        </div>
    </section>

      {/* eductional initiatives */}
    <section className="py-[5%] px-[10%]  max-large:px-[5%] ">
      <header className="font-header text-head text-header mb-[3%]">Our Educational initiatives</header>
      <Slider {...settings}>
      {data.map((option, i) =>  <div key={i} className="mb-[5%] w-[30%]  max-large:w-[40%]  h-[320px] rounded-xl shadow-lg shadow-[#00000029] bg-btn-color">
      <div className="h-[150px] rounded-xl relative">
      <Image 
      src={option.img}
      fill
      alt="education"
      className="rounded-t-xl rounded-b-[20%]"
        /> 
      </div>
        <div className="pt-[5%] px-[5%]">
        <h3 className="mt-1 text-text_color font-header text-sub_header ">{option.header}</h3>
        <div className="text-[#7d7f82] text-[14px] font-normal">{option.text}</div>
        </div>
      </div>
       )} 
    </Slider>
    </section>

      {/* partner with us */}
    <section className="px-[15%] max-large:px-[5%] mt-[5%] max-large:mt-[15%] mb-[10%] w-full flex flex-row max-large:flex-col-reverse justify-between">
      <div className=" w-[45%] max-large:w-full max-large:mt-[5%]">
      <p className="text-normal font-normal text-color">
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
        <button className="h-[48px] px-[5%] bg-btn_green rounded-[8px] font-btn_weight  text-btn_color max-large:text-[14px] mr-5 max-large:mr-3 outline-none">Partner with us</button>
        <button className="h-[48px] px-[5%] bg-[#D1EAD7] rounded-[8px] font-btn_weight text-[#093212] max-large:text-[14px] outline-none" >Become a Volunteer</button>
      </div>
      </div>
      <div className="w-[45%] max-large:w-full">
        <div className="flex flex-row items-center max-large:justify-center">
        <div  className="relative w-[64px] max-large:w-[50px] h-[64px] max-large:h-[50px] mr-[50px]">
          <Image 
          src="/images/partner2.png"
          fill
          alt="logo"
          className="blackshirt"
          /> 
      </div>
      <div  className="relative w-[150px] max-large:w-[120px] h-[150px] max-large:h-[120px]">
          <Image 
          src="/images/partner3.png"
          fill
          alt="logo"
          className="yellowshirt"
          /> 
      </div>
      </div>
      <div  className="relative w-[260px] max-large:w-[200px] h-[260px] max-large:h-[200px]">
      <Image 
      src="/images/partner1.png"
      fill
      alt="slumtech shirt"
      className="whiteshirt"
      /> 
      </div>

      </div>
    </section>

    {/* donate */}
    <section className="w-[100%] h-[400px] max-md:h-[250px] relative">
    <Image 
      src="/images/donate_banner.png"
      fill
      alt="banner"
        /> 

    <div className="absolute top-[30%] max-large:top-[20%] left-[10%] max-large:left-[5%] w-[421px] max-large:w-[90%] text-btn_color">
      <p className="text-normal max-large:text-[12px] font-normal text-color">
      Your donation has the power to change lives.
       By contributing to SlumTech Foundation, you're not just giving, 
       you're impacting lives, opportunity, and a chance for a brighter future.
      Every donation, makes a difference
      Together, we can build a better world
      </p>
      <div className="mt-[5%]">
        <button className="w-[259px] max-large:w-[170px] h-[48px] max-large:h-[40px] px-[5%] max-large:px-0 max-large:text-[12px] bg-btn_green rounded-[8px] font-btn_weight text-btn_color mr-5 outline-none">Donate</button>
      </div>
    </div>
    </section>
    <Footer />
    </main>
  );
}

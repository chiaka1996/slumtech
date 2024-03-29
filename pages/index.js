import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Navigation, Sidebar, Footer} from "../components"

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
  };

  const data = [
    {
      "header" : "Cloud Computing",
      "img": "/images/education1.jpg",
      "text" : "Providing hands on experience in cloud infrastructure, Services and deployment"
    },
    {
      "header" : "Software Development",
      "img": "/images/education1.jpg",
      "text" : "Providing hands on experience in cloud infrastructure, Services and deployment"
    },
    {
      "header" : "Artificial Intelligence",
      "img": "/images/education1.jpg",
      "text" : "Students will learn what AI is all about and understand the concept"
    },
    {
      "header" : "Devops Engineering",
      "img": "/images/education1.jpg",
      "text" : "Providing hands on experience in cloud infrastructure, Services and deployment"
    },
    {
      "header" : "UI/UX",
      "img": "/images/education1.jpg",
      "text" : "Providing hands on experience in cloud infrastructure, Services and deployment"
    },

  ]

  return (
   <main className="relative overflow-hidden">
    <Navigation />
    <Sidebar /> 
  
    <div className="">
    <Image 
      src="/images/home_banner.png"
      width={2500}
      height={2500}
      // fill
      alt="banner"
      className="rounded-full"
        /> 
    </div>
   

    {/* our approach */}
   <section className="w-[30%] mt-[10%] ml-[50%]">
    <div>
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

   
   <section className="relative mt-[3%] h-[1440px]">
   <div className='absolute w-[500px] h-[500px] rounded-full top-0 -right-[5%] bg-[#F5FBF6]'>
   <div className="absolute bottom-[20%] left-[20%] w-[195px]">
      <div className="text-[#0F01AF] font-header text-head">100% Free</div>
      <div className="text-normal text-header font-header">Tech training for young African talents from the slum</div>
    </div>
   </div>

   <div className="absolute top-[30%] right-[30%] w-[146px]">
      <div className="text-[#FFCB2F] font-header text-head">10M +</div>
      <div className="text-normal text-header font-header">
      We are recruiting millions of young African talents into the tech industry
      </div>
    </div>

    <div className='absolute w-[650px] h-[650px] rounded-full top-[40%] -right-[1%] bg-[#FF4747] opacity-10' >
   <div className="absolute -top-[8%] right-[25%] w-[206px]">
      <div className="text-[#1A9635] font-header text-head mb-2">5k +</div>
      <div className="text-normal text-header font-header">
      We are on a mission to recruit thousands of secondary schools housing talented teens within the slum community
      </div>
    </div>
   </div>

    {/* our identity */}
    <div className="w-[697px] h-[640px] bg-[#F5FBF6] px-[10%] py-[10%] absolute top-[10%] left-0">
      <header className="font-header text-head text-header">Our Identity</header>
      <div className="text-normal font-normal text-text_color w-[376px]">
      SlumTech Foundation is committed to building a sustainable tech ecosystem 
      environment that thrives on diversity, inclusivity, and social responsibility. 
      We prioritize ethical tech practices, environmental sustainability, and social impact,
      ensuring that our initiatives contribute to a future where all African
      teens and youth [18 - 21 yrs] can participate in, and benefit from the digital economy
      </div>
    </div>

    <div className="z-50 flex flex-row justify-center items-center w-[692px] h-[660px] bg-[#FDFEFD] absolute bottom-[15%] left-[10%]">
      <div className="text-[24px] font-header text-text_color w-[408px]">
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

    <div className="absolute bottom-[3%] left-[10%] z-10 h-[500px] w-[80%]">
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

    <section className="bg-[#F5FBF6] w-[100%] h-[1356px] py-[5%] px-[10%] relative">
      <div>
        <header className="font-header text-head text-header">what We Do</header>
        <div className="text-normal font-normal text-text_color w-[329px]">
        At SlumTech, we understand the potential of every individual, 
        and we are dedicated to providing access, guidance, and education 
        to unlock their full capabilities through:
      </div>
      </div>

      <div className="w-[70%] ml-[30%] flex flex-row justify-between">
        <div className="font-header text-[20px] text-header w-[274px] pt-[20%]">
        strategic partnerships with schools in Slum communities
        </div>
      <div className="w-[382px] h-[500px] max-md:h-[200px] relative">
      <Image 
        src="/images/wedo1.png"
        fill
        alt="school boy"
          /> 
          </div>
        </div>

      
        <div className="absolute bottom-[25%] right-[37%] w-[53%] flex flex-row justify-between items-center">
        <div className="font-header text-[20px] text-header w-[350px]">
        Identifying and fostering tech skills and talents in students 
        and youths with creative minds and passion for technology
        </div>
      <div className="w-[382px] h-[500px] max-md:h-[200px] relative">
      <Image 
        src="/images/wedo2.png"
        fill
        alt="school boy"
          /> 
          </div>
        </div>

        <div className="absolute bottom-[9%] right-[10%] w-[56%] flex flex-row justify-between">
        <div className="font-header text-[20px] text-header w-[390px] mt-[40%]">
        Providing an inclusive and supportive 
        environment where teens and youth from slum 
        areas can explore and develop their tech skills
        </div>
      <div className="w-[382px] h-[500px] relative">
      <Image 
        src="/images/wedo3.png"
        fill
        alt="school boy"
          /> 
          </div>
        </div>
    </section>

      {/* eductional initiatives */}
    <section className="py-[5%] px-[10%]">
      <header className="font-header text-head text-header mb-[3%]">Our Educational initiatives</header>
      <Slider {...settings}>
      {data.map((option, i) =>  <div key={i} className="mb-[5%] w-[22%] h-[320px] rounded-xl shadow-lg shadow-[#00000029] bg-btn-color">
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
    <section className="ml-[20%] mt-[5%] mb-[10%] w-[442px]">
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
        <button className="h-[48px] px-[5%] bg-btn_green rounded-[8px] font-btn_weight  text-btn_color mr-5 outline-none">Partner with us</button>
        <button className="h-[48px] px-[5%] bg-[#D1EAD7] rounded-[8px] font-btn_weight text-[#093212] outline-none" >Become a Volunteer</button>
      </div>
    </section>

    {/* donate */}
    <section className="w-[100%] h-[400px] max-md:h-[250px] relative">
    <Image 
      src="/images/donate_banner.png"
      fill
      alt="banner"
        /> 

    <div className="absolute top-[30%] left-[10%] w-[421px] text-btn_color">
      <p className="text-normal font-normal text-color">
      Your donation has the power to change lives.
       By contributing to SlumTech Foundation, you're not just giving, 
       you're impacting lives, opportunity, and a chance for a brighter future.
      Every donation, makes a difference
      Together, we can build a better world
      </p>
      <div className="mt-[5%]">
        <button className="w-[259px] h-[48px] px-[5%] bg-btn_green rounded-[8px] font-btn_weight text-btn_color mr-5 outline-none">Donate</button>
      </div>
    </div>
    </section>
    <Footer />
    </main>
  );
}

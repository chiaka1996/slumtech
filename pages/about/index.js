import Image from "next/image";
import {Navigation, Sidebar, Headers, Footer} from "../../components"

export default function About() {
  return (
   <main className="bg-[#EDECEC]">
    <Navigation />
    <Sidebar /> 
    <div className="w-[100%] h-[20rem] max-md:h-[250px] relative mt-[5%]">
      <div className="font-header text-[1.75em] z-10 text-btn_color absolute bottom-[5%] left-[10%] xlarge:left-[15%] w-[50%] xlarge:w-[40%]">
      “The birth of SlumTech Foundation was a beacon of hope,  
      driven by the vision to transform adversity into opportunity through technology”

      <p className="font-[500] italic text-right">Olanrewaju D. Ogunleye</p>
      </div>
    <Image 
      src="/images/about_banner.png"
      fill
      alt="logo"
      className="filter brightness-[30%]"
        /> 
    </div>

    <section className="flex flex-row max-large:flex-col justify-between mt-[5%] max-large:mt-0 px-normal xlarge:px-xnormal max-md:px-md">
      {/* grid1 */}
      <div className="w-[37%] max-large:w-[100%] pt-[10%]">
          <Headers
            index={"O"}
            headings={"ur Mission"}
          />
        <div className="font-normal text-normal text-text_color">
        SlumTech Foundation is a US-based nonprofit organization with a bold mission 
        to establish world-class tech institutions across Africa, specifically targeting 
        youths in slum communities. Our commitment is to provide 100% free access to high-quality 
        tech education, empowering individuals with the skills 
        they need to thrive in the digital era and contribute to
         the advancement of their communities
        </div>
      </div>
      {/* grid2 */}
      <div className="w-[55%] max-large:w-full">
        <div className="flex flex-row justify-center"> 
        <div  className="relative w-[10.625rem] max-large:w-[120px] h-[10.625rem] max-large:h-[120px]">
        <Image 
        src="/images/mission1.png"
        fill
        alt="logo"
        /> 
      </div>
      </div>
      <div  className="flex flex-row justify-between">
      <div  className="relative w-[10.625rem] max-large:w-[120px] h-[10.625rem] max-large:h-[120px]">
        <Image 
      src="/images/mission2.png"
      fill
      alt="logo"
      /> 
      </div>
      <div  className="relative w-[10.625rem] max-large:w-[120px] h-[10.625rem] max-large:h-[120px]">
        <Image 
      src="/images/mission3.png"
      fill
      alt="logo"
      /> 
      </div>
      </div>
      <div className="flex flex-row justify-center">
      <div className="relative w-[10.625rem] max-large:w-[120px] h-[10.625rem] max-large:h-[120px]"> 
        <Image 
      src="/images/mission4.png"
      fill
      alt="logo"
      /> 
      </div>
      </div>
      </div>
    </section>

    {/* vision section */}
    <section className="flex flex-row max-large:flex-col-reverse justify-between px-normal xlarge:px-xnormal max-md:px-md pt-[5%]">
      <div className="w-[50%] max-large:w-full">
      <div className="w-full h-[28.125rem] max-large:h-[250px] relative"> 
          <Image 
            src="/images/vision.png"
            fill
            alt="vision image"
      /> 
      </div>
      </div>

      <div className="w-[40%] max-large:w-full pt-[10%]">
      <Headers
        index={"O"}
        headings={"ur Vision"}
      />
      <div className="font-normal text-normal text-text_color">
      Our vision is to revolutionize access to technology education in Africa by building 
      a network of world-class, free tech institutes in slum communities. We envision a 
      future where every young person in these communities has the opportunity 
      to learn and excel in technology, driving positive change, and innovation on the continent
        </div>
      </div>
    </section>

    {/* program initiative */}
    <section className="py-[5%] max-large:py-[15%] px-normal xlarge:px-xnormal max-md:px-md">
    <Headers
        index={"P"}
        headings={"rogram Initiatives"}
      />
      <div className="flex flex-row max-large:flex-col justify-between items-center w-[80%] max-large:w-full">
      <div className="flex flex-row large:justify-between w-[40%] max-md:w-full large:hidden">
      <div  className="relative w-[10.625em] max-md:w-[150px] h-[10.625em] max-md:h-[150px]">
        <Image 
      src="/images/free1.png"
      fill
      alt="logo"
      /> 
      </div>
      <div  className="relative w-[10.625rem] max-md:w-[150px] h-[10.625rem] max-md:h-[150px]  max-large:ml-[5%]">
        <Image 
      src="/images/free2.png"
      fill
      alt="logo"
      /> 
      </div>
      </div>
        
        <div className="w-[43%] max-large:w-full">
      <header className="font-header text-header text-sub_header ">Free Tech Education and Skill Development</header>
      <div className="font-normal text-normal text-text_color">
      SlumTech Foundation provides comprehensive, 100% free tech 
      education and skill development programs tailored to the unique 
      needs and aspirations of young talents from slum communities. 
      Our initiatives include coding bootcamps, digital literacy training, 
      and mentorship programs geared towards equipping participants with in-demand tech skills.
        </div>
      </div>
      {/* free tech images for big screens */}
      
      <div className="flex flex-row justify-between w-[40%] max-large:hidden">
      <div  className="relative w-[10.625rem] h-[10.625rem]">
        <Image 
      src="/images/free1.png"
      fill
      alt="logo"
      /> 
      </div>
      <div  className="relative w-[10.625rem] h-[10.625rem]">
        <Image 
      src="/images/free2.png"
      fill
      alt="logo"
      /> 
      </div>
      </div>
      </div>
      <div className="flex flex-row max-large:flex-col justify-between items-center w-[80%] max-lg:w-full ml-[20%] max-lg:ml-0 mt-[5%]">
      <div className="flex flex-row large:justify-between w-[40%] max-large:w-full">
      <div  className="relative w-[10.625rem] max-md:w-[150px] h-[10.625rem] max-md:h-[150px]">
        <Image 
      src="/images/youth1.png"
      fill
      alt="logo"
      /> 
      </div>
      <div  className="relative w-[10.625rem] max-md:w-[150px] h-[10.625rem] max-md:h-[150px] max-large:ml-[5%]">
        <Image 
      src="/images/youth2.png"
      fill
      alt="logo"
      /> 
      </div>
      </div>
        <div className="w-[43%] max-large:w-full">
      <header className="font-header text-header text-sub_header ">
      Youth Empowerment and Entrepreneurship
        </header>
      <div className="font-normal text-normal text-text_color">
      We empower young individuals from slum communities to harness 
      their potential by incubating innovative ideas, nurturing entrepreneurial 
      mindsets, and providing the resources needed to launch tech-driven ventures. 
      Through mentorship, access to networks, 
      and seed funding, we foster a culture of innovation and leadership among our 
      program participants.
        </div>
      </div>  
      </div>
      <div className="flex flex-row max-large:flex-col justify-between items-center w-[80%] max-large:w-full mt-[5%]">
      <div className="flex flex-row w-[40%] max-lg:w-full large:hidden">
      <div  className="relative w-[10.625rem] max-md:w-[150px] h-[10.625rem] max-md:h-[150px]">
        <Image 
      src="/images/community1.png"
      fill
      alt="logo"
      /> 
      </div>
      <div  className="relative w-[10.625rem] max-md:w-[150px] h-[10.625rem] max-md:h-[150px] max-large:ml-[5%]">
        <Image 
      src="/images/community2.png"
      fill
      alt="logo"
      /> 
      </div>
      </div>
        <div className="w-[43%] max-large:w-full">
      <header className="font-header text-header text-sub_header ">
      Community-Driven Tech Innovation
      </header>
      <div className="font-normal text-normal text-text_color">
      SlumTech Foundation actively fosters grassroots tech innovation 
      by establishing innovation hubs and community-driven tech spaces 
      within slum communities. These hubs serve as creative breeding grounds 
      where aspiring tech enthusiasts can collaborate, exchange ideas, and develop 
      locally relevant solutions to address societal challenges.
        </div>
      </div>
      <div className="flex flex-row justify-between w-[40%] max-large:hidden">
      <div  className="relative w-[10.625rem] h-[10.625rem]">
        <Image 
      src="/images/community1.png"
      fill
      alt="logo"
      /> 
      </div>
      <div  className="relative w-[10.625rem] h-[10.625rem]">
        <Image 
      src="/images/community2.png"
      fill
      alt="logo"
      /> 
      </div>
      </div>
      </div>

      <div className="flex flex-row max-large:flex-col justify-between items-center w-[80%] max-large:w-full ml-[20%] max-large:ml-0 mt-[5%]">
      <div className="flex flex-row large:justify-between w-[40%] max-large:w-full">
      <div  className="relative w-[10.625rem] max-md:w-[150px] h-[10.625rem] max-md:h-[150px]">
        <Image 
      src="/images/advocating1.png"
      fill
      alt="logo"
      /> 
      </div>
      <div  className="relative w-[10.625rem] max-md:w-[150px] h-[10.625rem] max-md:h-[150px] max-large:ml-[5%]">
        <Image 
      src="/images/advocating2.png"
      fill
      alt="logo"
      /> 
      </div>
      </div>
        <div className="w-[43%] max-large:w-full">
      <header className="font-header text-header text-sub_header ">
      Advocating for Inclusive Tech Policies
        </header>
      <div className="font-normal text-normal text-text_color">
      We advocate for policies that promote inclusive access to tech education, 
      support the integration of marginalized communities into the tech workforce, 
      and create an enabling environment for tech-driven entrepreneurship. 
      By engaging with policymakers and industry stakeholders,
       we champion initiatives that promote diversity and equity within the tech industry.
        </div>
      </div>  
      </div>
    </section>

    {/* our impact */} 
    <section className="py-[3%] w-[100%] flex flex-row justify-between items-center px-normal xlarge:px-xnormal">
    <div className="w-[50%]">
    <Headers
        index={"O"}
        headings={"ur Impact"}
      />
      <div className="text-normal">
      Through our 100% free programs and initiatives, SlumTech Nigeria has 
      transformed the lives of countless youths from slum communities, offering 
      them a pathway to upward mobility, economic independence, and a brighter future. 
      By providing equal opportunities and fostering a supportive learning environment, 
      we aim to break the cycle 
      of poverty and drive sustainable transformation within Africa's 
      most underserved communities.
      </div>
    </div>

    <div className="relative w-[40%] h-[18.7em]">
    <Image 
      src="/images/impact.png"
      fill
      alt="impact"
      /> 
    </div>
    </section>

    <section className="relative h-[62vh] max-large:h-[300px] w-full xlarge:w-[70%] mx-auto">
    <Image 
      src="/images/ladies.png"
      fill
      alt="banner"
      className="filter brightness-[50%]"
        /> 

        <div className="text-btn_color z-30 absolute bottom-[5%] left-[10%] xlarge:left-[15%] max-md:left-[5%] w-[50%] max-large:w-[80%]">
          <span className="text-fourteen max-large:text-[11px]">
          SlumTech Foundation welcomes collaborations, partnerships, 
          and support from individuals, organizations, and stakeholders who share our 
          vision of empowering youths from slum communities and positioning africa as a 
          trailblazing tech hub in the world
          </span>
          <div className="text-center max-large:text-left mt-3">
            <button className="text-normal text_btn_color bg-btn_green rounded-normal px-[1rem] h-[3rem] ">Partner with us</button>
          </div>
        </div>
    </section>
    <Footer /> 
    </main>
  );
}
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import {Navigation, Sidebar, Newsletter, Footer} from "../../components"
import Head from 'next/head'

export default function Vacancy1() {
    const onChangeInput = () => {
        return console.log("hellos")
    }
  return (
   <main className="text-primary">
    <Head>
    <title>Country Director/Representative at SlumTech Foundation - Job opening </title>
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

    <div  className="relative w-full min-h-[20rem] max-large:min-h-[15rem] mt-[10em] max-large:mt-[7em]">
    <Image 
    src="/images/career1.png"
    fill
    alt="banner"
    /> 
    <div className="text-card1 text-h1 font-h2 relative z-[10] min-h-[20rem] max-large:min-h-[15rem] flex flex-row justify-center items-center">
    <h2>APPLY CAREER</h2>
    </div>  
    </div>

    <div className="flex flex-row justify-center items-center my-[3em] max-large:px-[5%]">
    <div className="relative w-[4em] h-[4em] max-large:h-[4rem] mr-[1em]">
    <Image 
    src="/icons/apply1.png"
    fill
    alt="apply"
    /> 
    </div>
    <span className="text-h2 max-large:text-h3 font-normal">Country Director/Representative at SlumTech Foundation</span>
    </div>

    <section className="px-[10%] max-large:px-[5%]">
    <div className="flex flex-row">
        <span className="text-blog font-h2 text-h3 mr-3">Posted: </span>
        <span className="font-normal text-h3  font-secondary text-[#718096]"> August 5, 2024</span>
    </div>

    <div className="mt-[1.5em] text-secondary max-large:text-h3">
        <h3 className="font-h2 text-blog">Job Description:</h3>
        <p className="font-normal">SlumTech Foundation is seeking motivated and dynamic individuals to join our team as Country Directors/Representatives 
            in various regions. As a Country Director/Representative, you will play a key role in representing SlumTech 
            Foundation and leading initiatives to empower youth through technology education and mentorship in your respective country.
        </p>
    </div>

    <div className="mt-[1em] text-secondary max-large:text-h3">
        <h3 className="font-h2 text-blog">Responsibilities:</h3>
        <p className="font-normal">
        Digitalization has significantly improved access to essential services in slum communities. 
        Through mobile applications and online platforms, residents can now access healthcare information, 
        schedule appointments, and even consult with healthcare providers remotely. This technological leap 
        has been instrumental in enhancing healthcare outcomes, 
        reducing barriers to medical care, and promoting preventive health practices within these underserved populations.
        </p>
    </div>

    <ul className="list-decimal mt-[1em] pl-[2em] font-normal">
    <li>
    Develop and implement strategic plans to promote SlumTech Foundation's mission and 
    programs in the designated country.
    </li>
    <li>
    Build and maintain partnerships with local schools, community organizations, businesses, 
    and government agencies to expand the reach and impact of SlumTech Foundation.
    </li>
    <li>
    Oversee the planning and execution of technology education and mentorship programs for youth, 
    ensuring high-quality delivery and impactful outcomes.
    </li>
    <li>
    Recruit and manage a team of dedicated staff and volunteers to support program implementation and operations.
    </li>
    <li>
    Collaborate with the global SlumTech team to share best practices, resources, and insights for 
    continuous improvement and innovation.
    </li>
    <li>
    Represent SlumTech Foundation at events, conferences, and meetings to raise awareness, attract funding, 
    and advocate for the needs of underserved youth.
    </li>
    <li>
    Monitor and evaluate program effectiveness, collect feedback from stakeholders, 
    and make data-driven decisions to drive growth and sustainability.
    </li>
    <li>
    Prepare regular reports, updates, and communications to the SlumTech Foundation leadership 
    team and stakeholders on program progress, challenges, and achievements.
    </li>
    <li>
    Uphold the values and ethos of SlumTech Foundation, promoting diversity, equity, 
    and inclusion in all aspects of work and decision-making.
    </li>
    <li>
    Stay abreast of trends, developments, and opportunities in the field of technology 
    education and youth empowerment to inform strategic direction and programming.
    </li>
    </ul>

    <div className="mt-[1em] text-secondary max-large:text-h3">
    <h3 className="font-h2 text-blog">Qualifications:</h3>
    <ul className="list-decimal pl-[2em] font-normal">
    <li>Bachelor's degree in a relevant field (education, social sciences, business, technology, etc.). 
    Master's degree preferred.
    </li>
    <li>
    Proven leadership experience in the non-profit sector, education, technology, or related fields.
    </li>
    <li>
    Strong project management skills with the ability to plan, implement, and evaluate programs effectively.
    </li>
    <li>
    Excellent communication and interpersonal skills to engage with diverse stakeholders and build lasting relationships.
    </li>
    <li>
    Passion for empowering youth, promoting education, and driving social change through technology.
    </li>
    <li>
    Ability to work independently, adapt to changing environments, and thrive in a fast-paced, dynamic organization.
    </li>
    <li>
    Fluency in English (proficiency in additional local languages is a plus).
    </li>
    </ul>
    <p className="mt-[1em] font-normal">
    If you are a passionate 
    advocate for youth empowerment, technology education, and social impact, 
    we invite you to apply for the Country Director/Representative position at SlumTech Foundation. 
    Join us in making a difference in the lives of young people and shaping a brighter future for all.
    </p>     
    </div>
    <form className="w-[80%] mx-auto max-large:w-full max-large:mx-auto rounded-[16px] bg-[#E8107D] px-[5em] max-large:px-[1em] py-[3em] max-large:py-[1em] my-[3em]">
        <header className="font-h3 text-btn_color text-h1 max-large:text-h4">APPLY</header>
        {/* grid 1 */}
        <div className="grid grid-cols-2 gap-5 mt-[1.5em]">
        <input 
            type="text"
            placeholder="First Name"
            name="firstName"
            value=''
            className=" rounded-[0.5rem] pl-[1.2em] outline-none border border-index
            w-[100%] h-[3rem] text-primary font-normal text-[18px] placeholder-primary"
            onChange={onChangeInput}
            />

        <input 
            type="text"
            placeholder="Last Name"
            name="lastName"
            value=''
            className="rounded-[0.5rem] pl-[1.2em] outline-none border border-index
            w-[100%] h-[3rem] text-primary font-normal text-[18px] placeholder-primary"
            onChange={onChangeInput}
            />
        </div>
        
        {/* grid2 */}
        <div className="grid grid-cols-2 gap-5 mt-[1.5em]">
        <input 
            type="emaill"
            placeholder="Email Address"
            name="email"
            value=''
            className=" rounded-[0.5rem] pl-[1.2em] outline-none border border-index
            w-[100%] h-[3rem] text-primary font-normal text-[18px] placeholder-primary"
            onChange={onChangeInput}
            />

        <input 
            type="text"
            placeholder="Phone no"
            name="phone"
            value=''
            className="rounded-[0.5rem] pl-[1.2em] outline-none border border-index
            w-[100%] h-[3rem] text-primary font-normal text-[18px] placeholder-primary"
            onChange={onChangeInput}
            />
        </div>

            {/* grid3 */}
        <div className="w-full mt-[1.5em]">
        <input 
            type="text"
            placeholder="Address"
            name="address"
            value=''
            className="rounded-[0.5rem] pl-[1.2em] outline-none border border-index
            w-[100%] h-[3rem] text-primary font-normal text-[18px] placeholder-primary"
            onChange={onChangeInput}
            />
        </div>

        {/* grid4 */}
        <div className="grid grid-cols-2 gap-5 mt-[1.5em]">
        <input 
            type="text"
            placeholder="Position"
            name="position"
            value=''
            className=" rounded-[0.5rem] pl-[1.2em] outline-none border border-index
            w-[100%] h-[3rem] text-primary font-normal text-[18px] placeholder-primary"
            onChange={onChangeInput}
            />

        <input 
            type="number"
            placeholder="Years Of Experience"
            name="experience"
            value=''
            className="rounded-[0.5rem] pl-[1.2em] outline-none border border-index
            w-[100%] h-[3rem] text-primary font-normal text-[18px] placeholder-primary"
            onChange={onChangeInput}
            /> 
        </div>

        {/* cv */}
        <div className="mt-[1.5em]">
        <label htmlFor="cv"  className="block flex items-center rounded-[0.5rem] pl-[1.2em]
            w-full bg-index h-[3rem] text-primary font-normal text-[18px]">
        CV/Resume
        </label>
        <input 
        type="file"
        id="cv" 
        // onInput = {handleFile2}
        // accept='images/*'
       className="hidden"
        />
        </div>

         {/* grid5 */}
         <div className="my-[1.5em]">
         <textarea
            placeholder="cover letter" 
            name="coverLetter"
            value=""
            onChange={onChangeInput}
            className="rounded-[0.5rem] px-[1.2em] py-[0.5em] outline-none 
            border border-btn_bg w-[100%] h-[7.5rem] text-primary font-normal 
            text-[18px] xlarge:text-normal placeholder-primary"
            >
            </textarea>
        </div>
      
    <button className="px-[1rem] py-[0.7rem] text-normal font-h2 text-btn_bg rounded-[12px] border border-btn_color bg-btn_color">Send</button>
    </form>
    </section>
    <Newsletter />
    <Footer />
    </main>
  )}
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from 'next/head'
import {SubmitModal, Navigation, Sidebar, Headers, Footer, ButtonComponent, TextAreaComponent, InputComponent, SelectComponent, RegisterIndividual} from "../../components"


const Register = () => {
  function googleTranslateElementInit() {
    new window.google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }

  useEffect(() => {
    googleTranslateElementInit()
  },[])
  const [selected, setSelected] = useState("");
  const [toggleModal, setToggleModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
      schoolName: "",
      email: "",
      registrationNumber: "",
      phone: "",
      address: "",
      country: selected,
      studentsNumber: ""
  })
  
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;
 
  const toggleState = () => {
    setToggleModal(false)
  }

    const onChangeInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData({
        ...data, 
        [name] : value
    })

}

const submitBtn = async (e) => {
  try{
      e.preventDefault()
      setLoading(true)
  const {schoolName, email, phone, registrationNumber, address, country, studentsNumber} = data;

  if(!schoolName || !email || !registrationNumber || !phone || !address || !selected || !studentsNumber) {
      setLoading(false)
      return toast.error("please fill all required fields.", {
          position: "top-right",
          theme: "colored",
          });
  }

  if(schoolName.length < 2){
      setLoading(false)
      return toast.error("name should be a minimum of 2 characters", {
          position: "top-right",
          theme: "colored",
          });
  }

  if(!emailRegex.test(email)){
      setLoading(false)
      return toast.error("invalid email", {
          position: "top-right",
          theme: "colored",
          });
  }

  const postData = {
    schoolName,
    email,
    registrationNumber,
    phone,
    address,
    country: selected,
    studentsNumber
  }

  const httpRequest = await fetch('../api/registerSchool',{
      method: "POST",
      body: JSON.stringify(postData),
      headers:{
          "Content-type": "application/json; charset=UTF-8"
      }
  })

  const response = await httpRequest.json();

  if(response.status){
      setToggleModal(true)
      setLoading(false)
      setData({
        schoolName: "",
        email: "",
        registrationNumber: "",
        phone: "",
        address: "",
        country: "",
        studentsNumber: ""
      })
  }
  else{
      setLoading(false)
    return toast.error(<div>{response.message}</div>, {
      position: "top-right",
      theme: "colored",
      });
  }
  }
  catch(error){
  setLoading(false)
  return toast.error(`${error.message}`, {
      position: "top-right",
      theme: "colored",
      });
}
}

    return (
        <main className="relative overflow-hidden text-primary">
           <Head>
          <title>Slumtech Registration page </title>
          <meta
            name="description"
            content="We're keen on reaching out to schools in underprivileged areas,"
            key="desc"
          />
          <meta name="keywords" content="underprivileged, slum, nonprofit, foundation, technology, africa, africa slum" />
        </Head>
        <Navigation />
        <Sidebar /> 
        <ToastContainer />
        <SubmitModal 
        toggle={toggleModal} 
        toggleState={toggleState}
        />
    <div className="relative text-center mt-[10em] max-large:mt-[7em] w-[80%] mx-auto max-large:w-[90%]">
        <Link href='/about' className='no-underline'>
        <div className="text-secondary max-large:text-normal font-normal text-[#000] flex flex-row items-center absolute top-0 max-large:top-[0.5rem] left-0">
              <div className=" w-[50px] max-large:w-[30px] h-[50px] max-large:h-[30px] rounded-full bg-btn_bg flex flex-rows justify-center items-center mr-5">
              <div className="relative w-[30px] max-large:w-[15px] h-[30px] max-large:h-[15px]">
              <img 
              src="https://img.icons8.com/ios-glyphs/30/ffffff/left.png"
              alt="left"/>
              </div>
              </div>
              <span className="max-large:hidden"> Back to About</span>        
            </div>
            </Link>
        <header className="font-h1 text-heading text-h1 max-large:text-h4">JOIN US AS A VOLUNTEER</header>
        </div>

          <div  className="relative w-full h-[26.6rem] max-large:h-[15rem] mt-[3em]">
          <Image 
          src="/images/volunteer.png"
          fill
          alt="volunteer banner"
          /> 
          </div>

          <section className="w-[37%] max-large:w-[90%] mx-auto py-[3em]">
            <p className="text-[#5C5C5C] text-[1.125em] font-normal">At SlumTech Foundation, we believe in the power of 
              volunteers to drive positive change in the community. 
              Join us in our mission to empower and uplift 
              underprivileged communities through technology and education.
            </p>

            <div className="mt-[1em]">
              <header className="text-h2 font-h2">Benefits of Volunteering with SlumTech Foundation</header>
              <ul className="text-secondary max-large:text-h3 font-normal list-disc pl-[2em]">
              <li>Make a tangible impact on disadvantaged communities</li>
              <li>Gain valuable experience and skills</li>
              <li>Build meaningful connections and friendships</li>
              <li>Contribute to a worthwhile cause and make a difference</li>
              </ul>
            </div>

            <div className="mt-[1em]">
              <header className="text-h2 font-h2">Next Steps</header>
              <ul className="text-secondary max-large:text-h3 font-normal list-disc pl-[2em]">
              <li>
              Once you submit your registration, our team will review your information and 
              reach out to you with volunteer opportunities that match your skills and interests. 
              Thank you for supporting our mission!
              </li>
              </ul>
            </div>

            <div className="bg-btn_bg text-center py-3 text-[#fff] my-[0.5em] font-h2 text-h2 max-large:text-secondary">
              <p>Ready to make a difference?</p>
              <p>Fill out the registration form below and become</p>
                <p>a part of our volunteer community today!</p>
            </div>

            <form>
              {/* grid 1 */}
              <div className="grid grid-cols-2 gap-7 mt-4">
              <InputComponent
              type="text"
              placeholder="First Name"
              value={data.firstname}
              name="firstName"
              onChangeInput={onChangeInput}
              />

            <InputComponent
            type="text"
            placeholder="Last Name"
            value={data.lastname}
            name="lastName"
            onChangeInput={onChangeInput}
            />
              </div>

              {/* grid2 */}
              <div className="grid grid-cols-2 gap-7">
              <InputComponent
              type="text"
              placeholder="Email Address"
              value={data.email}
              name="name"
              onChangeInput={onChangeInput}
              />

              <InputComponent
              type="number"
              placeholder="phone"
              value={data.phone}
              name="phone"
              onChangeInput={onChangeInput}
              />    
              </div>

              <div className="mt-4">
              <InputComponent
              type="text"
              placeholder="Address"
              value={data.address}
              name="address"
              onChangeInput={onChangeInput}
              />
              </div>

              <div className="mt-4">
              <TextAreaComponent
              placeholder="Skills (List any relevant skills or expertise you have and separate each skill with a comma)"
              name="skill"
              value={data.skill}
              onChangeInput={onChangeInput}
             />
              </div>

              <div className="mt-2">
              <TextAreaComponent
              placeholder="Interests (What areas are you passionate about?)"
              name="interest"
              value={data.interest}
              onChangeInput={onChangeInput}
             />
              </div>

              <div className="mt-2">
              <TextAreaComponent
              placeholder="Availability (When are you available to volunteer?)"
              name="availabilty"
              value={data.availability}
              onChangeInput={onChangeInput}
             />
              </div>

              <div className="my-2">
              <TextAreaComponent
              placeholder="Why do you want to volunteer with us? (Briefly share your motivation)"
              name="whyVolunterr"
              value={data.whyVolunteer}
              onChangeInput={onChangeInput}
             />
              </div>
              <button className="bg-btn_bg text-btn_color rounded-[12px] px-12 py-3">Submit</button>
            </form>

          </section>
          <Footer />
          </main>
    )
}

export default Register;
import { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactFlagsSelect from "react-flags-select";
import Head from 'next/head'
import {SubmitModal, Navigation, Sidebar, Headers, Footer, ButtonComponent, InputComponent, SelectComponent, RegisterIndividual} from "../../components"

const Register = () => {
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
        <main className="relative overflow-hidden mt-[5%] max-large:mt-[20%] small:max-large:mt-[14%] bg-[#EDECEC]">
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
        <section className="px-normal xlarge:px-[15%] max-large:px-[5%] pt-[5%] max-large:mt-[5%]">
        <Headers
            index={"R"}
            headings={"egistration"}
          />

          <div className="flex flex-row max-large:flex-col justify-between">
            <div className="w-[47%] max-large:w-full">
            <p className="text-text_color font-normal text-normal max-large:text-mnormal">
            We're keen on reaching out to schools in underprivileged areas, 
            such as public schools, to identify their top-performing students. 
            Our focus is on secondary school students preparing for their final exams 
            (Senior Secondary School Certificate Examination) and disadvantaged youths with 
            a passion for technology.
             Educators are kindly requested to register their schools by completing the input 
             form provided.
            </p>
            <div className="relative w-full h-[35em] max-large:h-[13em] xlarge:h-[41.5em] mt-[5%]">
            <Image 
            src="/images/register1.png"
            fill
            alt="register"
                /> 
            </div>
            </div>

            <div className="w-[47%] max-large:w-full max-large:mt-[10%]">
            <span className="px-[5%] font-header text-header text-sub_header max-large:text-normal border border-header rounded-[1rem]">
            Register as a School
            </span>

            <form className=" mt-[10%]">
            <div className="my-5">
            <InputComponent
            type="text"
            placeholder=""
            labelName="Name Of School"
            value={data.schoolName}
            name="schoolName"
            onChangeInput={onChangeInput}
            />
            </div>

            <div className="my-5">
            <InputComponent
            type="text"
            placeholder=""
            labelName="School registration number"
            value={data.registrationNumber}
            name="registrationNumber"
            onChangeInput={onChangeInput}
            />
            </div>

            <div className="my-5">
            <InputComponent
            type="email"
            placeholder=""
            labelName="Email"
            value={data.email}
            name="email"
            onChangeInput={onChangeInput}
            />
          </div>

            <div className="my-5">
            <InputComponent
            type="text"
            placeholder="080 8405 2342"
            labelName="Phone no"
            value={data.phone}
            name="phone"
            onChangeInput={onChangeInput}
            />
            </div>

            <div className="my-5">
            <InputComponent
            type="text"
            placeholder="40, ajibulu str"
            labelName="School Address"
            value={data.address}
            name="address"
            onChangeInput={onChangeInput}
            />
            </div>

            <div className="flex flex-row max-large:flex-col justify-between max-large:mt-5">
            <div className="w-[47%] max-large:w-full max-large:my-0">
            <label className="font-label text-normal xlarge:text-normal text-header">Country</label><br/>
            <ReactFlagsSelect
              countries={["DZ", "AO", "BJ","BF", "BW", "BI", "CM","CV", "CG", "CI", "EG", "GA", "GM", "KE", "LY", "MW", "ML", "NA", "NE", "NG",  "SN", "ZA", "SS", "TG", "ZM", "ZW" ]}
              selected={selected}
              onSelect={(code) => setSelected(code)}
              placeholder=""
              searchable
              searchPlaceholder="Search a country"
             />
            </div>
            <div className="w-[47%] max-large:w-full max-large:my-5">
            <InputComponent
            type="number"
            placeholder=""
            labelName="Number Of Students"
            value={data.studentsNumber}
            name="studentsNumber"
            onChangeInput={onChangeInput}
            />
            </div>
            </div>

            <ButtonComponent text="Submit Application" submitBtn={submitBtn} loading={loading} />
            </form>
            </div>
          </div>

        <RegisterIndividual />

        <div className="relative w-full h-[390px] max-large:h-[8.2em] my-[5%]">
            <Image 
            src="/images/register3.png"
            fill
            alt="register"
            className="filter brightness-[30%]"
                /> 
              <p className="absolute right-[8%] bottom-[5%] font-header text-btn_color text-[45px] max-md:text-[15px]">Together, we can make a difference... </p>
            </div> 
          </section>
          <Footer />
          </main>
    )
}

export default Register;
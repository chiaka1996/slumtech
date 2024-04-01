import { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Navigation, Sidebar, Headers, Footer, ButtonComponent, InputComponent, SelectComponent, RegisterIndividual} from "../../components"

const Register = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
      schoolName: "",
      email: "",
      registrationNumber: "",
      phone: "",
      address: "",
      country: "",
      studentsNumber: ""
  })

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

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
      console.log("submited")
      e.preventDefault()
      setLoading(true)
  const {schoolName, email, phone, registrationNumber, address, country, studentsNumber} = data;

  if(!schoolName || !email || !registrationNumber || !phone || !address || !country || !studentsNumber) {
      setLoading(false)
      return  toast.error("please fill all required fields.", {
          position: "top-right",
          theme: "colored",
          });
  }

  if(schoolName.length < 2){
      setLoading(false)
      return  toast.error("name should be a minimum of 2 characters", {
          position: "top-right",
          theme: "colored",
          });
  }

  if(!emailRegex.test(email)){
      setLoading(false)
      return  toast.error("invalid email", {
          position: "top-right",
          theme: "colored",
          });
  }

  const httpRequest = await fetch('../api/registerSchool',{
      method: "POST",
      body: JSON.stringify(data),
      headers:{
          "Content-type": "application/json; charset=UTF-8"
      }
  })

  const response = await httpRequest.json();

  if(response.status){
      setLoading(false)
      toast.success(`${response.message}`, {
          position: "top-right",
          theme: "colored",
          });

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
      toast.error(`${response.message}`, {
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
        <main className="relative overflow-hidden mt-[5%] max-large:mt-[25%]">
        <Navigation />
        <Sidebar /> 
        <ToastContainer />
        <section className="px-[10%] max-md:px-[5%] pt-[5%]">
        <Headers
            index={"R"}
            headings={"egistration"}
          />

          <div className="flex flex-row max-large:flex-col justify-between">
            <div className="pt-[10%] max-md:pt-[5%] w-[47%] max-large:w-full">
            <p className="text-text_color font-normal text-normal">
            We're keen on reaching out to schools in underprivileged areas, 
            such as public schools, to identify their top-performing students. 
            Our focus is on secondary school students preparing for their final exams 
            (Senior Secondary School Certificate Examination) and disadvantaged youths with 
            a passion for technology.
             Educators are kindly requested to register their schools by completing the input 
             form provided.
            </p>
            <div className="relative w-full h-[280px] my-[5%]">
            <Image 
            src="/images/register1.png"
            fill
            alt="register"
                /> 
            </div>
            </div>

            <div className="w-[47%] max-large:w-full">
            <span className="px-[5%] font-header text-header text-sub_header border border-header rounded-[16px]">
            Register as a School
            </span>

            <form className=" mt-[10%]">
            <InputComponent
            type="text"
            placeholder=""
            labelName="Name Of School"
            value={data.schoolName}
            name="schoolName"
            onChangeInput={onChangeInput}
            />

            <InputComponent
            type="text"
            placeholder=""
            labelName="School registration number"
            value={data.registrationNumber}
            name="registrationNumber"
            onChangeInput={onChangeInput}
            />

            <InputComponent
            type="email"
            placeholder=""
            labelName="Email"
            value={data.email}
            name="email"
            onChangeInput={onChangeInput}
            />

            <InputComponent
            type="number"
            placeholder="080 8405 2342"
            labelName="Phone no"
            value={data.phone}
            name="phone"
            onChangeInput={onChangeInput}
            />

            <InputComponent
            type="text"
            placeholder="40, ajibulu str"
            labelName="School Address"
            value={data.address}
            name="address"
            onChangeInput={onChangeInput}
            />

            <div className="flex flex-row max-large:flex-col justify-between">
            <div className="w-[47%] max-large:w-full">
            <SelectComponent
            labelName="Country"
            options={["Nigeria"]}
            value={data.country}
            name="country"
            onChangeInput={onChangeInput}
            />
            </div>
            <div className="w-[47%] max-large:w-full">
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

        {/* register as individual */}
        {/* <form>
          <div className="flex flex-row max-large:flex-col justify-between mt-[5%] max-large:mt-[10%]">
            <div className="w-[47%] max-large:w-full">
            <p className="text-text_color font-normal text-normal mb-[5%]">
            We are deeply committed to shaping the future alongside the youth in the slum through 
            technology. Recognizing that individuals within the desired age range (15 - 21) may have 
            completed secondary school and therefore may not be eligible
             to register with a school, we have created an opportunity for such individuals to register in this section
            </p>
            <span className="px-[5%] font-header text-header text-sub_header border border-header rounded-[16px]">
            Register as an individual
            </span>

            <div className=" mt-[10%]">
            <InputComponent
            type="text"
            placeholder=""
            labelName="Full Name"
            />

            <InputComponent
            type="email"
            placeholder=""
            labelName="Email"
            />

            <InputComponent
            type="number"
            placeholder=""
            labelName="Phone Number"
            />

            <InputComponent
            type="text"
            placeholder=""
            labelName="Nationality"
            />

            <div className="flex flex-row justify-between">
            <div className="w-[47%]">
            <SelectComponent
            labelName="Gender"
            options={["Male","Female"]}
            />
            </div>
            <div className="w-[47%]">
            <InputComponent
            type="text"
            placeholder=""
            labelName="Age"
            />
            </div>
            </div>
            <InputComponent
            type="text"
            placeholder=""
            labelName="Address"
            />
            </div>

            </div>

            <div className="w-[47%] max-large:w-full">
            <div className="relative w-full h-[160px] my-[10%]">
            <Image 
            src="/images/register2.png"
            fill
            alt="register"
                /> 
            </div>
            <header className="font-header text-[18px] text-header">Provide your guarantor information</header>
            <div className=" mt-[10%]">
            <InputComponent
            type="text"
            placeholder=""
            labelName="Full Name"
            />

            <InputComponent
            type="text"
            placeholder=""
            labelName="Your Relationship with the above"
            />

            <InputComponent
            type="number"
            placeholder=""
            labelName="Phone Number"
            />

            <InputComponent
            type="text"
            placeholder=""
            labelName="Address"
            />
            </div>
            </div>
            
        </div>
        <ButtonComponent text="Submit Application" />
        </form> */}

        <RegisterIndividual />

        <div className="relative w-full h-[390px] max-sm:h-[230px] my-[5%]">
            <Image 
            src="/images/register3.png"
            fill
            alt="register"
                /> 
              <p className="absolute right-[8%] bottom-[5%] font-header text-btn_color text-[45px] max-md:text-[15px]">Together, we can make a difference... </p>
            </div> 
          </section>
          <Footer />
          </main>
    )
}

export default Register;
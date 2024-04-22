import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import {SubmitModal, Navigation, Sidebar, Headers, Footer, ButtonComponent, InputComponent, TextAreaComponent} from "../../components"


const Partnership = () => {
    const [toggleModal, setToggleModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] =  useState({
        name: "",
        email: "",
       phone: "",
       type: "",
       partnerDetails: "",
       additionalInformation: ""

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

    console.log(data)
  }
  
  const submitBtn = async (e) => {
    try{
        e.preventDefault()
        setLoading(true)
    const {name, email, phone, type, partnerDetails, additionalInformation} = data;
  
    if(!name || !email || !phone || !type || !partnerDetails || !additionalInformation) {
        setLoading(false)
        return  toast.error("please fill all required fields.", {
            position: "top-right",
            theme: "colored",
            });
    }
  
    if(name.length < 2){
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
  
    const httpRequest = await fetch('../api/partnership',{
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    })
  
    const response = await httpRequest.json();
  
    if(response.status){
        setLoading(false)
        setToggleModal(true)
  
        setData({
            name: "",
            email: "",
            phone: "",
            type: "",
            partnerDetails: "",
            additionalInformation: ""
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
        <main className="relative overflow-hidden mt-[5%]  max-large:mt-[20%] small:max-large:mt-[14%] bg-[#EDECEC]">
        <Navigation />
        <Sidebar /> 
        <ToastContainer />
        <SubmitModal 
        toggle={toggleModal} 
        toggleState={toggleState}
        />
        <div className="px-normal xlarge-xnormal max-large:px-[5%] pt-[5%] max-large:my-[7%] ">
        <Headers
            index={"C"}
            headings={"all for Partnership"}
          />
          </div>

        <div className="relative w-full h-[44vh] max-large:h-[12.5em] my-[1%]">
            <Image 
            src="/images/partnership.png"
            fill
            alt="register"
                /> 
            <p className="absolute bottom-[10%] max-md:bottom-[15%] left-[27%] max-md:left-[5%] w-[50%] max-md:w-[90%] font-btn_weight text-sub_header max-large:text-normal text-btn_color">
            We are seeking for partnership from both organization 
            and individuals that will help us build the future of technology through SlumTech
            </p>
            </div>

            <form className="my-[5%] mx-auto w-[30%] max-md:w-[90%]">
                <p className="mb-[5%] font-normal text-sub_header max-large:text-[1.5em] text-header">
                    Kindly fill the form provided
                </p>

                <div className=" mt-[5%]">
                <InputComponent
                type="text"
                placeholder="e.g nancy clemz"
                labelName="Full Name"
                value={data.name}
                name="name"
                onChangeInput={onChangeInput}
                />

                <InputComponent
                type="email"
                placeholder="e.g nancy@gmaail.com"
                labelName="Email"
                value={data.email}
                name="email"
                onChangeInput={onChangeInput}
                />

                <InputComponent
                type="number"
                placeholder="e.g nancy@gmaail.com"
                labelName="Phone no"
                value={data.phone}
                name="phone"
                onChangeInput={onChangeInput}
                />

                <div className="my-[5%] bg-[#ffffff] max-large:w-[80%] max-large:p-[1%]">
                    <header className="mb-[3%] font-label text-sub_header text-header">Please Indicate</header>
                    <div className="flex flex-row">
                    <div className="mr-[1.25rem] flex flex-row items-center">
                     <label htmlFor='Organization'>Organization</label>
                    <input type="radio" className="ml-[0.625rem] w-[1.25rem] h-[1.25rem]"  id="organization" name="type" value="organization" onChange={onChangeInput} />
                    </div>
                    <div className="flex flex-row items-center">
                        <label htmlFor='individual'>Individual</label>
                    <input type="radio" className="ml-[0.625rem] w-[1.25rem] h-[1.25rem]" id="individual" name="type"  value="individual" onChange={onChangeInput} />
                    </div>
                    </div>
                </div>

                <TextAreaComponent
                    labelName="Partner Details"
                    placeholder="please type here..."
                    value={data.partnerDetails}
                    name="partnerDetails"
                    onChangeInput={onChangeInput}
                />

                <TextAreaComponent
                    labelName="Additional Information"
                    placeholder="please type here..."
                    value={data.additionalInformation}
                    name="additionalInformation"
                    onChangeInput={onChangeInput}
                />

                <ButtonComponent text="Submit" submitBtn={submitBtn} loading={loading}/>
                </div>
            </form>
          <Footer />
          </main>
    )
}

export default Partnership;

import { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {SubmitModal, DonateMoney, DonateGadget, Navigation, Sidebar, Headers, Footer, ButtonComponent, InputComponent, SelectComponent, TextAreaComponent} from "../../components"


const Donation = () => {
    const [toggleModal, setToggleModal] = useState(false)
    const [toggleMoney, setToggleMoney] = useState(false)
    const [toggleGadget, setToggleGadget] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] =  useState({
        name: "",
        email: "",
        nationality: "",
        location: "",
        skills: "",
        gender: "",
        phone: ""
    })
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

    const toggleState = () => {
        setToggleModal(false)
      }

      const toggleMoneyState = () => {
        setToggleMoney(false)
      }

      const toggleGadgetState = () => {
        setToggleGadget(false)
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
        setLoading(true)
    const {name, email, phone, gender, nationality, location, skills} = data;

    if(!name || !email || !phone || !gender || !nationality || !location || !skills) {
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

    const httpRequest = await fetch('../api/addvolunteer',{
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
            nationality: "",
            location: "",
            skills: "",
            gender: "",
            phone: ""
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
        <main className="relative overflow-hidden mt-[5%] max-large:mt-[20%] small:max-large:mt-[14%] bg-[#EDECEC]">
        <Navigation />
        <Sidebar /> 
        <ToastContainer />
        <DonateMoney
        toggle={toggleMoney} 
        toggleState={toggleMoneyState}
        />
        <DonateGadget
        toggle={toggleGadget} 
        toggleState={toggleGadgetState}
        />
        <SubmitModal 
        toggle={toggleModal} 
        toggleState={toggleState}
        />
        <section className="px-normal xlarge:px-xnormal max-md:px-[5%] py-[5%] max-large:mt-[5%]">
        <Headers
            index={"D"}
            headings={"onation"}
          />

          <div className="font-label max-large:font-header text-sub_header max-large:text-normal text-[#111111] max-large:mt-[7%]">
          Kindly choose your preferred method of donation
          </div>

          <div className="flex flex-row max-large:flex-col justify-between mt-3">
            <section onClick={() => setToggleMoney(true)} className="flex flex-row items-center justify-center cursor-pointer p-[2%] w-[30%] max-large:w-full h-[30vh] max-large:h-[13em] max-large:px-[5%] bg-[#313231] rounded-[24px] shadow-lg shadow-[#00000029] relative">
            <div>
            <div className="relative w-[5rem] h-[5rem] mb-[10%] mx-auto">
                <Image 
                src="/images/donate1.png"
                fill
                alt="donate"
                    /> 
                </div>
           
            <button className="hover:bg-[#66B978] hover:text-text_color w-[12vw] max-large:w-full h-[2.5em] px-[1em] py-[0.5em] text-normal font-[500] text-btn_color bg-btn_green rounded-[8px]">
                Donate Money
            </button>
            </div>
            </section>

            <section onClick={() => setToggleGadget(true)} className="flex flex-row items-center justify-center cursor-pointer max-large:mt-[5%] p-[2%] w-[30%] max-large:w-full h-[30vh] max-large:h-[13em] bg-[#313231] rounded-[30px] shadow-lg shadow-[#00000029] relative">
            <div>
            <div className="relative w-[5rem] h-[5rem] mb-[10%] mx-auto">
                <Image 
                src="/images/donate2.png"
                fill
                alt="donate"
                    /> 
                </div>
                
                <button className="hover:bg-[#66B978] hover:text-text_color w-[12vw] max-large:w-full h-[2.5em] px-[1em] py-[0.5em] text-normal font-[500] text-btn_color bg-btn_green rounded-[8px]">
                Donate Gadget
            </button>
                </div>
            </section>

            <section className="flex flex-row items-center justify-center max-large:mt-[5%] p-[2%] w-[30%] max-large:w-full h-[30vh] max-large:h-[13em] bg-[#313231] rounded-[1.875rem] shadow-lg shadow-[#00000029] relative">
            <div>
            <div className="relative w-[5rem] h-[5rem] mb-[10%] mx-auto">
                <Image 
                src="/images/donate3.png"
                fill
                alt="donate"
                    /> 
                </div>
              
                <button className="w-[12vw] max-large:w-full h-[2.5em] px-[1em] py-[0.5em] tex-normal font-[500] text-btn_color bg-[#BBBBBB] rounded-[8px] cursor-not-allowed">
                GoFundMe
            </button>
                </div>
            </section>
          </div>
          </section>

          <section className="bg-[#FBFDFB] max-large:bg-[#EDECEC] flex flex-row max-large:flex-col items-center justify-between py-[5%] px-[10%] max-large:px-[5%] w-[80%] xlarge:w-[70%] max-large:w-full mx-auto  max-large:mx-0">
            <div className="w-[25rem] xlarge:w-[27rem] max-large:w-full h-[23rem] max-large:h-[16.6em] relative">
            <Image 
            src="/images/donate_book.png"
            fill
            alt="donate"
            /> 
            </div>
            <div className="w-[20.5rem] xlarge:w-[22rem">
            <p className="text-text_color font-normal max-large:font-header text-normal max-large:text-mnormal xlarge:text-about">
            "Tech Entrepreneurship and Career for 
            Africa Development" is a comprehensive guide by SlumTech Foundation, 
            focusing on leveraging technology for economic growth,
            entrepreneurship opportunities, and career development in Africa. 
            The book explores innovative strategies for sustainable development in the tech sector”
            </p>

            <p className="text-[#F32B04] font-header text-normal mt-[2%]">Coming Soon..</p>
            </div>
          </section>

          <section className="my-[5%] w-[80%] xlarge:w-[70%] max-large:w-[90%] mx-auto">
          <Headers
            index={"B"}
            headings={"ecome a volunteer"}
          />

          <div className="mt-3% max-large:mb-[15%]  flex flex-row max-large:flex-col-reverse justify-between">
            <div className="w-[47%] max-large:w-full">
            <p className="text-nav_links text-sub_header max-large:text-mnormal font-normal max-large:font-header my-[5%] max-large:mt-[15%]">
            Kindly fill the form provided
            </p>

            <InputComponent
            type="text"
            placeholder="e.g nancy clemz"
            labelName="Name"
            value={data.name}
            name="name"
            onChangeInput={onChangeInput}
            />
             
             <div className="my-5">
            <InputComponent
            type="email"
            placeholder="e.g clement@gmail.com"
            labelName="Email"
            value={data.email}
            name="email"
            onChangeInput={onChangeInput}
            />
            </div>

            <div className="my-5">
            <InputComponent
            type="number"
            placeholder="e.g 0989 535 9584"
            labelName="Phone No"
            value={data.phone}
            name="phone"
            onChangeInput={onChangeInput}
            />
            </div>

            <div className="flex flex-row justify-between">
            <div className="w-[47%]">
            <SelectComponent
            labelName="Gender"
            options={["male", "female"]}
            value={data.gender}
            name="gender"
            onChangeInput={onChangeInput}
            />
            </div>
            <div className="w-[47%]">
             <InputComponent
            type="text"
            labelName="Nationality"
            value={data.nationality}
            name="nationality"
            onChangeInput={onChangeInput}
            />
            </div>
            </div>

            <div className="my-5">
            <SelectComponent
            labelName="Location"
            options={["Lagos", "Abuja", "Owerri"]}
            value={data.location}
            name="location"
            onChangeInput={onChangeInput}
            />
            </div>

            <div className="mt-5">
            <TextAreaComponent      
            labelName="Skills"
            placeholder="web development"
            value={data.skills}
            name="skills"
            onChangeInput={onChangeInput}
            />
            </div>
            <ButtonComponent text="Submit" submitBtn={submitBtn} loading={loading} />
          </div>
          <div className="w-[47%] max-large:w-full px-[5%] max-large:px-0">
          <div className="relative w-[450px] max-large:w-full h-[360px] mt-[10%] max-large:mt-[5%]">
                <Image 
                src="/images/volunteer1.png"
                fill
                alt="donate"
                    /> 
                </div>

            <div className="text-normal max-large:text-mnormal text-text_color font-normal mt-[2%] max-large:mt-0">
            Volunteering to work with SlumTech Foundation, entail your dedication to educating young talents about technology. 
            This is an opportunity to inspire the next generation of innovators, 
            through imparting your expertise and enthusiasm for technology, you can 
            help empower young minds, cultivate digital literacy, and prepare them 
            for future opportunities
            </div>
          </div>
          </div>
          </section>

        <Footer />       
        </main>
    )
}

export default Donation;
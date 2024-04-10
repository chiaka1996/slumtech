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
        console.log("submited")
        // e.preventDefault()
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
        <main className="relative overflow-hidden mt-[5%] max-large:mt-[25%]">
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
        <section className="px-[10%] max-md:px-[5%] py-[5%]">
        <Headers
            index={"D"}
            headings={"onation"}
          />

          <div className="font-lael text-sub_header text-[#111111] max-large:mt-[7%]">
          Kindly choose your preferred method of donation
          </div>

          <div className="flex flex-row max-md:flex-col justify-between mt-3">
            <section onClick={() => setToggleMoney(true)} className="cursor-pointer p-[2%] w-[30%] max-large:w-full h-[400px] max-large:h-[350px] max-md:px-[5%] bg-btn_color rounded-[30px] shadow-lg shadow-[#00000029] relative">
            <div className="relative w-[5rem] h-[5rem]">
                <Image 
                src="/images/donate1.png"
                fill
                alt="donate"
                    /> 
                </div>

            <div className="mt-[25%] mx-[10%] w-[80%]">     
            <div className="relative w-[3.125rem] h-[5rem] mx-auto mb-[20%]">
                <Image 
                src="/images/donate5.png"
                fill
                alt="donate"
                    /> 
                </div>

                <div className="w-[100%] h-[3rem] relative flex flex-row justify-between items-c">
                    <div className="relative w-[1.875rem] h-[1.875rem] mt-[5%]" >
                    <Image 
                    src="/images/donate4.png"
                    fill
                    alt="donate"
                    /> 
                    </div>
                    <div className="text-sub_header text-nav_links font-header">Donate Money</div>
                    <div className="relative w-[1.875rem] h-[1.875rem] mt-[5%]" >
                    <Image 
                    src="/images/donate4.png"
                    fill
                    alt="donate"
                    /> 
                </div>
            </div>
            </div>
            </section>

            <section onClick={() => setToggleGadget(true)} className="cursor-pointer max-large:mt-[5%] p-[2%] w-[30%] max-large:w-full h-[400px] max-large:h-[350px] bg-btn_color rounded-[30px] shadow-lg shadow-[#00000029] relative">
            <div className="relative w-[5rem] h-[5rem]">
                <Image 
                src="/images/donate2.png"
                fill
                alt="donate"
                    /> 
                </div>

            <div className="mt-[25%] mx-[10%] w-[80%]">     
            <div className="relative w-[3.125rem] h-[5rem] mx-auto mb-[20%]">
                <Image 
                src="/images/donate5.png"
                fill
                alt="donate"
                    /> 
                </div>

                <div className="w-[100%] h-[48px] relative flex flex-row justify-between items-c">
                    <div className="relative w-[30px] h-[30px] mt-[5%]" >
                    <Image 
                    src="/images/donate4.png"
                    fill
                    alt="donate"
                    /> 
                    </div>
                    <div className="text-sub_header text-nav_links font-header">Donate Gadgets</div>
                    <div className="relative w-[1.875rem] h-[1.875rem] mt-[5%]" >
                    <Image 
                    src="/images/donate4.png"
                    fill
                    alt="donate"
                    /> 
                </div>
            </div>
            </div>
            </section>

            <section className="max-large:mt-[5%] p-[2%] w-[30%] max-large:w-full h-[25rem] max-large:h-[350px] bg-btn_color rounded-[1.875rem] shadow-lg shadow-[#00000029] relative">
            <div className="relative w-[5rem] h-[5rem]">
                <Image 
                src="/images/donate3.png"
                fill
                alt="donate"
                    /> 
                </div>

            <div className="mt-[25%] mx-[10%] w-[80%]">     
            <div className="relative w-[3.125rem] h-[5rem] mx-auto mb-[20%]">
                <Image 
                src="/images/donate5.png"
                fill
                alt="donate"
                    /> 
                </div>

                <div className="w-[100%] h-[48px] relative flex flex-row justify-between items-c">
                    <div className="relative w-[1.875rem] h-[1.875rem] mt-[5%]" >
                    <Image 
                    src="/images/donate4.png"
                    fill
                    alt="donate"
                    /> 
                    </div>
                    <div className="text-sub_header text-nav_links font-header">GoFundMe</div>
                    <div className="relative w-[1.875rem] h-[1.875rem] mt-[5%]" >
                    <Image 
                    src="/images/donate4.png"
                    fill
                    alt="donate"
                    /> 
                </div>
            </div>
            </div>
            </section>
          </div>
          </section>

          <section className="bg-[#FBFDFB] flex flex-row max-large:flex-col items-center justify-between py-[5%] px-[10%] max-large:px-[5%] w-[80%] max-large:w-full mx-[10%]  max-large:mx-0">
            <div className="w-[25rem] max-large:w-full h-[23.125rem] relative">
            <Image 
            src="/images/donate_book.png"
            fill
            alt="donate"
            /> 
            </div>
            <div className="w-[20.5rem]">
            <p className="text-text_color font-normal text-normal">
            "Tech Entrepreneurship and Career for 
            Africa Development" is a comprehensive guide by SlumTech Foundation, 
            focusing on leveraging technology for economic growth,
            entrepreneurship opportunities, and career development in Africa. 
            The book explores innovative strategies for sustainable development in the tech sector”
            </p>

            <p className="text-[#F32B04] font-header text-normal mt-[2%]">Coming Soon..</p>
            </div>
          </section>

          <section className="my-[5%] w-[80%] max-large:w-[90%] mx-[10%] max-md:mx-[5%]">
          <Headers
            index={"B"}
            headings={"ecome a volunteer"}
          />

          <div className="mt-3% max-large:mb-[15%]  flex flex-row max-large:flex-col-reverse justify-between">
            <div className="w-[47%] max-large:w-full">
            <p className="text-nav_links text-sub_header font-normal mb-[5%] max-large:mt-[5%]">
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
             
            <InputComponent
            type="email"
            placeholder="e.g clement@gmail.com"
            labelName="Email"
            value={data.email}
            name="email"
            onChangeInput={onChangeInput}
            />

            <InputComponent
            type="number"
            placeholder="e.g 0989 535 9584"
            labelName="Phone No"
            value={data.phone}
            name="phone"
            onChangeInput={onChangeInput}
            />

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
            <SelectComponent
            labelName="Nationality"
            options={["Nigerian"]}
            value={data.nationality}
            name="nationality"
            onChangeInput={onChangeInput}
            />
            </div>
            </div>

            <SelectComponent
            labelName="Location"
            options={["Lagos", "Abuja", "Owerri"]}
            value={data.location}
            name="location"
            onChangeInput={onChangeInput}
            />

            <div className="mt-[7%]">
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

            <div className="text-normal text-text_color font-normal mt-[2%]">
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
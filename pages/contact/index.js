import { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Navigation, Sidebar, Headers, Footer, InputComponent, TextAreaComponent, ButtonComponent, SubmitModal} from "../../components";


const ContactUs = () => {
  const [toggleModal, setToggleModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] =  useState({
      name: "",
      email: "",
      message: ""
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
  const {name, email, message} = data;

  if(!name || !email || !message) {
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

  const httpRequest = await fetch('../api/messages',{
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
         message: ""
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
        <main className="relative overflow-hidden bg-[#EDECEC]">
        <Navigation />
        <Sidebar /> 
        <ToastContainer />
        <SubmitModal 
        toggle={toggleModal} 
        toggleState={toggleState}
        />
        <section className="px-[10%] xlarge:px-[15%] max-md:px-[5%] py-[5%] max-large:mt-[25%] mt-[5%]">
            <Headers
            index={"C"}
            headings={"ontact Us"}
            />
            <div className="flex flex-row max-large:flex-col justify-between ">
                <div className="w-[47%] max-large:w-full">
                    <div className="mt-[5%] font-normal text-twelve  xlarge:text-faq  text-text_color">
                    Please reach out to us by completing this form. Your messages,suggestions and 
                    feedback will play a crucial role in shaping a brighter, technology-driven future 
                    for everyone
                    </div>

                    <form className="mt-[5%]">
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
                        placeholder="e.g chiaka@gmail.com"
                        labelName="Email"
                        value={data.email}
                        name="email"
                        onChangeInput={onChangeInput}
                        />

                        <TextAreaComponent
                        labelName="Message"
                        placeholder="please type here..."
                        value={data.message}
                        name="message"
                        onChangeInput={onChangeInput}
                          />

                      <ButtonComponent text="Send" submitBtn={submitBtn} loading={loading} />
                    </form>
                </div>

                {/* h-[30.625rem */}
            <div className="w-[40%] max-large:w-full h-full max-large:mt-[10%]">
            <div className="relative w-full  h-[32rem] xlarge:h-[36.5rem]">
            <Image 
            src="/images/contact1.png"
            fill
            alt="register"
                /> 
            </div> 
            </div>
            </div>

            <div className="flex flex-row max-large:flex-col justify-between mt-[5%]">
                <div className="w-[15.625rem] max-large:w-full max-large:mt-[5%]">
                    <h2 className="flex flex-row">
                    <div className="relative w-[1rem] h-[1.25rem] mr-2">
                        <Image 
                        src="/icons/location.png"
                        fill
                        alt="location"
                            /> 
                        </div>
                    <span className="font-header text-normal text-nav_links">Location</span>
                    </h2>
                    <p className="font-normal text-normal text-text_color">
                    801 Travis Street, Suite 2101, PMB 714, Houston Texas  77002
                    </p>
                </div>

                <div className="max-large:mt-[5%]">
                    <h2 className="flex flex-row">
                    <div className="relative w-[40px] h-[26px] mr-2">
                        <Image 
                        src="/icons/email.png"
                        fill
                        alt="location"
                            /> 
                    </div>
                    <span className="font-header text-normal text-nav_links">Email</span>
                    </h2>
                    <p className="font-normal text-normal text-text_color">
                    contact@slumtechfoundation.com
                    </p>
                </div>

                <div className="max-large:my-[5%]">
                    <h2 className="flex flex-row">
                    <div className="relative w-[1.5625rem] h-[1.875rem] mr-2">
                    <Image 
                    src="/icons/phone.png"
                    fill
                    alt="location"
                        /> 
                    </div>
                    <span className="font-header text-normal text-nav_links">Phone</span>
                    </h2>
                    <p className="font-normal text-normal text-text_color">
                    +1888-355-2015
                    </p>
             </div>                
            </div>        
          </section>

        <section className="px-[10%] xlarge:px-[15%] max-md:px-md py-0 mt-0 max-large:mt-[5%] mb-[5%]">
        <Headers
            index={"F"}
            headings={"AQS"}
          />
        
        <div className="mt-[5%] flex flex-row max-md:flex-col justify-between">
          <p className="font-normal text-normal xlarge:text-faq text-text_color w-[47%] max-large:w-full">
          We've compiled some commonly asked questions to assist you better. 
          We hope you find the answers helpful. If you have any further inquiries,
          Don't hesitate to reach out to us
          </p>
          <p></p>
          </div> 

          <div className="flex flex-row max-large:flex-col justify-between">
            <div className="w-[47%] max-large:w-full">
          <div className="mt-[5%] max-large:mt-[10%]">
            <span className="font-header py-[0.5%] px-[2%] text-normal xlarge:text-faq  text-header bg-btn_color shadow-lg shadow-[#00000029]">
            What is SlumTech Foundation?
            </span>
            <p className="px-[2%] bg-[#F3FAF4] shadow-lg shadow-[#00000029] font-normal text-normal xlarge:text-faq  text-text_color">
            SlumTech Foundation is a non-profit organization dedicated 
            to providing technology education and opportunities to underprivileged communities.
          </p>
          </div>

          <div className="mt-[5%] max-large:mt-[10%]">
            <span className="py-[0.5%] px-[2%] text-normal xlarge:text-faq  font-header  text-header bg-btn_color shadow-lg shadow-[#00000029]">
            How does SlumTech Foundation make a difference?
            </span>
            <p className="bg-[#F3FAF4] shadow-lg shadow-[#00000029] font-normal text-normal xlarge:text-faq  px-[2%] text-text_color">
            SlumTech Foundation empowers individuals in slums 
            by teaching them valuable tech skills, equipping them for a brighter future.
          </p>
          </div>

          <div className="mt-[5%] max-large:mt-[10%]">
            <span className="py-[0.5%] px-[2%] text-normal xlarge:text-faq  font-header text-header bg-btn_color shadow-lg shadow-[#00000029]">
            Who can benefit from SlumTech Foundation's programs?
            </span>
            <p className="bg-[#F3FAF4] shadow-lg shadow-[#00000029] font-normal text-normal xlarge:text-faq   px-[2%] text-text_color">
            Anyone living in slum communities who wants to learn 
            tech skills and improve their future prospects can benefit from our programs.
          </p>
          </div>

          <div className="mt-[5%] max-large:mt-[10%]">
            <span className="py-[0.5%] px-[2%] text-normal xlarge:text-faq  font-header text-header bg-btn_color shadow-lg shadow-[#00000029]">
            Is SlumTech Foundation a registered charity?
            </span>
            <p className="bg-[#F3FAF4] shadow-lg shadow-[#00000029] font-normal text-normal xlarge:text-faq  px-[2%] text-text_color">
            Yes, SlumTech Foundation is a registered non-profit organization with a 
            mission to bridge the digital divide in underprivileged areas.
          </p>
          </div>

          <div className="mt-[5%] max-large:mt-[10%]">
            <span className="font-header py-[0.5%] px-[2%] text-normal xlarge:text-faq  text-header bg-btn_color shadow-lg shadow-[#00000029]">
            Where does SlumTech Foundation operate?
            </span>
            <p className="bg-[#F3FAF4] shadow-lg shadow-[#00000029] font-normal text-normal xlarge:text-faq  px-[2%] text-text_color">
            SlumTech Foundation currently operates in slum areas in developing countries,
             focusing on empowering communities through technology.
          </p>
          </div>
          </div>

          <div className="w-[47%] max-large:w-full">
          <div className="mt-[5%] max-large:mt-[10%]">
            <span className="font-header py-[0.5%] px-[2%] text-normal xlarge:text-faq  text-header bg-btn_color shadow-lg shadow-[#00000029]">
            What programs does SlumTech Foundation offer?
            </span>
            <p className="bg-[#F3FAF4] shadow-lg shadow-[#00000029] font-normal text-normal xlarge:text-faq  px-[2%] text-text_color">
            SlumTech Foundation offers coding workshops, 
            digital literacy courses, and mentorship programs for individuals in slum areas.
          </p>
          </div>

          <div className="mt-[5%] max-large:mt-[10%]">
            <span className="font-headerpy-[0.5%] px-[2%] text-normal xlarge:text-faq  text-header bg-btn_color shadow-lg shadow-[#00000029]">
            How can I support SlumTech Foundation's mission?
            </span>
            <p className="bg-[#F3FAF4] shadow-lg shadow-[#00000029] font-normal text-normal xlarge:text-faq  px-[2%] text-text_color">
            You can support us by donating, volunteering, 
            or spreading awareness about our cause to help us reach more individuals in need.
          </p>
          </div>

          <div className="mt-[5%] max-large:mt-[10%]">
            <span className="font-header py-[0.5%] px-[2%] text-normal xlarge:text-faq  text-header bg-btn_color shadow-lg shadow-[#00000029]">
            How can I get involved with SlumTech Foundation as a volunteer?
            </span>
            <p className="bg-[#F3FAF4] shadow-lg shadow-[#00000029] font-normal text-normal xlarge:text-faq  px-[2%] text-text_color">
            If you're passionate about tech education and want to make a difference,
             you can apply to volunteer with SlumTech Foundation on our website
          </p>
          </div>

          <div className="mt-[5%] max-large:mt-[10%]">
            <span className="font-header py-[0.5%] px-[2%] text-normal xlarge:text-faq  text-header bg-btn_color shadow-lg shadow-[#00000029]">
            Can I sponsor a student through SlumTech Foundation?
            </span>
            <p className="bg-[#F3FAF4] shadow-lg shadow-[#00000029] font-normal text-normal xlarge:text-faq  px-[2%] text-text_color">
            Yes, you can sponsor a student's education and 
            tech training through SlumTech Foundation to support their growth and development.
          </p>
          </div>

          <div className="mt-[5%] max-large:mt-[10%]">
            <span className="font-header py-[0.5%] px-[2%] text-normal xlarge:text-faq  text-header bg-btn_color shadow-lg shadow-[#00000029]">
            How can I stay updated on SlumTech Foundation's work and events
            </span>
            <p className="bg-[#F3FAF4] shadow-lg shadow-[#00000029] font-normal text-normal xlarge:text-faq  px-[2%]  text-text_color">
            You can follow us on social media, subscribe to our newsletter, 
            or visit our website regularly for updates on our programs and events.
          </p>
          </div>
          </div>
          </div>
          <div className="mt-[5%] max-large:mt-[10%] font-normal text-normal xlarge:text-faq  text-header">
            <p className="w-[60%] max-large:w-full">
            Thank you for dedicating time to explore our FAQs.
             We hope you found the answers you were looking for here at SlumTech 
             Foundation, If you have any other questions or need further assistance, 
             please don't hesitate to contact our support team. 
            We are here to help you at every step of the way
            </p>
            <p></p>
        </div>
          </section>
          <Footer />
          </main>
    )
}

export default ContactUs;
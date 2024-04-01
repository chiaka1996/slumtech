import Image from "next/image";
import {Navigation, Sidebar, Headers, Footer, InputComponent, TextAreaComponent, ButtonComponent} from "../../components"

const ContactUs = () => {
    return (
        <main className="relative overflow-hidden">
        <Navigation />
        <Sidebar /> 
        <section className="px-[10%] max-md:px-[5%] py-[5%] max-large:mt-[20%]">
            <Headers
            index={"C"}
            headings={"ontact Us"}
            />
            <div className="flex flex-row max-large:flex-col justify-between ">
                <div className="w-[47%] max-large:w-full">
                    <div className="mt-[5%] font-normal text-[12px] text-text_color">
                    Please reach out to us by completing this form. Your messages,suggestions and 
                    feedback will play a crucial role in shaping a brighter, technology-driven future 
                    for everyone
                    </div>

                    <form className="mt-[5%]">
                        <InputComponent
                        type="text"
                        placeholder="e.g nancy clemz"
                        labelName="Name"
                        />

                        <InputComponent
                        type="email"
                        placeholder="e.g chiaka@gmail.com"
                        labelName="Email"
                        />

                    <TextAreaComponent
                    labelName="Message"
                    placeholder="please type here..."
                      />

                      <ButtonComponent text="Send" />
                    </form>
                </div>

            <div className="w-[40%] max-large:w-full h-full max-large:mt-[10%]">
            <div className="relative w-full h-[490px]">
            <Image 
            src="/images/contact1.png"
            fill
            alt="register"
                /> 
            </div> 
            </div>
            </div>

            <div className="flex flex-row max-large:flex-col justify-between mt-[5%]">
                <div className="w-[250px] max-large:w-full max-large:mt-[5%]">
                    <h2 className="flex flex-row">
                    <div className="relative w-[16px] h-[20px] mr-2">
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
                    <div className="relative w-[25px] h-[30px] mr-2">
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

        <section className="px-[10%] max-md:px-md py-0 mt-0 max-large:mt-[5%]">
        <Headers
            index={"F"}
            headings={"AQS"}
          />
        
        <div className="mt-[5%] flex flex-row max-md:flex-col justify-between">
          <p className="font-normal text-normal text-text_color w-[47%] max-large:w-full">
          We've compiled some commonly asked questions to assist you better. 
          We hope you find the answers helpful. If you have any further inquiries,
          Don't hesitate to reach out to us
          </p>
          <p></p>
          </div> 

          <div className="flex flex-row max-large:flex-col justify-between">
            <div className="w-[47%] max-large:w-full">
          <div className="mt-[5%] max-large:mt-[10%]">
            <div className="font-header text-normal text-header bg-btn_color shadow-lg shadow-[#00000029]">
            What is SlumTech Foundation?
            </div>
            <p className="bg-[#F3FAF4] shadow-lg shadow-[#00000029] font-normal text-normal text-text_color">
            SlumTech Foundation is a non-profit organization dedicated 
            to providing technology education and opportunities to underprivileged communities.
          </p>
          </div>

          <div className="mt-[5%] max-large:mt-[10%]">
            <div className="font-header text-normal text-header bg-btn_color shadow-lg shadow-[#00000029]">
            How does SlumTech Foundation make a difference?
            </div>
            <p className="bg-[#F3FAF4] shadow-lg shadow-[#00000029] font-normal text-normal text-text_color">
            SlumTech Foundation empowers individuals in slums 
            by teaching them valuable tech skills, equipping them for a brighter future.
          </p>
          </div>

          <div className="mt-[5%] max-large:mt-[10%]">
            <div className="font-header text-normal text-header bg-btn_color shadow-lg shadow-[#00000029]">
            Who can benefit from SlumTech Foundation's programs?
            </div>
            <p className="bg-[#F3FAF4] shadow-lg shadow-[#00000029] font-normal text-normal text-text_color">
            Anyone living in slum communities who wants to learn 
            tech skills and improve their future prospects can benefit from our programs.
          </p>
          </div>

          <div className="mt-[5%] max-large:mt-[10%]">
            <div className="font-header text-normal text-header bg-btn_color shadow-lg shadow-[#00000029]">
            Is SlumTech Foundation a registered charity?
            </div>
            <p className="bg-[#F3FAF4] shadow-lg shadow-[#00000029] font-normal text-normal text-text_color">
            Yes, SlumTech Foundation is a registered non-profit organization with a 
            mission to bridge the digital divide in underprivileged areas.
          </p>
          </div>

          <div className="mt-[5%] max-large:mt-[10%]">
            <div className="font-header text-normal text-header bg-btn_color shadow-lg shadow-[#00000029]">
            Where does SlumTech Foundation operate?
            </div>
            <p className="bg-[#F3FAF4] shadow-lg shadow-[#00000029] font-normal text-normal text-text_color">
            SlumTech Foundation currently operates in slum areas in developing countries,
             focusing on empowering communities through technology.
          </p>
          </div>
          </div>

          <div className="w-[47%] max-large:w-full">
          <div className="mt-[5%] max-large:mt-[10%]">
            <div className="font-header text-normal text-header bg-btn_color shadow-lg shadow-[#00000029]">
            What programs does SlumTech Foundation offer?
            </div>
            <p className="bg-[#F3FAF4] shadow-lg shadow-[#00000029] font-normal text-normal text-text_color">
            SlumTech Foundation offers coding workshops, 
            digital literacy courses, and mentorship programs for individuals in slum areas.
          </p>
          </div>

          <div className="mt-[5%] max-large:mt-[10%]">
            <div className="font-header text-normal text-header bg-btn_color shadow-lg shadow-[#00000029]">
            How can I support SlumTech Foundation's mission?
            </div>
            <p className="bg-[#F3FAF4] shadow-lg shadow-[#00000029] font-normal text-normal text-text_color">
            You can support us by donating, volunteering, 
            or spreading awareness about our cause to help us reach more individuals in need.
          </p>
          </div>

          <div className="mt-[5%] max-large:mt-[10%]">
            <div className="font-header text-normal text-header bg-btn_color shadow-lg shadow-[#00000029]">
            How can I get involved with SlumTech Foundation as a volunteer?
            </div>
            <p className="bg-[#F3FAF4] shadow-lg shadow-[#00000029] font-normal text-normal text-text_color">
            If you're passionate about tech education and want to make a difference,
             you can apply to volunteer with SlumTech Foundation on our website
          </p>
          </div>

          <div className="mt-[5%] max-large:mt-[10%]">
            <div className="font-header text-normal text-header bg-btn_color shadow-lg shadow-[#00000029]">
            Can I sponsor a student through SlumTech Foundation?
            </div>
            <p className="bg-[#F3FAF4] shadow-lg shadow-[#00000029] font-normal text-normal text-text_color">
            Yes, you can sponsor a student's education and 
            tech training through SlumTech Foundation to support their growth and development.
          </p>
          </div>

          <div className="mt-[5%] max-large:mt-[10%]">
            <div className="font-header text-normal text-header bg-btn_color shadow-lg shadow-[#00000029]">
            How can I stay updated on SlumTech Foundation's work and events
            </div>
            <p className="bg-[#F3FAF4] shadow-lg shadow-[#00000029] font-normal text-normal text-text_color">
            You can follow us on social media, subscribe to our newsletter, 
            or visit our website regularly for updates on our programs and events.
          </p>
          </div>
          </div>
          </div>
          <div className="mt-[5%] max-large:mt-[10%] font-normal text-normal text-header">
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
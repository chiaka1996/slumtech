import Image from "next/image";
import {Navigation, Sidebar, Headers, Footer} from "../../components"

const Policy = () => {
    return (
        <main className="relative overflow-hidden bg-[#EDECEC]">
        <Navigation />
        <Sidebar /> 
        <section className="px-normal xlarge:px-xnormal max-large:px-[5%] py-[5%] mt-[5%]  max-large:mt-[25%]">
        <Headers
            index={"P"}
            headings={"rivacy and Policy"}
          />
        
        
        <div className="mt-[5%] flex flex-row justify-between">
          <p className="font-normal text-normal text-text_color w-[47%] max-large:w-full">
          SlumTech Foundation is committed to protecting the privacy of our visitors and users. 
          This Privacy Policy outlines how we collect, use, and protect personal information
          </p>
          <p></p>
          </div> 

          <div className="flex flex-row max-large:flex-col justify-between">
            <div className="w-[47%] max-large:w-full">
          <div className="mt-[5%]">
            <header className="font-header text-normal text-header">Information Collection </header>
            <p className="mt-[1%] font-normal text-normal text-text_color">
            We may collect personal information such as names, email addresses, and phone numbers when
             voluntarily provided by users through contact forms, registration and newsletter subscriptions
          </p>
          </div>

          <div className="mt-[5%]">
            <header className="font-header text-normal text-header">Information Usage </header>
            <p className="mt-[1%] font-normal text-normal text-text_color">
            Personal information collected is used for communication purposes, sending newsletters, 
            and improving our services. We do not sell or disclose personal information to third parties
          </p>
          </div>

          <div className="mt-[5%]">
            <header className="font-header text-normal text-header">Cookies </header>
            <p className="mt-[1%] font-normal text-normal text-text_color">
            SlumTech Foundation uses cookies to improve user experience and 
            track website traffic. Users can disable cookies in their browser settings
          </p>
          </div>

          <div className="mt-[5%]">
            <header className="font-header text-normal text-header">Security</header>
            <p className="mt-[1%] font-normal text-normal text-text_color">
            We implement security measures to protect personal information 
            from unauthorized access, disclosure, alteration, or destruction
          </p>
          </div>

          <div className="mt-[5%]">
            <header className="font-header text-normal text-header">External Links</header>
            <p className="mt-[1%] font-normal text-normal text-text_color">
            Our website may contain links to external sites. We are not 
            responsible for the privacy practices or content of these sites
          </p>
          </div>
          </div>
          <div className="w-[47%] max-large:w-full">
          <div className="mt-[5%]">
            <header className="font-header text-normal text-header">Children's Privacy </header>
            <p className="mt-[1%] font-normal text-normal text-text_color">
            SlumTech Foundation does not knowingly collect personal information 
            from children under the age of 13 without parental consent
          </p>
          </div>

          <div className="mt-[5%]">
            <header className="font-header text-normal text-header">Data Retention</header>
            <p className="mt-[1%] font-normal text-normal text-text_color">
            We retain personal information for as long as necessary to fulfill the purposes
             outlined in this Privacy Policy unless a longer retention period is required by law.
          </p>
          </div>

          <div className="mt-[5%]">
            <header className="font-header text-normal text-header">Policy Changes</header>
            <p className="mt-[1%] font-normal text-normal text-text_color">
            SlumTech Foundation reserves the right to update or change this 
            Privacy Policy at any time. Users will be notified of any changes.
          </p>
          </div>

          <div className="mt-[5%]">
            <header className="font-header text-normal text-header">Copyright Policy</header>
            <p className="mt-[1%] font-normal text-normal text-text_color">
            All content found on the SlumTech Foundation website, including but not limited to text, images, 
            graphics, and logos, is the property of SlumTech Foundation unless otherwise stated.  Visitors are
            not permitted to use, 
            reproduce, or distribute any content from the website without explicit permission from SlumTech Foundation
          </p>
          </div>
          </div>
          </div>

        <div className="mt-[5%] font-header text-normal text-header">
            <p className="w-[47%] max-large:w-full">
            Contact us for more questions or concerns regarding our Privacy Policy
            at contact@slumtechfoundation.com
            </p>
            <p></p>
        </div>
            
        <div className="mt-[5%] font-normal text-[12px] text-text_color">
        <p className="w-[47%] max-large:w-full">
        By using the SlumTech Foundation website, 
        you agree to the terms outlined in this Copyright and Privacy Policy
        </p>
            <p></p>
        </div>
        </section>
        <Footer />
          </main>
    )
}

export default Policy
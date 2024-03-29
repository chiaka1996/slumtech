import Image from "next/image";
import {Navigation, Sidebar, Headers, Footer, ButtonComponent, InputComponent, SelectComponent, TextAreaComponent} from "../../components"

const Donation = () => {
    return (
        <main className="relative overflow-hidden">
        <Navigation />
        <Sidebar /> 
        <section className="px-[10%] max-md:px-[5%] py-[5%]">
        <Headers
            index={"D"}
            headings={"onation"}
          />

          <div className="font-lael text-sub_header text-[#111111]">
          Kindly choose your preferred method of donation
          </div>

          <div className="flex flex-row max-md:flex-col justify-between mt-3">
            <section className="p-[2%] w-[30%] max-large:w-full h-[400px] max-large:h-[350px] max-md:px-[5%] bg-btn_color rounded-[30px] shadow-lg shadow-[#00000029] relative">
            <div className="relative w-[80px] h-[80px]">
                <Image 
                src="/images/donate1.png"
                fill
                alt="donate"
                    /> 
                </div>

            <div className="mt-[25%] mx-[10%] w-[80%]">     
            <div className="relative w-[50px] h-[80px] mx-auto mb-[20%]">
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
                    <div className="text-sub_header text-nav_links font-header">Donate Money</div>
                    <div className="relative w-[30px] h-[30px] mt-[5%]" >
                    <Image 
                    src="/images/donate4.png"
                    fill
                    alt="donate"
                    /> 
                </div>
            </div>
            </div>
            </section>

            <section className="max-large:mt-[5%] p-[2%] w-[30%] max-large:w-full h-[400px] max-large:h-[350px] bg-btn_color rounded-[30px] shadow-lg shadow-[#00000029] relative">
            <div className="relative w-[80px] h-[80px]">
                <Image 
                src="/images/donate2.png"
                fill
                alt="donate"
                    /> 
                </div>

            <div className="mt-[25%] mx-[10%] w-[80%]">     
            <div className="relative w-[50px] h-[80px] mx-auto mb-[20%]">
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
                    <div className="relative w-[30px] h-[30px] mt-[5%]" >
                    <Image 
                    src="/images/donate4.png"
                    fill
                    alt="donate"
                    /> 
                </div>
            </div>
            </div>
            </section>

            <section className="max-large:mt-[5%] p-[2%] w-[30%] max-large:w-full h-[400px] max-large:h-[350px] bg-btn_color rounded-[30px] shadow-lg shadow-[#00000029] relative">
            <div className="relative w-[80px] h-[80px]">
                <Image 
                src="/images/donate3.png"
                fill
                alt="donate"
                    /> 
                </div>

            <div className="mt-[25%] mx-[10%] w-[80%]">     
            <div className="relative w-[50px] h-[80px] mx-auto mb-[20%]">
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
                    <div className="text-sub_header text-nav_links font-header">GoFundMe</div>
                    <div className="relative w-[30px] h-[30px] mt-[5%]" >
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

          <section className="bg-[#FBFDFB] flex flex-row max-large:flex-col justify-between py-[5%] px-[10%] max-large:px-[5%] w-[80%] max-large:w-full mx-[10%]  max-large:mx-0">
            <div className="w-[400px] max-large:w-full h-[370px] relative">
            <Image 
            src="/images/donate_book.png"
            fill
            alt="donate"
            /> 
            </div>
            <div className="w-[328px]">
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
            />

            <InputComponent
            type="email"
            placeholder="e.g clement@gmail.com"
            labelName="Email"
            />

            <InputComponent
            type="number"
            placeholder="e.g 0989 535 9584"
            labelName="Phone No"
            />

            <div className="flex flex-row justify-between">
            <div className="w-[47%]">
            <SelectComponent
            labelName="Gender"
            options={["male", "female"]}
            />
            </div>
            <div className="w-[47%]">
            <SelectComponent
            labelName="Nationality"
            options={["Nigerian"]}
            />
            </div>
            </div>

            <SelectComponent
            labelName="Location"
            options={["Lagos", "Abuja", "Owerri"]}
            />

            <TextAreaComponent
            
            labelName="Skills"
            placeholder="web development"
            />
            <ButtonComponent text="Submit" />
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
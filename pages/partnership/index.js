import Image from "next/image";
import {Navigation, Sidebar, Headers, Footer, ButtonComponent, InputComponent, SelectComponent, TextAreaComponent} from "../../components"

const Partnership = () => {
    return (
        <main className="relative overflow-hidden">
        <Navigation />
        <Sidebar /> 
        <div className="px-[10%] max-md:px-[5%] pt-[5%]">
        <Headers
            index={"C"}
            headings={"all for Partnership"}
          />
          </div>

        <div className="relative w-full h-[320px] my-[1%]">
            <Image 
            src="/images/partnership.png"
            fill
            alt="register"
                /> 
            <p className="absolute bottom-[10%] max-md:bottom-[15%] left-[27%] max-md:left-[5%] w-[50%] max-md:w-[90%] font-btn_weight text-sub_header text-btn_color">
            We are seeking for partnership from both organization 
            and individuals that will help us build the future of technology through SlumTech
            </p>
            </div>

            <form className="my-[5%] mx-auto w-[30%] max-md:w-[90%]">
                <p className="mb-[5%] font-normal text-sub_header text-header">
                    Kindly fill the form provided
                </p>

                <div className=" mt-[5%]">
                <InputComponent
                type="text"
                placeholder="e.g nancy clemz"
                labelName="Full Name"
                />

                <InputComponent
                type="email"
                placeholder="e.g nancy@gmaail.com"
                labelName="Email"
                />

                <InputComponent
                type="number"
                placeholder="e.g nancy@gmaail.com"
                labelName="Phone no"
                />

                <div className="my-[5%]">
                    <header className="mb-[3%] font-label text-sub_header text-header">Please Indicate</header>
                    <div className="flex flex-row">
                    <div className="mr-[20px] flex flex-row items-center">
                     <label for='Organization'>Organization</label>
                    <input type="radio" className="ml-[10px] w-[20px] h-[20px]"  id="organization" name="person" value="organization" />
                    </div>
                    <div className="flex flex-row items-center">
                        <label for='individual mr-[10px]'>Individual</label>
                    <input type="radio" className="ml-[10px] w-[20px] h-[20px]" id="individual" name="person"  value="individual" />
                    </div>
                    </div>
                </div>

                <TextAreaComponent
                    labelName="Partner Details"
                    placeholder="please type here..."
                />

                <TextAreaComponent
                    labelName="Additional Information"
                    placeholder="please type here..."
                />

                <ButtonComponent text="Submit" />
                </div>
            </form>
          <Footer />
          </main>
    )
}

export default Partnership;

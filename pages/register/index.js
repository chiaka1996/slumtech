import Image from "next/image";
import {Navigation, Sidebar, Headers, Footer, ButtonComponent, InputComponent, SelectComponent, TextAreaComponent} from "../../components"

const Register = () => {
    return (
        <main className="relative overflow-hidden">
        <Navigation />
        <Sidebar /> 
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
            />

            <InputComponent
            type="text"
            placeholder=""
            labelName="School registration number"
            />

            <InputComponent
            type="email"
            placeholder=""
            labelName="Email"
            />

            <InputComponent
            type="number"
            placeholder=""
            labelName="Phone no"
            />

            <InputComponent
            type="text"
            placeholder=""
            labelName="School Address"
            />

            <div className="flex flex-row max-large:flex-col justify-between">
            <div className="w-[47%] max-large:w-full">
            <SelectComponent
            labelName="Country"
            options={["Nigeria"]}
            />
            </div>
            <div className="w-[47%] max-large:w-full">
            <InputComponent
            type="text"
            placeholder=""
            labelName="Number Of Students"
            />
            </div>
            </div>

            <ButtonComponent text="Submit Application" />
            </form>
            </div>
          </div>

        {/* register as individual */}
        <form>
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
        </form>

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
import { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {SubmitModal, ButtonComponent, InputComponent, SelectComponent} from "../../components"
let FormData = require('form-data');

const RegisterIndividual = () => {
    const [toggleModal, setToggleModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [schoolCert, setSchoolCert] = useState(null)
    const [birthCert, setBirthCert] = useState(null)
    const [preview1, setPreview1] = useState("");
    const [preview2, setPreview2] = useState("");

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;
    const toggleState = () => {
        setToggleModal(false)
      }

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        nationality: "",
        gender: "",
        age: "",
        address: "",
        guarantorName: "",
        relationship: "",
        guarantorPhone: "",
        guarantorAddress: ""
    })

    const onChangeInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setData({
            ...data, 
            [name] : value
        })
        console.log(data)
    }

    const handleFile = (e) => {
        let file = e.target.files[0];

        setPreview1(URL.createObjectURL(file))

        console.log(file)
       
        if(file && file.type.substr(0,5) === "image"){        
            setSchoolCert(file)    
        }
    }

    const handleFile2 = (e) => {
        let file = e.target.files[0];
        setPreview2(URL.createObjectURL(file))
       
        if(file && file.type.substr(0,5) === "image"){        
            setBirthCert(file)    
        }
    }

    const submitBtn = async (e) => {
        try{
            e.preventDefault()
            setLoading(true)
            const {name, email, phone, nationality, gender, age, address, guarantorAddress, relationship,
                    guarantorName, guarantorPhone} = data;
            if(!name || !email || !phone || !nationality || !gender || !age || !address || !guarantorAddress || !relationship 
                || !guarantorName || !guarantorPhone || !schoolCert || !birthCert){
                setLoading(false)
                return  toast.error("please fill all required fields.", {
                position: "top-right",
                theme: "colored",
                });
                }

                
            if(name.length < 2 || guarantorName.length < 2){
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

            let formdata = new FormData();
              formdata.append('schoolCert', schoolCert)
              formdata.append('birthCert', birthCert)
              formdata.append('name', name)
              formdata.append('email', email)
              formdata.append('phone', phone)
              formdata.append('nationality', nationality)
              formdata.append('gender', gender)
              formdata.append('age', age)
              formdata.append('address', address)
              formdata.append('guarantorAddress', guarantorAddress)
              formdata.append('relationship', relationship)
              formdata.append('guarantorName', guarantorName)
              formdata.append('guarantorPhone', guarantorPhone)


    
            //add individual to the database
            const addIndividual = await fetch('../api/registerindividual', {
                method: 'POST',
                body: formdata,

            })
    
                let response = await addIndividual.json()   
                if(response.status){
                    setLoading(false)
                    setToggleModal(true)

                    setData({
                        name: "",
                        email: "",
                        phone: "",
                        nationality: "",
                        gender: "",
                        age: "",
                        address: "",
                        guarantorName: "",
                        relationship: "",
                        guarantorPhone: "",
                        guarantorAddress: ""
                    })

                    setBirthCert(null)
                    setSchoolCert(null)
                    setPreview1("")
                    setPreview2("")

                    
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
            console.log(error)
            toast.error(<div>{error.message}</div>, {
            position: "top-right",
            theme: "colored",
        });
        }
    }

    return(
        <div>
            <ToastContainer />
            <SubmitModal 
        toggle={toggleModal} 
        toggleState={toggleState}
        />
            <form>
          <div className="flex flex-row max-large:flex-col justify-between mt-[5%] max-large:mt-[10%]">
            <div className="w-[47%] max-large:w-full">
            <p className="text-text_color font-normal text-normal max-large:text-mnormal mb-[5%]">
            We are deeply committed to shaping the future alongside the youth in the slum through 
            technology. Recognizing that individuals within the desired age range (15 - 21) may have 
            completed secondary school and therefore may not be eligible
             to register with a school, we have created an opportunity for such individuals to register in this section
            </p>
            <span className="px-[5%] font-header text-header text-sub_header max-large:text-normal border border-header rounded-[16px]">
            Register as an individual
            </span>

            <div className=" mt-[10%]">
            <InputComponent
            type="text"
            placeholder=""
            labelName="Full Name"
            value={data.name}
            name="name"
            onChangeInput={onChangeInput}
            />
            
            <div className="my-5">
            <InputComponent
            type="email"
            placeholder=""
            labelName="Email"
            value={data.email}
            name="email"
            onChangeInput={onChangeInput}
            />
            </div>

            <div className="my-5">
            <InputComponent
            type="number"
            placeholder=""
            labelName="Phone Number"
            value={data.phone}
            name="phone"
            onChangeInput={onChangeInput}
            />
            </div>

            <div className="my-5">
            <InputComponent
            type="text"
            placeholder=""
            labelName="Nationality"
            value={data.nationality}
            name="nationality"
            onChangeInput={onChangeInput}
            />
            </div>

            <div className="flex flex-row justify-between max-large:mt-5">
            <div className="w-[47%] max-large:my-0">
            <SelectComponent
            labelName="Gender"
            options={["Male","Female"]}
            value={data.gender}
            name="gender"
            onChangeInput={onChangeInput}
            />
            </div>
            <div className="w-[47%] max-large:my-0">
            <InputComponent
            type="text"
            placeholder=""
            labelName="Age"
            value={data.age}
            name="age"
            onChangeInput={onChangeInput}
            />
            </div>
            </div>

            <div className="my-5">
            <InputComponent
            type="text"
            placeholder=""
            labelName="Address"
            value={data.address}
            name="address"
            onChangeInput={onChangeInput}
            />
            </div>

            </div>
            </div>

            <div className="w-[47%] max-large:w-full max-large:mt-5">
            <div className="relative w-full h-[205px] max-large:h-[160px] mb-[10%]">
            <Image 
            src="/images/register2.png"
            fill
            alt="register"
                /> 
            </div>
            <header className="font-header text-[18px] max-large:text-normal text-header">Provide your guarantor information</header>
            <div className=" mt-[5%]">
            <InputComponent
            type="text"
            placeholder=""
            labelName="Full Name"
            value={data.guarantorName}
            name="guarantorName"
            onChangeInput={onChangeInput}
            />

            <div className="my-5">
            <InputComponent
            type="text"
            placeholder=""
            labelName="Your Relationship with the above"
            value={data.relationship}
            name="relationship"
            onChangeInput={onChangeInput}
            />
            </div>
            
            <div className="my-5">
            <InputComponent
            type="text"
            placeholder=""
            labelName="Phone Number"
            value={data.guarantorPhone}
            name="guarantorPhone"
            onChangeInput={onChangeInput}
            />
            </div>

            <div className="my-5">
            <InputComponent
            type="text"
            placeholder=""
            labelName="Address"
            value={data.guarantorAddress}
            name="guarantorAddress"
            onChangeInput={onChangeInput}
            />
            </div>

            <div className="flex flex-row justify-between items-end">
                <div className="w-[45%]">
                    <div className="font-header text-normal text-header max-large:w-[70%]">Senior School Certificate</div>
                    <span className="text-[#565656] font-normal text-[14px] max-large:hidden">e.g Waec, Kcse, Gce</span>
                    
                        {preview1 ?  <div className="w-[1.875rem] h-[1.875rem] relative">
                            <Image 
                        src={preview1}
                       fill
                        alt="upload"
                        /> 
                        </div>
                        : "" 
                        }
                    <label htmlFor="certificate" className="mt-1 w-[8.75rem] rounded-[0.5rem] flex flex-row items-center justify-center font-btn_weight text-normal text-[#093212] py-[3%] px-[1%] bg-[#D1EAD7]">
                       <span className="mr-1"> upload</span>
                        <Image 
                        src="/icons/document.png"
                        width={15}
                        height={15}
                        alt="upload"
                        />
                    </label>
                    <input type="file"
                     onInput = {handleFile}
                     accept='images/*'
                    id="certificate" 
                    className="hidden"
                     />
                </div>
                
                <div className="text-right max-large:text-left max-large:w-[45%">
                    <div className="font-header text-normal text-header max-large:w-[70%]">Date of Birth Certificate</div>
                    <span className="text-[#565656] font-normal text-[14px] max-large:hidden opacity-0">e.g Waec, Kcse, Gce</span>
                    
                        {preview2 ?  <div className="w-[1.875rem] h-[1.875rem] relative">
                            <Image 
                        src={preview2}
                       fill
                        alt="upload"
                        /> 
                        </div> : "" 
                        }
                   
                    <label htmlFor="b-certificate" className="mt-1 w-[8.75rem] rounded-[0.2rem] flex flex-row items-center justify-center font-btn_weight text-normal text-[#093212] py-[3%] px-[1%] bg-[#D1EAD7]">
                       <span className="mr-1"> upload</span>
                        <Image 
                        src="/icons/document.png"
                        width={15}
                        height={15}
                        alt="upload"
                        />
                    </label>
                    <input 
                    type="file"
                    id="b-certificate" 
                    onInput = {handleFile2}
                    accept='images/*'
                    className="hidden" />
                </div>
            </div>
            </div>
            </div>
            
        </div>
        <ButtonComponent text="Submit Application" submitBtn={submitBtn} loading={loading} />
        </form>
        </div>
    )
}

export default RegisterIndividual;
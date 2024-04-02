import { Button, Modal } from "flowbite-react";
import Image from "next/image";
// import { HiOutlineExclamationCircle } from "react-icons/hi";

const Submited = ({toggle, toggleState}) => {
    return(
        <Modal dismissible show={toggle} size="sm" onClose={toggleState} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <div className="w-[100px] h-[100px] rounded-full bg-[#D1EAD7] flex flex-row justify-center items-center mx-auto ">
            <div className="relative w-[50px] h-[50px]">
            <Image 
            src="/icons/mark.png"
            fill
            alt="mark"
                /> 
            </div> 
            </div>
            <div className="text-[#2B2B2B] font-normal text-[32px]">Submited</div>  
            </div>
          
       </Modal.Body>
      </Modal>

    )
}

export default Submited;
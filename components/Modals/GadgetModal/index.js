import { Button, Modal, ModalBody } from "flowbite-react";
import Image from "next/image";
// import { HiOutlineExclamationCircle } from "react-icons/hi";
import {Headers} from "../../../components"

const DonateGadget = ({toggle, toggleState}) => {
    return(
        <Modal dismissible show={toggle} size="4xl" onClose={toggleState} popup className="mt-[3%] max-md:mt-[20%]">
         <ModalBody className="shadow-lg shadow-[#00000029]">
           <Modal.Header />
          <div className="text-center">
            <div className="mt-[3%] flex flex-row justify-center">
              <div>
            <header className="flex flex-row font-header text-[2rem] max-sm:text-[29px] text-header relative mb-[3%]">
              <div className="text-right w-[3.75rem] max-sm:w-[50px] h-[3.75rem] max-sm:h-[50px] bg-header_shadow rounded-full text-index z-70">D</div>
              <span>onate  gadgets by sending to our address</span>
              </header>
              </div>
                </div> 

          <div className="my-[2%] font-normal text-[1.25rem] text-nav_links">SlumTech Foundation</div>
          <div className="my-[2%] font-[700] text-[1.25rem] text-nav_links">801 Travis Street, Suite 2101, PMB 714,<br/> Houston Texas  77002</div>
          <div className="my-[2%] font-[400] text-[1.25rem] text-[#232323]">
          We sincerely appreciate your generosity in providing hope to these young talents
          Your support is deeply valued and enables us to persist in our crucial mission
          </div>
          <div className="flex flex-row items-top justify-center">
          <div className="modalCircle relative mr-5" >
            <div className="smallModalCircle absolute bottom-5 left-5"></div>
            </div> 
            {/* small circle */}
            <div className="smallModalCircle"></div>
            </div>
          </div>    
       </ModalBody>
      </Modal>

    )
}

export default DonateGadget;
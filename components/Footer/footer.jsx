import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import style from './footer.module.css';

const Footer = () => {

    return(
        <footer className='bg-primary w-[100%] text-center py-[2em] text-btn_color'>
           <div className='relative w-[122px] h-[68px] mx-auto'>
             <Image 
            src="/images/footerLogo.png"
            fill
            alt="logo"
        />
        </div>
        <div className='text-[9px] -mt-[1em]'>Automate | Innovate | Accelerate</div>

        <div className='flex flex-row justify-center items-center my-[2em]'>
            <span className='text-[12px] font-normal mr-[1em]'>Member</span>
            <div className='relative w-[123px] h-[28px]'>
            <Image 
            src="/images/commerce.png"
            fill
            alt="commerce"
        />
        </div>
        </div>

        <button className='px-5 py-3 text-btn_color bg-btn_bg rounded-[12px]'>Donate</button>
        <div className='w-full text-center my-5 flex flex-row justify-center flex-wrap'>
            <div className=''>About us</div>
            <div className='ml-[3em]  max-large:ml-[1em]'>Events and News</div>
            <div className='ml-[3em]  max-large:ml-[1em]'>Programs</div>
            <div className='ml-[3em]  max-large:ml-[1em]'>Get Involved</div>
            <div className='ml-[3em]  max-large:ml-[1em]'>Contact</div>
            <div className='ml-[3em]  max-large:ml-[1em]'>FAQs</div>
        </div>

        <div className=' w-full justify-center flex flex-row'>
            <div className='relative w-[24px] h-[24px]'>
                <Image
                 src="https://img.icons8.com/ios-filled/24/F5F5F5/facebook-new.png"
                 fill
                 alt="facebook"
                 />
            </div>
            <div className='relative w-[24px] h-[24px] ml-7'>
                <Image
                src="https://img.icons8.com/ios/24/F5F5F5/twitterx--v2.png"
                 fill
                 alt="twitter"
                 />
            </div>
            <div className='relative w-[24px] h-[24px] ml-7'>
                <Image
               src="https://img.icons8.com/ios/24/F5F5F5/instagram-new--v1.png"
                 fill
                 alt="instagram"
                 />
            </div>
        </div>
        </footer>
    )
}

export default Footer;
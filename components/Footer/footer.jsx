import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return(
        <footer className='bg-text_color py-[3%]'>
            <section className='w-[25%] max-md:w-full ml-[65%] max-md:ml-0 max-md:px-md'>
                <div className='text-[#F9FCF9] text-normal font-btn_weight'>
                Be the first to get updated on our Latest projects and ways to Participate
                </div>
                <form className='mt-3'>
                    <div>
                        <label className='text-[#ffffff] text-normal font-normal'>Email</label><br/>
                        <input type='email' placeholder='email@gmail.com' className='h-[48px] px-2 w-full rounded-[8px] outline-none border-1 border-text_color' />
                    </div>
                    <button className='mt-3 h-[40px] w-full bg-btn_green text-btn_color font-normal text-normal rounded-normal'>Subscribe</button>
                </form>
            </section>

            <section className='pl-[20%] max-md:pl-0 mt-[5%] flex flex-row max-md:flex-col justify-between'>
                <div className='w-[20%] max-large:w-full flex flex-row md:justify-between text-footer_text max-md:px-md'>
                    <div>
                    <header className='font-btn_weight mb-3 text-[14px]'>Services</header>
                    <ul className='text-footertext font-normal'>
                        <li className='mb-2'>Partner</li>
                        <li  className='mb-2'>Donate</li>
                        <li  className='mb-2'>Volunteer</li>
                        <li  className='mb-2'>Enroll</li>
                        <li  className='mb-2'>FAQs</li>
                    </ul>
                    </div>

                    <div className='max-md:ml-[40px]'>
                    <header className='text-[14px] font-btn_weight mb-3'>About SlumTech</header>
                    <ul className='text-footertext font-normal'>
                        <li  className='mb-2'>Team</li>
                        <li  className='mb-2'>Initiatives</li>
                        <li  className='mb-2'>Contact</li>
                        <li  className='mb-2'>Gallery</li>
                        <li  className='mb-2'>Privacy Policy</li>
                    </ul>
                    </div>
                </div>
                <div className='w-[90%] large:w-[65%] max-md:ml-[10%]'>
                <div className='h-[120px] mt-3 w-full bg-btn_color rounded-tl-[40px] rounded-bl-[40px] py-[1%]'>
                <div className='relative w-[144px] h-[40px] mx-auto'>
                <Image 
                src="/logo/slumtech.png"
                fill
                alt="logo"
                />
                </div>
                <div className='w-[50%] max-md:w-[90%] mx-auto text-[10px] text-center'>
                Connect with us to learn more about our 100% free programs, 
                partnership opportunities, or to get involved, please reach 
                out to us at info@slumtechng.com
                </div>
                <div className='w-[7%] max-md:w-[12%] flex flex-row justify-between mx-auto'>
                <img 
                width="20" 
                height="20" 
                src="https://img.icons8.com/ios/20/343434/instagram-new--v1.png" 
                alt="instagram-new--v1"
                />
                 <Image 
                 width="20" 
                 height="20" 
                 src="https://img.icons8.com/ios-filled/20/343434/facebook-new.png" 
                 alt="facebook-new"
                 />
                </div>
                </div>
                <div className='text-[#CAD0CB] font-normal text-[12px] text-center'>
                SlumTech Foundation - Empowering Africa's Future through Technology
                </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;
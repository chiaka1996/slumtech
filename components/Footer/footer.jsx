import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return(
        <footer className='bg-text_color py-[5%] cursor-pointer'>
            <section className='w-[80%] mx-auto xlarge:w-[70%] flex flex-row max-large:flex-col-reverse justify-between items-center max-large:w-full'>
            <div className='w-[20%] max-large:w-full flex flex-row md:justify-between text-footer_text max-md:px-md max-large:mt-[5%] '>
                    <div>
                    <header className='font-header mb-3 text-fourteen'>Services</header>
                    <ul className='text-footertext font-normal'>
                        <li className='mb-2'>
                        <Link href="/partnership" className='no-underline'>
                        Partner
                        </Link>  
                        </li>
                        <li  className='mb-2'>
                        <Link href="/donation" className='no-underline'>
                            Donate
                        </Link>    
                        </li>
                        <li  className='mb-2'>
                        <Link href="/donation" className='no-underline'>
                            Volunteer
                        </Link>    
                        </li>
                        <li  className='mb-2'>
                        <Link href="/register" className='no-underline'>
                            Enroll
                        </Link> 
                        </li>
                        <li  className='mb-2'>
                        <Link href="/contact" className='no-underline'>
                            FAQs
                        </Link> 
                        </li>
                    </ul>
                    </div>

                    <div className='max-large:ml-[60px]'>
                    <header className='text-fourteen font-header mb-3'>About SlumTech</header>
                    <ul className='text-footertext font-normal'>
                        <li  className='mb-2'>Team</li>
                        <li  className='mb-2'>Initiatives</li>
                        <li  className='mb-2'>
                        <Link href="/contact" className='no-underline'>
                            Contacts
                        </Link> 
                        </li>
                        <li  className='mb-2'>Gallery</li>
                        <li  className='mb-2'>
                        <Link href="/policy" className='no-underline'>
                            Privacy Policy
                        </Link> 
                        </li>
                    </ul>
                    </div>
                </div>
                <div className='w-[362px] max-large:w-full max-large:px-md max-large:mb-[5%]'> 
                <div className='text-[#F9FCF9] text-[20px] font-header'>
                Be the first to get updated on our Latest projects and ways to Participate
                </div>
                <form className='mt-3'>
                    <div>
                        <label className='text-[#ffffff] text-normal font-normal '>Email</label><br/>
                        <input type='email' placeholder='email@gmail.com' className='h-[3rem] px-5 w-full rounded-[8px] outline-none border-1 border-text_color mt-[2%] text-fourteen placeholder-[#565656] '/>
                    </div>
                    <button className='mt-3 h-[2.5rem] w-full bg-btn_green text-btn_color font-normal text-normal rounded-normal'>Subscribe</button>
                </form>
                </div>
            </section>

            <section className='mt-[5%]'>       
                <div className='h-[8rem] mt-3 w-[55%] ml-auto max-large:w-[90%] max-large:ml-[10%]  bg-btn_color rounded-tl-[2.5rem] rounded-bl-[2.5rem] py-[1%]'>
                <div className='relative w-[9rem] h-[2.5rem] mx-auto'>
                <Image 
                src="/logo/slumtech.png"
                fill
                alt="logo"
                />
                </div>
                <div className='w-[55%] max-md:w-[90%] mx-auto text-ten text-center'>
                Connect with us to learn more about our 100% free programs, 
                partnership opportunities, or to get involved, please reach 
                out to us at contact@slumtechfoundation.com
                </div>
                <div className='w-[12%] max-large:w-[20%] flex flex-row justify-between mx-auto mt-2'>
                <a href="https://www.instagram.com/slumtechfoundation/" target="_blank">
                <img 
                width="20" 
                height="20" 
                src="https://img.icons8.com/ios/20/343434/instagram-new--v1.png" 
                alt="instagram-new--v1"
                />
                </a>
               
                <a href="https://www.linkedin.com/company/slumtech-foundation/" target="_blank">
                <img 
                width="20" 
                height="20" 
                src="https://img.icons8.com/ios-glyphs/20/343434/linkedin.png"
                alt="linkedin-new--v1"
                />
                </a>

                <a href="https://web.facebook.com/profile.php?id=61557154079357" target="_blank">
                 <Image 
                 width="20" 
                 height="20" 
                 src="https://img.icons8.com/ios-filled/20/343434/facebook-new.png" 
                 alt="facebook-new"
                 />
                 </a>
                </div>
                </div>
                <div className='text-[#CAD0CB] font-normal text-twelve max-large:text-ten text-center w-[55%] max-large:w-[85%] ml-auto'>
                SlumTech Foundation - Empowering Africa's Future through Technology
                </div>    
            </section>
        </footer>
    )
}

export default Footer;
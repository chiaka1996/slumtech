import Image from 'next/image';
import Link from 'next/link';
import { BarState } from '../../context/context';
import style from './nav.module.css';

const Navigation = () => {
  const { bar, openBar, closeBar} = BarState();

    return(
      <nav className="bg-[#FDFEFD] shadow-md shadow-[#00000029] z-[500] py-2 px-normal max-large:px-[5%] flex flex-row justify-between items-center fixed top-0 left-0 w-full">
         <Image 
            src="/logo/slumtech.png"
            width="192"
            height="64"
            alt="logo"
        />
           <div className="w-[40%] flex flex-row justify-between items-center font-nav max-lg:hidden">
           <Link href="#" className='no-underline text-nav_links text-normal'>
            Home
           </Link>
           <Link href="#" className='no-underline text-nav_links text-normal'>
            Enroll
           </Link>
           <Link href="#" className='no-underline text-nav_links text-normal'>
            About
           </Link>
           <Link href="#" className='no-underline text-nav_links text-normal'>
            Contact Us
           </Link>

           <button className='bg-btn_green text-normal px-3 py-1 text-btn_color rounded-[5px]'>Donate</button>
           </div>

           {
                    !bar ? <div className={style.hamburger}>
                  <Image 
                  width={24} 
                  height={24}
                  src="https://img.icons8.com/ios/24/menu--v1.png" 
                  alt="menu--v1"
                  onClick={openBar}
                  />
                    </div> : 
                    <div className={style.hamburger}>
                    <Image 
                    width={24}
                    height={24}
                    src="https://img.icons8.com/ios/24/delete-sign.png" 
                    alt="delete-sign"
                    onClick={closeBar}
                    />   
                </div>
                }
      </nav>
    )
}

export default Navigation;
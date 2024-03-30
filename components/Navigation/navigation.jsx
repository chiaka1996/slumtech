import Image from 'next/image';
import Link from 'next/link';
import { BarState } from '../../context/context';
import style from './nav.module.css';
import { useRouter } from "next/router";

const Navigation = () => {
  const { bar, openBar, closeBar} = BarState();
  const router = useRouter();

  const NavItems = [
    {
      label: "Home",
      url: "/"
    },
    {
      label: "Enroll",
      url: "/register"
    },
    {
      label: "About",
      url: "/about"
    },
    {
      label: "Contact Us",
      url: "/contact"
    }
  ]

    return(
      <nav className="font-primary bg-[#FDFEFD] shadow-md shadow-[#00000029] z-[500] py-2 px-normal max-large:px-[5%] flex flex-row justify-between items-center fixed top-0 left-0 w-full">
         <Image 
            src="/logo/slumtech.png"
            width="192"
            height="64"
            alt="logo"
        />
           <div className="w-[50%] flex flex-row justify-between items-center font-nav max-lg:hidden">
            {
              NavItems.map((data, i) =>  <div key={i} className={router.asPath == data.url ? style.activeLink : style.navLink}>
                <Link href={data.url} className='no-underline text-nav_links text-normal'>
                {data.label}
                </Link>
                </div>
              )
            }

            
              <button onClick={() => router.push('/donation')} className='bg-btn_green hover:bg-[#66B978] text-normal px-[5%]  py-1 text-btn_color hover:text-text_color rounded-[5px] font-label'>Donate</button>
          
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
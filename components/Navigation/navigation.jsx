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
      label: "HOME",
      url: "/"
    },
    {
      label: "ABOUT",
      url: "/about"
    },
    {
      label: "PROGRAMS",
      url: "/programs"
    },
    {
      label: "MEDIA",
      url: "/media"
    },
    {
      label: "CONTACT US",
      url: "/contact"
    }
  ]

    return(
      <nav className="font-primary bg-[#fff] z-[500] py-2 2xl:py-6 px-normal xlarge:px-xnormal max-large:px-[5%] flex flex-row justify-between items-center fixed top-0 left-0 w-full">
         <Image 
            src="/logo/slumtechLogo.png"
            width="120"
            height="60"
            alt="logo"
        />
           <div className="w-[70%] flex flex-row justify-between items-center font-nav max-lg:hidden">
            {
              NavItems.map((data, i) =>  <div key={i}  className={router.asPath == data.url ? style.activeLink : style.navLink}>
                <Link href={data.url} className='no-underline text-primary text-normal'>
                {data.label}
                </Link>
                </div>
              )
            }

            
              <button onClick={() => router.push('/ourteam')} className='bg-btn_bg text-normal px-[1rem] py-2 2xl:py-3 text-btn_color rounded-[12px] font-header'>GET INVOLVED</button>
          
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
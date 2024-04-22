"use client"
import { useRouter } from 'next/router'
import Link from 'next/link';
import style from './sidebar.module.css';
import { BarState } from '../../context/context';

const SideBar = ({page}) => {
  const router = useRouter();
    const { bar, closeBar} = BarState();

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
      // {
      //    label: "Volunteer",
      //    url: "/partnership"
      //  },
       {
         label: "Partner with us",
         url: "/partnership"
       },
       {
         label: "Privacy Policy",
         url: "/policy"
       },
      {
        label: "Contact Us",
        url: "/contact"
      }
    ]
    
    return(
       <nav className={bar ? style.sidebarContainer : style.sidebarContainerClose}>
          {
              NavItems.map((data, i) =>  <div key={i} className='w-full text-center mb-[10%]' >
                <Link href={data.url} className='no-underline text-nav_links text-normal font-label'>
                <span onClick={()=>closeBar()} className={router.asPath == data.url ? style.activeLink : style.navLink}>{data.label}</span>
                </Link>
                </div>
              )
            }

         <Link href='/donation' onClick={()=>closeBar()} className='no-underline'>
        <button className='bg-btn_green text-normal px-3 py-[2%] text-btn_color rounded-[5px] w-[80%] mx-[10%]'>Donate</button>
        </Link>
       </nav>
    )
}

export default SideBar;
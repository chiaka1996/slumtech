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
       <nav className={bar ? style.sidebarContainer : style.sidebarContainerClose}>
          {
              NavItems.map((data, i) =>  <div key={i} className='w-full text-center mb-[10%]' >
                <Link href={data.url} className='no-underline text-nav_links text-normal font-label'>
                <span onClick={()=>closeBar()} className={router.asPath == data.url ? style.activeLink : style.navLink}>{data.label}</span>
                </Link>
                </div>
              )
            }

         <Link href='/ourteam' onClick={()=>closeBar()} className='no-underline'>
        <button className='bg-btn_bg text-normal px-[1rem] py-[1rem] 2xl:py-3 text-btn_color rounded-[12px] font-header w-[80%] mx-[10%]'>GET INVOLVED</button>
        </Link>
       </nav>
    )
}

export default SideBar;
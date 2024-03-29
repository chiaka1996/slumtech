"use client"
import { useRouter } from 'next/router'
import Link from 'next/link';
import style from './sidebar.module.css';
import Image from 'next/image'
import { BarState } from '../../context/context';



const SideBar = ({page}) => {
  const router = useRouter();
    const { bar, closeBar} = BarState();


    
    return(
       <nav className={bar ? style.sidebarContainer : style.sidebarContainerClose}>
         <div onClick={()=>closeBar()}>
         <Link href="#" className='no-underline text-nav_links text-normal '>
            Home
           </Link>
        </div>

        <div onClick={()=>closeBar()}>
         <Link href="#" className='no-underline text-nav_links text-normal '>
            Enroll
        </Link>
        </div>

        <div onClick={()=>closeBar()}>
         <Link href="#" className='no-underline text-nav_links text-normal '>
            About
        </Link>
        </div>

        <div onClick={()=>closeBar()}>
         <Link href="#" className='no-underline text-nav_links text-normal '>
            Contact Us
        </Link>
        </div>

        <div onClick={()=>closeBar()}>
         <Link href="#" className='no-underline text-nav_links text-normal '>
            Contact Us
        </Link>
        </div>

        <button className='bg-btn_green text-normal px-3 py-1 text-btn_color rounded-[5px]'>Donate</button>
       </nav>
    )
}

export default SideBar;
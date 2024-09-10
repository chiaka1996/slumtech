import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BarState } from '../../context/context';
import style from './nav.module.css';
import { Dropdown } from "flowbite-react";
import { useRouter } from "next/router";

const Navigation = () => {
  const { bar, openBar, closeBar} = BarState();
  const router = useRouter();

  function googleTranslateElementInit() {
    new window.google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }

  useEffect(() => {
    googleTranslateElementInit()
  })

    return(
      <nav className="font-primary bg-[#fff] z-[500] py-2 2xl:py-6 px-normal xlarge:px-xnormal max-large:px-[5%] flex flex-row justify-between items-center fixed top-0 left-0 w-full">
         <Image 
            src="/logo/slumtechLogo.png"
            width="120"
            height="60"
            alt="logo"
        />
           <div className="w-[85%] flex flex-row justify-between items-center font-nav max-lg:hidden">
           <div className={router.asPath == "/" ? style.activeLink : style.navLink}> 
           <Link href="/" className='no-underline text-primary text-normal'>
            HOME
            </Link>
            </div>

            <div className={/^\/about\/*\w*/.test(router.asPath) || router.asPath == '/ourteam' ? style.activeLink : style.navLink}> 
            <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span>ABOUT</span>} size="3xl" className='text-left'>
            <Link href="/about" className='no-underline'>
              <Dropdown.Item className='text-left w-full text-nowrap'>
                <div className="font-normal text-[14px] w-full">ABOUT SLUMTECH</div>
              </Dropdown.Item>
              </Link>
              <Link href="/about/mission" className='no-underline'>
              <Dropdown.Item>
                <div className="pl-[1rem] font-normal text-[14px]">Our Mission</div>
              </Dropdown.Item>
              </Link>
              <Link href="/about/vision" className='no-underline'>
              <Dropdown.Item>
                 <div className="pl-[1rem] font-normal text-[14px]">Our Vision</div>
              </Dropdown.Item>
              </Link>
              <Link href="/ourteam" className='no-underline'>
              <Dropdown.Item>
              <div className="font-normal text-[14px]">OUR TEAM</div>
              </Dropdown.Item>
              </Link>
            </Dropdown>
            </div>

            <div className={router.asPath == "/programs" ? style.activeLink : style.navLink}> 
           <Link href="/programs" className='no-underline text-primary text-normal'>
            PROGRAMS
            </Link>
            </div>

            <div className={/^\/media\/*\w*/.test(router.asPath) || router.asPath == '/blog' ? style.activeLink : style.navLink}> 
            <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span>MEDIA</span>} size="3xl" className='text-left'>
            <Link href="/media/post1" className='no-underline'>
              <Dropdown.Item className='text-left w-full text-nowrap'>
                <div className="font-normal text-[14px] w-full">EVENTS</div>
              </Dropdown.Item>
              </Link>
              <Link href="/media" className='no-underline'>
              <Dropdown.Item>
                <div className="font-normal text-[14px]">NEWS</div>
              </Dropdown.Item>
              </Link>
              <Link href="/blog" className='no-underline'>
              <Dropdown.Item>
                 <div className="font-normal text-[14px]">BLOGS</div>
              </Dropdown.Item>
              </Link>
            </Dropdown>
            </div>

            <div className={router.asPath == "/contact" ? style.activeLink : style.navLink}> 
           <Link href="/contact" className='no-underline text-primary text-normal'>
            CONTACT US
            </Link>
            </div>

            <div className={/^\/career\/*\w*/.test(router.asPath) || router.asPath == '/career' ? style.activeLink : style.navLink}> 
           <Link href="/career" className='no-underline text-primary text-normal'>
            CAREER
            </Link>
            </div>

            <div id="google_translate_element" className=''></div>

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
                <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
      </nav>
    )
}

export default Navigation;
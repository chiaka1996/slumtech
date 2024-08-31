import Image from 'next/image';
import Link from 'next/link';


const Newsletter = () => {
    return(
       <section className='bg-[#F5F5F5] w-[80%] max-large:w-[90%] mx-auto py-5 mt-[3em] max-large:mt-[2em] text-primary text-center'>
        <div className='text-[2em] font-h2'>Stay Updated</div>
        <div className='font-normal text-secondary'>Stay up to date on our, events, programs and more.</div>
        <form className='w-[35%] mx-auto max-large:w-[90%]'>
            <div className='my-[1em]'>
                <input type="email" placeholder='email' className='outline-none rounded-[12px] px-5 border border-btn_bg w-full h-[45px]' />
            </div>

            <div className='my-[1em]'>
                <input type="text" placeholder='Your name' className='outline-none rounded-[12px] px-5 border border-btn_bg w-full h-[45px]' />
            </div>
            
            <div className='w-full flex'>
                {/* <div> */}
                <input type="checkbox" className='appearance-none outline-none border border-btn_bg rounded-full h-[15px] w-[15px]' />
                {/* </div> */}
                <div className='font-normal w-[100%] text-[1em] mb-[1em] ml-[0.5em] text-left'>
                I agree to receive notifications, 
                updates, publications, alerts and newsletters from the SlumTech Foundation.
                </div>
            </div>
            <button className='outline-none bg-btn_bg text-[1em] font-h2 w-full h-[50px] rounded-[12px] text-btn_color'>Subscribe</button>
        </form>
       </section>
    )}

    export default Newsletter;
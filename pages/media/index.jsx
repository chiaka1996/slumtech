import Image from "next/image";
import Link from 'next/link';
import {Navigation, Sidebar, Newsletter, Footer} from "../../components"
import Head from 'next/head'

export const Card = ({title, paragraph, link, img}) => {
    return(
        <div className="relative">
            <div  className="relative w-full min-h-[17.5rem] max-large:h-[20rem]">
                <Image 
                src={img}
                fill
                alt="event"
                /> 
            </div>

            <h2 className="font-h3 text-secondary">
            {title}
            </h2>
            <p className="text-[#044930] text-normal">
           {paragraph}
            </p>   
                <Link href={link}>
                <button className="px-3 py-3 bg-btn_bg rounded-[12px] absolute bottom-[0.5rem] right-0 no-underline">
                <div  className="relative min-w-[20px] min-h-[20px] max-large:h-[30px]">
                <Image 
                src="https://img.icons8.com/ios/20/000000/circled-right-2.png" 
                fill
                alt="event"
                /> 
                </div>
                </button>
                </Link>  
        </div>
    )
}

export default function Media() {

    const AllNews = [
        {
            title: "Embracing Digital Transformation: Unlocking the Potential of Slum Communities",
            img: "/images/event1.png",
            link: "blog/post1",
            paragraph: "In the bustling streets of urban slums, where challenges like poverty, limited resources, and inadequate infrastructure persist, a beacon of hope is emerging – digitalization."
        },
        {
            title: "Empowering Tomorrow's Leaders: The Global Impact of SlumTech Institutes' Future Expansion and Strategic Partnerships",
            img: "/images/event2.png",
            link: "blog/post2",
            paragraph: "The future of education is set to be transformed by the visionary plans of the SlumTech Foundation as it embarks on establishing SlumTech Institutes globally"
        },
        {
            title: "SlumTech Foundation Joins US Chamber of Commerce",
            img: "/images/event3.png",
            link: "media/post1",
            paragraph: "In the bustling streets of urban slums, where challenges like poverty, limited resources, and inadequate infrastructure persist, a beacon of hope is emerging – digitalization."
        }
    ]

    const AllEvents = [
        {
            title: "Tech for Change: Empowering Communities Worldwide.",
            img: "/images/event4.png",
            link: "media/post1",
            paragraph: "This event aims to bring together tech innovators, social entrepreneurs, policymakers, and community leaders from around the world to collaborate on solutions that address the unique challenges faced by underserved communities."
        }
    ]

  return (
   <main className="text-primary">
    <Head>
    <title>Slumtech Media page </title>
    <meta
      name="description"
      content="SlumTech Foundation is a US-based nonprofit organization with a bold mission 
      to establish world-class tech institutions across Africa"
      key="desc"
    />
    <meta name="keywords" content="nonprofit, foundation, slum, technology, africa" />
    </Head>
    <Navigation />
    <Sidebar /> 

    <section className="flex flex-row items-center w-[80%] mx-auto mt-[10em]">
    <div  className="relative w-[55%] min-h-[32.5rem] max-large:h-[29rem] mt-[3em]">
    <Image 
    src="/images/event1.png"
    fill
    alt="event"
    /> 
    </div>

    <div className="w-[40%] ml-[5rem]">
        <header className="font-h4 text-[2.5em] text-primary">
        Embracing Digital Transformation: Unlocking the Potential of Slum Communities
        </header>
        <p className="text-[23px] text-[#044930] font-normal mt-[1em]">
        In the bustling streets of urban slums, where challenges like poverty, limited resources, 
        and inadequate infrastructure persist, a beacon of hope is emerging – digitalization.
        </p>

        <div className="w-full text-right mt-[2rem]">
        <button className="px-6 py-3 bg-btn_bg rounded-[12px]">
        <div  className="relative min-w-[30px] min-h-[30px] max-large:h-[30px]">
        <Image 
        src="https://img.icons8.com/ios/50/000000/circled-right-2.png" 
        fill
        alt="event"
        /> 
        </div>
    </button>
    </div> 
    </div>
    </section>

    {/* all news */}
    <section className="mt-[3em] w-[80%] mx-auto">
        <header className="font-h4 text-[2.5em]">All news</header>

        <div className="mt-[1em] grid grid-cols-4 gap-4 min-h-[36.5em]">
          {
            AllNews.map((item, i) => <Card title={item.title} paragraph={item.paragraph} img={item.img} link={item.link} key={i}/>)
          }
        </div>
    </section>

    {/* AllEvents */}
    <section className="mt-[3em] w-[80%] mx-auto">
        <header className="font-h4 text-[2.5em]">All Events</header>

        <div className="mt-[1em] grid grid-cols-4 gap-4 min-h-[36.5em]">
          {
            AllEvents.map((item, i) => <Card title={item.title} paragraph={item.paragraph} img={item.img} link={item.link} key={i}/>)
          }
        </div>
    </section>
    <Newsletter />
    <Footer /> 
</main>
);
}
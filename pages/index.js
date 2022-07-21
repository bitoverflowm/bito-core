import react, {useState, useRef} from "react";
import ReactDOM from 'react-dom/client';

import Emoji_Engine from "../components/emoji_engine";
import More from "../components/more";
import OverView from "../components/overview";
import Chat from "../components/chat";
import Rotating_Text from "../components/rotating_text";
import Subs from "../components/subs";
import Top from "../components/top";
import Pill from "../components/ui/pill";

import { useUser } from "../lib/hooks";

const Home = ({overViewData, moreData}) => {
  const [chatVisible, setChatVisible] = useState()
  const [registerActive, setRegisterActive] = useState()
  const learnMoreRef = useRef()
  const costsSectionRef = useRef()
  const consultantsSectionRef = useRef()
  const introducingBitoRef = useRef()
  const user = useUser()

  const clickHandler = () => {
    setChatVisible(!chatVisible);
  }
  
  const handleScroll = ref => {
    setRegisterActive(true)
    window.scrollTo({
      behavior: "smooth",
      top: ref.current.offsetTop
    });
  };


  return (
    <div className="relative items-center bg-gradient-to-br from-nft-purple to-nft-cotton p-5">
      <div className={'fixed bottom-5 right-12 z-30 text-white font-extrabold bg-black rounded-full opacity-80 cursor-pointer hover:opacity-100 hover:bg-yellow-300 hover:text-black'}><Pill linker='/signup' label='Get your website Now!'/></div>
      <header className="relative grid content-center rounded-md w-full bg-white min-h-screen">
        <div className="">
          <Top />
        </div>
        <div className="grid sm:grid-cols-2 mt-8 sm:mt-1 text-4xl sm:p-10 items-center place-items-center">
          <div className="sm:border-r-2 sm:border-indigo-200 text-right pr-10">
            <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br to-nft-purple from-nft-cotton">
              Your
            </div>
            <div className="flex flex-wrap">
              <div className="basis-full font-extrabold text-5xl">
                Brand New
              </div>
              <div className="basis-full font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-br to-nft-purple from-nft-cotton">
                World Class
              </div>
              <div className="basis-full font-extrabold">
                Website in under
              </div>
              <div className="basis-full font-extrabold text-6xl">
                24hrs.
              </div>
            </div>
            <div className="text-black text-xl mt-2">
              You focus on your craft 
            </div>
            <div className="text-black text-xl">
              We'll take care of the tech.
            </div>
          </div>
          <div className="items-center p-10">
            <video autoPlay loop muted playsInline className="rounded-lg max-h-[300px] sm:max-h-[600px]">
              <source src="/video/mainArt.mp4"/>
            </video>
          </div>          
        </div>
        <div className="flex flex-wrap text-sm place-content-center">
          <div className="flex flex-wrap max-w-xs sm:max-w-screen-sm w-full place-content-center">
            <Pill linker='/signup' label='Websites'/>
            <Pill linker='/signup' label='Apps'/>
            <Pill linker='/signup' label='NFTs'/>
            <Pill linker='/signup' label='Crypto'/>
            <Pill linker='/signup' label='Whitepaper reviews'/>
            <Pill linker='/signup' label='Smart Contracts'/>
            <Pill linker='/signup' label='CTO Service'/>
            <Pill linker='/signup' label='3D graphics'/>
            <Pill linker='/signup' label='AI'/>
          </div>          
        </div>
        <div className="text-xl underline cursor-pointer text-center p-5" onClick={() => handleScroll(learnMoreRef)}>
          Click to Learn More
        </div>     
        <link rel="icon" href="/favicon.ico" />
      </header>

      <main className="flex flex-col text-center w-full mt-5 py-4" ref={learnMoreRef}>
        <div className="relative items-center sm:mb-12 h-[96vh] rounded-md w-full bg-white text-xl mt-2 p-5">
          <div className="text-md">
            Here's the deal:
          </div>
          <div className="text-md">
            You are a powerful indie, solo-preneur, team or business.
          </div>
          <div className="text-md">
            You are ambitious. But...
          </div>
          <div className="text-md">
            You have an impending crisis...
            you feel it deep down in your stomach.
            the future is already here
            but you just can't find time to keep up! 
          </div>
          <div className="text-md">
            We get it, we're entreprenurs too -- you are juggeling a tonne of tasks
          </div>
          <div className="text-md">
            But the crisis still remains -- you need tech! Your customers use tech! Everyone has tech!
          </div>
          <div className="text-xl underline cursor-pointer" onClick={() => handleScroll(costsSectionRef)}>
            Continue...
          </div>
        </div>

        <div className="relative items-center sm:mb-12 h-[96vh] rounded-md  w-full bg-white text-xl mt-2 p-5" ref={costsSectionRef}>
          <div className="text-md">
            Whether its payment processing, marketing with instagram and facebook, using wordperess, or any no code solution, or even making a simple single page website:
          </div>
          <div className="text-md">
            Here are your options:
          </div>          
          <div className="text-md">
            1 good dev = min salary $150,000 /year (before inflation made things worse)
          </div>
          <div className="text-md">
            strengths: 
            - you aren't hiring a team of devs

          </div>
          <div className="text-md">
            Even the 1 dev cannot handle all your tech needs. Devs need to somewhat specialize otherwise they become useless generalists.
          </div>
          <div className="text-md">
            So you need a team of good devs = min $1,000,000 in house
          </div>
          <div className="text-md">
            But...
          </div>
          <div className="text-md">
            Lets say you owned a hair salon. Can I, with 0 hair cutting experience, come in and expect myself to manage, motivate and grow my team properly? Absolutely not! 
          </div>
          <div className="text-md">
            So, you won't really know what to do with your million dollar team of kick ass developers!
          </div>
          <div className="text-xl underline cursor-pointer" onClick={() => handleScroll(consultantsSectionRef)}>
            Click to Learn More
          </div>
        </div>
        <div className="relative items-center sm:mb-12 h-[96vh] rounded-md w-full bg-white text-xl mt-2 p-5" ref={consultantsSectionRef}>
          <div className="text-md">
            Hire Consultants they say...
          </div>
          <div className="text-md">
            Hire off shore, could be cheap, probably will be thousands of $ per month, untested and risky.
          </div>
          <div className="text-md">
            Hire on-shore, will be expensive, probably will be tens to hundreds of thousands of $ per month, probably still risky.
          </div>
          <div className="text-md">
            Even then, these are temporary fixes to an existential crisis for your business
          </div>
          <div className="text-xl underline cursor-pointer" onClick={() => handleScroll(introducingBitoRef)}>
            Click to Learn More
          </div>
        </div>
        <div className="relative items-center sm:mb-12 h-[96vh] rounded-md w-full bg-white text-xl mt-2 p-5" ref={introducingBitoRef}>
          <div className="text-md">
            Introducing Bito!
          </div>
          <div className="text-md">
            1 subscription, 1 monthly payment
          </div>
          <div className="text-md">
            Get your high quality custom website made in 24 hrs or less!
          </div>
          <div className="text-md">
            Easy onboarding
          </div>
          <div className="text-md">
            Cheap monthly plan gets you up and running
          </div>
          <div className="text-md">
            then... magic happens
          </div>
          <div className="text-md">
            we become best firends
          </div>
          <div className="text-md">
            we answer all your tech needs. Solve all your tech problems.
          </div>
          <div className="text-md">
            Your world is no longer chaos. You change your mindset. 
            - You no longer worry about how to get something done. You worry about what needs to be done. And Bito takes care of the rest.
          </div>
          <div className="text-md">
            Our team of experts will work with you to find your perfect solution. 
          </div>
          <div className="text-md">
            You grow, we grow:
            - we provide you scale, business and tech advice 
          </div>
          <div className="text-md">
          We are more than just devs. We are business partners. W have done million $ raises, million $ exits, cutting edge product releases, global products, etc. 
            we grow with you to provide advice,
            with a flexible growth budget model that grows as your business grows 

            We stay with you all the way as your comfort in tech world grows and your interests peaqe into Crypto, advanced business capabilities, faster payments, Appps, NFTs, advanced integrations, etc; we handle it all, we grow with you 
          </div>
          <Pill linker='/signup' label='Register Now!'/>
        </div> 
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <div>
          Based in San Diego
        </div>
      </footer>
    </div>
  )
}

export default Home;

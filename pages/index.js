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
    <div className="relative min-h-screen items-center bg-gradient-to-br from-nft-purple to-nft-cotton p-5">
      {(chatVisible && !registerActive) && <div className={'fixed right-3 bottom-4 h-auto w-80 sm:w-1/3 z-40 bg-white  items-center place-content-center animate-fadeIn'}><div className="p-10"><Chat /></div></div>}
      { (chatVisible &&  !registerActive) && <div onClick={clickHandler} className="fixed bottom-5 right-5 z-50 hover:text-white font-extrabold hover:bg-black rounded-full p-4 opacity-75 cursor-pointer hover:opacity-100 bg-yellow-300 text-black">
        X
        </div>
      }
      { (!chatVisible &&  !registerActive) && <div onClick={clickHandler} className="fixed bottom-5 right-5 z-30 text-white font-extrabold bg-black rounded-full p-4 opacity-75 cursor-pointer hover:opacity-100 hover:bg-yellow-300 hover:text-black">
        Want to chat?
        </div>
      }
      {
        registerActive && <div className={'fixed bottom-5 right-5 z-30 text-white font-extrabold bg-black rounded-full opacity-80 cursor-pointer hover:opacity-100 hover:bg-yellow-300 hover:text-black'}><Pill linker='/signup' label='Register Now!'/></div>
      }
      
      
      <header className="relative flex items-center sm:mb-12 p-3 h-screen rounded-md w-full bg-white">
        <Top />
        <div className="grid grid-cols-1 text-4xl p-4">
          {user && (
            <>
              <p>Currently logged in as:</p>
              <pre>{JSON.stringify(user, null, 2)}</pre>
            </>
          )}
          <div className="relative z-30 text-black font-extrabold">
              Your High Quality Website
          </div>
          <div className="relative z-30 text-black font-extrabold">
              in less than 24hrs
          </div>
          <div className="text-black text-xl mt-2">
              You focus on your business 
          </div>
          <div className="text-black text-xl">
              We'll take care of the tech
          </div>
          <div className="text-xl underline cursor-pointer" onClick={() => handleScroll(learnMoreRef)}>
            Click to Learn More
          </div>
        </div>
        
        <link rel="icon" href="/favicon.ico" />
      </header>

      <main className="flex flex-col text-center w-full mt-5 py-4" ref={learnMoreRef}>
        <div className="relative items-center sm:mb-12 h-[96vh] rounded-md w-full bg-white text-xl mt-2 p-5">
          <div className="text-md">
            Here's the deal:
          </div>
          <div className="text-md">
            You are a powerful indie, solo-preneur, small team, small business, maybe even a mid sized big fish in a small pond.
          </div>
          <div className="text-md">
            You are ambitious. But...
          </div>
          <div className="text-md">
            You have an impending crisis. And you feel it deep down in your stomach.
            The world is already in the future. You are not a melinnial so you simply do not have the time to keep up on the side. 
          </div>
          <div className="text-md">
            You are juggeling a tonne of tasks
          </div>
          <div className="text-md">
            But the crisis still remains -- you need tech! Your customers use tech! Everyone has tech!
          </div>
          <div className="text-xl underline cursor-pointer" onClick={() => handleScroll(costsSectionRef)}>
            Click to Learn More
          </div>
        </div>

        <div className="relative items-center sm:mb-12 h-[96vh] rounded-md w-full bg-white text-xl mt-2 p-5" ref={costsSectionRef}>
          <div className="text-md">
            TO further add fuel to the fire:
          </div>
          <div className="text-md">
            Whether its payment processing, marketing with instagram and facebook, using wordperess, or any no code solution, or even making a simple single page website:
          </div>
          <div className="text-md">
            1 good developer = min salary $150,000 /year (before inflation made things worse)
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

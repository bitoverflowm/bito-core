import react, {useState, useRef} from "react";
import ReactDOM from 'react-dom/client';

import Emoji_Engine from "../components/emoji_engine";
import More from "../components/more";
import OverView from "../components/overview";
import Chat from "../components/chat";
import Rotating_Text from "../components/rotating_text";
import Subs from "../components/subs";
import Top from "../components/top";

import { useUser } from "../lib/hooks";

const Home = ({overViewData, moreData}) => {
  const [chatVisible, setChatVisible] = useState()
  const [registerActive, setRegisterActive] = useState()
  const learnMoreRef = useRef();
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
        registerActive && <div className={'fixed bottom-5 right-5 z-30 text-white font-extrabold bg-black rounded-full opacity-80 cursor-pointer hover:opacity-100 hover:bg-yellow-300 hover:text-black'}><div className="p-4">Get started now!</div></div>
      }

      
      
      <header className="relative flex items-center  sm:mb-12 p-3 h-screen rounded-md w-full bg-white">
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

      <main className="flex flex-col text-center min-h-screen">
        <div className="text-xl" ref={learnMoreRef
        }>
          <div className="text-md">
            Here's the break down:
          </div>
          <Subs />
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

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

export async function getStaticProps(){

  const res = await fetch('https://mighty-anchorage-30412.herokuapp.com/api/bit-overflows')
  //const res = await fetch('http://localhost:1337/api/verdeblocks/')
  const overViewData = await res.json()

  //const res2 = await fetch('http://localhost:1337/api/verdeblocks/')
  const res2 = await fetch('https://mighty-anchorage-30412.herokuapp.com/api/bit-overflow-mores/')
  const moreData = await res2.json()

  return { props: {overViewData, moreData}}
}

const Home = ({overViewData, moreData}) => {
  const [visible, setVisible] = useState();
  const learnMoreRef = useRef();
  const user = useUser()

  const clickHandler = () => {
    setVisible(!visible);
  }
  
  const handleScroll = ref => {
    window.scrollTo({
      behavior: "smooth",
      top: ref.current.offsetTop
    });
  };


  return (
    <div className="relative">
      {visible && <div className={'fixed right-3 bottom-4 h-auto w-80 sm:w-1/3 z-40 bg-white  items-center place-content-center animate-fadeIn'}><div className="p-10"><Chat /></div></div>}
      { visible 
        ? <div onClick={clickHandler} className="fixed bottom-5 right-5 z-50 hover:text-white font-extrabold hover:bg-black rounded-full p-4 opacity-75 cursor-pointer hover:opacity-100 bg-yellow-300 text-black">
        X
          </div>
        : <div onClick={clickHandler} className="fixed bottom-5 right-5 z-30 text-white font-extrabold bg-black rounded-full p-4 opacity-75 cursor-pointer hover:opacity-100 hover:bg-yellow-300 hover:text-black">
        Want to chat?
        </div>
      }

      <Top />
      
      <header className="relative flex items-center h-screen sm:mb-12">
        <div className="absolute top-10 left-5 text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 text-4xl font-bold">
            🤖BitO 
        </div>
        <div className="grid grid-cols-1 text-4xl p-4">
          {user && (
            <>
              <p>Currently logged in as:</p>
              <pre>{JSON.stringify(user, null, 2)}</pre>
            </>
          )}
          <div className="relative z-30 text-black font-extrabold">
              Your Virtual
          </div>
          <div className="relative z-30 text-black font-extrabold">
              <div className=""><Rotating_Text /></div>
          </div>
          <div className="text-black text-sm mt-2">
              You focus on the business 
          </div>
          <div className="text-black text-sm">
              We'll take care of the rest
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

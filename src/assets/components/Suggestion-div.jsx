import userData from "../data/user-data.json"
import suggestionPostsData from "../data/suggestion-accounts-data.json"
import TheUserProfileSmCard from "./TheUserProfileSmallCard";
import { useEffect, useRef, useState } from "react";

const SuggestionDiv = () => {
    const targetRef = useRef(null);
    
    const [doScroll , setDoScroll] = useState(false)

    useEffect(() => {
      document.addEventListener("scroll", () =>{ 
        // console.log(scrollY)
  
        const scrollAble = scrollY > 800 ? true : false
        setDoScroll(scrollAble)
      }
      );
    },[doScroll])
    
    const handleScroll = () => {
      targetRef.current?.scrollIntoView({behavior:"smooth",block:"center"}) 
    }
    return (
      <div className="col-span-4 my-4">
        <section className="w-11/12" ref={targetRef}>
          <TheUserProfileSmCard
            id={userData.id}
            userid={userData.userid}
            username={userData.username}
            profileImage={userData.profileImage}
            caption={userData.caption}
            btnName="Switch"
          />
          <div className="my-6 mx-1.5 flex justify-between items-center font-sans font-semibold">
            <span className="text-sm text-gray-700 ml-1">
              Suggested for you
            </span>
            <span className="text-sm hover:cursor-pointer">See All</span>
          </div>
          {suggestionPostsData.map((userData) => {
            return (
              <TheUserProfileSmCard
                id={userData.id}
                userid={userData.userid}
                username={userData.username}
                profileImage={userData.profileImage}
                caption={userData.caption}
                btnName="Switch"
                key={userData.id}
              />
            );
          })}
          <footer className="my-8 ml-4">
            <div className="flex flex-wrap gap-x-2 text-xs text-gray-500">
              {[
                "About",
                "Help",
                "Press",
                "API",
                "Jobs",
                "Privacy",
                "Terms",
                "Locations",
                "Language",
                "Meta Verified",
              ].map((item) => (
                <a key={item} href="#" className="hover:underline">
                  {item}
                </a>
              ))}
            </div>
            <p className="mt-2 text-xs text-gray-400">
              © 2025 Instagram from Meta
            </p>
          </footer>
        </section>
        { doScroll ? <button
          onClick={handleScroll}
          className="fixed font-semibold right-20 bg-gray-950/80 rounded-full p-3 text-white rotate-90 bottom-10 hover:bg-gray-700/80 active:-translate-y-1"
        >
          &#10094;&#10094;
        </button> : null}
      </div>
    );
}

export default SuggestionDiv
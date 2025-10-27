import { useParams, Link } from "react-router-dom";
import postsData from "../data/posts-data.json";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StoryPage = () => {
    const paramId = Number(useParams().id)
    const navigate = useNavigate();

    const navigateStory = (id) => id > 0 && id <= postsData.length ? navigate(`/story/${id}`) : null; 

     const [previousStory, setPreviousStory] = useState(false);
     const [nextStory, setNextStory] = useState(true);

     useEffect(() => {
        const checkStoryNavigation = () => {
       
        const min = paramId <= 1 ;
        const max = paramId >= postsData.length;

        setPreviousStory(!min)
        setNextStory(!max)
        };

        checkStoryNavigation()
     },[paramId])
     
    // key functions 
    document.addEventListener('keyup', (e) => { 
        switch(e.key){
            case "Backspace":
                navigate("/");
                break;
            case "ArrowRight":
                navigateStory(paramId+1)
                break;
            case "ArrowLeft":
                navigateStory(paramId-1)
                break;
            default :
                null
         }
        });

  return (
    <section className="flex-col justify-items-center items-center">
      <Link
        to="/"
        className="fixed top-2 left-3 px-3 py-2 text-blue-500 rounded hover:bg-gray-200 active:bg-gray-300"
      >
        &#10094;&#10094;&#10094; back
      </Link>
      {/* left */}
      {previousStory && (
        <button
          type="button"
          className="slide-left-btn px-2! py-5! left-50! top-53/100!"
          onClick={() => navigateStory(paramId - 1)}
        >
          &#10094;
        </button>
      )}
      {/* right */}
      {nextStory && (
        <button
          type="button"
          className="slide-right-btn px-2! py-5! right-50! top-53/100!"
          onClick={() => navigateStory(paramId + 1)}
        >
          &#10095;
        </button>
      )}
      <div className="flex items-center mb-1">
        <div className="relative w-12 h-12 rounded-full bg-conic/decreasing from-fuchsia-800 to-violet-600 via-yellow-200 0 m-1 p-[3px]">
          <img
            src={"https://static.photos/people/200x200/" + (paramId + 200)}
            alt={(postsData[paramId - 1].username, "-profile-img")}
            className="rounded-full w-full h-full border-[3px] border-white object-cover hover:cursor-pointer"
          />
        </div>

        <div className="*:leading-4">
          <h3 className="font-semibold hover:cursor-pointer">
            {postsData[paramId - 1].userid}
          </h3>
          <small className="pl-0.5">{postsData[paramId - 1].caption}</small>
        </div>
      </div>

      <img
        src={`https://static.photos/people/1024x576/${paramId + 444}`}
        alt="Story"
        className="mt-10"
      />
    </section>
  );
};

// const navigateStory = (id) => id > 0 ? window.location = `/story/${id}`: null

export default StoryPage;
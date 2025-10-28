import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import postsData from "../data/posts-data.json";

const StoryPage = () => {
  const { id } = useParams();
  const paramId = Number(id);
  const navigate = useNavigate();

  const navigateStory = (id) =>id > 0 && id <= postsData.length ? navigate(`/story/${id}`) : null;

  const [previousStory, setPreviousStory] = useState(false);
  const [nextStory, setNextStory] = useState(true);

  useEffect(() => {

    setPreviousStory(paramId > 1);
    setNextStory(paramId < postsData.length);
    
  }, [paramId]);

  useEffect(() => {
    const handleKey = (e) => {
      switch (e.key) {
        case "Backspace":
          navigate("/");
          break;
        case "ArrowRight":
          navigateStory(paramId + 1);
          break;
        case "ArrowLeft":
          navigateStory(paramId - 1);
          break;
        default:
          break;
      }
    };

    document.addEventListener("keyup", handleKey);
    return () => document.removeEventListener("keyup", handleKey);
  }, [paramId]);

  return (
    <section className="grid justify-items-center items-center mt-2 select-none">
      <Link
        to="/"
        className="fixed top-2 left-3 px-3 py-2 text-blue-500 rounded hover:bg-gray-200 active:bg-gray-300"
      >
        &#10094;&#10094;&#10094; back
      </Link>

      {previousStory && (
        <button
          type="button"
          className="slide-left-btn px-2! py-5! left-50! top-[53%]!"
          onClick={() => navigateStory(paramId - 1)}
        >
          &#10094;
        </button>
      )}

      {nextStory && (
        <button
          type="button"
          className="slide-right-btn px-2! py-5! right-50! top-[53%]!"
          onClick={() => navigateStory(paramId + 1)}
        >
          &#10095;
        </button>
      )}

      <div className="flex items-center mb-1">
        <div className="relative w-12 h-12 rounded-full bg-conic/decreasing from-fuchsia-800 to-violet-600 via-yellow-200 m-1 p-[3px]">
          <img
            src={`https://static.photos/people/200x200/${paramId + 200}`}
            alt={`${postsData[paramId - 1].username}-profile-img`}
            className="rounded-full w-full h-full border-[3px] border-white object-cover hover:cursor-pointer"
          />
        </div>

        <div className="leading-4">
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

export default StoryPage;

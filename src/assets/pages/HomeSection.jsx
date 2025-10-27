import ThePost from "../components/ThePost";
import postsData from "../data/posts-data.json";
import TheStoryCard from "../components/TheStoryCard";
import { useRef, useState, useEffect } from "react";

//id , userId , title , body , comments[]

const HomeSection = () => {
  //to handel row scroll
  const storyDivRef = useRef(null);
  const scrollAmount = 500;

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = (direction) => {
    // console.log(storyDivRef.current);
    if (storyDivRef.current) {
      storyDivRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  //   const [data, fetchError] = TheUseFetch(`https://mimic-server-api.vercel.app/posts/`);
  //   console.log(data[1]);

  // Check scroll position to toggle visibility of buttons
  const checkScrollPosition = () => {
    const el = storyDivRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    // console.log(scrollLeft, ":", scrollWidth, ":", clientWidth);

    const atStart = scrollLeft <= 0;
    const atEnd = scrollLeft + clientWidth >= scrollWidth - 1;

    // console.log("start : ", atStart ,"===","end : ",atEnd );

    setCanScrollLeft(!atStart);
    setCanScrollRight(!atEnd);
  };

  useEffect(() => {
    const el = storyDivRef.current;
    if (!el) return;

    checkScrollPosition(); // initial state
    el.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      el.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);

  return (
    <section className="col-span-11 border-r border-gray-100">
      <div className="relative w-8/12 mx-auto my-4">
        {/* Scroll btns */}
        {/* left */}
        {canScrollLeft && (
          <button
            type="button"
            className="slide-left-btn"
            onClick={() => handleScroll(-1)}
            data-target="storyDiv"
          >
            &#10094;
          </button>
        )}
        {/* right */}
        {canScrollRight && (
          <button
            type="button"
            className="slide-right-btn"
            onClick={() => handleScroll(1)}
            data-target="storyDiv"
          >
            &#10095;
          </button>
        )}
        {/* Story cards container — ref attached here */}
        <div
          ref={storyDivRef}
          className="flex space-x-2 overflow-x-auto scrollbar-hide scroll-smooth"
          id="storyDiv"
        >
          {/* story small cards */}
          {postsData.map((post) => {
            return (
              <TheStoryCard key={post.id} userName={post.userid} id={post.id} />
            );
          })}
        </div>
      </div>
      {/* posts */}
      {postsData.map((post) => {
        return (
          <ThePost
            id={post.id}
            key={post.id}
            userid={post.userid}
            username={post.username}
            postDesc={post.postDesc}
            likes={post.likes}
            timestamp={post.timestamp}
            comments={post.comments}
          />
        );
      })}
    </section>
  );
};

export default HomeSection;

import userData from "../data/user-data.json";
import postDatas from "../data/posts-data.json";
import { useState } from "react";

const ProfilePage = () => {
    const [feedPopupIndex , setFeedPopupIndex] = useState(null)
    
  return (
    <section className="col-span-15 mx-auto w-9/12">
      <div className="flex my-10 ">
        <div className="">
          <img
            src={userData.profileImage}
            alt="user-profile"
            className="w-40 h-40 mr-7 rounded-full"
          />
        </div>
        <div className="font-sans mx-2">
          <div className="flex space-x-6 justify-center items-center my-4">
            <h3 className="text-2xl font-semibold">{userData.userid}</h3>
            <button className="bg-gray-200 font-semibold text-sm rounded px-3 py-1 hover:bg-gray-300">
              Edit Profile
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M7.05 6.462a2 2 0 0 0 2.63-1.519l.32-1.72a9 9 0 0 1 3.998 0l.322 1.72a2 2 0 0 0 2.63 1.519l1.649-.58a9 9 0 0 1 2.001 3.46l-1.33 1.14a2 2 0 0 0 0 3.037l1.33 1.139a9 9 0 0 1-2.001 3.46l-1.65-.58a2 2 0 0 0-2.63 1.519L14 20.777a9 9 0 0 1-3.998 0l-.322-1.72a2 2 0 0 0-2.63-1.519l-1.649.58a9 9 0 0 1-2.001-3.46l1.33-1.14a2 2 0 0 0 0-3.036L3.4 9.342a9 9 0 0 1 2-3.46zM12 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-1">
            {userData.about.map((data,index) => (
              <p className="font-mono" key={index}>{data}</p>
            ))}
          </div>
        </div>
      </div>
      {/* story */}
      <section className="flex space-x-10 my-20">
        {postDatas.map((post , index) => {
          if (post.id < 6) {
            return (
              <div className="justify-items-center items-center w-20 " key={index}>
                <div className="relative w-20 h-20 rounded-full bg-conic/decreasing from-fuchsia-800 to-violet-600 via-yellow-200 p-[3px]">
                  <img
                    src={`https://static.photos/people/200x200/${
                      post.id + 200
                    }`}
                    alt={(post.userName, "-profile-img")}
                    className="rounded-full w-full h-full object-cover hover:cursor-pointer border-[3px] border-white"
                  />
                </div>
                <small className="font-semibold hover:cursor-pointer text-center w-17 truncate block">
                  {post.username}
                </small>
              </div>
            );
          }
        })}
      </section>
      {/* feed */}
      <section className="grid grid-cols-3 gap-px hover:cursor-pointer">
        {/* <div><img src={`https://static.photos/people/640x360/111`} alt=""/></div> */}
        {postDatas.map(({ id, likes, comments },index) => {
          if (id < 21) {
            return (
              <div className="relative feed"  onMouseEnter={() =>setFeedPopupIndex(index)} onMouseLeave={() => {setFeedPopupIndex(null)}} key={index}>
                <img
                  src={`https://static.photos/vintage/1024x576/${id + 100}`}
                  alt="feed"
                  className="w-full h-110 object-cover"
                />
                {/* popup */}
                {<div className={`absolute top-0 w-full z-20 h-full bg-black/90 ${feedPopupIndex === index ? "flex" : "hidden"} text-white/90 justify-center feedPopup`}>
                  <div className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 20.325q-.35 0-.712-.125t-.638-.4l-1.725-1.575q-2.65-2.425-4.788-4.812T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.537t2.5-.563q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.275.275-.637.4t-.713.125"
                      />
                    </svg>
                    <p className="font-bold">{likes}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg
                      className="pb-0.5 pr-1.5 rotate-y-180 hover:cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"
                      />
                    </svg>
                    <p className="font-bold">{comments.length}</p>
                  </div>
                </div>}
              </div>
            );
          }
        })}
      </section>
    </section>
  );
};

export default ProfilePage;

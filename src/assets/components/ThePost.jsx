
//id , userId , title , body , comments[]
const defaultUserId = "Call_me_dhina";
const defaultUserName = "dhina"
const defaultDesc ="Exploring the impact of Healthcare Innovation in Vellore...";

const ThePost = (props) => {
    const {id , userid = defaultUserId, username = defaultUserName , caption , postDesc = defaultDesc, likes , comments , timestamp = "2025-01-1,10:00"} = props
  return (
    <div className="m-5 w-7/12 mx-auto my-4" key={id}>
      <div className="flex items-center mb-1">
        <div className="relative w-12 h-12 rounded-full bg-conic/decreasing from-fuchsia-800 to-violet-600 via-yellow-200 0 m-1 p-[3px]">
          <img
            src={"https://static.photos/people/200x200/"+id}
            alt={(username,"-profile-img")}
            className="rounded-full w-full h-full border-[3px] border-white object-cover hover:cursor-pointer"
          />
        </div>

        <div className="*:leading-4">
          <h3 className="font-semibold hover:cursor-pointer">{userid}</h3>
          <small className="pl-0.5">{timestamp}</small>
        </div>
      </div>
      <img
        src={"https://static.photos/people/640x360/"+(id+111)}
        alt="post"
        className="rounded"
      />
      <div className="mx-2">
        <div className="my-3 space-x-1 flex items-center">
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
              className="hover:cursor-pointer"
            >
              <path
                fill="currentColor"
                d="M12 20.325q-.35 0-.712-.125t-.638-.4l-1.725-1.575q-2.65-2.425-4.788-4.812T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.537t2.5-.563q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.275.275-.637.4t-.713.125M11.05 6.75q-.725-1.025-1.55-1.563t-2-.537q-1.5 0-2.5 1t-1 2.5q0 1.3.925 2.763t2.213 2.837t2.65 2.575T12 18.3q.85-.775 2.213-1.975t2.65-2.575t2.212-2.837T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2 .538T12.95 6.75q-.175.25-.425.375T12 7.25t-.525-.125t-.425-.375m.95 4.725"
              />
            </svg>
            <p className="font-bold">{likes}</p>
          </div>
          <svg
            className="pb-0.5 pr-1.5 rotate-y-180 hover:cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"
            />
          </svg>
          <svg
            className="ml-1.5 hover:cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
            />
          </svg>
        </div>
        <div className="ml-1">
          <span className="text-sm line-clamp-2">
           {postDesc}
          </span>
          <small className="hover:cursor-pointer">view all comments...</small>
        </div>
      </div>
    </div>
  );
};

export default ThePost;

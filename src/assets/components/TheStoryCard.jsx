const TheStoryCard = ({userName = "Dhina" , id = 22}) => {
 return (
   <div className="flex-col justify-items-center items-center w-20" onClick={() => storyNavigation(id)}>
     <div className="relative w-20 h-20 rounded-full bg-conic/decreasing from-fuchsia-800 to-violet-600 via-yellow-200 p-[3px]">
       <img
         src={`https://static.photos/people/200x200/${id+200}`}
         alt={(userName, "-profile-img")}
         className="rounded-full w-full h-full object-cover hover:cursor-pointer border-[3px] border-white"
       />
     </div>
     <small className="font-semibold hover:cursor-pointer text-center w-17 truncate block">
       {userName}
     </small>
   </div>
 );
}

const storyNavigation = (id) => window.location = "/story/"+id;

export default TheStoryCard 
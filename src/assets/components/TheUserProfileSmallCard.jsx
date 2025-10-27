const TheUserProfileSmCard = (props) => {
     const {id , profileImage , username , userid , caption , btnName = "Follow"} = props
    return (
      <div className="flex items-center mx-2">
        <div className="relative w-12 h-12 rounded-full m-1 p-[3px]">
          <img
            src={profileImage ?? ("https://static.photos/people/200x200/" + id)}
            alt={(username, "-profile-img")}
            className="rounded-full w-full h-full border-[3px] border-white object-cover hover:cursor-pointer"
          />
        </div>
        <div className="*:leading-4">
          <h3 className="font-semibold hover:cursor-pointer">{userid}</h3>
          <small className="pl-0.5 line-clamp-1">{caption}</small>
        </div>
        <span className="text-indigo-900 text-xs ml-auto font-sans font-semibold hover:cursor-pointer">
          {btnName}
        </span>
      </div>
    );
}

export default TheUserProfileSmCard
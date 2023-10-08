import { useContext, useState } from "react";
import SingleImg from "./SingleImg";
import { NavLink } from "react-router-dom";
import { HomeContext } from "../../Pages/Home/Home";

const OurMedia = () => {
    const {media} = useContext(HomeContext)
    const homeMedia = media.slice(0,8)
    const [mediaPhoto, setMediaPhoto] = useState([homeMedia])
    // if(mediaPhoto.length <=1){
    //     setMediaPhoto(homeMedia)
    //     console.log('is true', mediaPhoto.length)
    // }
    

    console.log('media p',mediaPhoto, homeMedia)
    const handleMedia =()=>{
    }
      return (
    <div className="max-w-6xl mx-auto px-8">
      <h2 className=" text-4xl font-bold text-center mt-20 mb-10">Our Media</h2>
      <div className="grid grid-cols-4 gap-5">
        {mediaPhoto?.map((photo, idx) => (
          <SingleImg key={idx} photo={photo}></SingleImg>
        ))}
      </div>

        <NavLink to={"/media"}>

      <button onClick={()=>handleMedia()} className="btn block px-6 my-10 text-white hover:bg-red-500 mx-auto bg-red-600">See All
      </button>
        </NavLink>
    </div>
  );
};

export default OurMedia;

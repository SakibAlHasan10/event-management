import { useContext} from "react";
import SingleImg from "./SingleImg";
import { NavLink } from "react-router-dom";
import { HomeContext } from "../../Pages/Home/Home";
const OurMedia = () => {
  const { media } = useContext(HomeContext);
  return (
    <div className="max-w-6xl mx-auto px-8">
      <h2 className=" text-4xl font-bold text-center mt-20 mb-10">Our Media</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {media?.slice(0, 8).map((photo, idx) => (
          <SingleImg key={idx} photo={photo}></SingleImg>
        ))}
      </div>
      <NavLink to={"/media"}>
        <button
          className="btn block px-6 my-10 text-white hover:bg-red-500 mx-auto bg-red-600"
        >
          See All
        </button>
      </NavLink>
    </div>
  );
};

export default OurMedia;

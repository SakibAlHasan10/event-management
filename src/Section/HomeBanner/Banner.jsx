import Slider from "./Slider/Slider";

const Banner = () => {

  return (
    <div className="relative">
      <div className="">

      <Slider></Slider>
      </div>
      <div className="absolute z-10 top-0 md:mt-10  lg:mt-24 ml-10 lg:ml-20 px-5 lg:px-14 pt-5 pb-3 lg:py-10 w-[80vw] lg:w-[50vw]  text-white bg-[#00000043] ">
      <h2 className=" font-extrabold text-4xl lg:text-6xl uppercase text-red-600 ">latest event </h2>
      <h2 className="  text-2xl lg:text-5xl font-semibold uppercase mt-3 mb-3 md:mb-6 "> Tour de Scenic Trails</h2>
      <p>Join us for the annual &apos;Tour de Scenic Trails&apos; bicycle ride, a breathtaking adventure through some of the most picturesque landscapes in the region. Get ready to pedal your way through winding forested paths, along tranquil riversides, and past charming villages nestled in the hills.</p>
      <button className="btn border-2 border-red-600 mb-4 md:mt-8 px-5 py-2 bg-red-600 text-white hover:bg-[#ffffff00] hover:text-red-600 hover:border-red-600">read more</button>
      </div>
    </div>
  );
};

export default Banner;

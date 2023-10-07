import Slider from "./Slider/Slider";

const Banner = () => {
    return (
        <div className={`bg-[url'${<Slider/>}']`}>
            hello
            <Slider></Slider>
        </div>
    );
};

export default Banner;
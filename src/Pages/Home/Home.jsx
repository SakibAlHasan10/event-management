import Banner from "../../Section/HomeBanner/Banner";
import Services from "../Services/Services";
import OurMedia from "../../Section/OurMedia/OurMedia";
import { useLoaderData } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Client from "../../Section/Client/Client";
export const HomeContext = createContext(null)
const Home = () => {
  const services = useLoaderData()
  const [media, setMedia] = useState([])
  useEffect(() => {
    fetch("/ourMedia.json")
      .then((res) => res.json())
      .then((data) => setMedia(data.category));
  }, []);
  const homeValue ={
    media
  }
  return (
    <HomeContext.Provider value={homeValue}>
    <div className="w-full">
      <Banner></Banner>
      <h2 className="text-4xl font-bold text-center max-w-6xl mx-auto px-8 mb-10 mt-20">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 gap-5 max-w-6xl mx-auto px-8">
        {services?.map((service, idx) => (
          <Services key={idx} service={service}></Services>
        ))}
      </div>
      <OurMedia></OurMedia>
      <Client></Client>
    </div>
    </HomeContext.Provider>
  );
};

export default Home;

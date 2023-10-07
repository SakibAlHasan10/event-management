import Banner from "../../Section/HomeBanner/Banner";
import Services from "../Services/Services";
import useApi from "../../ContextApi/useApi";
import OurMedia from "../../Section/OurMedia/OurMedia";
const Home = () => {
  const { ourServices } = useApi();

  return (
    <div className="w-full">
      <Banner></Banner>
      <h2 className="text-4xl font-bold text-center max-w-6xl mx-auto px-8 mb-10 mt-20">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 gap-5 max-w-6xl mx-auto px-8">
        {ourServices?.map((service) => (
          <Services key={service.id} service={service}></Services>
        ))}
      </div>
      <OurMedia></OurMedia>
    </div>
  );
};

export default Home;

import { Link, useParams } from "react-router-dom";
import useApi from "../../ContextApi/useApi";

const ServiceDetails = () => {
  const { id } = useParams();
  const { ourServices } = useApi();
  const service = ourServices.find((ser) => ser.id === +id);
  const { img, name, description, price } = service;
  console.log(id, ourServices, service);
  return (
    <div className="pt-36 bg-slate-200 pb-12">
      <div className="bg-white px-8 py-6  max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold">{name}</h2>
        <img src={img} alt="" className="w-[80%] border mt-8 mb-6" />
        <p className="text-justify pb-5">{description}</p>
        <p className="text-black text-2xl font-bold">${price}.00</p>
        <Link to={"/"}>
          <button className="w-40 mt-7 btn bg-red-600 hover:bg-red-400 text-white">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;

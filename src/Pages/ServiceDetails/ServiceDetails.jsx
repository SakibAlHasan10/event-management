import { useParams } from "react-router-dom";
import useApi from "../../ContextApi/useApi";

const ServiceDetails = () => {
    const {id} = useParams()
    const {ourServices} = useApi()
    const service = ourServices.find(ser => ser.id === +id)
    const {img, name, description, price} = service
    console.log(id, ourServices, service)
    return (
        <div className="mt-20">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
};

export default ServiceDetails;
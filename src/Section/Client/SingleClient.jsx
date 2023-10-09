import PropTypes from 'prop-types'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const SingleClient = ({review}) => {
    const {img, name, description} = review;
    // console.log(review)
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    return (
        <div className="shadow-2xl p-4 rounded-lg" data-aos='fade-down'>
            <p className="px-2 w-full h-32 md:h-40  pt-5 md:pt-2 pb-2  font-bold" data-aos='fade-up'>{description}</p>
            <div className="flex items-center gap-4" data-aos='fade'>
                <img src={img} alt="" className="w-16 h-16 rounded-full" data-aos='fade-down' />
                <p className="text-red-500 font-semibold" data-aos='fade-up' >{name}</p>
            </div>
        </div>
    );
};
SingleClient.propTypes ={
    review: PropTypes.object
}
export default SingleClient;
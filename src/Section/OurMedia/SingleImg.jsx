import PropTypes from 'prop-types'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const SingleImg = ({photo}) => {
    const image = photo.img;
// console.log(photo.img)
useEffect(()=>{
    AOS.init({duration:3000});
},[])
    return (
        <div >
            <img src={image} alt="" className="w-full hover: cursor-pointer h-48" data-aos='flip-down'  />
        </div>
    );
};
SingleImg.propTypes ={
    photo: PropTypes.object
}
export default SingleImg;
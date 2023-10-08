import PropTypes from 'prop-types'
const SingleImg = ({photo}) => {
    const image = photo.img;
// console.log(photo.img)
    return (
        <div>
            <img src={image} alt="" className="w-full hover: cursor-pointer h-48" />
        </div>
    );
};
SingleImg.propTypes ={
    photo: PropTypes.object
}
export default SingleImg;
import PropTypes from 'prop-types'
const SubMedia = ({ photo }) => {
  const { img } = photo;
//   console.log(photo);
  return (
    <div>
      <img src={img} alt="" className="w-full hover: cursor-pointer h-48" data-aos='flip-up' />
    </div>
  );
};
SubMedia.propTypes={
    photo: PropTypes.object
}
export default SubMedia;

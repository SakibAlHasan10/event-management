import PropTypes from 'prop-types'
const SingleClient = ({review}) => {
    const {img, name, description} = review;
    console.log(review)
    return (
        <div className="shadow-2xl p-4 rounded-lg">
            <p className="p-2 w-full h-40 font-bold">{description}</p>
            <div className="flex items-center gap-4">
                <img src={img} alt="" className="w-16 h-16 rounded-full" />
                <p className="text-red-500 font-semibold">{name}</p>
            </div>
        </div>
    );
};
SingleClient.propTypes ={
    review: PropTypes.object
}
export default SingleClient;
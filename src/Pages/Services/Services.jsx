
const Services = ({service}) => {
    console.log(service)
    const {img, name, price, description } = service
    const desc = description.slice(0,100)
    console.log(desc)
    return (
        <div>
            <div className="bg-white border-2 rounded-xl  ">
                <img src={img} alt="" className="w-full h-52 rounded-t-xl" />
                <div className="px-5 py-3 flex  flex-col">
                <h2 className="text-2xl mb-2 hover:text-red-500  font-semibold">{name}</h2>
                <p className="flex-grow text-base font-normal mb-3">{desc}</p>
                <p className="text-lg  text-red-500 font-semibold mb-4">${price}</p>
                <button className="btn bg-red-600 hover:bg-red-400 text-white">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Services;
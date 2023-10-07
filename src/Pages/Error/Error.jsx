import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex items-center justify-center h-[80vh] text-center">
            <div>
            <h2 className="text-7xl">Oops!!</h2>
            <Link to={'/'}><button className="btn">Back</button></Link>

            </div>
        </div>
    );
};

export default Error;
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
//   console.error(error);
  return (
    <div className="flex items-center justify-center h-[90vh] text-center">
      <div>
        <h2 className="text-7xl font-bold text-black pb-12">Oops!</h2>
        <p className="mb-3">Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to={"/"}>
          <button className="btn mt-6 bg-red-500 text-white hover:btn-error px-10">Back  Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;

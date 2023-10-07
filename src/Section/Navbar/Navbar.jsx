import { Link, NavLink } from "react-router-dom";
import useApi from "../../ContextApi/useApi";

const Navbar = () => {
  const {openModal} = useApi()
  const navPath = ["home", "about", "contact"];
  return (
    <nav className="block border-white/80 bg-white w-full shadow-md border fixed top-0 inset-0 z-10 h-max rounded-none  bg-opacity-80 py-2 px-4 text-white  backdrop-blur-2xl backdrop-saturate-200 lg:px-8">
      <div className="">
        <div className="flex items-center max-w-6xl mx-auto justify-between text-gray-900">
          <div className="flex  items-center">
            {/* logo */}
            <Link
              to={"/"}
              className="mr-4 block cursor-pointer py-1.5 font-sans text-xl font-bold leading-relaxed text-inherit antialiased"
            >
              <img
                src="https://i.ibb.co/4VVf7fn/3925738-13034.jpg"
                alt=""
                className="w-16"
              />
            </Link>
            <div className=" dropdown">
              <button
                className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                data-collapse-target="sticky-navar"
              >
                <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </span>
              </button>
              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box w-52 mt-9 -ml-24">
                {navPath.map((name, idx) => (
                  <li key={idx}>
                    <NavLink
                      to={`/${name}`}
                      className={({ isActive, isPending }) =>
                        isActive ? "active" : isPending ? "pending" : ""
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* menu */}
          <ul className="ml-auto mr-8 capitalize hidden items-center gap-6 lg:flex">
            {navPath.map((name, idx) => (
              <li key={idx}>
                <NavLink
                  to={`/${name}`}
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* login button */}
          <button
            className="middle none center rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
            type="button"
            data-ripple-light="true"
          >
            <Link to={'/login'} onClick={openModal}>Login</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

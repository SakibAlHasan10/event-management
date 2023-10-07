import { FaInstagramSquare, FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-white  text-black">
      <div className="max-w-6xl mx-auto px-8 w-full">
        <div className="flex justify-between items-center w-full">
          <aside className="">
            <img
              src={"https://i.ibb.co/4VVf7fn/3925738-13034.jpg"}
              alt=""
              className="w-20"
            />
          </aside>
          
          <nav className="flex text-2xl gap-4 md:justify-self-end">
            <Link className="text-4xl">
              <FaTwitterSquare />
            </Link>
            <Link className="text-4xl">
              <FaFacebookSquare />
            </Link>
            <Link className="text-4xl">
              <FaInstagramSquare />
            </Link>
          </nav>
        </div>
        <aside className="text-center mt-3 mb-6 w-full">
            <p>Copyright © 2023 - All right reserved by OurSports</p>
          </aside>
      </div>
    </footer>
  );
};

export default Footer;

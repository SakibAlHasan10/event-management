import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-yellow-50 text-neutral">
        <aside>
          <img
            src={"https://i.ibb.co/4VVf7fn/3925738-13034.jpg"}
            alt=""
            className="w-20"
          />
          <p className="text-2xl font-bold pb-1">Our Sports.</p>
          <p className="font-bold">Providing reliable tech since 1992</p>
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
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
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

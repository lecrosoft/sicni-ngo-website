import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../assets/logoTransparent.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="px-5 py-10 text-white bg-gray-900 md:px-20">
      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-3">
        {/* Brand Section */}
        <div className="text-left md:text-left ">
          {/* <h2 className="text-3xl font-bold text-secondary">
            Social Impact Catalyst Network Initiative
          </h2> */}
          <div className="brand">
            <img
              src={logo}
              alt="Logo"
              className="h-[70px] w-[210px] object-cover "
              style={{ marginLeft: "-2.7rem" }}
            />
          </div>
          <p className="mt-3 text-gray-400">
            Social Impact Catalyst Network Initiative (SICNI), was founded with
            the aim to identify, develop, and support the next generation of
            African leaders who have the potential to drive positive change and
            development in their communities and countries
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-text-left">
          <h3 className="mb-3 text-xl font-semibold text-secondary">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link className="transition hover:text-white" to={"/"}>
                Home
              </Link>
            </li>

            <li>
              <Link className="transition hover:text-white" to={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-white" to={"/causes"}>
                Causes
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-white" to={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media & Newsletter */}
        <div className="text-left md:text-left">
          <h3 className="mb-3 text-xl font-semibold text-secondary">
            Follow Us
          </h3>
          <div className="flex space-x-4 text-left md:text-left">
            <a href="#" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon">
              <FaLinkedinIn />
            </a>
          </div>

          {/* Newsletter */}
          <div className="mt-5">
            <h3 className="mb-3 text-xl font-semibold text-secondary">
              Newsletter
            </h3>
            <form className="flex items-center justify-center md:justify-start">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 text-black rounded-l-md focus:outline-none"
              />
              <button className="px-4 py-2 transition bg-secondary rounded-r-md hover:bg-white hover:text-secondary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} Social Impact Catalyst Network
        Initiative. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

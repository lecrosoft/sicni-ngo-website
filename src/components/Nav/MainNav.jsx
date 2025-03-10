import { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Data } from "./Data";
import { GlowButton } from "../Button/Button.style";
import logo from "../../assets/logoTransparent.png";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../AuthForm/AuthContext";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext); // Get user state & logout function
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(navigate); // Pass the navigate function to logout
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full bg-white shadow-md shadow-gray-300 h-[10vh] p-10 px-8 justify-between items-center">
      <div className="container flex items-center justify-between p-4 mx-auto">
        {/* Logo */}
        <Link className="brand" to={"/"}>
          <img
            src={logo}
            alt="Logo"
            className="h-[150px] w-[310px] object-cover ml-[-3.3rem] md:ml-[-2rem]"
          />
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="z-50 text-gray-700 lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </motion.div>
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex items-center gap-8 ${
            isOpen
              ? "fixed top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center gap-6 transition-transform duration-300 ease-in-out"
              : "hidden lg:flex"
          }`}
        >
          {Data.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className="text-lg text-gray-800 transition hover:text-red-500"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item.title}
              </NavLink>
            </li>
          ))}

          {user ? (
            // Dropdown for logged-in user
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 text-white rounded-lg bg-primary">
                <FaUserCircle size={20} />
                <span>{user.firstname}</span>
              </button>
              <ul className="absolute hidden w-40 mt-2 text-black bg-white rounded-lg shadow-md group-hover:block">
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link to={`/profile/${user.id}`}>Profile</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link to="/jobs">My Jobs</Link>
                </li>
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-red-500 hover:text-white"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          ) : (
            <GlowButton>
              <Link to={"/auth"} className="mt-4 lg:mt-0">
                Login
              </Link>
            </GlowButton>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;

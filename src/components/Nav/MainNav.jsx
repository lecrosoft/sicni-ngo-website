import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Data } from "./Data";
import { StyledMainNav } from "./MainNav.style";
import { GlowButton } from "../Button/Button.style";
import logo from "../../assets/logo.jpg";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledMainNav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="container flex items-center justify-between p-4 mx-auto">
        {/* Logo */}
        <div className="brand">
          <img
            src={logo}
            alt="Logo"
            className="h-[70px] w-[210px] object-cover ml-[-3.3rem] md:ml-[-2rem]"
          />
        </div>

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

          <GlowButton className="mt-4 lg:mt-0">Donate</GlowButton>
        </ul>
      </div>
    </StyledMainNav>
  );
};

export default MainNav;

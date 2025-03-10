import { FancyButton } from "../Button/Button.style";
import {
  StyledH3,
  StyledParagraph,
} from "../GeneralStyles/Headings/Headings.styles";
import Employee from "../../assets/afro-man-using-tablet.png";
import Boy from "../../assets/boy-using-laptop.png";
import { motion } from "framer-motion";
import { AuthContext } from "../AuthForm/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
// Parent container animation (staggered entrance effect)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

// Animation for each box (smooth entrance)
const boxVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    scale: 1.02, // Subtle lift effect (doesn't affect layout)
    boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.12)", // Soft shadow
    background: "linear-gradient(135deg, #f6f3e6, #e7decb)", // Elegant gradient shift
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const Cta = () => {
  const { user } = useContext(AuthContext); // Get user state & logout function
  const navigate = useNavigate();

  const handleClickCv = () => {
    navigate(`/profile/${user.id}`);
  };
  const handleClickContact = () => {
    navigate(`/contact`);
  };
  return (
    <motion.div
      className="flex justify-center gap-4 p-[2rem] mt-[-2rem] overflow-hidden flex-col md:flex-row"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* EMPLOYERS BOX */}
      <motion.div
        className="flex rounded-md box text-div bg-[#eeebde] w-[100%] md:w-[50%] p-6 relative cursor-pointer transition-all duration-300"
        variants={boxVariants}
        whileHover="hover"
      >
        <div>
          <StyledH3>For Employers</StyledH3>
          <StyledParagraph>
            Find professionals from around the world and across all skills
          </StyledParagraph>
          <FancyButton onClick={handleClickContact}>Contact Us</FancyButton>
        </div>
        <div
          className="img-div w-[50%] bg-cover bg-center hidden md:block"
          style={{ backgroundImage: `url(${Employee})` }}
        ></div>
      </motion.div>

      {/* CANDIDATES BOX */}
      <motion.div
        className="flex rounded-md box text-div bg-[#eeebde] w-[100%] md:w-[50%] p-6 relative cursor-pointer transition-all duration-300"
        variants={boxVariants}
        whileHover="hover"
      >
        <div>
          <StyledH3>For Candidates</StyledH3>
          <StyledParagraph>
            Build your professional profile, find new job opportunities
          </StyledParagraph>
          <FancyButton onClick={handleClickCv}>Upload Your CV</FancyButton>
        </div>
        <div
          className="img-div w-[50%] bg-cover bg-center hidden md:block"
          style={{ backgroundImage: `url(${Boy})` }}
        ></div>
      </motion.div>
    </motion.div>
  );
};

export default Cta;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroBg from "../../assets/whiteImageBg.jpeg";
import sicgroupPics1 from "../../assets/techBoy2.jpeg";
import { FancyButton } from "../Button/Button.style";
import {
  StyledH1,
  StyledParagraph,
  StyledSpan,
} from "../GeneralStyles/Headings/Headings.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const textOptions = [
  "Meet Opportunity",
  "Show Your Skills",
  "Land Your Dream Job",
  "Turn Passion into Career",
];

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      setDisplayText(textOptions[index].slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === textOptions[index].length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
        }, 2000); // Wait before switching text
      }
    }, 100); // Speed of typing effect

    return () => clearInterval(typingInterval);
  }, [index]);

  return (
    <div
      className="flex bg:secondary h-[100vh] justify-between p-[2rem] md:p-[3rem] flex-col md:flex-row gap-8 mb-[4rem] mt-[2.5rem]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="textDiv w-[100%] pt-[2.5rem] md:pt-[4rem] md:w-[60%]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <StyledH1>
          Got Talent? <br></br>
          <StyledSpan>
            <motion.span
              key={displayText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {displayText}
            </motion.span>
          </StyledSpan>
        </StyledH1>
        <StyledParagraph>
          Connecting top creative minds with the best opportunities. At Next
          Best Creative Hot Bed, we bring you verified, fresh job listings
          straight from recruiters and employers—designed to fuel your career
          growth and ignite your passion.
        </StyledParagraph>

        <div className="flex flex-col gap-3 buttonDiv md:flex-row">
          <input
            type="text"
            placeholder="Enter key word"
            className="p-3 rounded-[0.4rem] border-2 border-primary "
          />

          <select className="p-3 rounded-[0.4rem] border-2 border-primary">
            <option value="">Select Job Type</option>
            <option value="">Remote</option>
            <option value="">Hybrid</option>
          </select>
          <FancyButton>
            {" "}
            <FontAwesomeIcon icon={faMagnifyingGlass} /> Find a job
          </FancyButton>
        </div>
      </motion.div>

      <motion.div
        className="imgDiv w-[100%] md:w-[50%] flex items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={sicgroupPics1}
          alt="hero bg"
          className="h-[80%] w-[100%] md:w-[100%] rounded-[3rem] object-cover"
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
          }}
        />
      </motion.div>
    </div>
  );
};

export default Hero;

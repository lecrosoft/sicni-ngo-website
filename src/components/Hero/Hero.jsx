import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroBg from "../../assets/whiteImageBg.jpeg";
import sicgroupPics1 from "../../assets/sicgrouppics1.jpg";
import { FancyButton } from "../Button/Button.style";
import {
  StyledH1,
  StyledParagraph,
  StyledSpan,
} from "../GeneralStyles/Headings/Headings.styles";

const textOptions = [
  "Transform Africa",
  "Empower Leaders",
  "Drive Change",
  "Inspire the Future",
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
        className="textDiv w-[100%] pt-[2.5rem] md:pt-[4rem] md:w-[50%]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <StyledH1>
          Join the Movement:{" "}
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
          Africa’s future depends on strong, ethical, and visionary leaders. At
          Social Impact Catalyst Network Initiative (SICNI), we empower the next
          generation with the skills, knowledge, and support they need to drive
          positive change in their communities. Join us in shaping a better
          tomorrow.
        </StyledParagraph>

        <div className="buttonDiv">
          <FancyButton>Donate</FancyButton>
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

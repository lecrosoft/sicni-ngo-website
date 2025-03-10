import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import heroBg from "../../assets/whiteImageBg.jpeg";
import { FancyButton } from "../Button/Button.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  StyledH1,
  StyledParagraph,
  //   StyledSpan,
} from "../GeneralStyles/Headings/Headings.styles";

const textOptions = [
  "Transform Africa",
  "Empower Leaders",
  "Drive Change",
  "Inspire the Future",
];

const BioHero = ({ card }) => {
  //   const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    let typingInterval = setInterval(() => {
      //   setDisplayText(textOptions[index].slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === textOptions[index].length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [index]);

  return (
    <div
      className="flex bg:secondary h-auto justify-between p-[2rem] md:p-[3rem] flex-col md:flex-row gap-8  mt-[2.5rem]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="imgDiv w-[100%] md:w-[50%] h-[50%] flex items-center justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={card?.image || heroBg}
          alt={card?.name || "Hero Background"}
          className="h-[300px] md:h-[500px] w-[100%] md:w-[100%] rounded-[3rem] object-center mt-[4rem]"
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
          }}
        />
      </motion.div>
      <motion.div
        className="textDiv w-[100%] pt-[2.5rem] md:pt-[4rem] md:w-[50%]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <StyledH1>
          {card?.name || "Unknown"}
          {/* <StyledSpan>
            <motion.span
              key={displayText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {displayText}
            </motion.span>
          </StyledSpan> */}
        </StyledH1>
        <StyledParagraph>
          {card?.description || "No bio available."}
        </StyledParagraph>

        <div className="buttonDiv">
          <FancyButton
            as="a"
            href={`mailto:${card.email}`}
            // className="flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" /> Email
          </FancyButton>
        </div>
      </motion.div>
    </div>
  );
};

// Prop validation
BioHero.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    bio: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    email: PropTypes.string,
  }),
};

// Default props to prevent errors if props are missing
BioHero.defaultProps = {
  card: {
    name: "Default Name",
    description: "Default bio description.",
    image: heroBg, // Fallback image
  },
};

export default BioHero;

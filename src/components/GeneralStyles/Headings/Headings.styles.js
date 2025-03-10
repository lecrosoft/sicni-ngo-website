import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledH1 = styled(motion.h1)`
  font-size: 55px;
  font-weight: bold;
  font-family: "inter, sans-serif, system-ui";
  line-height: 1.375;

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    text-align: left;
  }
`;

export const StyledH2 = styled(motion.h2)`
  font-size: 25px;
  font-weight: bold;
  line-height: 1.375;
  font-family: "Poppins", sans-serif;
`;

export const StyledH3 = styled(motion.h3)`
  font-size: 20px;
  font-weight: bold;
  line-height: 1.375;
  font-family: "Poppins", sans-serif;
`;

export const StyledSpan = styled(StyledH1)`
  padding: 0 16px;
  font-size: 45px;
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
  display: inline-block;
  --tw-skew-x: -12deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-bg-opacity: 1;
  padding-left: 1rem;
  padding-right: 1rem;
  --tw-text-opacity: 1;
  color: rgb(247 250 252 / var(--tw-text-opacity));
`;

export const StyledParagraph = styled(motion.p)`
  color: #718096;
  margin: 1.25rem 0;
  font-size: 16px;
  font-weight: 500;
  color: rgb(113 128 150 / var(--tw-text-opacity));
  white-space: pre-line;
  line-height: 1.8; /* Adjust for better readability */
  margin-bottom: 1.5rem; /* Adds spacing between paragraphs */
`;

export const MoreDetailsLink = styled(StyledParagraph)`
  color: ${(props) => props.theme.light.secondary};
  cursor: pointer;
`;

export const StyledH2Colored = styled(StyledH2)`
  color: ${(props) => props.theme.light.secondary};
  font-size: 15px;
  font-weight: 400;
`;

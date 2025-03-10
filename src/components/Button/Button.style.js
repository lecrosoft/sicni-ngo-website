import styled, { keyframes } from "styled-components";

// Keyframe animations
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledButton = styled.button`
  color: ${(props) => (props.variant === "outline" ? "red" : "white")};
  /* background-color: ${(props) =>
    props.variant === "outline" ? "green" : "red"}; */
  transition: 0.5s all ease-in-out;
  padding: 0.7rem 2.5rem;
  outline: none;
  border: none;
  text-align: center;
  border-radius: 0.4rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: #4798e9;
    transform: scale(1.1);
  }
`;

// Fancy Button with CRAZY hover effects
export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #aa30b8 0%, #aa30b8 100%);
  /* transform: skew(-5deg, -5deg); */
  position: relative;
  transition: 0.4s ease-in-out alternate infinite;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    top: 0;
    left: 0;
    transform: scale(1.2);
    opacity: 0;
    transition: opacity 0.4s, transform 0.4s;
  }

  &:hover {
    background-image: linear-gradient(to right, #bca125 0%, #aa30b8 100%);
    animation: ${pulse} 0.4s ease-in-out alternate infinite;
    transform: skew(5deg, 5deg) scale(1.1);
  }

  &:hover::before {
    opacity: 1;
    transform: scale(1);
  }
`;

// Button that rotates on hover
export const CrazyRotateButton = styled(StyledButton)`
  background-image: linear-gradient(135deg, #ff007f, #ffba00);
  transition: all 0.4s ease-in-out;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    animation: ${rotate} 1s linear infinite;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  }
`;

// Glow effect button
export const GlowButton = styled(StyledButton)`
  background: linear-gradient(45deg, #aa30b8, #c99dcb);
  box-shadow: 0 0 5px #ff416c, 0 0 25px #bca125;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 20px #bca125, 0 0 40px #ff4b2b;
    transform: scale(1.1);
  }
`;

import styled from "styled-components";
export const StyledButton = styled.button`
  color: ${(props) => (props.variant === "outline" ? "red" : "white")};
  background-color: ${(props) =>
    props.variant === "outline" ? "green" : "red"};
  transition: 0.5s all ease-in-out;
  padding: 0.5rem 1.5rem;
  outline: none;
  border: none;
  text-align: center;
  border-radius: 0.4rem;
  &:hover {
    background-color: #4798e9;
  }
`;

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, red 0%, orange 100%);
  transform: skew(-5deg, -5deg);

  &:hover {
    background-image: linear-gradient(to right, orange 0%, red 100%);
  }
`;

export const DarkButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.dark.primary};
`;

export const GiveButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.dark.secondary};
`;
export const GiveButtonLong = styled(StyledButton)`
  background-color: ${(props) => props.theme.dark.secondary};
  width: 100%;
`;
export const GetStartedButton = styled(StyledButton)`
  background-color: #fdf0dd;
 
`;

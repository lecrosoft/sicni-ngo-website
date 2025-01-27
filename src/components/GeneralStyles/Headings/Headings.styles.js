import styled from "styled-components";

export const StyledH1 = styled.h1`
  font-size: 55px;
  font-weight: bold;
  font-weight: 900;
  line-height: 1.375;

  font-family: "inter,sans-serif,system-ui";
`;
export const StyledH2 = styled.h2`
  font-size: 25px;
  font-weight: bold;
  line-height: 1.375;
  font-family: "Poppins", sans-serif;
`;
export const StyledH3 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  line-height: 1.375;
  font-family: "Poppins", sans-serif;
`;

export const StyledSpan = styled(StyledH1)`
  padding: 0, 16px;
  background-color: ${(props) => props.theme.dark.secondary};
  color: ${(props) => props.theme.dark.text};
  display: inline-block;
  --tw-skew-x: -12deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-bg-opacity: 1;
  /* background-color: rgb(100 21 255 / var(--tw-bg-opacity)); */
  padding-left: 1rem;
  padding-right: 1rem;
  --tw-text-opacity: 1;
  color: rgb(247 250 252 / var(--tw-text-opacity));
`;

export const StyledParagraph = styled.p`
  color: #718096;
  margin: 20px, 0;
  font-size: 16px;
  margin: 1.25rem 0;
  max-width: 32rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgb(113 128 150 / var(--tw-text-opacity));
`;
export const MoreDetailsLink = styled(StyledParagraph)`
  color: ${(props) => props.theme.light.secondary};
`;

export const StyledH2Colored = styled(StyledH2)`
  color: ${(props) => props.theme.light.secondary};
  font-size: 15px;
  font-weight: 400;
`;

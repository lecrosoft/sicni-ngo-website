import styled from "styled-components";
export const StyledMainNav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.light.primary};
  height: 10vh;
  padding: 2.5rem 2rem;
  align-items: center;
  box-shadow: 0 2px 5px #ccc;
  /* padding: 0;
  margin: 0; */
`;

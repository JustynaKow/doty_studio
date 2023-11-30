import styled from "styled-components";

export const StyledNavigation = styled.nav`
  position: fixed;
  width: 100%;
  padding: 30px 20px;
  font-size: 2.5rem;
  font-weight: 100;
  transition:
    background-color 0.3s,
    color 0.3s,
    border-bottom 0.3s;
  transition:
    background-color 0.3s,
    color 0.3s,
    border-bottom 0.3s;
  background-color: ${({ scrolled }) =>
    scrolled ? "rgba(255, 255, 255, 0.5)" : "transparent"};
  color: ${({ scrolled }) => (scrolled ? "black" : "white")};
  border-bottom: ${({ scrolled }) =>
    scrolled ? "1px solid rgba(0, 0, 0, 0.1)" : "1px solid white"};
`;

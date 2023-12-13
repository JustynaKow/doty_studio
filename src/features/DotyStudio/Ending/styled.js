import styled from "styled-components";
import background_end from "../../../images/ending.png";

export const StyledEnding = styled.section`
  height: 400px;
  padding: 0;
  background: center / cover no-repeat url(${background_end});
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 200px;
  }
`;

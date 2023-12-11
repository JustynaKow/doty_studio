import styled from "styled-components";
import background_dark from "../../../images/background_dark.png";

export const StyledAboutUs = styled.section`
  text-transform: uppercase;
  padding: 0;
`;

export const Wrapper = styled.div`
  background: center / contain no-repeat url(${background_dark});
  background-size: 110%;
  padding: 70px 50px;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 20px 8px;
    background-size: 110% 100%;
  }
`;

export const Title = styled.h2`
  margin-left: 0;
`;

export const Container = styled.div`
  padding: 20px 50px;
  max-width: 700px;
  line-height: 1.5rem;
  margin: 0 auto;
`;

export const Paragraph = styled.p`
  font-weight: 300;
`;

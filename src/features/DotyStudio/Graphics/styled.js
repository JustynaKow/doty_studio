import styled from "styled-components";

export const StyledGraphic = styled.section`
  text-align: left;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.brown};
`;

export const Heading = styled.h2`
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    text-align: center;
  }
`;

export const Subheading = styled.h3`
  font-size: 2.5rem;
  font-weight: 200;
  margin-top: 0;
  margin-bottom: 60px;
  margin-left: 70px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    margin-left: 0;
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  margin-top: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    flex-wrap: wrap;
  }
`;

export const Element = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.color.white};
  width: 350px;
  height: 250px;
  gap: 20px;
  padding: 10px;
`;

export const Subtitle = styled.h4`
  font-weight: 200;
  padding: 0 10px;
  font-size: 0.75rem;
  max-width: 300px;
`;

export const Title = styled.h3`
  font-weight: 300;
  padding: 0 10px;
  font-size: 1.5rem;
`;

export const Paragraph = styled.p`
  margin-left: 70px;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    margin-left: 0;
    text-align: center;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: center 40%;
`;
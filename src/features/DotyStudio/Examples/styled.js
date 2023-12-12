import styled from "styled-components";

export const StyledExamples = styled.section`
  text-align: left;
  text-transform: uppercase;
`;

export const Heading = styled.h2`
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    flex-wrap: wrap;
  }
`;

export const Element = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.color.brown};
  width: 350px;
  gap: 10px;
`;

export const Subtitle = styled.h4`
  font-weight: 200;
  padding: 0 10px;
  font-size: 0.75rem;
`;

export const Title = styled.h3`
  font-weight: 300;
  padding: 0 10px;
  font-size: 1.5rem;
`;

export const Link = styled.a`
  max-width: 500px;
  text-align: right;
  text-decoration: none;
`;

export const Arrow = styled.p`
  color: grey;
  font-size: 2rem;
  margin: 0;
`;

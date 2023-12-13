import styled from "styled-components";

export const StyledOffer = styled.section`
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.brown};
`;

export const Title = styled.h2`
  margin-left: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    flex-wrap: wrap;
  }
`;

export const Element = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid ${({ theme }) => theme.color.white};
`;

export const Images = styled.img`
  width: 500px;
  height: 350px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 300px;
    max-height: 200px;
  }
`;

export const Subtitle = styled.h3`
  font-weight: 300;
  padding: 20px 10px;
  font-size: 1.5rem;
`;

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.color.white};
  width: 350px;
  gap: 10px;
`;
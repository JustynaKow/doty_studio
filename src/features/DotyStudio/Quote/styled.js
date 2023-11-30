import styled from "styled-components";

export const StyledQuote = styled.section`
  margin-left: 70px;
  text-align: left;
  padding: 40px 50px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    margin-left: 0;
    padding: 10px 8px;
    text-align: center;
  }
`;

export const Quotation = styled.p`
  font-size: 5rem;
  max-width: 800px;
  text-transform: uppercase;
  font-weight: 200;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 3rem;
  }
`;

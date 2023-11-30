import styled from "styled-components";

export const StyledReason = styled.section`
  text-align: left;
  background-color: ${({ theme }) => theme.color.brown};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  line-height: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    margin-left: 0;
    flex-wrap: wrap;
  }
`;

export const Container = styled.div`
  max-width: 470px;
`;

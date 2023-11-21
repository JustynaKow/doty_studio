import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  color: ${({ theme }) => theme.color.white};
  font-size: 1.2rem;
  text-transform: uppercase;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const Object = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Icon = styled.img`
  margin: 10px 20px;
`;

export const Hyperlink = styled.a`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: smaller;
  }
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  margin-top: 20px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    align-self: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 10px;
  margin-right: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0px;
  }
`;

export const Element = styled.div`
  display: flex;
`;

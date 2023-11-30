import styled from "styled-components";

export const Wrapper = styled.footer`
  background: ${({ theme }) => theme.color.brown};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Card = styled.img`
  width: 300px;
`;

export const Object = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-weight: 100;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
`;

export const Media = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;

export const Title = styled.h5`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
`;

export const Icon = styled.img`
  width: 70px;
  height: 70px;
  padding: 10px;
`;

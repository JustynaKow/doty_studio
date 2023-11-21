import styled from "styled-components";
import header_background from "../../../images/header_background.jpg";

export const StyledHeader = styled.header`
  height: 100vh;
  background: linear-gradient(rgba(30, 28, 24, 0.6), rgba(30, 28, 24, 0.6)), center / cover no-repeat url(${header_background});
  `;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 85vh;
`;

export const Title = styled.h1`
  font-size: 6rem;
  line-height: 1.3;
  text-align: left;
  margin-left: 120px;
  max-width: 800px;
  color: ${({ theme }) => theme.color.white};
  font-weight: 200;
  letter-spacing: -1px;
`;

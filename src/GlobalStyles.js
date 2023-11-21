import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background: ${({ theme }) => theme.color.white};
        color: ${({ theme }) => theme.color.black};
        word-break: break-word;
        font-family: 'Exo', sans-serif;
        margin: 0 auto;
        padding: 0;
        text-align: center;
    }
`;

import { createGlobalStyle } from "styled-components";
import normalize from "normalize.css";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background: ${({ theme }) => theme.color.lightGrey};
        color: ${({ theme }) => theme.color.brown};
        word-break: break-word;
        font-family: 'Exo', sans-serif;
        margin: 0 auto;
        padding: 0;
        text-align: center;
        font-size: 16px;
    }

    h1 {
        font-size: 6rem;
        line-height: 1.3;

        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 3rem;
        }
    }

    h2 {
        font-size: 4rem;
        font-weight: 200;
        margin-bottom: 60px;
        margin-top: 0;
        margin-left: 70px;

        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 3rem;
        }

        @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
            margin-left: 0;
        }
    }

    section {
        padding: 70px 50px;

        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            padding: 20px 8px;
        }
    }

    p {
        font-weight: 100;
    }
`;

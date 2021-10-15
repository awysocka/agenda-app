import { createGlobalStyle } from 'styled-components';
import '../vendors/normalize.css';

const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
        height: 100%;
        font-size: 62.5%;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        min-height: 100vh;
        ${'' /* display: flex;
        flex-direction: column; */}
        font-family: 'Roboto', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        font-size: 1.6rem;
        font-weight: 400;
        background-color: ${({ theme }) => theme.colors.lightGrey};
        color: ${({ theme }) => theme.colors.darkGrey};
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }

    p {
        line-height: 1.6;
    }
`;

export default GlobalStyle;

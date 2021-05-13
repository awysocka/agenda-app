import { createGlobalStyle } from 'styled-components';
import '../vendors/normalize.css';

const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
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
        font-family: 'Roboto', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        font-size: 1.6rem;
        min-height: 100vh;
        background-color: ${({theme}) => theme.colors.lightGrey};
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style-type: none;
    }
`;

export default GlobalStyle;

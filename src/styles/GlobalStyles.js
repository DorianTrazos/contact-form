import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body{
        font-family: "Karla", serif;
        line-height: 150%;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }

    div{
      margin-bottom: 1rem;
    }


`;

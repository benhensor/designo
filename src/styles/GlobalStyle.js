import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Jost', sans-serif;
    }

    body {
        width: 100%;
        height: 100%;
        min-height: 100vh;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.6rem;
        overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    button {
        cursor: pointer;
        border-radius: 8px;
        border: none;
        text-transform: uppercase;
    }

    input, textarea {
        outline: none;
    }

    img {
        width: 100%;
    }

    h1 {
        font-size: 4.8rem;
        line-height: 4.8rem;
        font-weight: 500;
    }

    h2 {
        font-size: 4rem;
        line-height: 4.8rem;
        font-weight: 500;
        letter-spacing: +0.2rem;
    }

    h3 {
        font-size: 2rem;
        line-height: 2.6em;
        font-weight: 500;
        letter-spacing: +0.5rem;
    }

    span {
        font-weight: 500;
    }

    p {
        font-weight: 400;
    }
`

export default GlobalStyle
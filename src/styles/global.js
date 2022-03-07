import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body {
        background-color: var(--grey-4);
    }
    body, input, button {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
    }

    a, li {
        text-decoration: none;
        list-style: none;
    }
`
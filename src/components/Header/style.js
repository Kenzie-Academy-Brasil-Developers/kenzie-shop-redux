import styled from 'styled-components'

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 4px 6px -5px rgba(0, 0, 0, 1);

    h1 {
        font-size: 15px
    }

    nav {
        button {
            width: 100px;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
    }
`
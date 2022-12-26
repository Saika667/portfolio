import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    :root {
        font-size: 13px;
    }
    * {
      font-family: Montserrat, sans-serif;
    }
    body {
        --color-primary: ${props => props.theme.primary};
        --color-secondary: ${props => props.theme.secondary};
        --color-third:  ${props => props.theme.third};
        --color-fourth: ${props => props.theme.fourth};
        margin: 0;
        min-height: 100vh;
    }
    h2, h3, p {
        margin: 0;
    }
`

function GlobalStyle() {  
    return <StyledGlobalStyle />
}

export default GlobalStyle
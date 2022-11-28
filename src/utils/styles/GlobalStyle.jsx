import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: Montserrat, sans-serif;
    }
    body {
        margin: 0;
        height: 100vh;
    }
    h2, h3, p {
        margin: 0;
    }
`

function GlobalStyle() {  
    return <StyledGlobalStyle />
}

export default GlobalStyle
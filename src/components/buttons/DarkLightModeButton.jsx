import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    font-size: 34px;
    color: ${props => props.theme.primary};

    &:hover {
        color: ${props => props.theme.fourth};
    }
`

function DarkLightModeButton({ currentTheme, setTheme }) {
    return (
      <ButtonContainer onClick={() => currentTheme === 'dark' ? setTheme('light') : setTheme('dark')}>
            {currentTheme === 'light' ? 
                <FontAwesomeIcon icon={faMoon} /> 
                :
                <FontAwesomeIcon icon={faSun} />
            }
      </ButtonContainer>
    )
  }
  
  export default DarkLightModeButton
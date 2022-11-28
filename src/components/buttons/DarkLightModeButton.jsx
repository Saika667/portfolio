import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import colors from './../../utils/styles/colors'

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    font-size: 34px;
    color: ${colors.primary};

    &:hover {
        color: ${colors.fourth};
    }
`

function DarkLightModeButton() {
    return (
      <ButtonContainer>
          <FontAwesomeIcon icon={faMoon} />
      </ButtonContainer>
    )
  }
  
  export default DarkLightModeButton
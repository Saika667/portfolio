import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { darken } from 'polished'

const ButtonContainer = styled.div`
    margin: 8px auto;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.fourth};
    color: ${props => props.theme.primary};
    border-radius: 50%;
    font-size: 16px;
    box-shadow: 0px 0px 7px 2px ${props => darken(0.3, props.theme.primary)};;
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    cursor: pointer;
`

function ArrowButton({isOpenDesc, setOpenDesc}) {
    

    return (
      <ButtonContainer>
        <Button onClick={() => {setOpenDesc(!isOpenDesc)}}>
            { isOpenDesc ? (
                <FontAwesomeIcon icon={faArrowUp} />
                ) : (
                <FontAwesomeIcon icon={faArrowDown} />
            )}
            
        </Button>
      </ButtonContainer>
    )
}
  
export default ArrowButton
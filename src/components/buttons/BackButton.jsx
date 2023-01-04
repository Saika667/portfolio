import styled, { keyframes } from "styled-components"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const moveArrow = keyframes`
    0% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(5px);
    }
    50% {
        transform: translateX(-8px);
    }
    75% {
        transform: translateX(7px);
    }
    100% {
        transform: translateX(0);
    }
`

const ButtonContainer = styled.div`

`

const ButtonLink = styled(Link)`
    display: flex;
    text-decoration: none;
    background-color: #9F496E;
    color: #F2EBE5;
    padding: 10px 15px;
    width: fit-content;
    border-radius: 20px;
    border: 2px solid #9F496E;
    transition: all 350ms;

    &:hover {
        background-color: #F2EBE5;
        color: #9F496E;
        
        & .icon {
            animation: ${moveArrow} 600ms linear;
        }
    }
`

const Text = styled.p`
    padding: 0 0 0 10px;
    text-transform: uppercase;
`

function BackButton() {
    return (
        <ButtonContainer>
            <ButtonLink to="/folio">
                <FontAwesomeIcon icon={faArrowLeft} className="icon"/>
                <Text>Retour</Text>
            </ButtonLink>
        </ButtonContainer>
    )
}

export default BackButton
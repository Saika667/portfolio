import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'

const ButtonContainer = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
`
const ButtonLink = styled(Link)`
    text-decoration: none;
    padding: 11px 23px;
    background-color: ${props => props.theme.fourth};
    color: ${props => props.theme.primary};
    border-radius: 8px;
    font-size: 15px;
    display: flex;
    width: 41px;
    justify-content: space-between;
    transition: all 0.3s;

    :hover {
        background-color: ${props => props.theme.third};
        color: ${props => props.theme.fourth};
        transition: all 0.3s;
    }
`
const Text = styled.p`
    margin: 0;
    font-weight: bold;
`

function DownloadButton() {
  return (
    <ButtonContainer>
        <ButtonLink to="/">
          <FontAwesomeIcon icon={faFileArrowDown} />
          <Text>CV</Text>
        </ButtonLink>
    </ButtonContainer>
  )
}

export default DownloadButton
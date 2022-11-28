import styled from 'styled-components'
import colors from './../../utils/styles/colors'
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
    padding: 15px 30px;
    background-color: ${colors.fourth};
    border-radius: 5px;
    font-size: 20px;
    display: flex;
    width: 55px;
    justify-content: space-between;

    :hover {
        background-color: ${colors.third};
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
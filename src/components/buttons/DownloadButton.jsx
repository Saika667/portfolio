import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import pdfCvDev from "../../assets/CV_dev_09_2023.pdf"
import pdfCvDevAltern from "../../assets/CV_dev_alter_09_2023.pdf"

const ButtonContainer = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
`
const ButtonLink = styled.a`
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
          <ButtonLink href={pdfCvDevAltern} download="cv-soudrain-celine.pdf">
            <FontAwesomeIcon icon={faFileArrowDown} />
            <Text>CV</Text>
          </ButtonLink>
          {/* Décommenter quand recherche de CDI 
          <ButtonLink href={pdfCvDev} download="cv-soudrain-celine.pdf">
            <FontAwesomeIcon icon={faFileArrowDown} />
            <Text>CV</Text>
          </ButtonLink> */}
    </ButtonContainer>
  )
}

export default DownloadButton
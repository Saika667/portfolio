import styled from 'styled-components'
import colors from './../../utils/styles/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = styled.a`
    text-decoration: none;
    background-color: white;
    padding: 10px 20px;
    border-radius: 4px;
    display: flex;
    width: fit-content;
    font-weight: bold;
    color: black;

    &:hover {
        background-color: ${colors.third};
        color: ${colors.fourth};
    }
`
const Text = styled.p`
    padding: 0 0 0 10px;
`

function RedirectButton({url, icon, label}) {
    return (
        <Button href={url}>
            <FontAwesomeIcon icon={icon} />
            <Text>{label}</Text>
        </Button>
    )
  }
  
  export default RedirectButton
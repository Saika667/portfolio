import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = styled.a`
    text-decoration: none;
    background-color: ${props => props.theme.secondary};
    padding: 8px 15px;
    border-radius: 3px;
    display: flex;
    width: fit-content;
    font-weight: bold;
    color: ${props => props.theme.primary};
    transition: all 300ms;

    &:hover {
        background-color: ${props => props.theme.fourth};
        color: ${props => props.theme.primary};
        transition: all 300ms;
    }
`
const Text = styled.p`
    padding: 0 0 0 8px;
`

function RedirectButton({url, icon, label}) {
    return (
        <Button href={url} target="_blank">
            <FontAwesomeIcon icon={icon} />
            <Text>{label}</Text>
        </Button>
    )
  }
  
  export default RedirectButton
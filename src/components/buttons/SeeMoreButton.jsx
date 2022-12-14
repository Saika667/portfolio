import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const ButtonContainer = styled.div`
  margin: 15px auto;
`
const Button = styled.div`
  padding: 8px 15px;
  background-color: ${props => props.theme.primary};
  border-radius: 8px;
  text-align: center;
  font-size: 15px;
  width: 113px;
  margin: auto;
  cursor: pointer;

  & a {
    color: ${props => props.theme.fourth};
    display: flex;
    justify-content: center;
  }
  
  &:hover {
      background-color: ${props => props.theme.fourth};

      & a {
        color: ${props => props.theme.primary};
      } 
  }
`

const ButtonLink = styled(Link)`
  text-decoration: none;
`

const Text = styled.p`
  padding: 0 0 0 8px;
`

function SeeMore({path}) {
    return (
      <ButtonContainer>
        <Button>
          <ButtonLink to={path}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <Text>Voir plus</Text>
          </ButtonLink>
        </Button>
      </ButtonContainer>
    )
}
  
export default SeeMore
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const ButtonContainer = styled.div`
  margin: 20px auto;
`
const Button = styled.div`
  padding: 10px 20px;
  background-color: ${props => props.theme.primary};
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
  width: 150px;
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
  padding: 0 0 0 10px;
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
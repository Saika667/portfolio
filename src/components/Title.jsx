import styled from 'styled-components'
import colors from './colors'

const TitleContainer = styled.div`

`

const Title = styled.h2`
font-size: 25px;
color: ${colors.third};
text-align: center;
margin: 0;
padding: 20px 0;
&:before, &:after {
    content: '{';
    font-size: 40px;
    margin-right: 10px;
}
&:after {
    content: '}';
    margin-left: 10px;
}
`
function Title({label}) {
    return (
      <TitleContainer>
        <Title>{label}</Title>
      </TitleContainer>
    )
}
  
export default Title
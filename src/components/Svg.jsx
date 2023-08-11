import styled from 'styled-components'

const Container = styled.div`
    width: fit-content;  
`

const SvgContainer = styled.div`
  &.filter {
    svg path, svg polygon {
      fill: ${props => props.theme.primary};
    }
  }
  &.folio {
    svg path, svg polygon {
      fill: #F2EBE5;
    }
  }
  &.project {
    svg path, svg polygon {
      fill: #873651;
    }
  }
`
function Svg({image, type}) {
    return (
      <Container className='filter'>
        {type === 'filter' && <SvgContainer className='filter'>{image}</SvgContainer>}
        {type === 'folio' && <SvgContainer className='folio'>{image}</SvgContainer>}
        {type === 'project' && <SvgContainer className='project'>{image}</SvgContainer>}
      </Container>
    )
}
  
export default Svg
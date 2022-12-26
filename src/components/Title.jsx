import styled from 'styled-components'
import { Leaf } from './animates/Column'
import Flower from './animates/Element/Flower'

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const DecorationTitle = styled.div`
  position: relative;
  width: 53px;
  height: 53px;

  &.after {
    transform: rotateY(180deg);
  }
`

const FlowerContainer = styled.div`
  position: absolute;

  &.flower {
    top: 15px;
    left: 11px;
  }
`

const LeafComponent = styled(Leaf)`
  &.leafOne {
    top: 26px;
    left: -11px;
    transform: rotate(-9deg);
  }

  &.leafTwo {
    top: 7px;
    left: -8px;
    transform: rotate(57deg);
  }
`

const TitleComponent = styled.h2`
  font-size: 19px;
  color: ${props => props.theme.third};
  text-align: center;
  margin: 0;
  padding: 15px 0;
`
function Title({label}) {
    return (
      <TitleContainer>
        <DecorationTitle>
          <LeafComponent className='leafOne' />
          <LeafComponent className='leafTwo' />

          <FlowerContainer className='flower'>
            <Flower flowerType={'flowerPinkBorder'} centerColor={'centerWhite'} />
          </FlowerContainer>
    
        </DecorationTitle>

        <TitleComponent>{label}</TitleComponent>

        <DecorationTitle className='after'>
          <LeafComponent className='leafOne' />
          <LeafComponent className='leafTwo' />

          <FlowerContainer className='flower'>
            <Flower flowerType={'flowerBlueBorder'} centerColor={'centerWhite'} />
          </FlowerContainer>
        </DecorationTitle>
      </TitleContainer>
    )
}
  
export default Title
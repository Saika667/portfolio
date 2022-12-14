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
  width: 70px;
  height: 70px;

  &.after {
    transform: rotateY(180deg);
  }
`

const FlowerContainer = styled.div`
  position: absolute;

  &.flower {
    top: 20px;
    left: 15px;
  }
`

const LeafComponent = styled(Leaf)`
  &.leafOne {
    top: 34px;
    left: -15px;
    transform: rotate(-9deg);
  }

  &.leafTwo {
    top: 9px;
    left: -10px;
    transform: rotate(57deg);
  }
`

const TitleComponent = styled.h2`
  font-size: 25px;
  color: ${props => props.theme.third};
  text-align: center;
  margin: 0;
  padding: 20px 0;
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
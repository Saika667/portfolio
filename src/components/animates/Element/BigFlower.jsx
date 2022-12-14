import styled from 'styled-components'
import { darken } from 'polished'

const BigFlowerElement = styled.div`
    position: relative;
    width: 67px;
    height: 70px;
`
const BigFlowerCenter = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.theme.fourth};
    top: 25px;
    left: 23px;
    z-index: 1;
`
const BigFlowerPetalContainer = styled.div`
    position: absolute;
    
    &.bigPetalOne {
        top: 0;
        left: 20px;
    }

    &.bigPetalTwo {
        top: 9px;
        left: 40px;
        transform: rotate(45deg);
    }

    &.bigPetalThree {
        top: 31px;
        left: 41px;
        transform: rotate(120deg);
    }

    &.bigPetalFour {
        top: 40px;
        left: 20px;
        transform: rotate(180deg);
    }

    &.bigPetalFive {
        top: 31px;
        left: 1px;
        transform: rotate(-125deg);
    }

    &.bigPetalSix {
        top: 10px;
        left: 1px;
        transform: rotate(-45deg);
    }
`

const BigFlowerPetal = styled.div`
    width: 25px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props => props.theme.secondary};
    position: relative;

   &:before {
        position: absolute;
        content: '';
        bottom: 0;
        left: 5px;
        width: 15px;
        height: 20px;
        border-radius: 50%;
        background-color: ${props => darken(0.1, props.theme.secondary)};

   }
`

function BigFlower() {

    return (
        <BigFlowerElement>
            <BigFlowerCenter />
            <BigFlowerPetalContainer className='bigPetal bigPetalOne'>
                <BigFlowerPetal />
            </BigFlowerPetalContainer>

            <BigFlowerPetalContainer className='bigPetal bigPetalTwo'>
                <BigFlowerPetal />
            </BigFlowerPetalContainer>

            <BigFlowerPetalContainer className='bigPetal bigPetalThree'>
                <BigFlowerPetal />
            </BigFlowerPetalContainer>

            <BigFlowerPetalContainer className='bigPetal bigPetalFour'>
                <BigFlowerPetal />
            </BigFlowerPetalContainer>

            <BigFlowerPetalContainer className='bigPetal bigPetalFive'>
                <BigFlowerPetal />
            </BigFlowerPetalContainer>

            <BigFlowerPetalContainer className='bigPetal bigPetalSix'>
                <BigFlowerPetal />
            </BigFlowerPetalContainer>
        </BigFlowerElement>
    )
}

export default BigFlower



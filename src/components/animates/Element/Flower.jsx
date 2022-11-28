import styled, { keyframes } from 'styled-components'
import colors from '../../../utils/styles/colors'

const FlowerComp = styled.div`
    width: 33px;
    height: 36px;
    position: relative;

    &.flowerBlue {
        & .petal {
            background-color: ${colors.third};
            border: none;
        }
    }

    &.flowerPink {
        & .petal {
            border: none;
        }
    }

    &.flowerPinkBorder {
        & .petal {
            border: 1px solid ${colors.fourth};
        }
    }
    &.flowerBlueBorder {
        & .petal {         
            border: 1px solid ${colors.fourth};
            background-color: ${colors.third};
        }
    }

    &.flowerWhitePink {
        & .petal {
            background-color: ${colors.fourth};
        }
    }

    &.flowerWhiteBlue {
        & .petal {
            background-color: ${colors.fourth};
        }
    }
`

const FlowerCenter = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    top: 13px;
    left: 9px;
    z-index: 7;
    border-radius: 50%;

    &.centerWhite {
        background-color: ${colors.fourth};
    }

    &.centerPink {
        background-color: ${colors.secondary};
    }

    &.centerBlue {
        background-color: ${colors.third};
    }
`

const FlowerPetal =styled.div`
    position: absolute;
    width: 10px;
    height: 20px;
    background-color: ${colors.secondary};
    border-radius: 50%;

    &.petalOne {
        top: 0;
        left: 9px;
        z-index: 6;
    }

    &.petalTwo {
        top: 3px;
        left: 14px;
        z-index: 5;
        transform: rotate(50deg);
    }

    &.petalThree {
        top: 10px;
        left: 13px;
        z-index: 4;
        transform: rotate(115deg);
    }

    &.petalFour {
        top: 13px;
        left: 7px;
        z-index: 3;
    }

    &.petalFive {
        top: 11px;
        left: 2px;
        z-index: 2;
        transform: rotate(45deg);
    }

    &.petalSix {
        top: 3px;
        left: 3px;
        z-index: 1;
        transform: rotate(119deg);
    }
`

function Flower({flowerType, centerColor}) {

    return (
        <FlowerComp className={flowerType}>
            <FlowerCenter className={centerColor} />
            <FlowerPetal className='petalOne petal'/>
            <FlowerPetal className='petalTwo petal'/>
            <FlowerPetal className='petalThree petal'/>
            <FlowerPetal className='petalFour petal'/>
            <FlowerPetal className='petalFive petal'/>
            <FlowerPetal className='petalSix petal'/>
        </FlowerComp>
    )
}

export default Flower
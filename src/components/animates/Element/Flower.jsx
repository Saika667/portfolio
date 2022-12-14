import styled from 'styled-components'

const FlowerComp = styled.div`
    width: 33px;
    height: 36px;
    position: relative;

    &.flowerBlue {
        & .petal {
            background-color: ${props => props.theme.third};
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
            border: 1px solid ${props => props.theme.fourth};
        }
    }
    &.flowerBlueBorder {
        & .petal {         
            border: 1px solid ${props => props.theme.fourth};
            background-color: ${props => props.theme.third};
        }
    }

    &.flowerWhitePink {
        & .petal {
            background-color: ${props => props.theme.fourth};
        }
    }

    &.flowerWhiteBlue {
        & .petal {
            background-color: ${props => props.theme.fourth};
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
        background-color: ${props => props.theme.fourth};
    }

    &.centerPink {
        background-color: ${props => props.theme.secondary};
    }

    &.centerBlue {
        background-color: ${props => props.theme.third};
    }
`

const FlowerPetal =styled.div`
    position: absolute;
    width: 10px;
    height: 20px;
    background-color: ${props => props.theme.secondary};
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
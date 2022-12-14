import styled, { keyframes } from 'styled-components'
import { lighten } from 'polished'

function animationDelay(bubbleNumber, delay, className) {
    let style = '';
    for(let i = 0; i < bubbleNumber; i++) {
        style += `
            & .${className}:nth-child(${i + 1}n) {
                animation-delay: ${delay * i}ms;
            }
        `
    }
    return style;
}

const bubbleRight = keyframes`
    0% {
        transform: translateX(0) translateY(0);
        opacity: 1;
    }
    25% {
        transform: translateX(20px) translateY(-60px);
    }
    50% {
        transform: translateX(-10px) translateY(-90px);
    }
    75% {
        transform: translateX(-5px) translateY(-130px);
    }
    90% {
        transform: translateX(-10px) translateY(-160px);
        opacity: 1;
    }
    100% {
        transform: translateX(-20px) translateY(-180px);
        opacity: 0;
    }
`

const bubbleLeft = keyframes`
    0% {
        transform: translateX(0) translateY(0);
        opacity: 1;
    }
    25% {
        transform: translateX(20px) translateY(-60px);
    }
    50% {
        transform: translateX(-10px) translateY(-90px);
    }
    75% {
        transform: translateX(10px) translateY(-130px);
    }
    90% {
        transform: translateX(5px) translateY(-150px);
        opacity: 1;
    }
    100% {
        transform: translateX(15px) translateY(-170px);
        opacity: 0;
    }
`

const bubbleCenter = keyframes`
    0% {
        transform: translateX(0) translateY(0);
        opacity: 1;
    }
    25% {
        transform: translateX(20px) translateY(-80px);
    }
    50% {
        transform: translateX(-10px) translateY(-160px);
    }
    75% {
        transform: translateX(5px) translateY(-230px);
    }
    90% {
        transform: translateX(-15px) translateY(-290px);
        opacity: 1;
    }
    100% {
        transform: translateX(10px) translateY(-350px);
        opacity: 0;
    }
`

const flameMove = keyframes`
    0% {
        transform-origin: 50% 100%;
        transform: rotate(0);
    }
    25% {
        transform: rotate(10deg);
    }
    50% {
        transform: rotate(-20deg);
    }
    75% {
        transform: rotate(5deg);
    }
    90% {
        transform: rotate(-10deg);
    }
    100% {
        transform: rotate(0);
    }
`

/*-----------------------------Globale --------------------------------*/
const LabContainer = styled.div `
    width: 250px;
    height: 500px;
    position: relative;
    overflow: hidden;
    ${animationDelay(8, 900, 'right')}
    ${animationDelay(8, 300, 'center')}
    ${animationDelay(8, 800, 'left')}
`
/*-----------------------------FIN Globale --------------------------------*/
/*-----------------------------Erlenmeyer --------------------------------*/
const ErlenmeyerContainer = styled.div`
    width: 230px;
    height: 345px;
    position: absolute;
    bottom: 50px;
    right: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ErlenmeyerBodyTop = styled.div`
    width: 65px;
    height: 100px;
    border-left: 4px ${props => props.theme.secondary} solid;
    border-right: 4px ${props => props.theme.secondary} solid;
    position: relative;

    &:after {
        content: '';
        width: 3px;
        height: 10px;
        transform: skewX(-25deg);
        position: absolute;
        top: -8px;
        right: -5px;
        background-color: ${props => props.theme.secondary};
    }

    &:before {
        content: '';
        width: 3px;
        height: 10px;
        transform: skewX(25deg);
        position: absolute;
        top: -8px;
        left: -5px;
        background-color: ${props => props.theme.secondary};
    }
`

const ErlenmeyerBodyBottom = styled.div`
    width: 210px;
    height: 230px;
    position: relative;
    border: 4px solid ${props => props.theme.secondary};
    border-top: none;
    border-radius: 10px;

    &:before, &:after {
        content: '';
        display: block;
        position: absolute;      
        bottom: 7px;
        box-sizing: border-box;
        background-color: ${props => props.theme.primary};
        z-index: 2;
        height: 225px;
    }
    &:after {
        width: 82px;
        right: -46px;
        transform: skewX(18deg);
        border-left: 4px ${props => props.theme.secondary} solid;
    }

    &:before {
        width: 84px;
        left: -49px;
        transform: skewX(-18deg);
        border-right: 4px ${props => props.theme.secondary} solid;
    }
`

const SolutionErlenmeyer = styled.div`
    width: 211px;
    height: 100px;
    background-color: ${props => props.theme.third};
    z-index: 1;
    border-radius: 7px;
    position: absolute;
    bottom: -1px;
`
/*-----------------------------FIN Erlenmeyer --------------------------------*/
/*-----------------------------Bulle --------------------------------*/
const BubbleContainer = styled.div`
    position: absolute;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.third};

    &.bubble {
        z-index: 4;
    }
    
    &.left {
        left: 70px;
        top: 398px;
        animation: ${bubbleLeft} 2000ms linear infinite;
    }

    &.center {
        left: 110px;
        top: 380px;
        animation: ${bubbleCenter} 3000ms linear infinite;
    }

    &.right {
        left: 150px;
        top: 398px;
        animation: ${bubbleRight} 2000ms linear infinite;
        
    }
`

const Bubble = styled.div.attrs(props => ({
    innerSize: props.innerSize ? props.innerSize + 'px' : '12px',
    outerSize: props.outerSize ? props.outerSize + 'px' : '30px'
}))`
    border-radius: 50%;
    width: ${props => props.outerSize};
    height: ${props => props.outerSize};
    position: relative;
    background-color: ${props => props.theme.third};
    opacity: 0.5;

    &:before {
        content: '';
        position: absolute;
        top: 2px;
        right: 5px;
        width: ${props => props.innerSize};
        height: ${props => props.innerSize};
        background-color: ${props => lighten(0.4, props.theme.third)};
        opacity: 0.8;
        border-radius: 50%;
    }
`
/*-----------------------------FIN Bulle --------------------------------*/
/*-----------------------------Flamme --------------------------------*/
const FireContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 150px;
    height: 70px;
    bottom: 0;
    left: 50px;

`
const Flame = styled.div`
    position: relative;
    height: 50px;
    width: 20px;
    overflow: hidden;

    &.one {
        animation: ${flameMove} 1000ms linear infinite;
    }

    &.two {
        animation: ${flameMove} 1000ms 50ms linear reverse infinite;
    }

    &.three {
        animation: ${flameMove} 1000ms 200ms linear infinite;
    }
    
`

const TopFlame = styled.div`
    background-color: yellow;
    width: 20px;
    height: 30px;
    position: absolute;
    bottom: 10px;

    &:before, &:after {
        content: '';
        position: absolute;
        width: 10px;
        height: 40px;
        background-color: ${props => props.theme.primary};
    }

    &:before {
        transform: rotate(20deg);
        left: -6px;
        top: -4px;
    }

    &:after {
        transform: rotate(-20deg);
        right: -6px;
        top: -5px;
    }
`

const BottomFlame = styled.div`
    background-color: yellow;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: 0;

    &:after {
        content: '';
        position: absolute;
        top: 7px;
        left: 5px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: red;
    }
`

const TopFlameRed = styled.div`
    position: absolute;
    width: 10px;
    height: 15px;
    bottom: 8px;
    left: 5px;
    z-index: 1;
    background-color: red;

    &:before, &:after {
        content: '';
        position: absolute;
        width: 6px;
        height: 18px;
        background-color: yellow;
    }

    &:before {
        transform: rotate(20deg);
        left: -3px;
        top: -2px;
    }

    &:after {
        transform: rotate(-20deg);
        right: -3px;
        top: -2px;
    }

`
/*-----------------------------FIN Flamme --------------------------------*/

function Erlenmeyer() {
    return (
        <LabContainer>
            <BubbleContainer className='bubble left'>
                <Bubble />
            </BubbleContainer>
            <BubbleContainer className='bubble left'>
                <Bubble outerSize={20} innerSize={8} />
            </BubbleContainer>
            <BubbleContainer className='bubble left'>
                <Bubble outerSize={15} innerSize={8} />
            </BubbleContainer>
            <BubbleContainer className='bubble left'>
                <Bubble outerSize={35} innerSize={15} />
            </BubbleContainer>
            <BubbleContainer className='bubble left'>
                <Bubble outerSize={25} innerSize={10} />
            </BubbleContainer>
            <BubbleContainer className='bubble left'>
                <Bubble outerSize={13} innerSize={5} />
            </BubbleContainer>
            <BubbleContainer className='bubble left'>
                <Bubble outerSize={17} innerSize={8} />
            </BubbleContainer>
            <BubbleContainer className='bubble left'>
                <Bubble outerSize={28} innerSize={11} />
            </BubbleContainer>

            <BubbleContainer className='bubble center'>
                <Bubble />
            </BubbleContainer>
            <BubbleContainer className='bubble center'>
                <Bubble outerSize={20} innerSize={8} />
            </BubbleContainer>
            <BubbleContainer className='bubble center'>
                <Bubble outerSize={15} innerSize={8} />
            </BubbleContainer>
            <BubbleContainer className='bubble center'>
                <Bubble outerSize={13} innerSize={5} />
            </BubbleContainer>
            <BubbleContainer className='bubble center'>
                <Bubble outerSize={25} innerSize={10} />
            </BubbleContainer>
            <BubbleContainer className='bubble center'>
                <Bubble outerSize={35} innerSize={15} />
            </BubbleContainer>
            <BubbleContainer className='bubble center'>
                <Bubble outerSize={17} innerSize={8} />
            </BubbleContainer>
            <BubbleContainer className='bubble center'>
                <Bubble outerSize={28} innerSize={11} />
            </BubbleContainer>

            <BubbleContainer className='bubble right'>
                <Bubble outerSize={28} innerSize={11} />
            </BubbleContainer>
            <BubbleContainer className='bubble right'>
                <Bubble outerSize={17} innerSize={8} />
            </BubbleContainer>
            <BubbleContainer className='bubble right'>
                <Bubble outerSize={13} innerSize={5} />
            </BubbleContainer>
            <BubbleContainer className='bubble right'>
                <Bubble outerSize={25} innerSize={10} />
            </BubbleContainer>
            <BubbleContainer className='bubble right'>
                <Bubble outerSize={35} innerSize={15} />
            </BubbleContainer>
            <BubbleContainer className='bubble right'>
                <Bubble outerSize={15} innerSize={8} />
            </BubbleContainer>
            <BubbleContainer className='bubble right'>
                <Bubble outerSize={20} innerSize={8} />
            </BubbleContainer>
            <BubbleContainer className='bubble right'>
                <Bubble />
            </BubbleContainer>
            
            <ErlenmeyerContainer>
                <ErlenmeyerBodyTop />
                <ErlenmeyerBodyBottom>
                    <SolutionErlenmeyer />
                </ErlenmeyerBodyBottom>
            </ErlenmeyerContainer>

            <FireContainer>
                <Flame className='one'>
                    <TopFlame />
                    <TopFlameRed />
                    <BottomFlame />
                </Flame>
                <Flame className='two'>
                    <TopFlame />
                    <TopFlameRed />
                    <BottomFlame />
                </Flame>
                <Flame className='three'>
                    <TopFlame />
                    <TopFlameRed />
                    <BottomFlame />
                </Flame>
            </FireContainer>
        </LabContainer>
    )
}

export default Erlenmeyer
import styled, { keyframes } from "styled-components"

const moveLine = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-230px);
    }
`

const AnimateContainer = styled.div`
    width: 250px;
    height: 500px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.primary};
    transform-style: preserve-3d;
    transform: translateZ(-100px);
    perspective: 500px;
`

const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    //position: absolute;
    //top: 252px;
    //left: -56px;
    transform: rotateY(-139deg) translateZ(28px);
`

const ScreenBorder = styled.div.attrs(props => ({
    screenWidth: props.screenWidth + 'px',
    screenHeight: props.screenHeight + 'px'
}))`
    width: ${props => props.screenWidth};
    height: ${props => props.screenHeight};
    background-color: ${props => props.theme.secondary};
    border-radius: 12px;
    display: flex;
    justify-content: center;
`

const Screen = styled.div.attrs(props => ({
    screenWidth: props.screenWidth - 30 + 'px',
    screenHeight: props.screenHeight - 40 + 'px'
}))`
    width: ${props => props.screenWidth};
    height: ${props => props.screenHeight};
    background-color: ${props => props.theme.third};
    margin: 15px 0 0 0;
    padding: 10px;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const Line = styled.div`
    min-height: 5px;
    width: ${props => props.width + '%'};
    margin: 2px 0;
    background-color: green;
    animation: ${moveLine} 1s linear infinite;
`

const ScreenFoot = styled.div`
    width: 100px;
    height: 35px;
    background-color: ${props => props.theme.secondary};
    position: relative;

    &:before, &:after {
        content: '';
        height: 30px;
        width: 45px;
        position: absolute;
        top: 0;
        background-color: ${props => props.theme.primary};
    }

    &:before {
        left: 0;
        border-radius: 0 0 10px 0;
    }

    &:after {
        right: 0;
        border-radius: 0 0 0 10px;
    }
`

function ScreenAnimate({screenWidth, screenHeight}) {
    const width = screenWidth ? screenWidth : 300
    const height = screenHeight ? screenHeight : 250

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    return(
        <AnimateContainer>
            <ScreenContainer>
                <ScreenBorder screenWidth={width} screenHeight={height}>
                    <Screen screenWidth={width} screenHeight={height}>
                    {
                        [...Array(50)].map((e, i) =>
                            <Line key={i} width={random(0, 100)}/>
                        )
                    }
                    </Screen>
                </ScreenBorder>

                <ScreenFoot />
            </ScreenContainer>
        </ AnimateContainer>
    )
}

export default ScreenAnimate
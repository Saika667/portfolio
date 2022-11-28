import styled, { keyframes } from 'styled-components'

const rotateTestTube = keyframes`
    0% {
        transform: rotate(0deg) translateX(0);
    }
    50% {
        transform: rotate(0deg) translateX(60px);
    }
    75% {
        transform: translateX(60px) rotate(75deg);
    }
    100% {
        transform: translateX(60px) rotate(100deg);
    }
`

const rotateSolutionTube = keyframes`
    0% {
        transform: rotate(0deg);
        left: -43px;

    }
    30% {
        transform: rotate(-73deg);
        width: 300px;
        left: -43px;
        bottom: 35px; 
    }
    70% {
        transform: rotate(-83deg);
        left: -43px;
        bottom: 40px;
        width: 300px;
    }
    95% {
        transform: rotate(-90deg);
        left: -5px;
        bottom: 40px;
    }
    100% {
        transform: rotate(-90deg);
        left: -5px;
        bottom: 300px;
        width: 250px;
    }
`

const waveSolutionFall = keyframes`
    0% {
        opacity: 0;
        top: 163px;
        right: 205px;
    }
    25%{
        top: 175px;
    }
    50%{
        top: 185px;
        right: 216px;
    }
    100% {
        opacity: 1;
        top: 200px;
        right: 216px;
    }
`

const LabAnimeContainer = styled.div `
    width: 600px;
    height: 650px;
    background-color: white;
    position: relative;
`

const TestTubeContainer = styled.div`
    position: absolute;
    top: 30px;
    left: 70px;
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    animation: ${rotateTestTube} 1500ms linear forwards;
`

const TestTube = styled.div`
    width: 50px;
    height: 250px;
    border: 1px solid black;
    border-top: none;
    border-radius: 0 0 30px 30px;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
`

const SolutionTube = styled.div`
    width: 200px;
    height: 150px;
    background-color: blue;
    position: absolute;
    margin: auto;
    bottom: -1px;
    animation: ${rotateSolutionTube} 750ms 750ms linear forwards;
`

const ContainerSolutionFall = styled.div`
    
`

const SolutionFall = styled.div`
    background-color: blue;
    position: absolute;   
    top: 200px;
    right: 216px;
    z-index: 1;
    opacity: 0;
    width: 10px;
    height: 350px;
    border-radius: 0 11px 0 0 / 0 60px 0 0;
    animation: ${waveSolutionFall} 300ms 1225ms linear forwards;
    //position: relative;
    &:before, &:after {
        content: '';
        background-color: blue;
        height: 90px;
        position: absolute;
        border-radius: 50%;
    }
    &:before {
        left: 0;
        top: 20px;
        width: 16px;
    }
    &:after {
        right: 0;
        top: 105px;
        width: 18px;
    }
`

const ErlenmeyerContainer = styled.div`
    width: 230px;
    height: 345px;
    position: absolute;
    bottom: 60px;
    right: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ErlenmeyerBodyTop = styled.div`
    width: 57px;
    height: 100px;
    background-color: white;
    border-left: 2px black solid;
    border-right: 2px black solid;
    position: relative;
    margin-top: 10px;

    &:after {
        content: '';
        width: 2px;
        height: 10px;
        transform: skewX(-25deg);
        position: absolute;
        top: -8px;
        right: -4px;
        background-color: black;
    }

    &:before {
        content: '';
        width: 2px;
        height: 10px;
        transform: skewX(25deg);
        position: absolute;
        top: -8px;
        left: -4px;
        background-color: black;
    }
`

const ErlenmeyerBodyBottom = styled.div`
    width: 210px;
    height: 230px;
    background-color: white;
    position: relative;
    border-bottom: 2px solid black;

    &:after {
        content: '';
        width: 67px;
        height: 230px;
        display: block;
        position: absolute;
        right: -28px;
        transform: skewX(18deg);
        border-left: 2px black solid;
        box-sizing: border-box;
        background-color: white;
        z-index: 2;
    }

    &:before {
        content: '';
        width: 67px;
        height: 230px;
        display: block;
        position: absolute;
        left: -28px;
        transform: skewX(-18deg);
        border-right: 2px black solid;
        box-sizing: border-box;
        z-index: 2;
        background-color: white;
    }
`

const SolutionErlenmeyer = styled.div`
    width: 210px;
    height: 100px;
    background-color: purple;
    position: absolute;
    bottom: 0;
    z-index: 1;
`

function LabAnime() {
    return (
        <LabAnimeContainer>
            <TestTubeContainer>
                <TestTube>
                    <SolutionTube />
                </TestTube>
            </TestTubeContainer>

            <ContainerSolutionFall>
                <SolutionFall />
            </ContainerSolutionFall>

            <ErlenmeyerContainer>
                <ErlenmeyerBodyTop />
                <ErlenmeyerBodyBottom>
                    <SolutionErlenmeyer />
                </ErlenmeyerBodyBottom>
            </ErlenmeyerContainer>
        </LabAnimeContainer>
    )
}

export default LabAnime;
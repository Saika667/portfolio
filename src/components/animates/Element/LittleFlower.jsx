import styled from 'styled-components'

export const LittleFlowerContainer = styled.div`
    position: absolute;
`

const LittleFlowerComp = styled.div`
    position: relative;
    width: 20px;
    height: 20px;
    z-index: 2;
`

const LittleFlowerPetal = styled.div`
    position: absolute;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: ${props => props.theme.fourth};

    &.petalOne {
        top: 0;
        left: 5px;
    }

    &.petalTwo {
        top: 4px;
        left: 10px;
    }

    &.petalThree {
        top: 10px;
        left: 8px;
    }

    &.petalFour {
        top: 10px;
        left: 2px;
    }

    &.petalFive {
        top: 4px;
        left: 0;
    }
`

const LittleFlowerCenter = styled.div`
    position: absolute;
    border-radius: 50%;
    width: 6px;
    height: 5px;
    top: 7px;
    left: 7px;
    z-index: 1;

    &.pink {
        background-color: ${props => props.theme.secondary};
    }

    &.blue {
        background-color: ${props => props.theme.third};
    }
`

function LittleFlower({centerColor}) {

    return (
        <LittleFlowerContainer>
            <LittleFlowerComp>
                <LittleFlowerCenter className={centerColor}/>
                <LittleFlowerPetal className='petalOne'/>
                <LittleFlowerPetal className='petalTwo'/>
                <LittleFlowerPetal className='petalThree'/>
                <LittleFlowerPetal className='petalFour'/>
                <LittleFlowerPetal className='petalFive'/>
            </LittleFlowerComp>
        </LittleFlowerContainer>
    )
}

export default LittleFlower
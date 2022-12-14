import styled from 'styled-components'
import { Leaf } from './Column.jsx'
import LittleFlower from './Element/LittleFlower'

const CornerFlowerContainer = styled.div`
    position: absolute;
    width: 110px;
    height: 115px;

    &.top {
        top: 0;
        left: 0;
    }

    &.bottom {
        bottom: 0;
        left: 0;
        transform: rotateX(180deg);
    }
`

const CornerFlowerContent = styled.div`
    position: relative;
`
const LeafComponent = styled(Leaf)`

    &.leafOne {
        top: 37px;
        left: 13px;
        transform: rotate(80deg);
        width: 31px;
    }

    &.leafTwo {
        top: 1px;
        left: 72px;
        transform: rotate(-14deg);
    }

    &.leafThree {
        top: 90px;
        left: -18px;
        transform: rotate(-32deg);
    }
`
const LittleFlowerContainer = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;

    &.flowerOne {
        top: 50px;
        left: 9px;
    }

    &.flowerTwo {
        top: 18px;
        left: 63px;
    }

    &.flowerThree {
        top: 65px;
        left: 0;
    }

    &.flowerFour {
        top: 17px;
        left: 8px;
    }

    &.flowerFive {
        top: 9px;
        left: 46px;
    }

    &.flowerSix {
        top: 93px;
        left: 14px;
    }

    &.flowerSeven {
        top: 4px;
        left: 1px;
    }
`

const BranchContainer = styled.div`
    position: absolute;

    &.horizontalBranch {
        top: 2px;
        left: 56px;
    }

    &.verticalBranch {
        top: 30px;
        left: 14px;
    }
`

const Branch = styled.div`
    position: relative;
    width: 3px;
    height: 50px;
    background-color: ${props => props.theme.secondary};
    z-index: 1;

    &:before, &:after {
        content: '';
        background-color: ${props => props.theme.secondary};
        position: absolute;
        border-radius: 0 11px 11px 0;   
        width: 7px;
    }

    &:before {
        bottom: -18px;
        right: -4px;
        height: 20px;
        transform: rotate(-134deg) skewX(58deg);
    }

    &:after {
        top: -9px;
        right: 0;
        height: 12px;
        transform: rotate(43deg) skewX(55deg);
    }

    &.horizontal {
        transform: rotate(95deg);
    }

    &.vertical {
        transform: rotateY(20deg);
    }
`

function CornerFlower({className}) {

    return (
        <CornerFlowerContainer className={className}>
            <CornerFlowerContent>
                <BranchContainer className='horizontalBranch'>
                    <Branch className='horizontal'/>
                </BranchContainer>
                <BranchContainer className='verticalBranch'>
                    <Branch className='vertical'/>
                </BranchContainer>
                <LeafComponent className='leafOne'/>
                <LeafComponent className='leafTwo'/>
                <LeafComponent className='leafThree'/>

                <LittleFlowerContainer className='flowerOne'>
                    <LittleFlower centerColor={'blue'}/>
                </LittleFlowerContainer>

                <LittleFlowerContainer className='flowerTwo'>
                    <LittleFlower centerColor={'pink'}/>
                </LittleFlowerContainer>
                
                <LittleFlowerContainer className='flowerThree'>
                    <LittleFlower centerColor={'pink'}/>
                </LittleFlowerContainer>
                
                <LittleFlowerContainer className='flowerFour'>
                    <LittleFlower centerColor={'blue'}/>
                </LittleFlowerContainer>
                
                <LittleFlowerContainer className='flowerFive'>
                    <LittleFlower centerColor={'blue'}/>
                </LittleFlowerContainer>
                
                <LittleFlowerContainer className='flowerSix'>
                    <LittleFlower centerColor={'blue'}/>
                </LittleFlowerContainer>
                
                <LittleFlowerContainer className='flowerSeven'>
                    <LittleFlower centerColor={'pink'}/>
                </LittleFlowerContainer>   
            </CornerFlowerContent>
        </CornerFlowerContainer>
    )
}

export default CornerFlower
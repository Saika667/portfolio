import styled from "styled-components"
import { Leaf } from "./animates/Column"
import BigFlower from "./animates/Element/BigFlower"
import Flower from "./animates/Element/Flower"
import LittleFlower from "./animates/Element/LittleFlower"

const FolioImageContainer = styled.div`
    width: 29rem;
    height: 22rem;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.fourth};
    border: solid 2px ${props => props.theme.secondary};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TitleImage = styled.h2`
    text-align: center;
    text-transform: uppercase;
    font-weight: 200;
    font-size: 40px;
    margin: 15px 0;
`
const TitleTop = styled.div`
    width: 100%;
    height: 6rem;
    position: relative;
`
const TitleBottom = styled.div`
    width: 100%;
    height: 7rem;
    position: relative;
`

const BranchContainer = styled.div`
    position: absolute;
    top: 3rem;
    left: 7rem;
`

const Branch = styled.div`
    width: 15rem;
    height: .35rem;
    border-radius: 10px 0 10px 0;
    background-color: ${props => props.theme.secondary};
    transform: rotate(4deg);
    position: relative;

    &:before, &:after {
        content: '';
        background-color: ${props => props.theme.secondary};
        position: absolute;  
        width: 3rem;
        height: .3rem;
    }

    &:before {
        right: -1.625rem;
        top: -.24rem;
        border-radius: 0 11px 11px 0; 
        transform: rotate(-15deg) skewX(80deg);
    }

    &:after {
        left: -1.813rem;
        top: .3rem;
        border-radius: 0 11px 11px 9px; 
        transform: rotate(-198deg) skewX(55deg);
    }
`

const LeafComp = styled(Leaf)`
    &.leafOneBot {
        top: .5rem;
        left: 6.25rem;
        transform: rotate(60deg);
    }
    &.leafTwoBot {
        top: 1.4rem;
        left: 15.95rem;
        transform: rotate(-28deg);
    }
    &.leafThreeBot {
        top: 3.9rem;
        left: 21.95rem;
        transform: rotate(50deg);
    }
    &.leafFourBot {
        top: 1rem;
        left: 20.75rem;
        transform: rotate(142deg);
    }
    &.leafFiveBot {
        top: 3.9rem;
        left: 6.05rem;
        transform: rotate(-19deg);
    }
    &.leafSixBot {
        top: 4.1rem;
        left: 8.55rem;
        transform: rotate(205deg) rotateX(154deg);
    }

    &.leafOneTop {
        top: 3.4rem;
        left: 14.25rem;
        transform: rotate(-13deg);
    }
    &.leafTwoTop {
        top: 1.4rem;
        left: 21.55rem;;
        transform: rotate(132deg) rotateX(154deg);
    }
    &.leafThreeTop {
        top: 3.6rem;
        left: 21.15rem;
        transform: rotate(64deg);
    }
`

const FlowerContainer = styled.div`
    height: fit-content;
    width: fit-content;
    position: absolute;

    &.flowerOneBot {
        top: 2.538rem;
        left: 20.588rem;
        transform: rotate(19deg);
    }
    &.flowerTwoBot {
        top: 1.875rem;
        left: 8.05rem;
    }
    &.flowerThreeBot {
        top: 2.375rem;
        left: 15.45rem;
        z-index: 3;
    }
    &.flowerFourBot {
        top: 1.575rem;
        left: 5.05rem;
        z-index: 3;
        transform: rotate(-15deg);
    }
    &.flowerFiveBot {
        top: 2.475rem;
        left: 22.45rem;
    }
    &.flowerSixBot {
        top: 4.075rem;
        left: 12.15rem;
    }
    &.flowerSevenBot {
        top: 2.475rem;
        left: 19.15rem;
    }
    &.flowerEightBot {
        top: 0.975rem;
        left: 8.45rem;
    }
    &.flowerNineBot {
        top: 1.675rem;
        left: 14.85rem;
    }
    &.flowerTenBot {
        top: 2.775rem;
        left: 6.35rem;
    }
    &.flowerElevenBot {
        top: .188rem;
        left: 9.375rem;
    }

    &.flowerOneTop {
        top: 0.288rem;
        left: 16.975rem;
    }

    &.flowerTwoTop {
        top: 0.588rem;
        left: 15.575rem;
        transform: rotate(-26deg);
    }
    &.flowerThreeTop {
        top: 1.988rem;
        left: 14.475rem;
    }
    &.flowerFourTop {
        top: 4.188rem;
        left: 17.475rem;
    }
`

function FolioImage() {
    return (
        <FolioImageContainer>
            <TitleTop>
                <LeafComp className="leafOneTop" />
                <LeafComp className="leafTwoTop" />
                <LeafComp className="leafThreeTop" />

                <FlowerContainer className="flowerOneTop">
                    <BigFlower /> 
                </FlowerContainer>

                <FlowerContainer className="flowerTwoTop">
                    <Flower flowerType={'flowerBlueBorder'} centerColor={'centerWhite'}/>
                </FlowerContainer>

                <FlowerContainer className="flowerThreeTop">
                    <LittleFlower centerColor={'pink'}/> 
                </FlowerContainer>

                <FlowerContainer className="flowerFourTop">
                    <LittleFlower centerColor={'blue'}/> 
                </FlowerContainer>
            </TitleTop>

            <TitleImage>Portfolio</TitleImage>

            <TitleBottom>
                <BranchContainer>
                    <Branch />
                </BranchContainer>

                <LeafComp className="leafOneBot" />
                <LeafComp className="leafTwoBot" />
                <LeafComp className="leafThreeBot" />
                <LeafComp className="leafFourBot" />
                <LeafComp className="leafFiveBot" />
                <LeafComp className="leafSixBot" />

                <FlowerContainer className="flowerOneBot">
                    <Flower flowerType={'flowerPinkBorder'} centerColor={'centerWhite'}/> 
                </FlowerContainer>

                <FlowerContainer className="flowerTwoBot">
                    <Flower flowerType={'flowerBlueBorder'} centerColor={'centerWhite'}/>
                </FlowerContainer>

                <FlowerContainer className="flowerThreeBot">
                    <Flower flowerType={'flowerBlue'} centerColor={'centerWhite'} />
                </FlowerContainer>

                <FlowerContainer className="flowerFourBot">
                    <Flower flowerType={'flowerPink'} centerColor={'centerWhite'}/>
                </FlowerContainer>

                <FlowerContainer className="flowerFiveBot">
                    <LittleFlower centerColor={'blue'}/>
                </FlowerContainer>

                <FlowerContainer className="flowerSixBot">
                    <LittleFlower centerColor={'pink'}/> 
                </FlowerContainer>

                <FlowerContainer className="flowerSevenBot">
                    <LittleFlower centerColor={'pink'}/> 
                </FlowerContainer>

                <FlowerContainer className="flowerEightBot">
                    <LittleFlower centerColor={'blue'}/> 
                </FlowerContainer>

                <FlowerContainer className="flowerNineBot">
                    <LittleFlower centerColor={'pink'}/> 
                </FlowerContainer>

                <FlowerContainer className="flowerTenBot">
                    <LittleFlower centerColor={'blue'}/> 
                </FlowerContainer>

                <FlowerContainer className="flowerElevenBot">
                    <BigFlower /> 
                </FlowerContainer>
            </TitleBottom>
        </FolioImageContainer>
    )
}

export default FolioImage
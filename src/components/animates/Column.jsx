import styled from 'styled-components'
import Flower from './Element/Flower';
import BigFlower from './Element/BigFlower';
import { useContext } from 'react';
import { GlobalContext } from '../../utils/context/global';

function getTopOffset(contentNumber, space) {
    let style = '';
    for (let i = 0; i < contentNumber; i++) {
        style += `
            & :nth-child(${i + 1}n) {
                top: ${space * i}px;
            }
        `
    }
    return style;
}
/*-----------------------------Colonne globale --------------------------------*/
const ColumnContainer = styled.div.attrs(props => ({
    columnHeight : props.columnHeight
}))`
    position: relative;
    display: flex;
    width: 110px;
    height: ${props => props.columnHeight}px;
`
/*-----------------------------FIN Colonne globale--------------------------------*/

/*-----------------------------Colonne tête --------------------------------*/
const HeadColumnContainer = styled.div`
    height: 122px;
    width: 110px;
    position: absolute;
    right: 0;
`

const HeadColumn = styled.div`

`
/*-----------------------------Colonne tête fleur--------------------------------*/
const FlowerContainer = styled.div`
    position: absolute;

    &.bigFlower {
        left: 20px;
        bottom: 14px;
        z-index: 1;
    }

    &.flowerPinkPos {
        left: 47px;
        top: 9px;
    }

    &.flowerPinkBorderPos {
        left: 80px;
        top: 55px;
    }

    &.flowerBluePos {
        left: 51px;
        top: 95px;
        transform: rotate(45deg);
        z-index: 2;
    }

    &.flowerBlueBorderPos {
        left: 23px;
        top: 17px;
    }

    &.flowerWhitePinkPos {
        top: 92px;
        left: 25px;
    }

    &.flowerWhiteBluePos {
        top: 25px;
        left: 60px;
    }
`

/*-----------------------------FIN Colonne tête fleur--------------------------------*/
/*-----------------------------FIN Colonne tête--------------------------------*/

/*-----------------------------Colonne corps --------------------------------*/
const ColumnBody = styled.div`

`
const ColumnContent = styled.div.attrs(props => ({
    number: props.number
}))`
    width: 20px;
    height: 586px;
    ${props => getTopOffset(props.number, 17)}
    position: absolute;
    right: 45px;
    top: 104px;
    z-index: 1;
 `

const Content = styled.div`
    border-radius: 7pc 0 7pc 0;
    width: 15px;
    height: 30px;
    position: absolute;
    transform: rotate(124deg);

    &:nth-child(odd) {
        background-color: ${props => props.theme.secondary};
    }
    &:nth-child(even) {
        background-color: ${props => props.theme.third};
    }
`
/*-----------------------------Colonne corps (feuille)--------------------------------*/
const LeafContainer = styled.div.attrs(props => ({
    number: props.number
}))`
    width: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    ${props => getTopOffset(props.number, 42)}

    &.left {
        left: 5px;
        top: 145px;
    }
    &.right {
        right: 16px;
        top: 155px;
    }
`

export const Leaf = styled.div`
    border-radius: 7pc 0 7pc 0;
    width: 40px;
    height: 20px;
    border: 1px solid ${props => props.theme.fourth};
    position: absolute;

    &:before {
        content: '';
        background-color: ${props => props.theme.fourth};
        width: 20px;
        border-radius: 50%;
        height: 3px;
        position: absolute;
        top: 9px;
        transform: rotate(-13deg);
        right: 8px;
    }
    &.rightLeaf {
        transform: rotate(-10deg);
    }

    &.leftLeaf {
        transform: rotate(10deg) rotateX(-160deg);
    }

    &.leafLeftBottom {
        bottom: 8px;
        left: -2px;
        transform: rotate(-10deg);
    }

    &.leafLeftTop {
        left: -8px;
        top: 25px;
        transform: rotate(66deg);
    }

    &.leafLeftTopBis {
        left: -6px;
        top: 55px;
        transform: rotate(-10deg);
    }
    
    &.leafRightTop {
        right: 3px;
        top: 7px;
        transform: rotate(-31deg);
    }

    &.leafRightBottom {
        bottom: 0;
        right: 6px;
        transform: rotate(61deg);
    }
`
/*-----------------------------FINColonne corps (feuille)--------------------------------*/
/*-----------------------------FIN Colonne corps --------------------------------*/

/*-----------------------------Colonne pied--------------------------------*/
const FootColumnContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 17px;
    z-index: 2;
`
const FootColumn = styled.div `
    background-color: ${props => props.theme.secondary};
    width: 80px;
    height: 25px;
    position: relative;
    border-radius: 25px 25px 0 0;
  
`
const Foot = styled.div `
    background-color: ${props => props.theme.secondary};
    width: 40px;
    height: 20px;
    position: absolute;
    bottom: 24px;
    border-radius: 16px 16px 0 0;
`
function getColumnValues(targetHeight) {
    const columnTop = 122;
    const columnBot = 44;
    const remainingSpace = targetHeight - columnTop - columnBot;
    const pxPerLeaf = 12 / 520;
    const pxPerElement = 32 / 520;
    const numberOfLeafs = Math.floor(pxPerLeaf * remainingSpace);
    const numberOfElements = Math.floor(pxPerElement * remainingSpace) + 1;
    return [numberOfLeafs, numberOfElements];
}

/*-----------------------------FIN Colonne pied--------------------------------*/
function Column({ targetHeight }) {
    const { windowSize } = useContext(GlobalContext)
    if (windowSize.innerHeight < 800) {
        targetHeight = windowSize.innerHeight - 70
    }
    let [numberOfLeafs, numberOfElements] = getColumnValues(targetHeight);
    if (windowSize.innerHeight > 800) {
        numberOfLeafs = numberOfLeafs + 1
    }

    return (
        <ColumnContainer columnHeight={targetHeight}>
            <HeadColumnContainer>
                <HeadColumn />
                <FlowerContainer className='flowerPinkBorderPos'>
                    <Flower flowerType={'flowerPinkBorder'} centerColor={'centerWhite'}/>         
                </FlowerContainer>

                <FlowerContainer className='flowerBluePos'>
                    <Flower flowerType={'flowerBlue'} centerColor={'centerWhite'}/>
                </FlowerContainer>

                <FlowerContainer className='flowerBlueBorderPos'>
                    <Flower flowerType={'flowerBlueBorder'} centerColor={'centerWhite'}/>
                </FlowerContainer>

                <FlowerContainer className='flowerPinkPos'>
                    <Flower flowerType={'flowerPink'} centerColor={'centerWhite'}/>
                </FlowerContainer>

                <FlowerContainer className='flowerWhiteBluePos'>
                    <Flower flowerType={'flowerWhiteBlue'} centerColor={'centerBlue'}/>
                </FlowerContainer>

                <FlowerContainer className='flowerWhitePinkPos'>
                    <Flower flowerType={'flowerWhitePink'} centerColor={'centerPink'}/>
                </FlowerContainer>

                <FlowerContainer className='bigFlower'>
                    <BigFlower />
                </FlowerContainer>

                <Leaf className="leafLeftTop" />
                <Leaf className="leafLeftTopBis" />
                <Leaf className="leafRightTop" />
                <Leaf className="leafLeftBottom" />
                <Leaf className="leafRightBottom" />
            </HeadColumnContainer>

            <ColumnBody>
                <LeafContainer className='left' number={numberOfLeafs}>
                    {
                        [...Array(numberOfLeafs)].map((e, i) =>
                            <Leaf key={i} className="leftLeaf"/>
                        )
                    }
                </LeafContainer>
                <ColumnContent number={numberOfElements}>
                    {
                        [...Array(numberOfElements)].map((e, i) => 
                            <Content key={i} />
                        )
                    }
                </ColumnContent>
                <LeafContainer className='right' number={numberOfLeafs}>
                    {
                        [...Array(numberOfLeafs)].map((e, i) =>
                            <Leaf key={i} className="rightLeaf"/>
                        )
                    }
                </LeafContainer>
            </ColumnBody>
            
            <FootColumnContainer>
                <Foot></Foot>
                <FootColumn />
            </FootColumnContainer>
        </ColumnContainer>
    )
}
  
export default Column
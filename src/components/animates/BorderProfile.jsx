import styled, { keyframes } from 'styled-components'
import colors from '../../utils/styles/colors'
import profil from '../../assets/profil.jpg'
import { Leaf } from './Column.jsx'
import BigFlower from './Element/BigFlower'
import Flower from './Element/Flower'
import LittleFlower from './Element/LittleFlower'

const BorderProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 400px;
    height: 400px;
`

const ProfileImage = styled.img`
    border-radius: 50%;
    width: 300px;
`

const LeafComponent = styled(Leaf)`
    &.leafOne {
        top: 38px;
        left: 70px;
        transform: rotate(-29deg);
    }

    &.leafTwo {
        top: 108px;
        left: 24px;
    }

    &.leafThree {
        top: 45px;
        left: 257px;
        transform: rotate(64deg);
    }

    &.leafFour {
        top: 360px;
        left: 217px;
    }

    &.leafFive {
        top: 315px;
        left: 321px;
        transform: rotate(-18deg);
    }
`

const FlowerContainer = styled.div`
    position: absolute;

    &.littleFlowerOne {
        top: 158px;
        left: 37px;
    }
    &.littleFlowerTwo {
        top: 343px;
        left: 309px;
    }
    &.littleFlowerThree {
        top: 316px;
        left: 294px;
    }
    &.littleFlowerFour {
        top: 73px;
        left: 303px;
    }
    &.littleFlowerFive {
        top: 138px;
        left: 31px;
    }
    &.littleFlowerSix {
        top: 323px;
        left: 314px;
    }
    &.littleFlowerSeven {
        top: 92px;
        left: 315px;
    }
    &.littleFlowerEight {
        top: 80px;
        left: 20px;
    }
    &.littleFlowerNine {
        top: 376px;
        left: 257px;
    }


    &.flowerOne {
        top: 115px;
        left: 50px;
    }
    &.flowerTwo {
        top: 36px;
        left: 37px;
    }
    &.flowerThree {
        top: 292px;
        left: 310px;
    }
    &.flowerFour {
        top: 52px;
        left: 92px;
    }
    &.flowerFive {
        top: 56px;
        left: 280px;
    }
    &.flowerSix {
        top: 334px;
        left: 228px;
    }
    &.flowerSeven {
        top: 68px;
        left: 318px;
        z-index: 1;
    }

    &.bigFlowerOne {
        top: 55px;
        left: 35px;
    }
    &.bigFlowerTwo {
        top: 320px;
        left: 251px;
    }
`
function BorderProfile() {

    return (
        <BorderProfileContainer>
            <LeafComponent className='leafOne' />
            <LeafComponent className='leafTwo' />
            <LeafComponent className='leafThree' />
            <LeafComponent className='leafFour' />
            <LeafComponent className='leafFive' />

            <FlowerContainer className='littleFlowerOne'>
                <LittleFlower centerColor={'pink'}/>
            </FlowerContainer>

            <FlowerContainer className='littleFlowerTwo'>
                <LittleFlower centerColor={'pink'} />
            </FlowerContainer>
            
            <FlowerContainer className='littleFlowerThree'>
                <LittleFlower centerColor={'blue'} />
            </FlowerContainer>
            
            <FlowerContainer className='littleFlowerFour'>
                <LittleFlower centerColor={'blue'} />
            </FlowerContainer>
            
            <FlowerContainer className='littleFlowerFive'>
                <LittleFlower centerColor={'blue'} />
            </FlowerContainer>

            <FlowerContainer className='littleFlowerSix'>
                <LittleFlower centerColor={'blue'} />
            </FlowerContainer>

            <FlowerContainer className='littleFlowerSeven'>
                <LittleFlower centerColor={'pink'} />
            </FlowerContainer>

            <FlowerContainer className='littleFlowerEight'>
                <LittleFlower centerColor={'blue'} />
            </FlowerContainer>

            <FlowerContainer className='littleFlowerNine'>
                <LittleFlower centerColor={'pink'} />
            </FlowerContainer>
            
            <FlowerContainer className='flowerOne'>
                <Flower flowerType={'flowerWhitePink'} centerColor={'centerBlue'}/>
            </FlowerContainer>
            
            <FlowerContainer className='flowerTwo'>
                <Flower flowerType={'flowerWhiteBlue'} centerColor={'centerPink'} />
            </FlowerContainer>
            
            <FlowerContainer className='flowerThree'>
                <Flower flowerType={'flowerPink'} centerColor={'centerWhite'} />
            </FlowerContainer>
            
            <FlowerContainer className='flowerFour'>
                <Flower flowerType={'flowerBlue'} centerColor={'centerWhite'} />
            </FlowerContainer>
                
            <FlowerContainer className='flowerFive'>
                <Flower flowerType={'flowerPinkBorder'} centerColor={'centerWhite'} />
            </FlowerContainer>

            <FlowerContainer className='flowerSix'>
                <Flower flowerType={'flowerBlueBorder'} centerColor={'centerWhite'} />
            </FlowerContainer> 

            <FlowerContainer className='flowerSeven'>
                <Flower flowerType={'flowerBlue'} centerColor={'centerWhite'} />
            </FlowerContainer>

            <FlowerContainer className='bigFlowerOne'>
                <BigFlower />
            </FlowerContainer>
                
            <FlowerContainer className='bigFlowerTwo'>
                <BigFlower />
            </FlowerContainer>
            <ProfileImage src={profil} alt="image de profil"/>
        </BorderProfileContainer>
    )
}

export default BorderProfile
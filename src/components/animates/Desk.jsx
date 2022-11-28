import styled, { keyframes } from 'styled-components'
import colors from '../../utils/styles/colors'

const DeskContainer = styled.div`
    position: relative;
    background-color: white;
    overflow: hidden;
    height: 600px;
    width: 1300px;
`
const DeskTable = styled.div`
    width: 104%;
    height: 320px;
    position: absolute;
    bottom: -315px;
    left: -10px;
    transform: rotate(-6deg);
    background-color: bisque;
`

const Foreground = styled.div` 
    background-color: transparent;
    
    perspective: 400px;
`

const Background = styled.div`

`

const Computer = styled.div`
    width: 330px;
    height: 350px;
    transform-style: preserve-3d;
    transform: translateZ(-100px);
`

const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 252px;
    left: -56px;
    transform: rotateY(-139deg) translateZ(100px);
`

const ScreenBorder = styled.div`
    width: 300px;
    height: 250px;
    background-color: black;
    border-radius: 12px;
    display: flex;
    justify-content: center;
`

const Screen = styled.div`
    width: 270px;
    height: 220px;
    background-color: gray;
    margin: 15px 0 0 0;
`

const ScreenFoot = styled.div`
    width: 100px;
    height: 35px;
    background-color: black;
    position: relative;

    &:before, &:after {
        content: '';
        height: 30px;
        width: 45px;
        position: absolute;
        top: 0;
        background-color: bisque;
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
const KeyboardContainer = styled.div`
    position: absolute;
    left: 15px;
    top: 211px;
    transform:rotateY(47deg) rotateX(85deg) translateZ(-270px);
`

const Keyboard = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 140px;
    background-color: blue;
    padding: 13px 0 0 13px;
    border-radius: 10px;
    position: relative;
`

const Keys = styled.div`
    height: 20px;
    width: 20px;
    background-color: green;
    border-radius: 2px;
    z-index: 1;
    border: 1px black solid;
    box-sizing: border-box;

    &.space {
        width: 150px;
    }

    &.line-one-key {
        height: 10px;
        width: 18px;
    }

    &.line-two-first-key {
        width: 18px;
    }

    &.line-two-last-key {
        width: 45px;
    }

    &.line-three-first-key {
        width: 31px;
    }

    &.line-four-first-key {
        width: 37px;
    }

    &.line-five-first-key {
        width: 30px;
    }

    &.line-five-last-key {
        width: 55px;
    }
`

const ArrowKeyContainer = styled.div`
    height: 20px;
    width: 66px;
    border-radius: 2px;
    display: flex;
    justify-content: space-between;
`

const BoxArrowKey = styled.div`
    
`

const ArrowKey = styled.div`
    background-color: yellow;
    height: 10px;
    width: 20px;
    border-radius: 2px;
    border: 1px black solid;
    box-sizing: border-box;
`

const EnterKeyContainer = styled.div`
    position: absolute;
    right: 20px;
    top: 51px;
`

const EnterKey = styled.div`
    width: 30px;
    height: 41px;
    position: relative;
    background-color: red;
    border-radius: 2px;

    &:before {
        content: '';
        width: 5px;
        height: 21px;
        border-radius: 0 2px 0 0;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: blue;
    }
`
const ContainerKeysLineOne = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 2px;

    &.content-one {
        width: 260px;
    }

    &.content-two {
        width: 62px;
    }
`

const LineKeys = styled.div`
    display: flex;
    justify-content: space-between;
    height: 20px;
    width: 379px;
    margin: 0 0 2px 0;

    &.line-one {
        height: 14px;
    }

    &.line-three {
        width: 344px;
    }

    &.line-four {
        width: 348px;
    }
`

const MouseContainer = styled.div`
    position: absolute;
    top: 280px;
    left: 280px;
    transform: rotate(-18deg);
`

const Mouse = styled.div`
    width: 30px;
    height: 50px;
    background-color: orange;
    border-radius: 15px 15px 11px 11px;
    position: relative;
    border: solid black 1px;
    box-sizing: border-box;

    &:before, &:after {
        content: '';
        width: 13px;
        height: 20px;
        border: solid black 1px;
        position: absolute;
        top: -1px;
    }

    &:before {
        left: -1px;
        border-radius: 15px 0 0 0;
    }

    &:after {
        right: -1px;
        border-radius: 0 15px 0 0;
    }
`
const LampContainer = styled.div`
    position: absolute;
    right: 0;
    top: 32px;
`

const Lamp = styled.div`
    width: 220px;
    height: 340px;
    padding: 20px;
    position: relative;
    box-sizing: border-box;
    z-index: 2;
`

const LampFoot = styled.div`
    width: 80px;
    height: 15px;
    border-radius: 50% 50% 0 0;
    background-color: pink;
    position: absolute;
    right: 40px;
    bottom: 32px;
`

const LampLeg = styled.div`
    width: 5px;
    background-color: green;
    position: absolute;

    &.leg-top {
        height: 40px;
        top: 30px;
        right: 80px;
        transform: rotate(45deg);
    }

    &.leg-middle {
        height: 120px;
        top: 20px;
        right: 46px;
        transform: rotate(-45deg);
    }

    &.leg-bottom {
        height: 215px;
        top: 88px;
        right: 44px;
        transform: rotate(19deg);
    }
`
const Screw = styled.div`
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    z-index: 1;

    &.screw-one {
        top: 41px;
        right: 72px;
    }

    &.screw-two {
        top: 103px;
        right: 9px;
    }
`

const LampHeadContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    transform: rotate(-45deg);
`

const Ampule = styled.div`
    width: 70px;
    height: 50px;
    border-radius: 50%;
    background-color: yellow;
    position: absolute;
`

const LampHead = styled.div`
    background-color: beige;
    width: 35px;
    height: 50px;
    border-radius: 0 20px 20px 0;
`

const LampParabol = styled.div`
    width: 60px;
    height: 150px;
    background-color: beige;
    border-radius: 0 60px 60px 0;
`

const LampParabolInt = styled.div`
    width: 30px;
    height: 150px;
    border-radius: 50%;
    background-color: blueviolet;
    position: absolute;
    overflow: hidden;
    left: 14px;
    display: flex;
    align-items: center;
`

const RayOfLightContainer = styled.div`
    position: absolute;
    top: 60px;
    right: 213px;
`
const RayOfLight = styled.div`
    background-color: ${colors.third};
    opacity: 0.5;
    width: 142px;
    height: 381px;
    position: relative;
    z-index: 1;
    transform: rotate(45deg);
    &:before, &:after {
        content: '';
        position: absolute;
        background-color: ${colors.third};
        z-index: 2;
    }
    &:before {
        width: 50px;
        height: 100px;
        bottom: 110px;
        right: -50px;
    }
    &:after {
        top: 0;
        right: -115px;
        width: 150px;
        height: 336px;
        transform: skew(24deg, 9deg) rotate(-15deg);
    }
`

const LightCicle = styled.div`
    background-color: purple;
    border-radius: 50%;
    height: 197px;
    width: 370px;
    z-index: 3;
    position: absolute;
    left: -157px;
    bottom: -112px;
    transform: rotate(42deg);
`

const PencilBoxContainer = styled.div`
    position: absolute;
    top: 250px;
    left: 470px;
    width: 60px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

const PencilBox = styled.div`
    width: 50px;
    height: 75px;
    background-color: green;
    position: relative;
    z-index: 2;

    &:after {
        content: '';
        width: 50px;
        border-radius: 50%;
        position: absolute;
        background-color: green;
        height: 15px;
        bottom: -7px;
    }
`

const PencilBoxInt = styled.div`
    height: 20px;
    top: -10px;
    background-color: orange;
    width: 50px;
    border-radius: 50%;
    position: absolute;
`

const PencilContainer = styled.div`
    position: absolute;
    top: 8px;

    &.pencil-red {
        transform: rotate(14deg);
        top: 3px;
        left: 40px;
    }

    &.pencil-purple {
        transform: rotate(-27deg);
        top: 18px;
        right: 36px;
    }
`

const Pencil = styled.div`
    width: 8px;
    height: 60px;
    background-color: blue;
    position: relative;
    z-index: 1;

    &.pencil-red {
        background-color: red;
    }

    &.pencil-purple {
        background-color: purple;
    }

    &:before, &:after {
        content: '';
        width: 4px;
        height: 12px;
        position: absolute;
        background-color: white;
    }

    &:before {
        transform-origin: 0% 100%;
        left: -5px;
        top: -4px;
        transform: rotate(28deg);
    }
    &:after {
        transform-origin: 0% 0%;
        right: 0;
        top: 0;
        transform: rotate(-28deg);

    }
`

const LibraryContainer = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;
`
const Library = styled.div`
    display: flex;
    justify-content: center;
`

const LibraryShelf = styled.div`
    width: 300px;
    height: 15px;
    background-color: brown;
`

const LibraryColumn = styled.div`
    width: 20px;
    height: 406px;
    background-color: brown;
    border-radius: 3px;
`

const LibraryContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const BookContainer = styled.div`
    display: flex;
    align-items: flex-end;
`

const Book = styled.div`
    //border: 1px solid black;
    width: 12px;
    height: 60px;
    margin-top: 15px;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        height: 9px;
    }

    &.bookBlue {
        background-color: blue;

        &:before {
            bottom: 15px;
            background-color: grey;
        }
    }
    &.bookGreen {
        background-color: green;
        height: 55px;

        &:before {
            top: 15px;
            background-color: black;
        }
    }
    &.bookRed {
        background-color: red;
        
        &:before {
            bottom: 20px;
            background-color: pink;
        }
    }
    &.bookYellow {
        background-color: yellow;
        
        &:before {
            top: 20px;
            background-color: green;
        }
    }
    &.bookPurple {
        background-color: purple;
        height: 50px;
        
        &:before {
            bottom: 30px;
            background-color: blue;
        }
    }
    &.bookOrange {
        background-color: orange;
        height: 45px;

        &:before {
            bottom: 15px;
            background-color: red;
        }
    }
`

function Desk() {
    return (
        <DeskContainer>
            <Background>
                <LibraryContainer>
                    <Library>
                        <LibraryColumn />
                            <LibraryContent>
                                <LibraryShelf />

                                <BookContainer>
                                    <Book className='bookBlue'/>
                                    <Book className='bookGreen'/>
                                    <Book className='bookRed'/>
                                    <Book className='bookYellow'/>
                                    <Book className='bookPurple'/>
                                    <Book className='bookOrange'/>
                                    <Book className='bookBlue'/>
                                    <Book className='bookGreen'/>
                                    <Book className='bookBlue'/>
                                    <Book className='bookYellow'/>
                                    <Book className='bookRed'/>
                                    <Book className='bookGreen'/>
                                    <Book className='bookOrange'/>
                                    <Book className='bookPurple'/>
                                    <Book className='bookYellow'/>
                                    <Book className='bookOrange'/>
                                    <Book className='bookGreen'/>
                                    <Book className='bookPurple'/>
                                    <Book className='bookRed'/>
                                    <Book className='bookOrange'/>
                                    <Book className='bookPurple'/>
                                    <Book className='bookYellow'/>
                                    <Book className='bookGreen'/>
                                    <Book className='bookBlue'/>
                                    <Book className='bookBlue'/>
                                </BookContainer>
                                <LibraryShelf />

                                <BookContainer>
                                    <Book className='bookGreen'/>
                                    <Book className='bookOrange'/>
                                    <Book className='bookYellow'/>
                                    <Book className='bookBlue'/>
                                    <Book className='bookRed'/>
                                    <Book className='bookGreen'/>
                                    <Book className='bookBlue'/>
                                    <Book className='bookPurple'/>
                                    <Book className='bookBlue'/>
                                    <Book className='bookBlue'/>
                                    <Book className='bookYellow'/>
                                    <Book className='bookRed'/>
                                    <Book className='bookOrange'/>
                                    <Book className='bookGreen'/>
                                    <Book className='bookOrange'/>
                                    <Book className='bookOrange'/>
                                    <Book className='bookGreen'/>
                                    <Book className='bookOrange'/>
                                    <Book className='bookPurple'/>
                                    <Book className='bookYellow'/>
                                    <Book className='bookBlue'/>
                                    <Book className='bookBlue'/>
                                    <Book className='bookRed'/>
                                    <Book className='bookPurple'/>
                                    <Book className='bookGreen'/>
                                </BookContainer>
                                <LibraryShelf />

                                <BookContainer>
                                    <Book className='bookGreen'/>
                                    <Book className='bookOrange'/>
                                    <Book className='bookBlue'/>
                                    <Book className='bookYellow'/>
                                    <Book className='bookRed'/>
                                    <Book className='bookOrange'/>
                                    <Book className='bookGreen'/>
                                    <Book className='bookOrange'/>
                                    <Book className='bookPurple'/>
                                    <Book className='bookPurple'/>
                                    <Book className='bookRed'/>
                                    <Book className='bookOrange'/>
                                    <Book className='bookBlue'/>
                                    <Book className='bookOrange'/>
                                    <Book className='bookYellow'/>
                                    <Book className='bookOrange'/>
                                    <Book className='bookGreen'/>
                                    <Book className='bookBlue'/>
                                    <Book className='bookBlue'/>
                                    <Book className='bookRed'/>
                                    <Book className='bookBlue'/>
                                    <Book className='bookGreen'/>
                                    <Book className='bookPurple'/>
                                    <Book className='bookYellow'/>
                                    <Book className='bookRed'/>
                                </BookContainer>
                                <LibraryShelf />

                                <BookContainer>
                                    <Book className='bookYellow'/>
                                    <Book className='bookBlue'/>
                                    <Book className='bookBlue'/>
                                    <Book className='bookGreen'/>
                                    <Book className='bookPurple'/>
                                    <Book className='bookOrange'/>
                                    <Book className='bookRed'/>
                                    <Book className='bookGreen'/>
                                    <Book className='bookOrange'/>
                                    <Book className='bookPurple'/>
                                    <Book className='bookBlue'/>
                                    <Book className='bookRed'/>
                                    <Book className='bookOrange'/>
                                    <Book className='bookGreen'/>
                                    <Book className='bookBlue'/>
                                    <Book className='bookPurple'/>
                                    <Book className='bookOrange'/>
                                    <Book className='bookRed'/>
                                    <Book className='bookBlue'/>
                                    <Book className='bookGreen'/>
                                    <Book className='bookYellow'/>
                                    <Book className='bookRed'/>
                                    <Book className='bookGreen'/>
                                    <Book className='bookBlue'/>
                                    <Book className='bookBlue'/>
                                </BookContainer>
                                <LibraryShelf />
                            </LibraryContent>
                        <LibraryColumn />
                    </Library>
                </LibraryContainer>
            </Background>

            <Foreground>
                <DeskTable />
                <Computer>
                    <ScreenContainer>
                        <ScreenBorder>
                            <Screen>

                            </Screen>
                        </ScreenBorder>

                        <ScreenFoot />
                    </ScreenContainer>
                    <KeyboardContainer>
                        <Keyboard>
                            <LineKeys className='line-one'>
                                <Keys className='line-one-key'/>

                                <ContainerKeysLineOne className='content-one'>
                                    <Keys className='line-one-key'/>
                                    <Keys className='line-one-key'/>
                                    <Keys className='line-one-key'/>
                                    <Keys className='line-one-key'/>
                                    <Keys className='line-one-key'/>
                                    <Keys className='line-one-key'/>
                                    <Keys className='line-one-key'/>
                                    <Keys className='line-one-key'/>
                                    <Keys className='line-one-key'/>
                                    <Keys className='line-one-key'/>
                                    <Keys className='line-one-key'/>
                                    <Keys className='line-one-key'/>
                                </ContainerKeysLineOne>

                                <ContainerKeysLineOne className='content-two'>
                                    <Keys className='line-one-key'/>
                                    <Keys className='line-one-key'/>
                                    <Keys className='line-one-key'/>
                                </ContainerKeysLineOne>

                                <Keys className='line-one-key'/>
                            </LineKeys>

                            <LineKeys className='line-two'>
                                <Keys className='line-two-first-key'/>
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys className='line-two-last-key'/>
                            </LineKeys>

                            <LineKeys className='line-three'>
                                <Keys className='line-three-first-key'/>
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                            </LineKeys>

                            <EnterKeyContainer>
                                <EnterKey />
                            </EnterKeyContainer>

                            <LineKeys className='line-four'>
                                <Keys className='line-four-first-key'/>
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                            </LineKeys>

                            <LineKeys className='line-five'>
                                <Keys className='line-five-first-key'/>
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys className='line-five-last-key'/>
                            </LineKeys>

                            <LineKeys className='line-six'>
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys />
                                <Keys className='space'/>
                                <Keys />
                                <Keys />
                                <ArrowKeyContainer>
                                    <BoxArrowKey>
                                        <ArrowKey />
                                        <ArrowKey />
                                    </BoxArrowKey>

                                    <BoxArrowKey>
                                        <ArrowKey />
                                        <ArrowKey />
                                    </BoxArrowKey>

                                    <BoxArrowKey>
                                        <ArrowKey />
                                        <ArrowKey />
                                    </BoxArrowKey>
                                </ArrowKeyContainer>
                            </LineKeys>
                        </Keyboard>
                    </KeyboardContainer>

                    <MouseContainer>
                        <Mouse />
                    </MouseContainer>
                </Computer>

                <LampContainer>
                    <Lamp>
                        <LampHeadContainer>
                            <LampParabol>
                                <LampParabolInt>
                                    <Ampule />
                                </LampParabolInt>
                            </LampParabol>
                            <LampHead />
                        </LampHeadContainer>
                        <LampLeg className='leg-top'/>
                        <Screw className='screw-one' />
                        <LampLeg className='leg-middle'/>
                        <Screw className='screw-two' />
                        <LampLeg className='leg-bottom'/>
                        <LampFoot />
                    </Lamp>
                    <RayOfLightContainer>
                        <RayOfLight />
                        <LightCicle />
                    </RayOfLightContainer>
                </LampContainer>


                <PencilBoxContainer>
                    <PencilBox>
                        <PencilBoxInt />
                    </PencilBox>

                    <PencilContainer>
                        <Pencil />
                    </PencilContainer>

                    <PencilContainer className='pencil-red'>
                        <Pencil className='pencil-red'/>
                    </PencilContainer>

                    <PencilContainer className='pencil-purple'>
                        <Pencil className='pencil-purple'/>
                    </PencilContainer>
                </PencilBoxContainer>
            </Foreground>
            
        </DeskContainer>
    )
}

export default Desk;
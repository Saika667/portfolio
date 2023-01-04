import { WrapperContainer } from './../utils/styles/Atoms'
import styled, { keyframes } from 'styled-components'
import './../utils/styles/SkillsPage.scoped.scss'
import ScrollingButton from '../components/buttons/ScrollingButton'
import { skillsTable } from '../data/tables'
import { useState } from 'react'
import { Leaf } from './../components/animates/Column'
import LittleFlower from './../components/animates/Element/LittleFlower'
import Title from './../components/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const subTitleAppearance = keyframes`
    0% {
        transform: translateX(-263px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`

const SubTitleContainer = styled.div`
    position: relative;
    opacity: 0;

    &.subtitle-one {
        animation: ${subTitleAppearance} 500ms 150ms linear forwards;
    }
    &.subtitle-two {    
        animation: ${subTitleAppearance} 500ms 2000ms linear forwards;
    }

    @media only screen and (min-width: 1300px) {
        max-width: 1400px; 
        margin: auto;
    }
`

const SubTitle = styled.h3`
    color: ${props => props.theme.fourth};
    padding: 23px 0 23px 53px;
    font-size: 21px;
`

const FlowerContainer = styled.div`
    position: absolute;
    top: 30px;
    left: 30px;
`

const LeafComponent = styled(Leaf)`
    top: 27px;
    transform: rotate(45deg);
`

function SkillsPage() {
    const [openedCategories, setOpenedCategories] = useState([])

    const categories = skillsTable.reduce(
        (acc, skill) =>
            acc.includes(skill.category) ? acc : acc.concat(skill.category),
        [] 
    )

    return (
        <WrapperContainer>
            <Title label={'Compétences et Diplômes'}/>

            <SubTitleContainer className='subtitle-one'>
                <FlowerContainer>
                    <LittleFlower centerColor={'pink'}/>
                </FlowerContainer>
                <LeafComponent />
                <SubTitle>Parcours</SubTitle>
            </SubTitleContainer>

            <div className="container">
                <div className='container-studies'>
                    <div className='container-studies-study'>
                        <h4>Baccalauréat Scientifique - Physique</h4>
                        <p>Lycée Claude de France, Romorantin-Lanthenay</p>
                        <span>2013</span>
                    </div>
                    <div className='container-studies-study'>
                        <h4>Licence Sciences, Technologies, Santé, Mention Science de la Vie</h4>
                        <p>Université François Rabelais, Tours</p>
                        <span>2017</span>
                    </div>
                    <div className='container-studies-study'>
                        <h4>Formation Développeur Web (RNCP niveau 5 - bac +2)</h4>
                        <p>Openclassrooms</p>
                        <span>2022</span>
                    </div>
                </div>
                <div className='timeline'>
                    <div className='timeline-bar'></div>
                    <div className='timeline-point firth'></div>
                    <div className='timeline-point second'></div>
                    <div className='timeline-point third'></div>
                </div>
            </div>

            <SubTitleContainer className='subtitle-two'>
                <FlowerContainer>
                    <LittleFlower centerColor={'pink'}/>
                </FlowerContainer>
                <LeafComponent />
                <SubTitle>Compétences</SubTitle>
            </SubTitleContainer>
            
            <div className='skills'>
                    {categories.map((cat) => (
                        <div className='skills-area' key={cat}>
                            <div className='skills-area-box'>
                                <div className='skills-area-box-title'>
                                    <h4>{cat}</h4>
                                    <ScrollingButton openedCategories={openedCategories} 
                                        setOpenedCategories={setOpenedCategories}
                                        category={cat} 
                                    />
                                </div>

                                <div className={`skills-area-box-content ${openedCategories.includes(cat) ? 'isOpen' : ''}`}>
                                    {skillsTable.map(({skill, category}) => (
                                        cat === category ? (
                                            <div key={skill} className='skills-area-box-content-item'>
                                                <FontAwesomeIcon icon={faCheck} />
                                                <p>{skill}</p>
                                            </div> 
                                        ) : null
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}       
            </div>
        </WrapperContainer>
    );
}

export default SkillsPage;

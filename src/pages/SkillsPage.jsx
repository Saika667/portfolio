import { Title, WrapperContainer } from './../utils/styles/Atoms'
import styled from 'styled-components'
import colors from '../utils/styles/colors'
import './../utils/styles/SkillsPage.scoped.scss'
import ScrollingButton from '../components/buttons/ScrollingButton'
import { skillsTable } from '../data/tables'
import { useState } from 'react'

const SubTitle = styled.h3`
    color: ${colors.fourth};
    margin: 30px 0;
    font-size: 28px;
`

const Skill = styled.p`
    margin: 0;
    color: ${colors.fourth};
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
            <Title>Compétences et Diplômes</Title>

            <SubTitle>Parcours</SubTitle>
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

            <SubTitle>Compétences</SubTitle>
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
                                            <Skill key={skill}>{skill}</Skill> 
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

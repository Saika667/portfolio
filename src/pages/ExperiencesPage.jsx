import { Title, WrapperContainer } from './../utils/styles/Atoms'
import { experiencesTable } from '../data/tables'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicroscope } from '@fortawesome/free-solid-svg-icons'
import { faSyringe } from '@fortawesome/free-solid-svg-icons'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'
import './../utils/styles/ExperiencesPage.scoped.scss'
import { useState } from 'react'

function ExperiencesPage() {
    const [activeCategory, setActiveCategory] = useState('')
    return (
        <WrapperContainer>
            <Title>Expériences Professionelles</Title>

            <div className='menu'>
                <div className='menu-exp'
                onClick={() => setActiveCategory('')}>
                    <div className='menu-exp-icon'>
                        <FontAwesomeIcon icon={faGlobe} />
                    </div>
                    <h3>
                        Expérience Professionnelle Globale   
                    </h3>
                </div>
                <div className='menu-exp'
                onClick={() => setActiveCategory('lab')}>
                    <div className='menu-exp-icon'>
                        <FontAwesomeIcon icon={faMicroscope} />
                    </div>
                    <h3>
                        Expérience Professionnelle en Laboratoire
                    </h3>
                </div>
                <div className='menu-exp'
                onClick={() => setActiveCategory('dev')}>
                    <div className='menu-exp-icon'>
                        <FontAwesomeIcon icon={faComputer} /> 
                    </div>
                    <h3>
                        Expérience Professionnelle en Développement  
                    </h3>
                </div>
            </div>

            <div className='container'>
                {experiencesTable.map(({job, category, company, contract, date, id}) => (
                    !activeCategory || activeCategory === category ? (
                        <article key={id} className='container-job'>
                            <div className='container-job-icon'>
                                {category === 'lab' ? (
                                    <FontAwesomeIcon icon={faSyringe} />
                                ) : (
                                    <FontAwesomeIcon icon={faKeyboard} />
                                )}
                            </div>
                            <div className='container-job-desc'>
                                <h2>{job}</h2>
                                <p>
                                    {company} -  
                                    <span className='container-job-desc-contract'> {contract}</span> |
                                    <span className='container-job-desc-date'> {date}</span>
                                </p>
                            </div>
                        </article>
                    ) : null 
                ))}
                <div className='container-bar'></div>  
            </div>
        </WrapperContainer>
    );
}

export default ExperiencesPage;
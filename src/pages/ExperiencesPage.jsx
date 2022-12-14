import { WrapperContainer } from './../utils/styles/Atoms'
import { experiencesTable } from '../data/tables'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicroscope } from '@fortawesome/free-solid-svg-icons'
import { faSyringe } from '@fortawesome/free-solid-svg-icons'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'
import './../utils/styles/ExperiencesPage.scoped.scss'
import { useState } from 'react'
import Title from '../components/Title'
import Erlenmeyer from '../components/animates/Erlenmeyer'
import ScreenAnimate from '../components/animates/ScreenAnimate'

function ExperiencesPage() {
    const [activeCategory, setActiveCategory] = useState('')

    return (
        <WrapperContainer>
            <Title label={'Expériences Professionelles'} />

            <div className='menu'>
                <div className={`menu-exp ${activeCategory === '' ? 'active' : ''}`}
                onClick={() => setActiveCategory('')}>
                    <div className='menu-exp-icon'>
                        <FontAwesomeIcon icon={faGlobe} />
                    </div>
                    <h3>
                        Expérience Professionnelle Globale   
                    </h3>
                </div>
                <div className={`menu-exp ${activeCategory === 'lab' ? 'active' : ''}`}
                onClick={() => setActiveCategory('lab')}>
                    <div className='menu-exp-icon'>
                        <FontAwesomeIcon icon={faMicroscope} />
                    </div>
                    <h3>
                        Expérience Professionnelle en Laboratoire
                    </h3>
                </div>
                <div className={`menu-exp ${activeCategory === 'dev' ? 'active' : ''}`}
                onClick={() => setActiveCategory('dev')}>
                    <div className='menu-exp-icon'>
                        <FontAwesomeIcon icon={faComputer} /> 
                    </div>
                    <h3>
                        Expérience Professionnelle en Développement  
                    </h3>
                </div>
            </div>

            <div className='exp'>
                <div className='exp-left'>
                    {activeCategory === 'lab' && <Erlenmeyer />}
                    {(activeCategory === 'dev' || activeCategory === '') &&
                        <ScreenAnimate screenWidth={330} screenHeight={280}/>
                    }
                    {/*possibilité d'écrire: ['dev', ''].includes(activeCategory)*/}
                </div>          
                
                <div className='exp-container'>
                    {experiencesTable.map(({job, category, company, contract, date, id}) => (
                        !activeCategory || activeCategory === category ? (
                            <article key={`${activeCategory}-${id}`} className={`exp-container-job ${activeCategory}`}>
                                {/* on ajoute activeCategory à la key afin qu'elle change à chaque fois que l'on clique
                                sur un bouton du menu cela permet de trigger l'animation à chaque changement de catégorie */}
                                <div className='exp-container-job-icon'>
                                    {category === 'lab' ? (
                                        <FontAwesomeIcon icon={faSyringe} />
                                    ) : (
                                        <FontAwesomeIcon icon={faKeyboard} />
                                    )}
                                </div>
                                <div className='exp-container-job-desc'>
                                    <h2>{job}</h2>
                                    <p>
                                        {company} -  
                                        <span className='exp-container-job-desc-contract'> {contract}</span> |
                                        <span className='exp-container-job-desc-date'> {date}</span>
                                    </p>
                                </div>
                            </article>
                        ) : null 
                    ))}
                    <div className='exp-container-bar' key={activeCategory}></div>  
                </div>

                <div className='exp-right'>
                    {(activeCategory === 'lab' || activeCategory === '') && <Erlenmeyer />}       
                    {activeCategory === 'dev' && <ScreenAnimate screenWidth={330} screenHeight={280}/>}
                </div>
            </div>
        </WrapperContainer>
    );
}

export default ExperiencesPage;
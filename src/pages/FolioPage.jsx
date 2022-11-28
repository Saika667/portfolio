import { Title, WrapperContainer } from './../utils/styles/Atoms'
import './../utils/styles/FolioPage.scoped.scss'
import Project from '../components/Project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { projectsTable } from '../data/tables.js'
import { useState } from 'react';

function FolioPage() {
    const [slide, setSlide] = useState(0)

    function changeSlide(direction) {
        if (direction === 1) {
            if (slide === projectsTable.length - 1) {
                setSlide(0)
            } else {
                setSlide(slide + 1)
            }
        } else {
            if (slide === 0) {
                setSlide(projectsTable.length - 1)
            } else {
                setSlide(slide - 1)
            }
        }
    }

    return (
        <WrapperContainer>
            <Title>Portfolio</Title>
            <div className='container'>
                <div className='container-before'
                onClick={() => changeSlide(-1)}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <div className='container-project'>
                    {projectsTable.map((project, index) => (
                        slide === index && 
                            <Project image={project.cover}
                                key={index}
                                title={project.name}
                                technologies={project.technologies}
                                skills={project.skills}
                                projectId={project.id}
                            />
                    ))}
                </div>
                <div className='container-after'
                onClick={() => changeSlide(1)}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        </WrapperContainer>
    );
}

export default FolioPage;
import { WrapperContainer } from './../utils/styles/Atoms'
import RedirectButton from '../components/buttons/RedirectButton';
import Column from '../components/animates/Column';
import CornerFlower from '../components/animates/CornerFlower';
import {useParams} from 'react-router-dom';
import { projectsTable } from '../data/tables.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowPointer } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './../utils/styles/ProjectPage.scoped.scss'
import Title from '../components/Title'

function ProjectPage() {
    const { projectId } = useParams();
    console.log(projectId);
    //filter renvoie un tableau d'élément trouvé
    //TODO: si project = tableau vide alors erreur 404
    const project = projectsTable.filter(project => project.id === projectId)[0];
    console.log(project);
    
    return (
        <WrapperContainer>
            <Title label={project.name} />

            <article className='project'>
                <div className='project-desc'>
                    <CornerFlower className={'top'}/>
                    {project.openclassroom === true ? (
                        <p className='project-desc-formation'>
                            Ce projet a été réaliser dans le cadre de la formation <span>Développeur Web</span> chez <span>Openclassrooms</span>.
                        </p>
                    ) : null}

                    <div className='project-desc-div scenario'>
                        <h3>Scénario du Projet</h3>
                        <p>{project.context}</p>
                    </div>

                    <div className='project-desc-div tech'>
                        <h3>Technologies utilisées</h3>
                        <div className='project-desc-div-techno'>
                            {project.technologies.map((techno, index) => (
                                <div key={index}>
                                    <FontAwesomeIcon icon={techno.logo} />
                                    <span>{techno.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='project-desc-div spec'>
                        <h3>Critères d'acceptations et spécifications du projet</h3>
                        <ul>
                            {project.specifications.map((spec, index) => (
                                <li key={index}>{spec}</li>
                            ))}
                        </ul>  
                    </div>

                    <div className='project-desc-div skill'>
                        <h3>Compétences évaluées</h3>
                        <ul>
                            {project.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>

                    <div className='project-desc-div code'>
                        <h3>Code source et accès projet</h3>
                        <div className='project-desc-div-btn'>
                        <RedirectButton url={project.code} icon={faGithub} label={"Code"}/>
                        <RedirectButton url={project.code} icon={faArrowPointer} label={"Projet"}/>
                        </div>
                    </div>
                    <CornerFlower className={'bottom'}/>
                </div>

                <div className='project-column'>
                    <Column />
                </div>

                <div className='project-illust'>
                    {project.images.length === 0 ? (
                        <img src={project.cover} alt="project cover" />
                    ) : (
                        project.images.map((image, index) => (
                            <div className='project-illust-picture'>
                                <p>{image.caption}</p>
                                <img src={image.image} alt={image.caption} key={index}/>
                            </div>
                        ))
                    )}
                </div>
            </article>
        </WrapperContainer>
    );
}

export default ProjectPage;
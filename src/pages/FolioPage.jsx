import { WrapperContainer } from './../utils/styles/Atoms'
import './../utils/styles/FolioPage.scoped.scss'
import Project from '../components/Project'
import { projectsTable } from '../data/tables.js'
import { useState } from 'react'
import Title from '../components/Title'
import Svg from '../components/Svg'

function FolioPage() {
    const [filters, setFilters] = useState([])
    
    function toggleFilter(filterName) {
        let copy = [...filters]
        let indexOf = copy.indexOf(filterName);
        if (indexOf > -1) {
            // Attention splice modifie directement copy (pas besoin d'assigner le retour à une variable)
            // Le retour de splice est un tableau contenant les elts supprimés
            copy.splice(indexOf, 1)
            setFilters(copy)
        } else {
            setFilters([...copy, filterName])
        }
    }

    const technologies = projectsTable.map(({ technologies }) => technologies)
    // Flat permet d'enlever une profondeur de tableau
    const flatTechnologies = technologies.flat(1)
    // flatTechnologies.map => crée un tableau de tableau sans unicité ([name, {name, logo}])
    // new Map transforme le résultat du .map en [name: {name, logo}]
    // Pas possible d'avoir 2 fois la même clé dans un tableau donc suppression des doublons
    const uniqueTechnologies = [...new Map(flatTechnologies.map(item => [item["name"], item])).values()]

    return (
        <WrapperContainer>
            <Title label={'Portfolio'} />

            <div className='container'>
                <div className='container-filter'>
                    {uniqueTechnologies.map((techno) => (
                        <div className={`container-filter-elt ${filters.includes(techno.name) ? 'active' : ''}`}
                            key={techno.name}
                            onClick={() => toggleFilter(techno.name)}
                        >
                            <Svg type={'filter'} image={techno.logo}/>
                            <span>{techno.name}</span>
                        </div>
                    ))}
                </div>

                <div className='container-project'>
                    {projectsTable.map((project, index) => (
                        (filters.length === 0 || 
                        // some = filtre non strict à l'inverse de every
                        filters.some(technology => project.technologies.map((item) => item["name"]).includes(technology))) &&
                        //filters.every(technology => project.technologies.map((item) => item["name"]).includes(technology))) &&
                        <Project 
                            image={project.cover}
                            key={index}
                            title={project.name}
                            technologies={project.technologies}
                            skills={project.skills}
                            projectId={project.id}
                            openclassroom={project.openclassroom}
                        />
                    ))}
                </div>
            </div>
        </WrapperContainer>
    );
}

export default FolioPage;
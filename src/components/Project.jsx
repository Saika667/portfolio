import SeeMore from './buttons/SeeMoreButton'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectArt = styled.article`
    width: 45%;
    position: relative;
    margin: 0 0 25px 0;

    &:before, &:after {
        content: '';
        position: absolute;
        height: 400px;
        width: 100%;
        z-index: 1; 
        transition: 300ms ease;      
    }

    &:before {
        background-color: ${props => props.theme.secondary};
        top: 0;
        right: 0;
    }

    &:after {
        background-color: ${props => props.theme.third};
        top: 0;
        right: 0;
    }

    &:hover {
        .description {
            display: flex;
            flex-direction: column;
        }

        &:before {
            top: -15px;
            right: 15px;
        }

        &:after {
            top: 15px;
            right: -15px;
        }
    }
    
    &.hidden {
        position: absolute;
        visibility: hidden;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;

        &:before, &:after {
            height: 250px; 
        }
    }
`
const ImageContainer = styled.div`
    height: 400px;
    position: relative;
    z-index: 2;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media only screen and (max-width: 768px) {
        height: 250px;
    }
`

const ProjectTitle = styled.h3`
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.fourth};
    min-width: 150px;
    text-align: center;
    padding: 10px;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 3;
`

const ProjectDesc = styled.div`
    display: none;
    color: ${props => props.theme.primary};
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 35px;
    background-color: rgba(55, 9, 74, 0.8);
    z-index: 2;

    & .techno {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin: 10px 0 0 0;

        span {
            padding: 0 0 0 10px;
        }

        div {
            margin: 0 0 10px 0;
        }
    }

    @media only screen and (max-width: 768px) {
        position: relative;
    }
`

function Project({image, title, technologies, skills, index, projectId}) {
    return (
        <ProjectArt key={index}>
            <ImageContainer>
                <img src={image} alt="logo projet"/>
            </ImageContainer>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectDesc className='description'>
                <p>Technologies :</p>
                <div className='techno'>
                    {technologies.map((techno, index) => (
                        <div key={index}>
                            <FontAwesomeIcon icon={techno.logo} />
                            <span>{techno.name}</span>
                        </div>
                    ))}
                </div> 
                <p>Compétences évaluées :</p>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <SeeMore path={projectId} />
            </ProjectDesc>
        </ProjectArt>
    )
  }
  
  export default Project
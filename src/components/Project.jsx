import SeeMore from './buttons/SeeMoreButton'
import styled /*, { keyframes }*/ from 'styled-components'
import colors from '../utils/styles/colors'

/*
const moveArtRight = keyframes`
    from {

    }
    to {

    }
`*/

const ProjectArt = styled.article`
    width: 600px;
    position: relative;
    margin: auto;

    &:before, &:after {
        content: '';
        position: absolute;
        height: 460px;
        width: 600px;
        z-index: 1; 
        transition: 300ms ease;      
    }

    &:before {
        background-color: ${colors.secondary};
        top: 0;
        right: 0;
    }

    &:after {
        background-color: ${colors.third};
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
`
const ImageContainer = styled.div`
    height: 460px;
    position: relative;
    z-index: 2;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ProjectTitle = styled.h3`
    background-color: ${colors.primary};
    color: ${colors.fourth};
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
    color: ${colors.fourth};
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 35px;
    background-color: rgba(55, 9, 74, 0.8);
    z-index: 2;
`

function Project({image, title, technologies, skills, index, projectId}) {
    console.log(projectId);
    return (
        <ProjectArt key={index}>
            <ImageContainer>
                <img src={image} alt="logo projet"/>
            </ImageContainer>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectDesc className='description'>
                <p>Technologies :</p>
                <ul>
                    {technologies.map((techno, index) => (
                        <li key={index}>{techno}</li>
                    ))}
                </ul> 
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
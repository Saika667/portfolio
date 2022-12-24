import SeeMore from './buttons/SeeMoreButton'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ArrowButton from './buttons/ArrowButton'
import { useContext, useState } from 'react';
import { GlobalContext } from '../utils/context/global'

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
        @media only screen and (min-width: 993px) {
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
    }
    
    &.hidden {
        position: absolute;
        visibility: hidden;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;

        &:before, &:after {
           display: none;
        }
    }

    @media only screen and (min-width: 769px) and (max-width: 992px) {
        &:before, &:after {
           display: none;
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
        max-width: 350px;
    }

    @media only screen and (min-width: 769px) and (max-width: 992px) {
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

    @media only screen and (max-width: 768px) {
       top: 210px;
       height: 20px;
    }

    @media only screen and (min-width: 769px) and (max-width: 992px) {
        top: 210px;
        height: 20px;
    }
`

const ProjectDesc = styled.div`
    display: none;
    color: #F2EBE5;
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
    //même fonctionnement tablet et téléphone
    @media only screen and (max-width: 992px) {
        display: flex;
        position: relative;
        flex-direction: column;
        padding: 0;
        height: 0;
        transition: all 300ms;
        overflow: hidden;

        &.open {
            height: fit-content;
            padding: 20px;
        }
    }
`

function Project({image, title, technologies, skills, index, projectId}) {
    const [isOpenDesc, setOpenDesc] = useState(false)
    const { device } = useContext(GlobalContext)
    
    return (
        <ProjectArt key={index}>
            <ImageContainer>
                <img src={image} alt="logo projet"/>
            </ImageContainer>
            <ProjectTitle>{title}</ProjectTitle>

            {device === 'mobile' && <ArrowButton isOpenDesc={isOpenDesc} setOpenDesc={setOpenDesc}/>}
            {device === 'tablet' && <ArrowButton isOpenDesc={isOpenDesc} setOpenDesc={setOpenDesc}/>}

            <ProjectDesc className={`description ${isOpenDesc ? 'open' : ''}`}>
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
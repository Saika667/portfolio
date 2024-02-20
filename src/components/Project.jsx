import SeeMore from './buttons/SeeMoreButton'
import styled, { useTheme } from 'styled-components'
import ArrowButton from './buttons/ArrowButton'
import { useContext, useState } from 'react'
import { GlobalContext } from '../utils/context/global'
import Svg from './Svg'

const ProjectArt = styled.article`
    width: 45%;
    position: relative;
    margin: 0 0 19px 0;

    .description {
        font-size: 13px;
    }

    &:before, &:after {
        content: '';
        position: absolute;
        height: 300px;
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
                top: -11px;
                right: 11px;
            }

            &:after {
                top: 11px;
                right: -11px;
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
    height: 300px;
    position: relative;
    z-index: 2;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media only screen and (min-width: 1300px) {
        max-height: 400px; 
    }
`

const ProjectTitle = styled.h3`
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.fourth};
    font-size: 13px;
    min-width: 113px;
    text-align: center;
    padding: 8px;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 3;

    @media only screen and (max-width: 992px) {
        top: 269px;
        height: 15px;
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
    padding: 26px;
    background-color: rgba(55, 9, 74, 0.8);
    z-index: 2;

    & .techno {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin: 8px 0 0 0;

        span {
            padding: 0 0 0 8px;
        }

        div {
            margin: 0 0 8px 0;
            display: flex;
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
            padding: 15px;
        }
    }
`

function Project({image, title, technologies, skills, index, projectId, openclassroom}) {
    const [isOpenDesc, setOpenDesc] = useState(false)
    const { device } = useContext(GlobalContext)
    console.log(openclassroom)
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
                            <Svg type={'folio'} image={techno.logo} />
                            <span>{techno.name}</span>
                        </div>
                    ))}
                </div> 
                {openclassroom ? 
                    <p>Compétences évaluées :</p>
                    :
                    <p>Compétences :</p>
                }
                
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
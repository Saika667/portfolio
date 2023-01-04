import { WrapperContainer } from './../utils/styles/Atoms'
import styled from 'styled-components'
import BorderProfile from '../components/animates/BorderProfile'
import DownloadButton from '../components/buttons/DownloadButton'
import Title from '../components/Title'

export const AboutContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 23px;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }

    @media only screen and (min-width: 769px) and (max-width: 992px) {
        flex-direction: column;
    }

    @media only screen and (min-width: 1300px) {
        max-width: 1300px;
        margin-top: 50px;
    }
`

export const ProfileImage = styled.img`
    border-radius: 50%;
`

export const ParagContainer = styled.div`
    padding-left: 15px;
    color: ${props => props.theme.fourth};
    max-width: 450px;
    box-sizing: border-box;
`

const Parag = styled.p`
    padding: 0 0 23px 0;
`

const FormationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0 23px 0;
`

const Formation = styled.a`
    text-decoration: none;
    font-weight: bold;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.fourth};
    padding: 11px 23px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        color: ${props => props.theme.fourth}; 
        background-color: ${props => props.theme.third};
        transition: all 0.3s;
    }

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`
function HomePage() {
    return (
        <WrapperContainer>
            <Title label={'Accueil'} />

            <AboutContainer>
                <BorderProfile />
                <ParagContainer>
                    <Parag>
                        Je m'appelle Céline et j'ai 28 ans. J'ai commencé ma carrière professionnelle en tant que 
                        Technicienne de laboratoire puis Assistante QHSE en laboratoire Pharmaceutique et 
                        Nutraceutique.
                    </Parag>
                    <Parag>
                        Souhaitant changer de secteur d'activité j'ai décidé d'effectuer une reconversion 
                        professionnelle en tant que Développeuse Web. <br/>
                        J'ai suivis la formation Développeur Web, de 6 mois, chez Openclassrooms qui s'est terminé en 
                        Novembre 2022.
                    </Parag>
                    <Parag>
                        Désireuse d'en apprendre toujours plus dans ce domaine, je souhaiterai perfectionner mes 
                        nouvelles compétences. J'ai donc développé ce portfolio dans le but d'appréhender le framework 
                        React mais aussi de trouver une alternance pour une deuxième formation, de Développeur d'application 
                        JavaScript React chez Openclassrooms. 
                    </Parag>

                    <FormationContainer>
                        <Formation target='_blank' href='https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react'>
                            Developpeur d'application - JavaScript React
                        </Formation>
                    </FormationContainer>
                    
                    <Parag>
                        Je suis donc à la recherche d'une entreprise pour une alternance d'une durée de 24 mois
                        (3/4 jours par semaine). <br/>
                        Au plaisir de se rencontrer. <br/>
                        A bientot.
                    </Parag>
                    <DownloadButton />
                </ParagContainer>
            </AboutContainer>
        </WrapperContainer>
    );
}

export default HomePage;
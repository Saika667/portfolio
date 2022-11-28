import { Title, WrapperContainer } from './../utils/styles/Atoms'
import styled from 'styled-components'
import BorderProfile from '../components/animates/BorderProfile'
import colors from '../utils/styles/colors'
import DownloadButton from '../components/buttons/DownloadButton'

export const AboutContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 30px;
    align-items: center;
`

export const ProfileImage = styled.img`
    border-radius: 50%;
`

export const ParagContainer = styled.div`
    padding-left: 20px;
    color: ${colors.fourth};
    max-width: 600px;
    box-sizing: border-box;
`

const Parag = styled.p`
    padding: 0 0 30px 0;
`

function HomePage() {
    return (
        <WrapperContainer>
            <Title>Accueil</Title>
            <AboutContainer>
                <BorderProfile />
                <ParagContainer>
                    <Parag>
                        Je m'appelle Céline et j'ai 28 ans. J'ai commencer ma carrière professionnelle en tant que 
                        Technicienne de laboratoire puis Assistante QHSE en laboratoire Pharmaceutique et 
                        Nutraceutique. Souhaitant changer de secteur d'activité j'ai décidé d'effectuer une 
                        reconversion professionnelle en tant que Développeuse Web.
                    </Parag>

                    <Parag>
                        J'ai suivis la formation Développeur Web, de 6 mois, chez Openclassrooms qui s'est terminé en 
                        Novembre 2022. Désireuse d'en apprendre toujours plus dans ce domaine, je souhaiterai 
                        perfectionner mes nouvelles compétences, en réalisant une deuxième formation de 
                        Developpeur d'application - JavaScript React chez Openclassrooms, cette fois-ci en 
                        alternance.
                    </Parag>

                    <Parag>
                        Je suis donc à la recherche d'une entreprise pour une alternance d'une durée de 24 mois
                        (3/4 jours par semaine).
                        Au plaisir de se rencontrer.
                        A bientot.
                    </Parag>
                    <DownloadButton />
                </ParagContainer>
            </AboutContainer>
        </WrapperContainer>
    );
}

export default HomePage;
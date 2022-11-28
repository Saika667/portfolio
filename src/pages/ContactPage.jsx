import { Title, WrapperContainer } from './../utils/styles/Atoms'
import LabAnime from '../components/animates/LabAnime'
import Desk from '../components/animates/Desk';

function ContactPage() {
    return (
        <WrapperContainer>
            <Title>Contact</Title>
            <Desk />
            <LabAnime />
        </WrapperContainer>
    );
}

export default ContactPage;
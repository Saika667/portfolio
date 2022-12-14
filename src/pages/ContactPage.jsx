import { WrapperContainer } from './../utils/styles/Atoms'
import Title from '../components/Title';
import LabAnime from '../components/animates/LabAnime'
import Desk from '../components/animates/Desk';

function ContactPage() {
    return (
        <WrapperContainer>
            <Title label={'Contact'} />
            <Desk />
            <LabAnime />
        </WrapperContainer>
    );
}

export default ContactPage;
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import { CakeSection, AboutSection } from '../components/Section';
import { Container, Divider } from 'semantic-ui-react';

export default function Homepage() {
    var mobile = window.innerWidth <= 750
    return <>
        <Navbar />
        <Container>
            <Hero image={'url(/smores-cake-slice.jpg)'} height='50vw' />
            <AboutSection />
            <Hero image={'url(/happy-birthday-mark-cake.jpg)'} height='50vw' />
            <Divider style={{ fontSize: 18 }} section horizontal content='Featured Products' />
            <CakeSection sectionTitle='Trendy cakes' mobile={mobile} />
        </Container>
        <Contact />
    </>
}
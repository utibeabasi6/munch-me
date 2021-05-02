import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { AboutSection, CakeSection } from '../components/Section';
import { Container, Header } from 'semantic-ui-react';
import { CustomHeader } from '../components/CustomHeader';
import Contact from '../components/Contact';

export default function Homepage() {
    return <>
        <Navbar />
            <Hero/>
            <Container style={{width: "80vw"}}>
            <CustomHeader text="Products" />
            <Header.Content style={{textAlign: 'center'}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</Header.Content>
            <CakeSection/>
            <CustomHeader text="About us" />
            <AboutSection />
        </Container>
        <Contact/>
    </>
}
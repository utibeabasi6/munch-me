import Navbar from '../components/navbar';
import Hero from '../components/hero';
import { AboutSection, CakeSection } from '../components/section';
import { Container, Header } from 'semantic-ui-react';
import { CustomHeader } from '../components/custom_header';
import Contact from '../components/contact';

export default function Homepage() {
    return <>
        <Navbar />
        <Hero />
        <Container style={{ width: "80vw" }}>
            <CustomHeader text="Products" />
            <Header.Content style={{ textAlign: 'center' }}> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</Header.Content>
            <CakeSection />
            <CustomHeader text="About us" />
            <AboutSection />
        </Container>
        <Contact />
    </>
}
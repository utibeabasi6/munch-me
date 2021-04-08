import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { CakeSection, DesertSection } from '../components/Section';
import Contact from '../components/Contact';

export default function Homepage() {
    var mobile = window.innerWidth <= 750
    return <>
        <Navbar mobile={mobile} />
        <Hero mobile={mobile} />
        <CakeSection sectionTitle='Trendy cakes' mobile={mobile} />
        <DesertSection sectionTitle='Other mouth-watering deserts' mobile={mobile} />
        <Contact />
    </>
}
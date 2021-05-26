import Navbar from '../components/navbar';
import { CakeSection } from '../components/section';
import { Container, Grid, Segment, Image, Button, Icon } from 'semantic-ui-react';
import '../styles/homepage.css'
import Footer from '../components/footer';


export function Homepage() {
    return (<>
        <section className="hero">
            <Navbar />
            <Segment basic>
                <Container>
                    <Grid stackable verticalAlign='middle'>
                        <Grid.Column tablet={7}>
                            <span className="heroHeader" >Cakes</span>
                            <h1>Discover amazing & delicious cakes</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus.</p>
                            <Button color='red' content='Discover cakes' />
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Image className='heroImg' src='/hero_img.png' />
                        </Grid.Column>
                    </Grid>
                </Container>
            </Segment>
        </section>
        <section className='services'>
            <Segment basic>
                <Container>
                    <Grid centered verticalAlign='middle' stackable columns='equal'>
                        <Grid.Row>
                            <Grid.Column ><h1>Our Services</h1></Grid.Column>
                            <Grid.Column ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id amet.</p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row >
                            <Grid.Column textAlign='center'>
                                <img src='/table_icon.png' alt='table' />
                                <h4>Advanced ordering system</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Grid.Column>
                            <Grid.Column textAlign='center'>
                                <img src='/plate.png' alt='plate' />
                                <h4>Tasty cakes</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></Grid.Column>
                            <Grid.Column textAlign='center'>
                                <img src='/delivery_icon.png' alt='table' />
                                <h4>Super quick delivery</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </section>
        <section className='cakes'>
            <Segment basic>
                <Container>
                    <h3>Explore Our Cakes</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id amet.</p>
                    <CakeSection />
                </Container>
            </Segment>
        </section>
        <section className='app'>
            <Segment basic>
                <Container>
                    <Grid stackable verticalAlign='middle' centered>
                        <Grid.Row><Grid.Column width={6} >
                            <h1>Download the app for exciting deals</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt. </p>
                            <Button icon={<Icon inverted size='large' name='google play' />} color='black' content='Get it on Google play' />
                        </Grid.Column>
                            <Grid.Column width={6} fluid>
                                <Image className='heroImg' src='/app.png' />
                            </Grid.Column></Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </section>
        <Footer />
    </>
    )
}

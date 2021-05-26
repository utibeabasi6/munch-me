import { Container, Form, Grid, Button, Segment } from "semantic-ui-react";
import '../styles/footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <Segment basic>
                <Container textAlign='center'>
                    <h4>Get Notified about new amazing products</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. </p>
                    <Form><Form.Input placeholder='Email' action={<Button icon='arrow right' color='red' circular />} /></Form>
                    <Grid centered columns='equal'>
                        <Grid.Column><p>Product</p></Grid.Column>
                        <Grid.Column><p>Company</p></Grid.Column>
                        <Grid.Column><p>Learn more</p></Grid.Column>
                        <Grid.Column><p>Get in touch</p></Grid.Column>
                    </Grid>
                    <Grid centered>
                        <Grid.Column ><Button circular icon='whatsapp' /></Grid.Column>
                        <Grid.Column ><Button circular icon='facebook' /></Grid.Column>
                        <Grid.Column ><Button circular icon='instagram' /></Grid.Column>
                    </Grid>
                </Container>
            </Segment>
        </div>
    )
}

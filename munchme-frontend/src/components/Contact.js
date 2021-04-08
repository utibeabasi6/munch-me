import { Button, Container, Form, Grid, Header, Image, Input, TextArea } from 'semantic-ui-react';

export default function Contact() {
    return <>
        <Container textAlign='center'>
            <Header as='h2' content='Contact Us' /><Grid stackable columns={2}>
                <Grid.Column>
                    <Image src='/Saly-7.png' />
                </Grid.Column>
                <Grid.Column>
                    <Form >
                        <Input required placeholder='Username' fluid /><br />
                        <Input required type='email' placeholder='Email' fluid /><br />
                        <TextArea required placeholder='I want to...' /><br /><br />
                        <Button type='submit'>Submit</Button> </Form>
                </Grid.Column>
            </Grid></Container></>
}
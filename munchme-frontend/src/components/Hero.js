import { Button, Container, Header, Segment } from 'semantic-ui-react'

export default function Hero({ mobile }) {
    return <Segment inverted style={{ minHeight: 350, margin: 0, backgroundImage: 'url(/hero-bg.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} basic><Container textAlign='center'>
        <Header as='h1'
            inverted
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'bold',
                margin: mobile ? '1.5em' : '3em',

            }}>
            Munch me Confectioneries

        </Header>
        <Button content='Order now' size='large' />

    </Container></Segment>
}
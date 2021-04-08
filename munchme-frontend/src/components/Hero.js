import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react'

export default function Hero({ mobile }) {
    return <Segment inverted style={{ margin: 0, backgroundImage: 'url(/hero-bg.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} basic><Container text textAlign='center'>
        <Header
            as='h1'
            content='Munch me Confectioneries'
            inverted
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5em' : '3em',
            }}
        />
        <Header
            as='h2'
            content='Do whatever you want when you want to.'
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}
        />
        <Button primary size='huge'>
            Get Started
      <Icon name='right arrow' />
        </Button>
    </Container></Segment>
}
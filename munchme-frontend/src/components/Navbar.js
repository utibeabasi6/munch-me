import { useState } from 'react';
import { createMedia } from '@artsy/fresnel'
import { Link } from 'react-router-dom';
import { Menu, Button, Container, Icon } from 'semantic-ui-react';

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})

export default function Navbar({ mobile }) {
    const [visible, setvisible] = useState(false)
    return < MediaContextProvider >
        <Media at='mobile'><Menu inverted size='small' style={{ borderRadius: 0, margin: 0 }}>
            <Container>

                <Menu.Item onClick={() => setvisible(!visible)}>
                    <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button as='a' inverted>
                        Log in
        </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                        Sign Up
        </Button>
                </Menu.Item>
            </Container>

        </Menu></Media>
        <Media greaterThan='mobile'><Menu borderless inverted size='large' style={{ borderRadius: 0, margin: 0 }}>
            <Container>

                <Menu.Item content='Home' icon='home' as={Link} to='/home' />
                <Menu.Item content='Order' icon='birthday cake' as={Link} to='/order' />
                <Menu.Item content='About' icon='id card outline' as={Link} to='/about' />
                <Menu.Item position='right'>
                    <Button as='a' inverted>
                        Log in
        </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                        Sign Up
        </Button>
                </Menu.Item>
            </Container>

        </Menu></Media>
    </MediaContextProvider >


}


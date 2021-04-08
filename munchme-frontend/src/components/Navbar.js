import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button, Container, Icon } from 'semantic-ui-react';


export default function Navbar({ mobile }) {
    const [visible, setvisible] = useState(false)
    if (mobile) {
        return <Menu inverted size='small' style={{ borderRadius: 0, margin: 0 }}>
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

        </Menu>
    } else {
        return <Menu borderless inverted size='large' style={{ borderRadius: 0, margin: 0 }}>
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

        </Menu>
    }

}
import { Link } from 'react-router-dom';
import { Menu, Container, Header, Segment } from 'semantic-ui-react';

export default function Navbar() {
    return <Container><Segment basic>
        <Container textAlign='center'><Header as='h1' style={{ padding: '40px 0', fontSize: 40 }}>Munch Me Stores</Header></Container>
        <Menu fluid secondary style={{ padding: 0, fontWeight: '100', justifyContent: 'center', borderTop: '1px solid #ccc', borderBottom: '1px solid #ccc' }}>
            <Menu.Item as={Link} to='/' style={{ padding: 10, textTransform: 'uppercase', margin: '0 10px' }}>Home</Menu.Item>
            <Menu.Item as={Link} to='/all' style={{ padding: 10, textTransform: 'uppercase', margin: '0 10px' }}>All</Menu.Item>
            <Menu.Item as={Link} to='/cart' style={{ padding: 10, textTransform: 'uppercase', margin: '0 10px' }}>Cart</Menu.Item>
        </Menu>
    </Segment></Container>

}


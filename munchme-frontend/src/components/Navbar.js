import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container, Header, Segment } from 'semantic-ui-react';
import { CartContext } from './Cart';

export default function Navbar() {
    const { value } = useContext(CartContext)
    return <Container><Segment basic>
        <Container textAlign='center'><Header as='h1' style={{ padding: '40px 0', fontSize: 40 }}>Munch Me Stores</Header></Container>
        <Menu fluid secondary style={{ padding: 0, fontWeight: '100', justifyContent: 'center', borderTop: '1px solid #ccc', borderBottom: '1px solid #ccc' }}>
            <Menu.Item as={Link} to='/' style={{ padding: 10, textTransform: 'uppercase', margin: '0 10px' }}>Home</Menu.Item>
            <Menu.Item as={Link} to='/all' style={{ padding: 10, textTransform: 'uppercase', margin: '0 10px' }}>All</Menu.Item>
            <Menu.Item as={Link} to='/cart' style={{ padding: 10, textTransform: 'uppercase', margin: '0 10px' }}>Cart <span style={{ backgroundColor: 'black', color: 'white', borderRadius: '50%', padding: 5, margin: '0 3px' }}>{value}</span></Menu.Item>
        </Menu>
    </Segment></Container>

}


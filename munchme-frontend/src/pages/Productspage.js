import { Segment, Container, Header, Grid, Card, Button, ButtonGroup, Loader, Dimmer, Message } from 'semantic-ui-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { addToCart } from '../components/Cart';


export default function Productspage() {
    var mobile = window.innerWidth <= 750;
    const [data, setdata] = useState(null)
    const [error, seterror] = useState(null)
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/cakes').then(res => setdata(res.data)).catch(err => seterror(err));
    }, []);

    return <>
        <Navbar mobile={mobile} />
        <Segment basic>
            <Container textAlign='center'><Header size='huge'>
                Products
            </Header>
            </Container>
        </Segment>

        <Container>{
            error ? <Message negative>
                <Message.Header>We're sorry we can't apply that discount</Message.Header>
                <p>That offer has expired</p>
            </Message> : data ? <Segment basic textAlign='center'>
                <Container textAlign='center'><Grid stackable columns={4}>{data['results'].map((value, index) => <Grid.Column><Card
                    style={{ borderRadius: 0, border: 'none' }}
                    key={index}
                    meta={value['price'] + ' Naira'}
                    centered
                    image={value['image']}
                    header={value['name']}
                    description={value['description']}
                    extra={<ButtonGroup><Button basic color='green' onClick={() => { addToCart(value) }}>
                        Add to cart
                  </Button>
                        <Button as={Link} to='/order' basic color='red'>
                            Place order
                  </Button></ButtonGroup>}
                /></Grid.Column>)}</Grid></Container>
            </Segment> : <Segment basic style={{ minHeight: 100 }}>
                <Dimmer active>
                    <Loader size='small'>Loading</Loader>
                </Dimmer>
            </Segment>}</Container>
    </>
}

import { Button, Card, Container, Grid, Header, Message, Segment } from "semantic-ui-react";
import Navbar from "../components/Navbar";
import { removeFromCart, CartContext, getCart } from '../components/Cart';
import { Link } from "react-router-dom";
import { useContext, useState } from "react";

export default function Cartpage() {
    const [cart, setCart] = useState(getCart())
    const { setvalue } = useContext(CartContext)
    return <>
        <Navbar />
        <Segment basic>
            <Container textAlign='center'>
                <Header as='h2' content='Order page' />
            </Container>
        </Segment>
        <Container text>
            <Header as='h2' content='Your orders' />
        </Container>
        <Segment basic textAlign='center'>
            <Container >
                {cart['items'].length >= 1 ? <><Grid stackable columns={4}>{cart['items'].map((value, index) => <Grid.Column><Card
                    style={{ borderRadius: 0, border: 'none' }}
                    key={index}
                    meta={value['price'] + ' Naira'}
                    centered
                    image={value['image']}
                    header={value['name']}
                    description={value['description']}
                    extra={<Button basic color='red' onClick={() => {
                        setvalue(removeFromCart(value))
                        setCart(getCart())
                    }}>
                        Remove from cart
                  </Button>}
                /></Grid.Column>)}</Grid> <Button as={Link} to='/order/checkout' content='Proceed to checkout' /></> : <Message negative>
                    <Message.Header>Sorry, Your cart is empty</Message.Header>
                </Message>}
            </Container>
        </Segment>
    </>
}
import { Button, Container, Form, Grid, Header, Image, Input, Message, Segment, Table } from "semantic-ui-react";
import Navbar from "../components/Navbar";
import { getTotalPriceInCart, CartContext, getCart, removeFromCart, getTotalItemsInCart, addToCart, decrementFromCart, clearCart } from '../components/Cart';
import { useContext, useState } from "react";
import axios from "axios";
import { PaystackButton } from "react-paystack";
import { CustomButton } from "../components/CustomButton";

export default function Cartpage() {
    const [cart, setCart] = useState(getCart())
    const [totalPrice, setTotalPrice] = useState(getTotalPriceInCart())
    const { setvalue } = useContext(CartContext)
    const publicKey = "pk_test_18ac22cb2da3a4a97b91c5caf00eeb905fc04571"
    const amount = totalPrice * 100
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const componentProps = {
        email,
        amount,
        metadata: {
            name,
            phone,
        },
        publicKey,

        onSuccess: (e) => {
            clearCart()
            axios.post('https://munchme.herokuapp.com/api/send_email/', { email: email })
            window.location.pathname = '/'
        },
        onClose: () => alert("Wait! You need these cakes, don't go!!!!")
    }

    return <>
        <Navbar />
        <Segment basic>
            <Header as='h2' content='Your Cart' textAlign='center' />
        </Segment>
        <Segment basic >
            {cart['items'].length >= 1 ? <Container >
                <Table basic='very' celled collapsing padded style={{ width: '100%' }}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Product</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                            <Table.HeaderCell>Quantity</Table.HeaderCell>
                            <Table.HeaderCell>Total</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>{cart['items'].map((value, index) => <Table.Row>
                        <Table.Cell>
                            <Header as='h4' image>
                                <Image src={value['image']} />
                                <Header.Content>
                                    {value['name']}
                                    <Header.Subheader>{value['description']}</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>{value['price'] + ' Naira'}</Table.Cell>
                        <Table.Cell>{<Button attatched='left' icon='add' basic circular compact onClick={() => {
                            addToCart(value, 1)
                            setCart(getCart())
                            setvalue(getTotalItemsInCart())
                            setTotalPrice(getTotalPriceInCart())
                        }} />} {value['quantity']}{<Button attatched='right' basic circular compact icon='minus' style={{ marginLeft: 5 }} onClick={() => {
                            decrementFromCart(value, 1)
                            setCart(getCart())
                            setvalue(getTotalItemsInCart())
                            setTotalPrice(getTotalPriceInCart())
                        }} />}</Table.Cell>
                        <Table.Cell>{value['price'] * value['quantity'] + ' Naira'}</Table.Cell>
                        <Table.Cell>{<Button basic circular compact icon='x' color='red' onClick={() => {
                            removeFromCart(value)
                            setCart(getCart())
                            setvalue(getTotalItemsInCart())
                            setTotalPrice(getTotalPriceInCart())
                        }} />}</Table.Cell>
                    </Table.Row>)}</Table.Body></Table>
                <Grid stackable reversed='mobile' columns={2} >
                    <Grid.Column width={8} >
                        <Header>Please enter your payment details:</Header>
                        <Form>
                            <Input
                                required
                                fluid
                                placeholder='Name'
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            /><br /><br />
                            <Input
                                required
                                fluid
                                type="email"
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            /><br /><br />
                            <Input
                                required
                                fluid
                                type="tel"
                                placeholder='Phone'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            /><br /><br />
                            <CustomButton as={PaystackButton} content='Order Now' {...componentProps} />
                        </Form>
                    </Grid.Column>
                    <Grid.Column width={4}><Grid columns={2}>
                        <Grid.Column width={5}>
                            <Header size='small'>Subtotal:</Header>
                            <Header size='small' disabled>Shipping:</Header>
                            <Header size='small' >Total:</Header>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Header size='small'>{totalPrice} Naira</Header>
                            <Header size='small'>Free Shipping</Header>
                            <Header size='small'>{totalPrice} Naira</Header>
                        </Grid.Column>
                    </Grid></Grid.Column>
                </Grid>
            </Container> : <Container textAlign='center'><Message>
                <Message.Header>Sorry, Your cart is empty</Message.Header>
            </Message></Container>}
        </Segment>
    </>
}
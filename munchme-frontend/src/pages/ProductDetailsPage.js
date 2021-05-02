import Navbar from "../components/Navbar";
import { withRouter } from 'react-router-dom'
import { useState, useEffect, useContext } from "react";
import { Container, Loader, Grid, Header, Message, Segment, Dimmer, Image, Button, Input, Rating } from "semantic-ui-react";
import axios from 'axios'
import Contact from '../components/Contact'
import { addToCart, CartContext } from "../components/Cart";

function ProductDetailsPage(props) {
    const id = props.match.params.id
    const [data, setdata] = useState(null)
    const [error, seterror] = useState(null)
    const [quantity, setquantity] = useState(1)
    const { setvalue } = useContext(CartContext)
    useEffect(() => {
        axios.get('https://munchme.herokuapp.com/api/cakes/' + id).then(res => setdata(res.data)).catch(err => seterror(err));
    }, [id]);
    return (
        <>
            <Navbar />
            <Container style={{ marginBottom: 40 }}>
                {
                    error ? <Container textAlign='center'><Message negative >
                        <Message.Header>Sorry, an error occured!</Message.Header>
                    </Message></Container> : data ? <Segment basic textAlign='left'><Grid stackable columns='equal'><Grid.Column width={5}> <Image src={data['image']} size='large' />
                    </Grid.Column><Grid.Column>
                            <Header as='h1' style={{ fontSize: 40, lineHeight: 1.4, letterSpacing: 1.5 }}>{data['name']}</Header>
                            <Header as='h3' style={{ fontSize: 30, lineHeight: 1.4, letterSpacing: 1.5 }}>{data['price'] + ' Naira'}</Header>
                            <Header as='p' style={{ letterSpacing: 1.5, color: '#111', fontWeight: '200' }}>{data['description']}</Header>
                            <Rating defaultRating={data['rating']} maxRating={5} disabled />
                            <div style={{ marginBottom: 20 }}>
                                <Button attatched='left' compact circular basic icon='add' onClick={() => {
                                    let q = document.getElementById('quantity')
                                    if (q.value <= 10) {
                                        setquantity(parseInt(q.value) + 1)
                                    }
                                }} />
                                <Input min={1} max={10} id='quantity' type='number' style={{ width: 100, margin: '0 5px' }} value={quantity} onChange={(e) => {
                                    if (parseInt(e.target.value) <= 10) {
                                        setquantity(parseInt(e.target.value))
                                    }

                                }} />
                                <Button attatched='right' compact circular basic icon='minus' onClick={() => {
                                    let q = document.getElementById('quantity')
                                    if (q.value >= 1) {
                                        setquantity(parseInt(q.value) - 1)
                                    }
                                }} />
                            </div>
                            <Button color='green' onClick={() => {
                                setvalue(addToCart(data, quantity))
                                alert("Cart updated")
                            }}> Add to Cart</Button></Grid.Column></Grid></Segment> : <Segment basic style={{ minHeight: 100, }}>
                        <Dimmer active>
                            <Loader size='small'>Loading</Loader>
                        </Dimmer>
                    </Segment>}</Container>
            <Contact />
        </>
    )
}

export default withRouter(ProductDetailsPage)

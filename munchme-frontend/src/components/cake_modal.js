import { useContext, useState } from "react"
import { Button, Card, Header, Image, Modal, Rating } from "semantic-ui-react"
import { addToCart, CartContext } from "../services/cart"

export default function CakeModal({ index, value }) {
    const { setCartValue } = useContext(CartContext)
    const [quantity, setquantity] = useState(1)
    const [cakeId, setCakeId] = useState(null)
    return (
        <Modal
            onClose={() => {
                setquantity(1)
                setCakeId(null)
            }}
            onOpen={() => setCakeId(index)}
            open={cakeId === index}
            trigger={<Card
                fluid
                centered
                meta={'NGN ' + value['price']}
                image={value['image']}
                header={value['name']}
            />}>
            <Modal.Header>Cake details</Modal.Header>
            <Modal.Content image>
                <Image size='medium' src={value['image']} wrapped />
                <Modal.Description>
                    <Header>{value['name']}</Header>
                    <p>
                        {value['description']}
                    </p>
                    <p>{'NGN ' + value['price']}</p>
                    <Rating defaultRating={value['rating']} maxRating={5} disabled />
                    <div>
                        <Button compact circular basic icon='minus' onClick={() => {
                            let q = document.getElementById('quantity')
                            if (parseInt(q.innerText) >= 1) {
                                setquantity(parseInt(q.innerText) - 1)
                            }
                        }} />
                        <span style={{ marginRight: 5 }} id='quantity'>{quantity}</span>

                        <Button compact circular basic icon='add' onClick={() => {
                            let q = document.getElementById('quantity')
                            if (parseInt(q.innerText) <= 10) {
                                setquantity(parseInt(q.innerText) + 1)
                            }
                        }} /></div>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button
                    labelPosition='right'
                    content='Add to cart'
                    icon='shopping bag'
                    color='black' onClick={() => {
                        setCartValue(addToCart(value, quantity))
                        alert("Cart updated")
                        setquantity(1)
                        setCakeId(null)
                    }} />
                <Button
                    content="Close"
                    labelPosition='right'
                    icon='close'
                    onClick={() => {
                        setquantity(1)
                        setCakeId(null)
                    }}
                    negative
                />
            </Modal.Actions>
        </Modal>
    )
}

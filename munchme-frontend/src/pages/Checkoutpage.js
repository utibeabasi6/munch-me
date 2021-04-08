import { useState } from "react";
import Navbar from "../components/Navbar";
import { PaystackButton } from 'react-paystack';
import { Button, Container, Form, Input, Segment } from "semantic-ui-react";
import axios from "axios";

export default function Checkoutpage() {
    const publicKey = "pk_test_18ac22cb2da3a4a97b91c5caf00eeb905fc04571"
    const amount = 1000000
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
        text: "Buy Now",
        onSuccess: (e) => {
            setEmail("")
            setName("")
            setPhone("")
            axios.post('http://localhost:8000/api/send_email/', { email: email })
        },
        onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    }

    return (
        <>
            <Navbar mobile={true} />
            <Container><Segment textAlign='center'>
                <Form>
                    <Input
                        placeholder='Name'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /><br /><br />
                    <Input
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /><br /><br />
                    <Input
                        type="telephone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    /><br /><br />
                    <Button as={PaystackButton} content='Buy Now' {...componentProps} />
                </Form>
            </Segment></Container>
        </>
    )
}
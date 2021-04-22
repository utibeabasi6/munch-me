import { Segment, Card, Button, Grid, Dimmer, Loader, Message, Rating } from 'semantic-ui-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function CakeSection() {
    const [error, seterror] = useState(null)
    const [data, setdata] = useState(null)
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/cakes').then(res => setdata(res.data)).catch(err => seterror(err));
    }, []);

    return <Segment basic textAlign='center'>
        {error ? <Message negative>
            <Message.Header>Sorry, an error occured!</Message.Header>
        </Message> : data ? <Grid textAlign='center' stackable columns={4}> {data['results'].slice(0, 4).map((value, index) => <Grid.Column key={index}><Card
            style={{ borderRadius: 0, border: 'none', boxShadow: 'none' }}
            meta={value['price'] + ' Naira'}
            centered
            image={value['image']}
            header={value['name']}
            description={<Rating defaultRating={value['rating']} maxRating={5} disabled />}
            extra={<Button as={Link} to={'/view/' + value.id} color='green' basic content='View Cake' />}
        /></Grid.Column>)}<Button as={Link} style={{ margin: 20 }} to='/all' content='View all' size='large' /> </Grid> : <Segment style={{ minHeight: 100 }}>
            <Dimmer active>
                <Loader size='small'>Loading</Loader>
            </Dimmer>
        </Segment>}
    </Segment>
}


export function AboutSection() {
    return (
        <Segment basic>
            <Card.Group>
                <Card style={{ minHeight: '150px', padding: 40, borderRadius: 0, border: '0.5px solid #ddd', boxShadow: 'none' }} centered>
                    <Card.Content textAlign='center'>
                        <img src='/icon-cal.svg' alt="calender" />
                        <Card.Header style={{ margin: '5px 0 10px', textTransform: 'uppercase', letterSpacing: '.15em' }}>24/7 Customer Service</Card.Header>
                        <Card.Description style={{ fontSize: 16, margin: '20 0' }}>Call Us Any Time</Card.Description>
                    </Card.Content>
                </Card>
                <Card style={{ minHeight: '150px', padding: 40, borderRadius: 0, border: '0.5px solid #ddd', boxShadow: 'none' }} centered>
                    <Card.Content textAlign='center'>
                        <img src='/icon-service.svg' alt="package" />
                        <Card.Header as='h4' style={{ margin: '5px 0 10px', textTransform: 'uppercase', letterSpacing: '.15em' }}>Easy online returns</Card.Header>
                        <Card.Description style={{ fontSize: 16, margin: '20 0' }}>Send Within 30 Days</Card.Description>
                    </Card.Content>
                </Card>
                <Card style={{ minHeight: '150px', padding: 40, borderRadius: 0, border: '0.5px solid #ddd', boxShadow: 'none' }} centered>
                    <Card.Content textAlign='center'>
                        <img src='/icon-package.svg' alt="service" />
                        <Card.Header style={{ margin: '5px 0 10px', textTransform: 'uppercase', letterSpacing: '.15em' }}>Free shipping globally</Card.Header>
                        <Card.Description style={{ fontSize: 16, margin: '20 0' }}>Delivery in 4 Days</Card.Description>
                    </Card.Content>
                </Card></Card.Group>
        </Segment>
    )
}

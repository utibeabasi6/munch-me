import { Segment, Header, Card, Container, Button, Grid, Dimmer, Loader, Message } from 'semantic-ui-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function CakeSection(props) {
    const [error, seterror] = useState(null)
    const [data, setdata] = useState(null)
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/cakes').then(res => setdata(res.data)).catch(err => seterror(err));
    }, []);

    console.log(data);
    return <Segment basic textAlign='center'>
        <Header as='h2' content={props.sectionTitle} />

        {error ? <Message negative>
            <Message.Header>We're sorry we can't apply that discount</Message.Header>
            <p>That offer has expired</p>
        </Message> : data ? <Container><Grid textAlign='center' stackable columns={4}> {data['results'].slice(0, 4).map((value, index) => <Grid.Column ><Card
            style={{ borderRadius: 0, border: 'none' }}
            key={index}
            centered
            image={value['image']}
            header={value['name']}
            description={value['description']}
            extra={value['price'] + ' Naira'}
        /></Grid.Column>)}<Button as={Link} style={{ margin: 20 }} to='/cakes/all' content='View all' size='large' /> </Grid></Container> : <Segment style={{ minHeight: 100 }}>
            <Dimmer active>
                <Loader size='small'>Loading</Loader>
            </Dimmer>
        </Segment>}
    </Segment>
}

export function DesertSection(props) {
    const [error, seterror] = useState(null)
    const [data, setdata] = useState(null)
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/cakes').then(res => setdata(res.data)).catch(err => seterror(err));
    }, []);

    return <Segment basic textAlign='center' inverted>
        <Header as='h2' content={props.sectionTitle} />

        {error ? <Message negative>
            <Message.Header>We're sorry we can't apply that discount</Message.Header>
            <p>That offer has expired</p>
        </Message> : data ? <Container><Grid textAlign='center' stackable columns={4}>{data['results'].slice(4, 8).map((value, index) => <Grid.Column><Card
            style={{ borderRadius: 0, border: 'none' }}
            key={index}
            centered
            image={value['image']}
            header={value['name']}
            description={value['description']}
            extra={value['price'] + ' Naira'}
        /></Grid.Column>)}<Button as={Link} style={{ margin: 20 }} to='/deserts/all' content='View all' size='large' /></Grid></Container> : <Segment basic style={{ minHeight: 100 }}>
            <Dimmer active>
                <Loader size='small'>Loading</Loader>
            </Dimmer>
        </Segment>}</Segment>

}

import { Segment, Card, Button, Grid, Dimmer, Loader, Message, Rating, Image, Header } from 'semantic-ui-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function CakeSection() {
    const [error, seterror] = useState(null)
    const [data, setdata] = useState(null)
    useEffect(() => {
        axios.get('https://munchme.herokuapp.com/api/cakes').then(res => setdata(res.data)).catch(err => seterror(err));
    }, []);
    return <Segment basic textAlign='center'>
        {error ? <Message negative>
            <Message.Header>Sorry, an error occured!</Message.Header>
        </Message> : data ? <><Grid textAlign='center' stackable columns={4}> {data['cakes'].slice(0, 4).map((value, index) => <Grid.Column key={index}><Card
            style={{ borderRadius: 0, border: 'none', boxShadow: 'none' }}
            meta={value['price'] + ' Naira'}
            centered
            image={value['image']}
            header={value['name']}
            description={<Rating defaultRating={value['rating']} maxRating={5} disabled />}
        /></Grid.Column>)}</Grid><Button as={Link} style={{ margin: 20 }} to='/cakes' content='View all' size='large' /> </> : <Segment style={{ minHeight: 100 }}>
            <Dimmer active>
                <Loader size='small'>Loading</Loader>
            </Dimmer>
        </Segment>}
    </Segment>
}


export function AboutSection() {
    return <Grid stackable>
        <Grid.Row centered>
            <Grid.Column width={6}>
                <Image src='/a-woman-in-her-shop.jpg' />
            </Grid.Column>
            <Grid.Column width={6}>

                <Header.Content style={{ lineHeight: 1.7 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Header.Content>
            </Grid.Column></Grid.Row>
        <Grid.Row centered>
            <Grid.Column width={6}>
                <Header.Content style={{ lineHeight: 1.7 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Header.Content>
            </Grid.Column>
            <Grid.Column width={6}>
                <Image src='/coffee-in-hands-working-on-the-couch.jpg' />
            </Grid.Column>
        </Grid.Row>
    </Grid>
}
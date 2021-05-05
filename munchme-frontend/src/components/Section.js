import { Segment, Grid, Dimmer, Loader, Message, Image, Header } from 'semantic-ui-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CustomButton } from './CustomButton';
import CakeModal from './CakeModal';

export function CakeSection() {
    const [error, seterror] = useState(null)
    const [data, setdata] = useState(null)

    useEffect(() => {
        axios.get('https://munchme.herokuapp.com/api/cakes').then(res => setdata(res.data)).catch(err => seterror(err));
    }, []);
    return <Segment basic textAlign='center'>
        {error ? <Message negative>
            <Message.Header>Sorry, an error occured!</Message.Header>
        </Message> : data ? <><Grid textAlign='center' stackable columns={3}> {data['cakes'].map((value, index) => <Grid.Column key={index}>
            <CakeModal value={value} index={index} />
        </Grid.Column>)}</Grid><CustomButton as={Link} to='/cakes' content='View all' size='large' /> </> : <Segment style={{ minHeight: 100 }}>
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
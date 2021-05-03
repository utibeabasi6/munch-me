import { Segment, Container, Header, Grid, Card, Loader, Dimmer, Message, Input, Rating } from 'semantic-ui-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { CustomButton } from '../components/CustomButton';


export default function Productspage() {
    const [data, setdata] = useState(null)
    const [error, seterror] = useState(null)
    const [filterValue, setFilterValue] = useState(200)
    useEffect(() => {
        axios.get('https://munchme.herokuapp.com/api/cakes').then(res => setdata(res.data)).catch(err => seterror(err));
    }, []);

    return <>
        <Navbar />
        <Container><Grid stackable><Grid.Column width={12}>
            {
                error ? <Container textAlign='center'><Message negative>
                    <Message.Header>Sorry, an error occured!</Message.Header>
                </Message></Container> : data ? <Segment basic textAlign='center'>
                    <Container textAlign='center'><Grid stackable columns={3}>{data['cakes'].filter((e) => e.price < filterValue).map((value, index) => <Grid.Column key={index}><Card
                        style={{ borderRadius: 0, border: 'none', boxShadow: 'none' }}
                        meta={value['price'] + ' Naira'}
                        centered
                        image={value['image']}
                        header={value['name']}
                        description={<Rating defaultRating={value['rating']} maxRating={5} disabled />}
                        extra={<CustomButton as={Link} to={'/view/' + value.id} content='View Cake' />
                        }
                    /></Grid.Column>)}</Grid></Container>
                </Segment> : <Segment basic style={{ minHeight: 100 }}>
                    <Dimmer active>
                        <Loader size='small'>Loading</Loader>
                    </Dimmer>
                </Segment>}</Grid.Column><Grid.Column width={4}>
                <Header>Filter by price</Header>
                <p>Max price: {filterValue} Naira</p>
                <Input type='range' min={0} max={300} value={filterValue} step={0.1} onChange={(e) => setFilterValue(parseInt(e.target.value))} />
            </Grid.Column>
        </Grid>
        </Container>
    </>
}

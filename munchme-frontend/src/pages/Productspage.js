import { Segment, Container, Header, Grid, Loader, Dimmer, Message, Input } from 'semantic-ui-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import CakeModal from '../components/CakeModal';


export default function Productspage() {
    const [data, setdata] = useState(null)
    const [error, seterror] = useState(null)
    const [filterValue, setFilterValue] = useState(500)
    const [searchKeyword, setsearchKeyword] = useState("")
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
                    <Container textAlign='center'><Grid stackable columns={3}>{data['cakes'].filter((e) => e.price < filterValue).map((value, index) => <Grid.Column key={index}>
                        <CakeModal value={value} index={index} />
                    </Grid.Column>)}</Grid></Container>
                </Segment> : <Segment basic style={{ minHeight: 100 }}>
                    <Dimmer active>
                        <Loader size='small'>Loading</Loader>
                    </Dimmer>
                </Segment>}</Grid.Column><Grid.Column width={4}>
                <Header>Filter by price</Header>
                <p>Max price: {filterValue} Naira</p>
                <Input type='range' min={0} max={1000} value={filterValue} step={0.1} onChange={(e) => setFilterValue(parseInt(e.target.value))} />
                <Header>Search cakes</Header>
                <p>Search keyword: {searchKeyword}</p>
                <Input value={searchKeyword} onChange={(e) => setsearchKeyword(e.target.value)} />
                <Header>Search Results:</Header>
                {
                    data ? data['cakes'].filter((e) => e.name.toLowerCase() === searchKeyword.toLowerCase()).map((value, index) =>
                        <CakeModal value={value} index={index} />) : null}
            </Grid.Column>
        </Grid>
        </Container>
    </>
}



import { Segment, Grid, Dimmer, Loader, Message, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CakeModal from './cake_modal';

function getData(setdata, setloading) {
    axios.get('https://munchme.herokuapp.com/api/cakes').then(res => {
        setloading(false)
        setdata(res.data)
    }).catch(err => {
        setloading(false)
    });
}

export function CakeSection() {
    const [data, setdata] = useState(null)
    const [loading, setloading] = useState(true)
    useEffect(() => {
        getData(setdata, setloading)
    }, []);
    return <>
        {loading ? <Segment style={{ minHeight: 100 }}>
            <Dimmer active>
                <Loader size='small'>Loading</Loader>
            </Dimmer>
        </Segment> : data ? <><Grid textAlign='center' stackable columns={3}> {data['cakes'].map((value, index) => <Grid.Column key={index}>
            <CakeModal value={value} index={index} />
        </Grid.Column>)}</Grid> </> : <Message negative>
            <Message.Header>Sorry, an error occured!</Message.Header>
            <Message.Content><Button style={{ marginTop: 5 }} color='red' content='Retry' onClick={() => {
                setloading(true)
                getData(setdata, setloading)
            }} /></Message.Content>
        </Message>}</>
}



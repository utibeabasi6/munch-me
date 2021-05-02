import { Header } from 'semantic-ui-react';

export function CustomHeader({text}) {
    return <Header as='h2' textAlign='center' content={text} style={{fontWeight: 'bold', color: "#333", margin: 20}}/>
     
}
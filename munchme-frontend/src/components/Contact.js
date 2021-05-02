import { Container, Icon, Segment } from 'semantic-ui-react'

export default function Contact() {
  return (<Segment basic><Container textAlign='center' style={{ justifyContent: 'space-around' }}>
    <a href='www.facebook.com'><Icon link name='facebook' size='big' /></a>
    <a href='instagram.com'><Icon link name='instagram' size='big' /></a>
    <a href='twitter.com'><Icon link name='twitter' size='big' /></a>
    <a href='whatsapp.com'><Icon link name='whatsapp' size='big' /></a>
  </Container></Segment>)
}

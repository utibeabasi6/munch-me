import { Segment, Grid, List } from 'semantic-ui-react'
import Hero from './Hero'

export default function Contact() {
  return (<>
    <Hero image={'url(/top-view-of-chocolate-cake-with-raspberry-coulis.jpg)'} height='50vh' />
    <Grid textAlign='center' stackable columns={1}>
      <Grid.Column>
        <Segment basic>
          <List>
            <List.Item icon='users' content='Utibeabasi Umanah' />
            <List.Item icon='marker' content='Nigeria' />
            <List.Item
              icon='mail'
              content={<a href='mailto:utibeabasiumanah6@gmail.com'>utibeabasiumanah6@gmail.com</a>}
            />
            <List.Item
              icon='linkify'
              content={<a href='https://portfolio-3c6e1.web.app/'>Utibeabasi Umanah</a>}
            />
          </List></Segment>
      </Grid.Column>
    </Grid></>
  )
}

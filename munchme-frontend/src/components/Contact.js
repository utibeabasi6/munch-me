import { Segment, Grid, List } from 'semantic-ui-react'
import Hero from './Hero'

export default function Contact() {
  return (<>
    <Hero image={'url(/top-view-of-chocolate-cake-with-raspberry-coulis.jpg)'} height='50vh' />
    <Grid stackable columns={3}>
      <Grid.Column>
        <Segment basic>
          <List>
            <List.Item icon='users' content='Semantic UI' />
            <List.Item icon='marker' content='New York, NY' />
            <List.Item
              icon='mail'
              content={<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>}
            />
            <List.Item
              icon='linkify'
              content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>}
            />
          </List></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment basic><List>
          <List.Item icon='users' content='Semantic UI' />
          <List.Item icon='marker' content='New York, NY' />
          <List.Item
            icon='mail'
            content={<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>}
          />
          <List.Item
            icon='linkify'
            content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>}
          />
        </List></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment basic><List>
          <List.Item icon='users' content='Semantic UI' />
          <List.Item icon='marker' content='New York, NY' />
          <List.Item
            icon='mail'
            content={<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>}
          />
          <List.Item
            icon='linkify'
            content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>}
          />
        </List></Segment>
      </Grid.Column>
    </Grid></>
  )
}

import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Grid, Header, Image, Segment } from 'semantic-ui-react'
import { CustomButton } from './custom_button'

// Photo by <a href="https://unsplash.com/@adijoshi11?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aditya Joshi</a> on <a href="https://unsplash.com/s/photos/white-cake?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
export default function Hero() {
    return <Segment basic>
        <Grid stackable centered>
            <Grid.Column width={8}>
                <Header as='h1' style={{ fontSize: 60 }}>The perfect cake every time!</Header>
                <Header.Content style={{ lineHeight: 1.7 }}> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.</Header.Content>
                <CustomButton as={Link} to='/cakes' content="Find your desert" />
            </Grid.Column>
            <Grid.Column width={5} textAlign='right'>
                <Image src='/Saly-22.png' />
            </Grid.Column>
        </Grid>
    </Segment>
}
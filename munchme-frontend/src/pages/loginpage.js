import React, { useContext, useState } from 'react'
import { Link, withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import Navbar from '../components/navbar'
import { AuthContext, loginUser } from '../services/auth'

export function LoginPage() {
    const { setuser } = useContext(AuthContext)
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [errors, seterrors] = useState({})
    return (<>
        <Navbar />
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src='/logo.png' /> Log-in to your account
      </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
                            value={email}
                            onChange={(e) => setemail(e.target.value)} />
                        <Header textAlign='left' size='small' color='red'>{errors['email']}</Header>
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                        <Header textAlign='left' size='small' color='red'>{errors['password']}</Header>
                        <Button onClick={
                            () => {
                                seterrors({})
                                fetch('http://localhost:3001/auth/login', {
                                    method: 'post',
                                    body: JSON.stringify({
                                        email: email,
                                        password: password
                                    }),
                                    headers: {
                                        'Content-type': 'application/json'
                                    }
                                }).then(value => value.json()).then(json => {
                                    if (json['errors']) seterrors(json['errors'])
                                    else {
                                        loginUser(json['user'])
                                        setuser(json['user'])
                                        seterrors({})
                                        window.location.assign('/')
                                    }
                                }).catch(err => { console.log(err); })
                            }
                        } fluid size='large'>
                            Login
          </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <Link to='/sign-up'>Sign Up</Link>
                </Message>
            </Grid.Column>
        </Grid></>
    )
}

export default withRouter(LoginPage)
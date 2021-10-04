import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Form, Button } from 'react-bootstrap';
import TextField from './textField'
import { Formik } from 'formik';
import * as yup from 'yup';


const SignUp = () => {
    const Validate = yup.object({
        email: yup.string()
            .email('Email is Invalid')
            .required('Required'),
        password: yup.string()
            .min(6, 'Password Must Be At Least 6 Characters')
            .required('Required'),

    })
    return (

        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={Validate}

        >
            {formik => (
                <div className="">


                    <Container className="login-container">
                        <Card style={{ width: '18rem', }}>
                            <Card.Body >
                                <Card.Title className="login-title" >Log In</Card.Title>

                            </Card.Body>
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-3 email" controlId="formBasicEmail">
                                        <TextField type="email" name="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                            Comment Here
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3 password" controlId="formBasicPassword">
                                        <TextField type="password" name="password" placeholder="Password" />
                                        <Form.Text className="text-muted">
                                            Comment Here
                                        </Form.Text>
                                    </Form.Group>

                                    <div className="btn-submit">
                                        <Button variant="dark" type="submit">
                                            Log In
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>

                    </Container>
                </div>
            )}

        </Formik>
    );
}

export default SignUp;

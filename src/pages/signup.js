import './signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, ListGroup, Form, Button } from 'react-bootstrap';
import TextField from './textField'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
const SignUp = () => {
  const Validate = yup.object({
    firstName: yup.string()
      .max(15, 'Must Be 15 Characters or Less')
      .required('Required'),
    lastName: yup.string()
      .max(20, 'Must Be 20 Characters or Less')
      .required('Required'),
    email: yup.string()
      .email('Email is Invalid')
      .required('Required'),
    password: yup.string()
      .min(6, 'Password Must Be At Least 6 Characters')
      .required('Required'),
    number: yup.string()
      .required('Required'),
  })

  const [submitCheck, setSubmitCheck] = useState(false)


  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        number: '',
      }}
      validationSchema={Validate}
    >

      {formik => (
        <div className="">

          <Container className="login-container">
            <Card style={{ width: '18rem', }}>
              <Card.Body className="cardBody">
                <Card.Title className="signup-title">Sign Up</Card.Title>

              </Card.Body>
              <ListGroup className="list-group-flush">
              </ListGroup>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <TextField type="email" name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      Comment Here
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <TextField type="password" name="password" placeholder="Password" />
                    <Form.Text className="text-muted">
                      Comment Here
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <TextField type="text" name="firstName" placeholder="First Name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <TextField type="text" name="lastName" placeholder="Last Name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <TextField type="text" name="number" placeholder="Number" />
                  </Form.Group>
                  <div className="btn-submit">
                    <Button variant="dark" type={`${formik.values.firstName !== "" && formik.values.lastName !== "" && formik.values.email !== "" && formik.values.password !== "" && formik.values.number !== "" ? " submit " : ""} `}>
                      Sign Up
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

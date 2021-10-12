import React from 'react';
import './packageCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,Card,ListGroup } from 'react-bootstrap';

const PackageCard =(props)=> {
    return (
        <Container >
        <p className="gallery-titles">Best Selling Packages</p>
            <Row className="justify-content-around">
            <Col lg={3} sm={6} >
        <Container className="card-package">

            <Card className="card-container">
  <Card.Header className="package-name">Family Trip To Sri Lanka</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item className="price-package">LKR : 50000</ListGroup.Item>
    <ListGroup.Item className="pkg-include">Package Includes </ListGroup.Item>
    <ListGroup.Item>  5 Days 6 Nights </ListGroup.Item>
    <ListGroup.Item>  3 Times Food  </ListGroup.Item>
    <ListGroup.Item>  Wild Nature </ListGroup.Item>
    <ListGroup.Item>  History </ListGroup.Item>
    <ListGroup.Item className="book-now">Book Now</ListGroup.Item>
  </ListGroup>
</Card>
        </Container>
        </Col>
        <Col lg={3} sm={6} >
        <Container className="card-package">

            <Card className="card-container">
  <Card.Header className="package-name">Romantic Gataway SriLanka</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item className="price-package">LKR : 150000</ListGroup.Item>
    <ListGroup.Item className="pkg-include">Package Includes </ListGroup.Item>
    <ListGroup.Item>  2 Days 3 Nights </ListGroup.Item>
    <ListGroup.Item>  Nature  </ListGroup.Item>
    <ListGroup.Item>  Beach </ListGroup.Item>
    <ListGroup.Item>  Mountain </ListGroup.Item>
    <ListGroup.Item className="book-now">Book Now</ListGroup.Item>
  </ListGroup>
</Card>
        </Container>
        </Col> <Col lg={3} sm={6} >
        <Container className="card-package">

            <Card className="card-container">
  <Card.Header className="package-name">Sri Lanka Adventure Tour</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item className="price-package">LKR : 100000</ListGroup.Item>
    <ListGroup.Item className="pkg-include">Package Includes </ListGroup.Item>
    <ListGroup.Item>  3 Days 4 Nights </ListGroup.Item>
    <ListGroup.Item>  Diving  </ListGroup.Item>
    <ListGroup.Item>  Snorkeing </ListGroup.Item>
    <ListGroup.Item>  Wild Life </ListGroup.Item>
    <ListGroup.Item className="book-now">Book Now</ListGroup.Item>
  </ListGroup>
</Card>
        </Container>
        </Col> <Col lg={3} sm={6} >
        <Container className="card-package">

            <Card className="card-container">
  <Card.Header className="package-name">Niyama Private Islands</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item className="price-package">LKR : 120000</ListGroup.Item>
    <ListGroup.Item className="pkg-include">Package Includes </ListGroup.Item>
    <ListGroup.Item>  3 Days 4 Nights </ListGroup.Item>
    <ListGroup.Item>  3 Times Food  </ListGroup.Item>
    <ListGroup.Item> Watersports </ListGroup.Item>
    <ListGroup.Item>  Beach </ListGroup.Item>
    <ListGroup.Item className="book-now">Book Now</ListGroup.Item>
  </ListGroup>
</Card>
        </Container>
        </Col>
        </Row>
        </Container>
    );
}

export default PackageCard;
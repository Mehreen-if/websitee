import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container id='about' className="my-5 px-5" style={{background:"#000", color:"white", boxShadow:"0px 0px 7px 2px gray"}}>
      <Row className="align-items-center">
        {/* Left Side */}
        <Col md={6} className="mb-4">
          <h2>Contact Us</h2>
          <p>
            Have any questions or feedback? Feel free to reach out to us using the form. 
            We'll get back to you as soon as possible!
          </p>
        </Col>

        {/* Right Side - Form */}
        <Col md={6}>
          <Form>
            <Form.Group controlId="formFullName" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your message..." />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;

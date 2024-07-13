import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const VolunteerRegistration = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: ''
    });
    const [registrationMessage, setRegistrationMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setRegistrationMessage('Registration successful!');
        setFormData({
            fullName: '',
            email: '',
            phoneNumber: '',
            message: ''
        });
    };

    return (
        <div className='d-flex mx-auto'>
            <div className='ms-5'>
            <Container className="py-5">
            <Row>
                <Col>
                    <h1>Volunteer with Us</h1>
                    <p>We have various volunteering opportunities available. Fill out the form below to join us in making a difference.</p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="fullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="phoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Enter your phone number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="message">
                            <Form.Label>Message (optional)</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter a message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {registrationMessage && <p className="text-success">{registrationMessage}</p>}
                        <Button className='mt-3' variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
            </div>
            <div style={{marginTop:'150px',marginLeft:'200px'}}>
                <img style={{height:'300px'}} src="data:image/jpeg;base64,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" alt="" />
            </div>
        </div>
        
    );
};

export default VolunteerRegistration;

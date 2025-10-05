import React from 'react';
import { useNavigate } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Marselo from '../assets/img/Maselo_hello.png'

export const HomePage = () => {
    const navigate = useNavigate();
    
    const handleLvl1 = () => {
        navigate("/Lvl1");
    };  
    const handleSignUp = () => {
        navigate("/signup");
    };

    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <h1 className='mt-3 mb-3 text-center text-light rounded border border-dark'>Welcome to NASA Fundación SpeedWagon</h1>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <img src={Marselo} className="img-fluid" alt="Responsive image" />
                    </Col>
                </Row>

                <Row className="justify-content-center text-center mb-5">
                    <Col lg={8} md={10} sm={12}>
                        <h1 className='display-4 fw-bold text-light bg-black'>🚀 Marselo: Your Simulation of Life in Space and Beyond</h1>
                        <p className="lead text-light mt-3">
                            Have you ever wondered what it would be like to live for months inside a space the size of a bus... hundreds of thousands of kilometers from Earth?
                        </p>
                        <p className="text-light">
                            The challenge isn't just getting there, but <strong>living</strong> there comfortably, efficiently, and sustainably.
                        </p>
                    </Col>
                </Row>

                <Row className="mb-5 align-items-center bg-dark p-4 rounded">
                    <Col md={6}>
                        <h2 className="text-warning">The Challenge Isn't Just Spatial 🌍</h2>
                        <p className="fs-5 text-light">
                            The problems of space habitability —<strong>lack of privacy, acoustic pollution, overlapping areas</strong>— are not exclusive to space.
                        </p>
                        <p className="fs-5 text-light">
                            We also face them on Earth: in submarines, trucks, and even in multi-family homes of just 50 square meters. Learning to live on Mars teaches us how to live better here.
                        </p>
                    </Col>
                    <Col md={6} className="text-center">
                        <Image src="/icono_gupo.ico" fluid rounded />
                    </Col>
                </Row>

                <Row className='text-center mb-2'>
                    <Col>
                        <h2 className='fw-bold mb-4 text-success bg-dark'>
                            ✨ Our Solution: The Marselo Platform
                        </h2>
                    </Col>
                </Row>

                <Row className="g-4 mb-5 text-center ">
                    {/* Note: Removed {1}, {2}, {3} as they appear to be placeholder numbers that don't render */}
                    <Col lg={4}>
                        <Card className="shadow-sm h-100">
                            <Card.Body>
                                <Card.Title>1. Personalize Your Aptitude</Card.Title>
                                <Card.Text>
                                    Register with your age, height, weight, and possible medical issues. <strong>Marselo</strong>, 
                                    our guide, will simulate your aptitude for life in space.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className="shadow-sm h-100">
                            <Card.Body>
                                <Card.Title>2. Explore the Optimized 3D Model</Card.Title>
                                <Card.Text>
                                    Access the 3D model of our <strong>three-level lunar habitat</strong>, 
                                    inspired by NASA. Discover how congested spaces have been optimized.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}> {/* Changed md={3} to lg={4} to ensure 3 cards fit evenly in a 12-column row */}
                        <Card className="shadow-sm h-100">
                            <Card.Body>
                                <Card.Title>3. Innovation in Habitability</Card.Title>
                                <Card.Text>
                                    Explore our key solutions: <strong>privacy curtains</strong>, anti-odor systems, non-reflective materials, and sound-absorbing coatings for noise control.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="justify-content-center text-center bg-light p-5 rounded shadow-lg mb-2">
                    <Col lg={8}>
                        <h2 className="fw-bold mb-3">🤝 Foster Collaboration and Impact</h2>
                        <p className="fs-5 mb-4">
                            We don't just educate; we foster <strong>collaboration</strong>. Each level allows you to share ideas to optimize coexistence. We seek to build a bridge between <strong>architecture, engineering, and human exploration</strong>.
                        </p>

                        {/* Botones principales de llamado a la acción */}
                        <Button variant="success" size="lg" className="me-3 mb-2" onClick={handleLvl1}>
                            Start Your Simulation with Marselo!
                        </Button>
                        <Button variant="outline-secondary" size="lg" className="mb-2" onClick={handleSignUp}>
                            Learn More About the Habitat
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
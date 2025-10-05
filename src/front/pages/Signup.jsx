import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Importa el nuevo componente de formulario
import MedicalForm from "./MedicalForm.jsx";
import ThreeDRouteMarcelo from "./ThreeDRouteMarcelo.jsx";

const Signup = () => {

    return (
        <>
            <Container className="my-5">
                <Row className="justify-content-center align-items-center">
                    <Col md="6">
                        <MedicalForm />
                    </Col>
                    <Col md="6">
                        <ThreeDRouteMarcelo />
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default Signup; 
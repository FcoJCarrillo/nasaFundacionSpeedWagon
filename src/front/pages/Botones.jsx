import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export const Botones = () => {
  const navigate = useNavigate();
  const handleLvl1 = () => {
    navigate("/Lvl1");
  };
  const handleLvl2 = () => {
    navigate("/Lvl2");
  };
  const handleLvl3 = () => {
    navigate("/Lvl3");
  };
  return (
    <>
      <div className="mt-3 mb-3 text-center">
        <Container className="justify-content-md-center">
          <Row>
            <Col md={4}><Button variant="outline-primary" onClick={handleLvl1} size="lg">Level 1</Button>
            </Col>
            <Col md={4}><Button variant="outline-primary" onClick={handleLvl2} size="lg">Level 2</Button>
            </Col>
            <Col md={4}><Button variant="outline-primary" onClick={handleLvl3} size="lg">Level 3</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
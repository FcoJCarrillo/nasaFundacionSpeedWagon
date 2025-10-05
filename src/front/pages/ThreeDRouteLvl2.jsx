import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import App3D from '../components/3d/App2.jsx';
import { LoadingButton } from '../components/LoadingButton.jsx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ThreeDRoute2 = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setData({ mensaje: "Datos obtenidos de la API" });
      setIsLoading(false);
    }, 2000);
  }, []);
  if (isLoading) {
    return <LoadingButton />;
  }
  return (
    <>

    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1 className='mt-3 mb-3 text-center rounded border border-dark'>Level 1</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
          <App3D />
      </Row>
    </Container>
      
    </>

  );
};

export default ThreeDRoute2;
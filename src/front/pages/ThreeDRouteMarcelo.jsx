import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import App3D from '../components/3d/Marcelo.jsx';
import { LoadingButton } from '../components/LoadingButton.jsx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ThreeDRoute1 = () => {
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
          <App3D />
      </Row>
    </Container>
      
    </>
  );
};

export default ThreeDRoute1;
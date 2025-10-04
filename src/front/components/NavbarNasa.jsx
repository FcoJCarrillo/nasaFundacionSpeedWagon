import { Link } from "react-router-dom";
import logoFrom from "../assets/img/icono_gupo.ico";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export const NavbarNasa = () => {

	return (
<Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logoFrom}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Fundacion Speedwagon
          </Navbar.Brand>
        </Container>
      </Navbar>
	);
};
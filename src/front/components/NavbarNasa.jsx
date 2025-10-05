import React from 'react';
import logoFrom from "../assets/img/icono_gupo.ico";
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav'; // Necesario para NavDropdown dentro de Navbar
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export const NavbarNasa = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const handleRocket = () => {
    navigate("/lvl1");
  };
  return (
    <Navbar className="bg-body-tertiary" expand="lg">
      <Container>
        {/* 1. Marca principal (a la izquierda) */}
        <Navbar.Brand onClick={handleHome} style={{ cursor: 'pointer' }}>
          <img
            alt=""
            src={logoFrom}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Fundacion Speedwagon
        </Navbar.Brand>
        <Nav> 
            <NavDropdown title={<i class="fas fa-info-circle"></i>} id="basic-nav-dropdown" className="ms-auto">
              <NavDropdown.Item><Button variant="outline-warning" onClick={handleHome} size="lg"><i className="fas fa-home"></i></Button></NavDropdown.Item>
              <NavDropdown.Item>
                <Button variant="outline-warning" onClick={handleRocket} size="lg"><i className="fas fa-rocket"></i></Button>
              </NavDropdown.Item>
            </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};
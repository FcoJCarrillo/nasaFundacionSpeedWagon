import React from 'react';
import logoFrom from "../assets/img/icono_gupo.ico";
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav'; // Necesario para NavDropdown dentro de Navbar
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

export const NavbarNasa = () => {
  const navigate = useNavigate();
  const handleLvl1 = () => {
    navigate("/");
  };
  return (
    <Navbar className="bg-body-tertiary" expand="lg">
      <Container>
        {/* 1. Marca principal (a la izquierda) */}
        <Navbar.Brand onClick={handleLvl1} style={{ cursor: 'pointer' }}>
          <img
            alt=""
            src={logoFrom}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Fundacion Speedwagon
        </Navbar.Brand>
        
        {/* Usamos un Nav para contener los elementos de navegación */}
        <Nav> 
            {/* 2. Clase clave: ms-auto (margin-start: auto) 
                 Esto empuja el NavDropdown hacia la derecha.
            */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="ms-auto">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};
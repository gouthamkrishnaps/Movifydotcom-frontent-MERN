import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
    
  return (
    <div>
        <Navbar className='shadow' expand="lg" data-bs-theme='dark' style={{backgroundColor:'black'}}>
        <Container>
            <h3 className='logoname text-light'>Movifydot<span style={{color:'red'}}>com</span></h3>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='m-auto'>
                <Link to={'/dashboard'} style={{textDecoration:'none',color:'white'}}>Admin Dashboard</Link>
            </Nav>
            <Nav className="text-light">
            <Form inline>
                <Row>
                <Col xs="auto">
                    <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2 rounded-pill"
                    />
                </Col>
                <Col xs="auto">
                    <Button style={{background:'transparent',border:'none'}} type="submit"><i style={{color:'white'}} className="fa-solid fa-magnifying-glass"></i></Button>
                </Col>
                </Row>
            </Form>
                {/* <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default Header
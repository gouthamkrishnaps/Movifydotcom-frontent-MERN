import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header({isAdmin}) {
    console.log(isAdmin);
  return (
    <div>
        <Navbar sticky='top' className='shadow' expand="lg" data-bs-theme='dark' style={{backgroundColor:'black'}}>
        <Container>
            <h3 className='logoname text-light'><Link  style={{textDecoration:'none',color:'white'}} to={'/home'}>Movifydot</Link><span style={{color:'red'}}>com</span></h3>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='m-auto'>

                <a href='/dashboard' className='btn btn-danger rounded-pill'>Admin Dashboard</a>

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
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default Header
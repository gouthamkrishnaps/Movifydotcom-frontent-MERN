import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


function Header() {
    const navigate = useNavigate()
    const location = useLocation();

    if (location.pathname === '/' || location.pathname === '/register') {
        
        return null;
    }
    const logout = ()=>{
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to logout from Movifydotcom?",
            icon: "warning",
            dangerMode: true,
        })
        .then(loginout => {
        if (loginout) {
            sessionStorage.removeItem("UserEmail")
            navigate('/')
            swal("Logged out!", "Your are successfully logged out of the website!", "success");
        }
        });
        
    }
    

  return (
    <div>
        <Navbar sticky='top' className='shadow' expand="lg" data-bs-theme='dark' style={{backgroundColor:'black'}}>
        <Container>
            <h3 className='logoname text-light'><Link  style={{textDecoration:'none',color:'white'}} to={'/home'}>Movifydot</Link><span style={{color:'red'}}>com</span></h3>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='m-auto'>
            {/* {isAdmin?
                <a href='/dashboard' className='btn btn-outline-light rounded-pill'>Admin Dashboard</a>:null
            } */}
            </Nav>
            <Nav className="text-light">
            {/* <Form inline>
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
            </Form> */}
            <Button variant='outline-light' className='rounded-pill' onClick={logout}>Logout <i class="fa-solid fa-right-from-bracket"></i></Button>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default Header
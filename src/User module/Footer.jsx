import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './Footer.css'
import { useLocation, useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate()
  const location = useLocation();

  if (location.pathname === '/' || location.pathname === '/register') {
      
      return null;
  }
  const logout = ()=>{
      sessionStorage.removeItem("UserEmail")
      navigate('/')
  }
  return (
    <div className='shadow text-light pt-5' style={{backgroundColor:'black'}}>
      <h3 className='logoname text-light text-center'>Movifydot<span style={{color:'red'}}>com</span></h3>

     <Container>
        <Row className='py-5'>
          <div className='d-flex justify-content-between'>
            <div>
              <h5>About Us</h5>
              <p style={{textAlign:'justify',color:'grey',width:'250px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi debitis totam facilis dolorum numquam obcaecati itaque rerum vero odio molestiae distinctio </p>
            </div>
            <div>
              <h5>Our Services</h5>
              <div className='about d-flex flex-column'>
                <span>Movie Search</span>
                <span>Theatre search</span>
                <span>Ticket Booking</span>
                <span>Seat slots</span>
                <span>Extra Offers</span>
              </div>
            </div>
            <div>
              <h5>Customer Care</h5>
              <div className='about d-flex flex-column'>
                <span>Movie Search</span>
                <span>Theatre search</span>
                <span>Ticket Booking</span>
                <span>Seat slots</span>
                <span>Extra Offers</span>
              </div>
            </div>
            <div>
              <h5>Follow Us</h5>
              <div className='about d-flex flex-column'>
                <span>Movie Search</span>
                <span>Theatre search</span>
                <span>Ticket Booking</span>
                <span>Seat slots</span>
                <span>Extra Offers</span>
              </div>
            </div>
          </div>
        </Row>
     </Container>
      <div className='pb-5'><p className='text-center'>Copyrights ©️ reserved @ Movifydotcom</p></div>
    </div>
  )
}

export default Footer
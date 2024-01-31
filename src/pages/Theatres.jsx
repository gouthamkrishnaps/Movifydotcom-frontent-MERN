import React from 'react'
import { Button, Container } from 'react-bootstrap'

function Theatres() {
  return (
    <div className='pb-2' style={{backgroundColor:'black'}}>
        <Container>
            <div className='text-light'>
                <h3>Available Theatres</h3>
                <hr />
                <h2 className='fw-bold'>I-Max LULLU</h2>
                <span>Location :</span>
                <h4>Timings</h4>
                <div className='d-flex gap-3'>
                    <a href='/slotbook' className='btn btn-outline-light rounded-pill'>11 am</a>
                    <a className='btn btn-outline-light rounded-pill'>11 am</a>
                    <a className='btn btn-outline-light rounded-pill'>11 am</a>
                </div>
    
                <hr />
                <h2 className='fw-bold'>Kavitha Theatre</h2>
                <span>Location :</span>
                <h4>Timings</h4>
                <div className='d-flex gap-3'>
                    <a href='/slotbook' className='btn btn-outline-light rounded-pill'>11 am</a>
                    <a className='btn btn-outline-light rounded-pill'>11 am</a>
                    <a className='btn btn-outline-light rounded-pill'>11 am</a>
                </div>
    
                <hr />
                <h2 className='fw-bold'>PVR movies Oberon mall</h2>
                <span>Location :</span>
                <h4>Timings</h4>
                <div className='d-flex gap-3 mb-3'>
                    <a href='/slotbook' className='btn btn-outline-light rounded-pill'>11 am</a>
                    <a className='btn btn-outline-light rounded-pill'>11 am</a>
                    <a className='btn btn-outline-light rounded-pill'>11 am</a>
                </div>
                
            </div>
        </Container>
    </div>
  )
}

export default Theatres
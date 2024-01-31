import React from 'react'
import './Seat.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SeatSlot() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className="movie-container d-flex justify-content-center align-items-center flex-column">
        <div className="showcase d-flex gap-4 text-light mt-5 mb-5">
            <div className='d-flex'>
                <div className="seat"></div>
                <h2>N/A</h2>
            </div>
            <div className='d-flex'>
                <div className="seat occupied"></div>
                <h2>Occupied</h2>
            </div>
            <div className='d-flex'>
                <div className="seat selected"></div>
                <h2>Selected</h2>
            </div>
        </div>
        <div className='seat-container'>
            <div className="screen"></div>
            <div className="rows">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="rows">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="rows">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="rows">
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
            </div>
            <div className="rows">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="rows">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="sea occupiedt"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="rows">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="rows">
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
            </div>
            <div className="rows">
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="rows">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat selected"></div>
                <div className="seat selected"></div>
                <div className="seat selected"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>

        </div>
        <div className="button w-25">
            <button onClick={handleShow}  className='btn btn-danger w-100 m-3 px-3 rounded'>Checkout</button>
        </div>
                <Modal className='' show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                  <Modal.Header closeButton>
                    <h1>Invoice</h1>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="img">
                      <img src="https://www.watchstation.com/on/demandware.static/-/Library-Sites-WatchStationSharedLibrary/default/dwd759a869/customer_care/payment/Mobile_Card_View@2x.png" alt=""  style={{width:'100%'}}/>
                    </div>
                    <form action="">
                      <div className='p-2'>
                        <label htmlFor='cardnum'>Card number</label>
                        <input className='form-control w-100 rounded ' id='cardnum' type="text" placeholder='3451 5678 2389 3754'/>
                      </div>
                      <div className='p-2'>
                        <label htmlFor='cardname'>Name on card</label>
                        <input className='form-control w-100 rounded ' id='cardname' type="text" placeholder='John Emmanual'/>
                      </div>
                      <div className="d-flex gap-2 w-100">
                        <div className='p-2 w-100'>
                          <label htmlFor="date">Expiry date</label>
                          <input className='form-control w-100 rounded ' id='date' type="date" placeholder=''/>
                        </div>
                        <div className='p-2 w-100'>
                          <label htmlFor="code">Security code</label>
                          <input className='form-control w-100  rounded ' id='code' type="password" placeholder='* * * *'/>
                        </div>
                      </div>
                    </form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button className='w-100' variant="primary" onClick={handleClose}>Pay $ 300</Button>
                  </Modal.Footer>
                </Modal>
    </div>
  )
}

export default SeatSlot
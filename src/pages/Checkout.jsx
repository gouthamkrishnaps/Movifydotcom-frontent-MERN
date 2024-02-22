import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import QRCode from 'react-qr-code';
import './checkout.css'
import { useParams } from 'react-router-dom';
import { getAllMoviesAPI } from '../services/allAPI';
import { Col, Row } from 'react-bootstrap';
import { usePDF } from 'react-to-pdf';


function Checkout() {
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    const [getMovie,setGetMovie] = useState({})
    const {id} = useParams()
    console.log(id);

    const getAllMovies = async()=>{
        const result = await getAllMoviesAPI()
        console.log(result.data);
        const movie = result.data.find(item=>item._id == id)
        console.log(movie);
        setGetMovie(movie)
  }

  useEffect(()=>{
    getAllMovies()
  },[])

  return (
    <div className=' d-flex justify-content-center align-items-center flex-column' style={{backgroundColor:"black"}} >
        <div className='ticket bg-light d-flex flex-column p-5 shadow m-5 '  ref={targetRef}>
            <div style={{width:"300px"}}>
            <Row>
                    <Col lg={5}>
                    <div className='py-3'>
                        <img src={getMovie.poster} className='rounded-3' alt="" height={'180px'} width={'120px'}/>
                    </div>
                    </Col>
                    <Col lg={7}>
                        <h3 className=' fw-bold mt-2'>{getMovie.title}</h3>
                        <p className=''><span className='fw-bold'>Released</span> : {getMovie.released}</p>
                        <p className=''><span className='fw-bold'>Genre</span> : {getMovie.genre}</p>
                        <p className=''><span className='fw-bold'>Runtime</span> : {getMovie.runtime}</p>
                    </Col>
                </Row>
            </div>
            <div>
                <h6 className='fw-bold'>Download your ticket for the movie</h6>
                
                <Row>
                    <Col>
                        <div className='text-center my-3'>
                            <QRCode
                            style={{ height: "180px", width: "180px" }}
                            value='hjcjwc'/>
                        </div>
                    </Col>
                    <Col>
                    <div className=' d-flex flex-column justify-content-evenly' style={{height:"180px"}}>
                        <span className='fw-bold'>Seat no :</span>
                        <span className='fw-bold'>Time :</span>
                    </div>
                    </Col>
                </Row>
            </div>
        </div>
        
        <Button variant='danger' className='rounded' onClick={() => toPDF()}>Download Your Ticket</Button>
    </div>
  )
}

export default Checkout
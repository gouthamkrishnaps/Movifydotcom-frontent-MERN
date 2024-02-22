import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { getAllMoviesAPI, getAllTheatresAPI } from '../services/allAPI'
import { useParams } from 'react-router-dom'

function Theatres() {
    const [theatreData,setTheatreData] = useState([])

    const getThreatre = async()=>{
        const result = await getAllTheatresAPI()
        console.log(result.data);
        setTheatreData(result.data)
    }

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
        getThreatre()
        getAllMovies()
    },[])

  return (
    <div className='pb-2' style={{backgroundColor:'black'}}>
        <Container>
            <div>
                <Row>
                    <Col lg={2}>
                    <div className='py-3'>
                        <img src={getMovie.poster} className='rounded-5' alt="" height={'200px'}/>
                    </div>
                    </Col>
                    <Col lg={10}>
                        <h1 className='text-light fw-bold mt-2'>{getMovie.title}</h1>
                        <p className='text-light'>{getMovie.plot}</p>
                        <a href='/home' className='rounded btn btn-outline-danger'>Go Back to Home Page</a>
                    </Col>
                </Row>
            </div>
            <div className='text-light'>
                <h3 className='fw-bold'>Available Theatres</h3>
                {
                theatreData.length>0?
                <div>
                    {
                    theatreData.map((theatre)=>(
                    <div>
                        <hr />
                        <h2 className='fw-bold'>{theatre.name}</h2>
                        <span >Location : <span className='fw-bold fs-5' style={{color:'lightgrey',fontStyle:'italic'}}>{theatre.location}</span></span><br />
                        <span className=''>Rating : <span className='fw-bold fs-5'><i class="fa-solid fa-star" style={{color:'gold'}}></i> {theatre.rating}</span></span>
                        <h5 className='fw-bold'>Timings</h5>
                        <div className='d-flex gap-3'>
                            <a href={`/slotbook/${id}`} className='btn btn-outline-light rounded-pill'>11 am</a>
                            <a href={`/slotbook/${id}`} className='btn btn-outline-light rounded-pill'>6:30 pm</a>
                            <a href={`/slotbook/${id}`} className='btn btn-outline-light rounded-pill'>9:30 pm</a>
                        </div>
                    </div>
                    ))
                    }
                </div>:
                <p>no theatres</p>
                
                }
                
            </div>
        </Container>
    </div>
  )
}

export default Theatres
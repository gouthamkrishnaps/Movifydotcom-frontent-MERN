import React, { useEffect, useState } from 'react'
import './Movie.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { getAllMoviesAPI } from '../services/allAPI'

function Movie() {
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
    <div className='movie-bg' style={{backgroundColor:'black'}}>
      <Row>
        <Col lg={5} className='justify-content-center align-items-center d-flex'>
          <div className='w-50'>
          <Card className="card movie-card bg-dark text-white rounded-4">
          <Card.Img src={getMovie.poster} width={'250px'} className=' rounded-4' alt="Card image" />
          </Card>
          </div>
        </Col>
        <Col lg={7}>
          <div>
            <div className=" position-absolute ">
              <img className='cover-img' src={getMovie.coverimg}  alt="" height={'500px'} width={'100%'}/>
            </div>
            <div className="coverover position-relative" style={{width:'100%',height:'500px'}}>
                <Button className='booking-btn rounded' variant='danger' size='lg'><Link style={{textDecoration:'none',color:'white'}} to={'/theatres'}>Book Tickets</Link></Button>
                <div className='d-flex justify-content-center align-items-center'>
                  <h1 className='Moviename'>{getMovie.title}</h1>
                </div>
            </div>
          </div>
        </Col>
        
      </Row>
      <Container>
        <div className="movie-content pb-2" style={{color:'white'}}>
          <h1 className='fw-bold mb-3'>{getMovie.title}</h1>
          <h3 className='fw-bold mb-4 text-center bg-danger text-light rounded w-25 p-3'>Rating : {getMovie.rated}</h3>
          <Row>
            <Col>
              <div className='info-card text-light rounded p-3 mb-2' style={{height:"130px"}}>
                <h3 className='fw-bold'>About Movie</h3>
                <p className='fw-bold '>{getMovie.plot}</p>
              </div>
              <div className='info-card text-light rounded p-3  mb-2' style={{height:"130px"}}>
                <h3 className='fw-bold'>Cast</h3>
                <p className='fw-bold '>{getMovie.actors}</p>
              </div>
              <div className='info-card text-light rounded p-3  mb-2' style={{height:"130px"}}>
                <h3 className='fw-bold'>Released</h3>
                <p className='fw-bold '>{getMovie.released}</p>
              </div >
            </Col>
            <Col>
              <div className='info-card text-light rounded p-3  mb-2' style={{height:"130px"}}>
                <h3 className='fw-bold'>Runtime</h3>
                <p className='fw-bold '>{getMovie.runtime}</p>
              </div>
              <div className='info-card text-light rounded p-3  mb-2' style={{height:"130px"}}>
                <h3 className='fw-bold'>Genre</h3>
                <p className='fw-bold '>{getMovie.genre}</p>
              </div >
              <div className='info-card text-light rounded p-3  mb-2' style={{height:"130px"}}>
                <h3 className='fw-bold'>Director</h3>
                <p className='fw-bold '>{getMovie.director}</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      
    </div>
  )
}

export default Movie
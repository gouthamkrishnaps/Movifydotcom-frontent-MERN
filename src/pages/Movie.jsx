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
      <Container>
      <Row>
        <Col lg={4} >
          <div className='d-flex '>
          <Card className="card movie-card bg-dark text-white rounded-4">
          <Card.Img src={getMovie.poster} width={'250px'} className=' rounded-4' alt="Card image" />
          </Card>
          </div>
        </Col>
        <Col lg={8}>
          <div>
            <div className=" position-absolute ">
              <img className='cover-img' src={getMovie.coverimg}  alt="" height={'500px'} width={'100%'}/>
            </div>
            <div className="coverover position-relative" style={{width:'100%',height:'500px'}}>
                
                <Button className='booking-btn rounded' variant='danger' size='lg'><Link style={{textDecoration:'none',color:'white'}} to={`/theatres/${getMovie._id}`}>Book Tickets <i class="fi fi-ss-receipt"></i></Link></Button>
                <div className='text-light mt-3' >
                  <h3 className='fw-bold' style={{textShadow:"2px 2px black"}}>About Movie</h3>
                  <p className='fw-bold ' style={{textShadow:"2px 2px black"}}>{getMovie.plot}</p>
                </div>
            </div>
          </div>
        </Col>
        
      </Row>


        <div className="movie-content pb-2" style={{color:'white'}}>
          <h1 className='fw-bold mb-3'>{getMovie.title}</h1>
          <h3 className='fw-bold mb-4 text-light rounded'>Rating : <i class="fa-solid fa-star" style={{color:'gold'}}></i> {getMovie.rated}</h3>
          <Row>
            <Col>
              <div className='info-card text-light rounded p-3 mb-2' style={{height:"130px"}}>
                <h3 className='fw-bold'>Languages</h3>
                <p className='fw-bold '>{getMovie.language}</p>
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
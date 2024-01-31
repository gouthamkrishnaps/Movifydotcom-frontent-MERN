import React, { useEffect, useState } from 'react'
import './Home.css'
import { Col, Container, Row } from 'react-bootstrap'
import Banner from '../User module/Banner'
import animation2 from '../assets/Animation - a2.json'
import Lottie from 'lottie-react'
import { getAllMoviesAPI } from '../services/allAPI'
import MovieCard from './MovieCard'


function Home() {

  const [allMovies,setAllMovies] = useState([])

  const getAllMovies = async()=>{
    const result = await getAllMoviesAPI()
    //console.log(result.data);
    setAllMovies(result.data)
  }

  useEffect(()=>{
    getAllMovies()
  },[])
  return (
    <div style={{backgroundColor:'black'}}>
      <div className='landing-page d-flex justify-content-center align-items-center w-100'>
        <div className='blur shadow rounded-5'>
          <Row>
            <Col>
            <div className='d-flex justify-content-center align-items-center w-100 flex-column' style={{height:'80vh'}}>
              <div >
                <p className='text-light fw-bold ' style={{fontSize:'80px'}}>Book Your Tickets Now...!</p>
                <p className='text-light ' style={{width:'600px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae laudantium, harum fugiat aspernatur exercitationem fuga blanditiis quis sint unde! Aliquam, consequatur! Ad repudiandae harum eligendi modi. Officiis explicabo corrupti libero. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a className='btn btn-warning rounded-pill'>Learn More</a>
              </div>
            </div>
            </Col>
            <Col>
              <div>
                <Lottie /* loop={'3'} */ animationData={animation2} style={{width:'500px'}}/>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Banner/>
      <hr />
      <Container>
        <h3 className='fw-bold text-light'>Trending now</h3>

          
          
          {allMovies.length>0?
          <Row>
          {
          allMovies.map((movie)=>(
            <Col lg={3}> 
            <MovieCard movie={movie}/>
            </Col>
          ))}
          </Row>:
          <p className='text-light'>No movies</p>
          }
           

      </Container>
    </div>
  )
}

export default Home
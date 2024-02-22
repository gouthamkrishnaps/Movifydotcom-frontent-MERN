import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './Moviecard.css'
import { Link } from 'react-router-dom'

function MovieCard({movie}) {
    //console.log(movie);
  return (
    <div className='pb-5'>
        <Card className="card movie-card bg-dark text-white rounded-4">
        <Card.Img src={movie.poster} width={'250px'} className=' rounded-4' alt="Card image" />
        <Card.ImgOverlay className='overlap text-center rounded-4"'>
            <Button  variant='danger' className='btn rounded fw-bold'><a style={{textDecoration:'none',color:'white'}} href={`/movie/${movie._id}`}>Book Now </a></Button>
        </Card.ImgOverlay>
        </Card>
        <h4 className='text-light text-center mt-2 fw-bold'>{movie.title}</h4>
    </div>
  )
}

export default MovieCard
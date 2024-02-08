import React, { useState } from 'react'
import './Admin.css'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Sidebar from './Sidebar'
import { uploadMovieAPI, uploadTheatreAPI } from '../services/allAPI'
import swal from 'sweetalert'


function Dashboard({addtheatres}) {
    const [movie,setMovie] = useState({
        title: "",
        poster: "",
        coverimg:"",
        rated: "",
        released: "",
        runtime: "",
        genre: "",
        director: "",
        actors: "",
        language: "",
        plot: ""
    })
    console.log(movie);


    const handleMovieClear = async(e)=>{
        e.preventDefault()

        setMovie({
            title: "",
            poster: "",
            coverimg:"",
            rated: "",
            released: "",
            runtime: "",
            genre: "",
            director: "",
            actors: "",
            language: "",
            plot: ""
        })
    }

    const handleMovieUpload = async()=>{


        const {title,poster,coverimg, rated, released, runtime, genre, director, actors, language, plot} = movie

        if(!title || !poster || !coverimg || !rated || !released || !runtime || !genre || !director || !actors || !language || !plot){
            swal({
                title: 'Oops',
                text: `Please fill the form completely`,
                icon: 'info',
            });
        }
        else{
            const reqBody = new FormData()


            reqBody.append("title",title)
            reqBody.append("poster",poster)
            reqBody.append("coverimg",coverimg)
            reqBody.append("rated",rated)
            reqBody.append("released",released)
            reqBody.append("runtime",runtime)
            reqBody.append("genre",genre)
            reqBody.append("director",director)
            reqBody.append("actors",actors)
            reqBody.append("language",language)
            reqBody.append("plot",plot)
            const result = await uploadMovieAPI(reqBody)
            //console.log(result);
            if(result.status===200){
                swal({
                    title: 'Good Job 😍',
                    text: `${movie.title} Successfully Added`,
                    icon: 'success',
                });
                setMovie({
                    title: "",
                    poster: "",
                    coverimg:"",
                    rated: "",
                    released: "",
                    runtime: "",
                    genre: "",
                    director: "",
                    actors: "",
                    language: "",
                    plot: ""
                })
            }
            else{
            console.log(result.response.data);
            swal({
                title: 'Oh sorry..😶',
                text: `${result.response.data} `,
                icon: 'error',
            });
            }
        }

    }

    const [theatre,setTheatre] = useState({
        name:"",
        location:"",
        rating:""
    })

    const handleTheatreUpload = async(e)=>{
        e.preventDefault()
        const {name,location,rating} = theatre

        if(!name|| !location|| !rating){
            swal({
                title: 'Oops',
                text: `Please fill the form completely`,
                icon: 'info',
            });
        }
        else{
            const reqBody = new FormData()


            reqBody.append("name",name)
            reqBody.append("location",location)
            reqBody.append("rating",rating)
            const result = await uploadTheatreAPI(reqBody)
            //console.log(result);
            if(result.status===200){
                swal({
                    title: 'Good Job 😍',
                    text: `${theatre.name} Successfully Added`,
                    icon: 'success',
                });
                setTheatre({
                    name:"",
                    location:"",
                    rating:""
                })
            }
            else{
            console.log(result.response.data);
            swal({
                title: 'Oh sorry..😶',
                text: `${result.response.data} `,
                icon: 'error',
            });
            }
        }
    }
    console.log(theatre);
  return (
    <div className=' main-container'>
        <Row>
            <Col lg='2'>
                <Sidebar/>
            </Col>
            <Col lg='10'>
                <h1 className='text-center fw-bold text-primary mb-3 mt-3'>Welcome to Dashboard</h1>
            {!addtheatres?
            <div className='text-light d-flex justify-content-center align-items-center  w-100'>
                <div className='movieAddCard w-50 shadow p-5 rounded-5 mb-5'>
                    <h2 className='fw-bold text-center'>Add Movies</h2>
                    <div className='d-flex gap-2'>
                        <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput5">
                            <Form.Label>Movie Name</Form.Label>
                            <Form.Control value={movie.title} onChange={(e)=>setMovie({...movie,title:e.target.value})} className='rounded' type="text" placeholder='Movie Name'/>
                        </Form.Group>
                        <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput5">
                            <Form.Label>Movie Poster</Form.Label>
                            <Form.Control value={movie.poster} onChange={(e)=>setMovie({...movie,poster:e.target.value})} className='rounded' type="text" placeholder='Movie Poster'/>
                        </Form.Group>
                    </div>
                    <div className='d-flex gap-2'>
                        <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput5">
                            <Form.Label>Movie Cover Poster</Form.Label>
                            <Form.Control value={movie.coverimg} onChange={(e)=>setMovie({...movie,coverimg:e.target.value})} className='rounded' type="text" placeholder='Movie Cover Poster'/>
                        </Form.Group>
                        <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput5">
                            <Form.Label>Movie Rating</Form.Label>
                            <Form.Control value={movie.rated} onChange={(e)=>setMovie({...movie,rated:e.target.value})} className='rounded' type="number" placeholder='Movie Rating'/>
                        </Form.Group>
                    </div>
                    <div className='d-flex gap-2'>
                        <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput5">
                            <Form.Label>Movie Released Date</Form.Label>
                            <Form.Control value={movie.released} onChange={(e)=>setMovie({...movie,released:e.target.value})} className='rounded' type="date" placeholder='Movie eleased Date'/>
                        </Form.Group>
                        <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput5">
                            <Form.Label>Runtime</Form.Label>
                            <Form.Control value={movie.runtime} onChange={(e)=>setMovie({...movie,runtime:e.target.value})} className='rounded' type="text" placeholder='Movie Runtime'/>
                        </Form.Group>
                    </div>
                    <div className='d-flex gap-2'>
                        <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput5">
                            <Form.Label>Movie Genre</Form.Label>
                            <Form.Control value={movie.genre} onChange={(e)=>setMovie({...movie,genre:e.target.value})} className='rounded' type="text" placeholder='Movie Genre'/>
                        </Form.Group>
                        <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput5">
                            <Form.Label>Director</Form.Label>
                            <Form.Control value={movie.director} onChange={(e)=>setMovie({...movie,director:e.target.value})} className='rounded' type="text" placeholder='Movie NaDirectorme'/>
                        </Form.Group>
                    </div>
                    <div className='d-flex gap-2'>
                        <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput5">
                            <Form.Label>Movie Cast</Form.Label>
                            <Form.Control value={movie.actors} onChange={(e)=>setMovie({...movie,actors:e.target.value})} className='rounded' type="text" placeholder='Write down and seprate it by comas ","'/>
                        </Form.Group>
                        <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput5">
                            <Form.Label>Languages</Form.Label>
                            <Form.Control value={movie.language} onChange={(e)=>setMovie({...movie,language:e.target.value})} className='rounded' type="text" placeholder='Write down '/>
                        </Form.Group>
                    </div>

                    <Form.Group className="mb-4 w-100" controlId="exampleForm.ControlInput5">
                        <Form.Label>Movie Plot</Form.Label>
                        <Form.Control value={movie.plot} onChange={(e)=>setMovie({...movie,plot:e.target.value})} className='rounded' as="textarea" placeholder='Write down '/>
                    </Form.Group>

                    <div className='d-flex gap-3 w-100'>
                        <Button variant='danger' className='w-100 rounded' onClick={handleMovieUpload}>Add Movie</Button>
                        <Button variant='primary' className='w-100 rounded' onClick={handleMovieClear}>Cancel</Button>
                    </div>
                </div>
            </div>
            :
            <div className='text-light d-flex justify-content-center w-100' >
                <div className='movieAddCard w-50 shadow p-5 rounded-5' style={{marginTop:'100px'}}>
                    <h2 className='fw-bold text-center'>Add Theatres</h2>
                    <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlInput5">
                        <Form.Label>Theatre Name</Form.Label>
                        <Form.Control value={theatre.name} onChange={(e)=>setTheatre({...theatre,name:e.target.value})}  className='rounded' type="text" placeholder='Theatre name'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                        <Form.Label>Theatre Location(Address)</Form.Label>
                        <Form.Control value={theatre.location} onChange={(e)=>setTheatre({...theatre,location:e.target.value})} className='rounded' as="textarea" placeholder='Write down'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                        <Form.Label>Theatre rating</Form.Label>
                        <Form.Control value={theatre.rating} onChange={(e)=>setTheatre({...theatre,rating:e.target.value})} className='rounded' type="text" placeholder='Theatre rating'/>
                    </Form.Group>
                    <div className='d-flex gap-3 w-100'>
                        <Button variant='danger' className='w-100 rounded' onClick={handleTheatreUpload}>Add Theatre</Button>
                        <Button variant='primary' className='w-100 rounded'>Cancel</Button>
                    </div>
                </div>
            </div>

            }
            </Col>
        </Row>
    </div>
  )
}

export default Dashboard
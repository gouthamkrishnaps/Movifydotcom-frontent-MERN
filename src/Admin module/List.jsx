import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import Sidebar from './Sidebar'
import { deleteMovieAPI, deleteTheatreAPI, editMovieAPI, editTheatreAPI, getAllMoviesAPI, getAllTheatresAPI } from '../services/allAPI'
import Modal from 'react-bootstrap/Modal';
import swal from 'sweetalert';


function List({theatrelist}) {
    //state to hold all movies from db
    const [allMovies,setAllMovies] = useState([])
    //state to hold all theatres from db
    const [alltheatres,setAllTheatres] = useState([])
    //state to hold currently updating movie & only used to reset to default values
    const [fetchedMovie,setFetchedMovie] = useState({})
    //state to hold currently updating theatre & only used to reset to default values
    const [fetchedTheatre,setFetchedTheatre] = useState({})
    //to hold filtered movie for update 
    const [movie,setMovie] = useState({})
    //to hold filtered theatre for update 
    const [theatre,setTheatre] = useState({})


    //fetching all movies from db
    const getAllMovies = async()=>{
      const result = await getAllMoviesAPI()
      //console.log(result.data);
      setAllMovies(result.data)
    }

    //fetching all theatres from db
    const getThreatre = async()=>{
        const result = await getAllTheatresAPI()
        //console.log(result.data);
        setAllTheatres(result.data)
    }

    //states of movie modal
    const [showMovieModal, setShowMovieModal] = useState(false);
    const handleMovieModalClose = () => setShowMovieModal(false);
    const handleMovieModalShow = () => setShowMovieModal(true);

    //fetching movie to update
    const getEachMovie = (e,id)=>{
        e.preventDefault()
        const movieData = allMovies.find(item=>item._id == id)
        //console.log(movieData);
        setFetchedMovie(movieData)
        setMovie({
            id:movieData._id,
            title: movieData.title,
            poster: movieData.poster,
            coverimg:movieData.coverimg,
            rated: movieData.rated,
            released: movieData.released,
            runtime:movieData.runtime,
            genre: movieData.genre,
            director: movieData.director,
            actors: movieData.actors,
            language:movieData.language,
            plot: movieData.plot
        })
        handleMovieModalShow()
    }

    //to upload updated movie detials
    const handleMovieUpdate = async()=>{


        const {id,title,poster,coverimg, rated, released, runtime, genre, director, actors, language, plot} = movie

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
            const result = await editMovieAPI(id,reqBody)
            //console.log(result);
            if(result.status===200){
                swal({
                    title: 'Good Job 😍',
                    text: `${movie.title} Successfully Updated`,
                    icon: 'success',
                });
                getAllMovies()
                handleMovieModalClose()
               /*  setMovie({
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
                }) */
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

    //to reset back to defualt values
    const handleMovieReset = ()=>{
        setMovie({
            id:fetchedMovie._id,
            title: fetchedMovie.title,
            poster: fetchedMovie.poster,
            coverimg:fetchedMovie.coverimg,
            rated: fetchedMovie.rated,
            released: fetchedMovie.released,
            runtime:fetchedMovie.runtime,
            genre: fetchedMovie.genre,
            director: fetchedMovie.director,
            actors: fetchedMovie.actors,
            language:fetchedMovie.language,
            plot: fetchedMovie.plot
        })
    }

    //states of theatre modal
    const [showTheatreModal, setShowTheatreModal] = useState(false);
    const handleTheatreModalClose = () => setShowTheatreModal(false);
    const handleTheatreModalShow = () => setShowTheatreModal(true);

    //fetching theatre to update
    const getEachTheatre = (e,id)=>{
        e.preventDefault()
        const theatreData = alltheatres.find(item=>item._id == id)
        //console.log(movieData);
        setFetchedTheatre(theatreData)
        setTheatre({
            id:theatreData._id,
            name:theatreData.name,
            location:theatreData.location,
            rating:theatreData.rating
        })
        handleTheatreModalShow()
    }

    const handleTheatreUpdate = async(e)=>{
        e.preventDefault()
        const {id,name,location,rating} = theatre

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
            const result = await editTheatreAPI(id,reqBody)
            //console.log(result);
            if(result.status===200){
                swal({
                    title: 'Good Job 😍',
                    text: `${theatre.name} Successfully Updated`,
                    icon: 'success',
                });
                getThreatre()
                handleTheatreModalClose()
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

    const handleTheatreReset = ()=>{
        setTheatre({
            id:fetchedTheatre._id,
            name:fetchedTheatre.name,
            location:fetchedTheatre.location,
            rating:fetchedTheatre.rating
        })
    }

    const handleMovieDelete = async(id)=>{
        const result = await deleteMovieAPI(id)
        console.log(result);
        if(result.status === 200){
            swal({
                title: 'Done ✅',
                text: `Movie Deleted Successfully`,
                icon: 'success',
            });
            getAllMovies()
        }
        else{
            console.log(result.response.data);
            swal({
                title: 'Error ❌',
                text: `Couldn't Delete your Movie`,
                icon: 'error',
            });
        }
    }

    const handleTheatreDelete = async(id)=>{
        const result = await deleteTheatreAPI(id)
        console.log(result);
        if(result.status === 200){
            swal({
                title: 'Done ✅',
                text: `Theatre Deleted Successfully`,
                icon: 'success',
            });
            getThreatre()
        }
        else{
            console.log(result.response.data);
            swal({
                title: 'Error ❌',
                text: `Couldn't Delete your Theatre`,
                icon: 'error',
            });
        }
    }
  
    useEffect(()=>{
      getAllMovies()
      getThreatre()
    },[])


  return (
    <div className='main-container'>
    <Row>
        <Col lg='2'>
            <Sidebar/>
        </Col>
        <Col lg='10'>
            {!theatrelist?
            <div className='d-flex justify-content-center align-items-center'>
                <div className='w-75'>
                    <h2 className='text-center fw-bold text-light'>Movies list</h2>
                    <Table className='w-100' striped bordered hover size="lg" variant='dark'>
                    <thead>
                        <tr>
                        <th className='text-center'>Title</th>
                        <th className='text-center'>Image</th>
                        <th className='text-center'>Released</th>
                        <th className='text-center'>Languages</th>
                        <th className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    {allMovies.length>0?
                    <tbody>
                    {allMovies.map((movie)=>(
                    <tr>
                        <td className='text-center'>{movie.title}</td>
                        <td className='text-center'><img src={movie.poster} alt="" width={'50px'} height={'60px'}/></td>
                        <td className='text-center'>{movie.released}</td>
                        <td className='text-center'>{movie.language}</td>
                        <td className='text-center'>
                            <div className='d-flex justify-content-center gap-2 '>
                                <Button className='rounded' onClick={(e)=>{getEachMovie(e,movie._id)}} variant='success'><i class="fi fi-sr-file-edit"></i></Button>
                                <Button className='rounded' onClick={()=>{handleMovieDelete(movie._id)}} variant='outline-danger'><i class="fa-solid fa-trash-can"></i></Button>
                            </div>
                        </td>
                    </tr>
                    ))
                    }
                    </tbody>:
                    <p className='text-light'>No movies added yet</p>
                    }
                    </Table>
                </div>
            </div>:
            <div className='d-flex justify-content-center align-items-center'>
            <div className='w-75'>
                <h2 className='text-center fw-bold text-light'>Theatre list</h2>
                <Table className='w-100' striped bordered hover size="lg" variant='dark'>
                <thead>
                    <tr>
                    <th className='text-center'>Theatre Name</th>
                    <th className='text-center'>Location</th>
                    <th className='text-center'>Rating</th>
                    <th className='text-center'>Actions</th>
                    </tr>
                </thead>
                {alltheatres.length>0?
                <tbody>
                {alltheatres.map((theatre)=>(
                <tr>
                    <td className='text-center'>{theatre.name}</td>
                    <td className='text-center'>{theatre.location}</td>
                    <td className='text-center'>{theatre.rating}</td>
                    <td className='text-center'>
                        <div className='d-flex justify-content-center gap-2 '>
                            <Button className='rounded' onClick={(e)=>{getEachTheatre(e,theatre._id)}} variant='success'><i class="fi fi-sr-file-edit"></i></Button>
                            <Button className='rounded' onClick={()=>{handleTheatreDelete(theatre._id)}} variant='outline-danger'><i class="fa-solid fa-trash-can"></i></Button>
                        </div>
                    </td>
                </tr>
                ))
                }
                </tbody>:
                <p className='text-light'>No theatres added yet</p>
                }
                </Table>
            </div>
            </div>
            }
        </Col>
    </Row>

    {/* Movie Modal */}
    <Modal
        show={showMovieModal}
        onHide={handleMovieModalClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <h4 className='fw-bold'>Edit your movie detials</h4>
        </Modal.Header>
        <Modal.Body>
            <div className='d-flex gap-2 w-100'>
                <div className='mb-3 w-100'>
                    <label>Movie Name</label>
                    <input value={movie.title} onChange={(e)=>setMovie({...movie,title:e.target.value})} className='form-control w-100 rounded' type="text" placeholder='Movie Name'/>
                </div>
                <div className='w-100'>
                    <label>Movie Poster</label>
                    <input value={movie.poster} onChange={(e)=>setMovie({...movie,poster:e.target.value})} className='form-control rounded' type="text" placeholder='Movie Poster'/>
                </div>
            </div>
            <div className='d-flex gap-2'>
                <div className="mb-3 w-100">
                    <label>Movie Cover Poster</label>
                    <input value={movie.coverimg} onChange={(e)=>setMovie({...movie,coverimg:e.target.value})} className='form-control rounded' type="text" placeholder='Movie Cover Poster'/>
                </div>
                <div className="mb-3 w-100">
                    <label>Movie Rating</label>
                    <input value={movie.rated} onChange={(e)=>setMovie({...movie,rated:e.target.value})} className='form-control rounded' type="number" placeholder='Movie Rating'/>
                </div>
            </div>
            <div className='d-flex gap-2'>
                <div className="mb-3 w-100">
                    <label>Movie Released Date</label>
                    <input value={movie.released} onChange={(e)=>setMovie({...movie,released:e.target.value})} className='form-control rounded' type="date" placeholder='Movie eleased Date'/>
                </div>
                <div className="mb-3 w-100">
                    <label>Runtime</label>
                    <input value={movie.runtime} onChange={(e)=>setMovie({...movie,runtime:e.target.value})} className='form-control rounded' type="text" placeholder='Movie Runtime'/>
                </div>
            </div>
            <div className='d-flex gap-2'>
                <div className="mb-3 w-100" >
                    <label>Movie Genre</label>
                    <input value={movie.genre} onChange={(e)=>setMovie({...movie,genre:e.target.value})} className='form-control rounded' type="text" placeholder='Movie Genre'/>
                </div>
                <div className="mb-3 w-100">
                    <label>Director</label>
                    <input value={movie.director} onChange={(e)=>setMovie({...movie,director:e.target.value})} className='form-control rounded' type="text" placeholder='Movie NaDirectorme'/>
                </div>
            </div>
            <div className='d-flex gap-2'>
                <div className="mb-3 w-100">
                    <label>Movie Cast</label>
                    <input value={movie.actors} onChange={(e)=>setMovie({...movie,actors:e.target.value})} className='form-control rounded' type="text" placeholder='Write down and seprate it by comas ","'/>
                </div>
                <div className="mb-3 w-100">
                    <label>Languages</label>
                    <input value={movie.language} onChange={(e)=>setMovie({...movie,language:e.target.value})} className='form-control rounded' type="text" placeholder='Write down '/>
                </div>
            </div>
            <div className="mb-4 w-100">
                <label>Movie Plot</label>
                <input value={movie.plot} onChange={(e)=>setMovie({...movie,plot:e.target.value})} className='form-control rounded' as="textarea" placeholder='Write down '/>
            </div>


        </Modal.Body>
        <Modal.Footer>
            <div className='d-flex gap-3 w-100'>
                <Button variant='danger' onClick={handleMovieUpdate} className='w-100 rounded' >Update Movie</Button>
                <Button variant='primary' onClick={handleMovieReset} className='w-100 rounded' >Cancel</Button>
            </div>
        </Modal.Footer>
    </Modal>

    {/* Theatre Modal */}
    <Modal
        show={showTheatreModal}
        onHide={handleTheatreModalClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <h4 className='fw-bold'>Edit your theatre detials</h4>
        </Modal.Header>
        <Modal.Body>
            <div className="mb-3 w-100">
                <label>Theatre Name</label>
                <input value={theatre.name} onChange={(e)=>setTheatre({...theatre,name:e.target.value})}  className='form-control rounded' type="text" placeholder='Theatre name'/>
            </div>
            <div className="mb-3">
                <label>Theatre Location(Address)</label>
                <input value={theatre.location} onChange={(e)=>setTheatre({...theatre,location:e.target.value})} className='form-control rounded' as="textarea" placeholder='Write down'/>
            </div>
            <div className="mb-3">
                <label>Theatre rating</label>
                <input value={theatre.rating} onChange={(e)=>setTheatre({...theatre,rating:e.target.value})} className='form-control rounded' type="text" placeholder='Theatre rating'/>
            </div>
        </Modal.Body>
        <Modal.Footer>
        <div className='d-flex gap-3 w-100'>
            <Button variant='danger' onClick={handleTheatreUpdate} className='w-100 rounded'>Update Theatre</Button>
            <Button variant='primary' onClick={handleTheatreReset} className='w-100 rounded'>Cancel</Button>
        </div>
        </Modal.Footer>
    </Modal>

</div>
)
}
export default List
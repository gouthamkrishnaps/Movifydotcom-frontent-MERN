import React from 'react'
import './Admin.css'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
        <div style={{backgroundColor:'white',minHeight:'120vh'}}>

            <div className='d-flex justify-content-evenly align-items-center flex-column' style={{height:'88vh'}}>
            <h2 className='fw-bold text-center'>Admin</h2>
                <Link to='/dashboard' className='sidebar-btn py-5 btn btn-outline-danger shadow  rounded'><i class="fi fi-rr-user"></i> DashBoard</Link>
                <a href='/addmovies' className='sidebar-btn py-5 btn btn-outline-danger shadow  rounded'><i class="fi fi-rr-camera-movie"></i>  Add Movies</a>
                <a href='/addtheatres' className='sidebar-btn py-5 btn btn-outline-danger shadow  rounded'><i class="fi fi-sr-theater-masks"></i> Add Theatres</a>
                {/* <AddMovies/>
                <AddTheatres/> */}
            </div>
        </div>
    </div>
  )
}

export default Sidebar
import React from 'react'
import './Admin.css'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
        <div className='sidebar'>

            <div className='d-flex justify-content-evenly align-items-center flex-column' style={{height:'88vh'}}>
            <h2 className='fw-bold text-center text-light'>Admin</h2>
                <Link to='/dashboard' className='sidebar-btn btn btn-danger p-5 shadow  rounded'><i class="fi fi-sr-videoconference"></i> DashBoard</Link>
                <a href='/addmovies' className='sidebar-btn btn btn-outline-danger p-4 shadow  rounded'><i class="fi fi-rr-camera-movie"></i>  Add Movies</a>
                <a href='/addtheatres' className='sidebar-btn btn btn-outline-danger p-4 shadow  rounded'><i class="fi fi-sr-theater-masks"></i> Add Theatres</a>
                <a href='/movielist' className='sidebar-btn btn btn-outline-danger p-4 shadow  rounded'><i class="fi fi-rr-features"></i> Movies</a>
                <a href='/theatrelist' className='sidebar-btn btn btn-outline-danger p-4 shadow  rounded'><i class="fi fi-sr-to-do"></i> Theatres</a>
                <a href='/user-list' className='sidebar-btn btn btn-outline-danger p-4 shadow  rounded'><i class="fi fi-sr-users-alt"></i> Users</a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
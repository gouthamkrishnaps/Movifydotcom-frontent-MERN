import React, { useEffect, useState } from 'react'
import './Admin.css'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import Sidebar from './Sidebar'
import { deleteUserAPI, getAllUsersAPI } from '../services/allAPI'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

function UserList() {
    const [allUsers,setAllUsers] = useState([])

    //fetching all users from db
    const getAllUsers = async()=>{
        const result = await getAllUsersAPI()
        //console.log(result.data);
        setAllUsers(result.data)
    }

    const handleUserDelete = async(id)=>{
        const result = await deleteUserAPI(id)
        console.log(result);
        if(result.status === 200){
            swal({
                title: 'Done ✅',
                text: `User Deleted Successfully`,
                icon: 'success',
            });
            getAllUsers()
        }
        else{
            console.log(result.response.data);
            swal({
                title: 'Error ❌',
                text: `Couldn't Delete your User`,
                icon: 'error',
            });
        }
    }

    useEffect(()=>{
        getAllUsers()
    },[])
    console.log(allUsers);
  return (
    <div className='main-container'>
        <Row>
            <Col lg='2'>
                <Sidebar/>
            </Col>
            <Col lg='10'>
                <h3 className='fw-bold text-center text-light py-3'>User Management</h3>
                {allUsers.length>0?
                <Row>
                    {allUsers.map((user)=>(
                        <Col lg={3}>
                        <Card bg="dark" text="light" border="success" className='rounded mt-3' style={{ width: '18rem' }}>
                            {user.email !=="admin.movify@gmail.com"?
                                <Card.Header className='fw-bold'><i class="fi fi-ss-user"></i> User</Card.Header>:
                                <Card.Header className='fw-bold'><i class="fi fi-ss-user"></i> Admin</Card.Header>
                            }
                            <Card.Body>
                            <h3 className='fw-bold'>{user.name}</h3>
                            <Card.Text>
                                <p><span className='fw-bold'>Email :</span> {user.email}</p>
                                <p><span className='fw-bold'>Password :</span> {user.password}</p>
                            </Card.Text>
                            {user.email !=="admin.movify@gmail.com"?
                                <Button variant='danger' onClick={()=>{handleUserDelete(user._id)}} className='rounded'>Remove User </Button>:
                                <Button variant='success' className='rounded w-100'><Link to={'/dashboard'} style={{color:"white",textDecoration:"none"}}>Software Manager</Link></Button>
                            }
                            </Card.Body>
                        </Card>
                        </Col>
                    ))
                    }
                </Row>:
                <p>No user registered yet...!</p>
                }
            </Col>
        </Row>
    </div>
  )
}

export default UserList
import React, { useEffect, useState } from 'react'
import './Auth.css'
import { Button, Col, Form, Row } from 'react-bootstrap'
import animation1 from '../assets/Animation a1.json'
import Lottie from 'lottie-react'
import { Link, useNavigate } from 'react-router-dom'
import {  loginAPI, registerAPI } from '../services/allAPI'
import swal from 'sweetalert'



function Auth({register}) {
    const navigate = useNavigate()
    const [userData,setUserdata] = useState({
        name:"",
        email:"",
        password:""
    })
    //console.log(userData);

    const handleRegister = async(e)=>{
        e.preventDefault()
        const {name,email,password} = userData
        if(!name || !email || !password){
            swal({
                title: 'Hey..!',
                text: 'Please fill the form completely',
                icon: 'warning',
            });
        }
        else{
            const result = await registerAPI(userData)
            console.log(result);
            if(result.status === 200){
                swal({
                    title: 'Good Job 😍',
                    text: `${result.data.name} is successfully registered`,
                    icon: 'success',
                });
                setUserdata({
                    name:"",
                    email:"",
                    password:""
                })
                //move to login
                navigate('/')
            }
            else{
                swal({
                    title: 'Oh sorry..😣!',
                    text: `${result.response.data}`,
                    icon: 'error',
                })
            }
        }
    }

    
    const handleLogin = async(e)=>{
        e.preventDefault()
        const {email,password} = userData
        if(!email || !password){
            swal({
                title: 'Hey..!',
                text: 'Please fill the form completely',
                icon: 'warning',
            });
        }
        else{
            const result = await loginAPI(userData)
            console.log(result);

            if(result.status === 200){
                sessionStorage.setItem("UserEmail",JSON.stringify(result.data.existingUser.email))
                //setData(userData)
                //sessionStorage.setItem("token",result.data.token)
                swal({
                    title: 'Good Job 😍',
                    text: 'Login Successfull',
                    icon: 'success',
                });
    
                setUserdata({
                    email:"",
                    password:""
                })
                //setIsAuthToken(true)
                //navigate to home after login
                setTimeout(()=>{
                    navigate('/home')
                },2000)
               
            }
            else{
                swal({
                    title: 'Oh sorry..😣!',
                    text: `${result.response.data}`,
                    icon: 'error',
                });
            }
        }
    }
    
  return (
    <div style={{height:'100vh'}} className='login-container'>
        <h1 className='logoname text-light text-center'><Link  style={{textDecoration:'none',color:'black'}} to={'/home'}>Movifydot</Link><span style={{color:'red'}}>com</span></h1>
        <Row>
            <Col>
                <div className="d-flex justify-content-center align-items-center" style={{height:'90vh'}}>
                <Lottie /* loop={'3'} */ animationData={animation1} style={{width:'500px'}}/>
                </div>
            </Col>
            <Col>
           { register ?
           <h3 className='text-center mt-5 fw-bold' style={{fontSize:'50px'}}>Register</h3>:
           <h3 className='text-center mt-5 fw-bold' style={{fontSize:'50px'}}>Login</h3>
           }
                <div className="auth-lock justify-content-center d-flex align-items-center flex-column w-100">
                    {/* <div className='userlockicon p-3 rounded-circle text-center'>
                        <i className="usericon fi fi-rr-user-lock fs-1 text-light"></i>
                    </div> */}
                    <div className='auth-card p-5 rounded-5 shadow w-50'>
                        {register &&
                            <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlInput5">
                            <Form.Control value={userData.name} onChange={(e)=>setUserdata({...userData,name:e.target.value})} className='rounded-pill' type="text" placeholder='User Name'/>
                            </Form.Group>
                        }
                        <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlInput5">
                            <Form.Control  value={userData.email} onChange={(e)=>setUserdata({...userData,email:e.target.value})} className='rounded-pill' type="text" placeholder='Email'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                            <Form.Control  value={userData.password} onChange={(e)=>setUserdata({...userData,password:e.target.value})} className='rounded-pill' type='password' placeholder='Password'/>
                        </Form.Group>
                        <div className='text-center mb-3'>
                            {register?
                                <Button onClick={handleRegister} className='btn btn-warning w-100 rounded-pill'>Register</Button>:
                                <Button  onClick={handleLogin} className='btn btn-success w-100 rounded-pill'>Login</Button>
                            }
                        </div>
                        {register?
                            <p className='text-center'>If already a user? please <Link to={'/'} style={{textDecoration:'none'}}> Login</Link></p>:
                            <p className='text-center'>If not an existing user? please <Link to={'/register'} style={{textDecoration:'none'}}> Register</Link></p>
                        }
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Auth
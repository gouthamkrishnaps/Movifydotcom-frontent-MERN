import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Theatres from './pages/Theatres';
import SeatSlot from './pages/SeatSlot';
import Header from './User module/Header';
import Footer from './User module/Footer';
import Add from './Admin module/Add';
import Auth from './pages/Auth';
import Dashboard from './Admin module/Dashboard';
import { useEffect, useState } from 'react';
import Checkout from './pages/Checkout';
import List from './Admin module/List';




function App() {
  const [data,setData] = useState({})
  const [isAdmin , setIsAdmin] = useState(false)
  console.log(data);
    const checkAdmin = ()=>{
      //e.preventDefault()
      if(data.email === 'goutham@gmail.com'){
        setIsAdmin(true)
      }
    }
    
    useEffect(()=>{
      checkAdmin()
    },[])
  return (
    <div style={{backgroundColor:'white'}}>

      <Header isAdmin={isAdmin}/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/movie/:id' element={<Movie/>}/>
        <Route path='/theatres/:id' element={<Theatres/>}/>
        <Route path='/slotbook/:id' element={<SeatSlot/>}/>
        <Route path='/addtheatres' element={<Add addtheatres/>}/>
        <Route path='/addmovies' element={<Add/>}/>
        <Route path='/theatrelist' element={<List theatrelist/>}/>
        <Route path='/movielist' element={<List/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/' element={<Auth setData={setData}/>}/>
        <Route path='/register' element={<Auth register />}/>
        <Route path='/checkout/:id' element={<Checkout/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

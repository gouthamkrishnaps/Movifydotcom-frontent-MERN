import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import poster1 from '../assets/salaar2.jpeg'
import poster2 from '../assets/neru1.jpeg'
import poster3 from '../assets/animal1.jpeg'


function Banner() {
  return (
    <div className='d-flex justify-content-center align-items-center m-5 ' /* style={{height:'80vh'}} */>
        <div style={{width:'100%'}} >
            <Carousel className='shadow '>
            <Carousel.Item interval={2000}>
                <img className='rounded-4' src={poster1} height={'500px'} width={'100%'} />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className='rounded-4' src={poster2} height={'500px'} width={'100%'}/>
                
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className='rounded-4' src={poster3} height={'500px'} width={'100%'} />
                
            </Carousel.Item>
            </Carousel>
        </div>
    </div>
  )
}

export default Banner
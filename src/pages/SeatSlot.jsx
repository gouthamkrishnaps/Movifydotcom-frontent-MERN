import React, { useEffect } from 'react'
import './Seat.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';


function SeatSlot() {


  const {id} = useParams()
  console.log(id);

  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const handleClose = () =>{
      setShow(false);
      swal({
        title: 'Oh Sorry..!',
        text: 'Your Payment was Failed',
        icon: 'error',
      });
  
    }

    const setPayment = () =>{
      setShow(false);
      swal({
        title: 'Wow..!',
        text: 'Your payment is Successfull',
        icon: 'success',
      });
      setTimeout(()=>{
        navigate(`/checkout/${id}`)
    },2000)
    }
    const handleShow = () => setShow(true);

    const [numOfSeats,setNumOfSeats] =useState(0)

    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedMovieIndex, setSelectedMovieIndex] = useState(
      parseInt(localStorage.getItem('selectedMovieIndex')) || 0
    );
    const [ticketPrice, setTicketPrice] = useState(20);

    useEffect(() => {
      populateUI();
    }, []);

    const setMovieData = (movieIndex, moviePrice) => {
      localStorage.setItem('selectedMovieIndex', movieIndex);
      localStorage.setItem('selectedMoviePrice', moviePrice);
    };

    const updateSelectedCount = () => {
      const selectedSeats = document.querySelectorAll('.row .seat.selected');
      const seats = document.querySelectorAll('.row .seat:not(.occupied)');
      const seatsIndex = [...selectedSeats].map((seat) =>
        Array.from(seats).indexOf(seat)
      );

      localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

      const selectedSeatsCount = selectedSeats.length-1;

      // update React state instead of directly manipulating the DOM
      setSelectedSeats(seatsIndex);
      setSelectedMovieIndex(selectedSeatsCount);
      setTicketPrice(selectedSeatsCount * ticketPrice);
      console.log(`selectedSeatsCount ${selectedSeatsCount}`);
      //console.log(`ticketPrice ${ticketPrice}`);
      setNumOfSeats(selectedSeatsCount)
    };

    const populateUI = () => {
      const storedSelectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
      const seats = document.querySelectorAll('.row .seat:not(.occupied)');
      if (storedSelectedSeats !== null && storedSelectedSeats.length > 0) {
        seats.forEach((seat, index) => {
          if (storedSelectedSeats.indexOf(index) > -1) {
            seat.classList.add('selected');
          }
        });
      }

      const storedSelectedMovieIndex = localStorage.getItem('selectedMovieIndex');

      if (storedSelectedMovieIndex !== null) {
        setSelectedMovieIndex(parseInt(storedSelectedMovieIndex));
      }
    };

    const handleMovieSelectChange = (e) => {
      const selectedPrice = +e.target.value;
      setTicketPrice(selectedPrice);
      setMovieData(e.target.selectedIndex, selectedPrice);
      updateSelectedCount();
    };

    const handleSeatClick = (e) => {
      if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
      }
    };

    const [paymentDetials,setPaymentDetials] = useState({
      cardNumber : "",
      cardName : "",
      expiry : "",
      securityCode :""
    })

    const checkPayment = () =>{

      const {cardNumber, cardName, expiry, securityCode} = paymentDetials

      if(!cardNumber || !cardName || !expiry || !securityCode){
        swal({
          title: 'Oops',
          text: `Please fill the form completely`,
          icon: 'info',
      });
      }
      else{
        setPayment()
      }
    }


  return (
    <div className="movie-container ">
        <div className='row'>
          <div className="col-2">

          </div>
          <div className='col-8 d-flex justify-content-center align-items-center flex-column'>
            <div className="showcase d-flex gap-4 text-light mt-5 mb-5 shadow">
                <div className='d-flex'>
                    <div className="seat"></div>
                    <h2>N/A</h2>
                </div>
                <div className='d-flex'>
                    <div className="seat occupied"></div>
                    <h2>Occupied</h2>
                </div>
                <div className='d-flex'>
                    <div className="seat selected"></div>
                    <h2>Selected</h2>
                </div>
            </div>
            <p className='fs-3 fw-bold text-center text-light'>You have selected <span className='text-danger'>{numOfSeats} Seats</span></p>
            <div className='seat-container'>
                <div className="screen"></div>
                <div className="rows">
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={1}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={2}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={3}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={4}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={5}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={6}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={7}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={8}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={9}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={10}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={11}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={12}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={13}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={14}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={15}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={16}/>
                    
                </div>
                <div className="rows">
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={17}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={18}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={19}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={20}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={21}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={22}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={23}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={24}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={25}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={26}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={27}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={28}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={29}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={30}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={31}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={32}/>
                </div>
                <div className="rows">
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={33}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={34}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={35}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={36}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={37}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={38}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={39}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={40}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={41}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={42}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={43}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={44}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={45}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={46}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={47}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={48}/>
                </div>
                <div className="rows">
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={49}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={50}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={51}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={52}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={53}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={54}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={55}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={56}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={57}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={58}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={59}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={60}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={61}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={62}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={63}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={64}/>
                </div>
                <div className="rows">
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={65}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={66}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={67}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={68}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={69}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={70}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={71}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={72}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={73}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={74}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={75}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={76}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={77}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={78}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={79}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={80}/>
                </div>
                <div className="rows">
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={81}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={82}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={83}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={84}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={85}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={86}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={87}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center occupied" value={88}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={89}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={90}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={91}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center " value={92}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={93}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={94}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={95}/>
                    <input readOnly onClick={(e)=>{handleSeatClick(e)}} className="seat text-center" value={96}/>
                </div>
                {/* <div className="rows">
                    <input readOnly className="seat text-center" value={97}/>
                    <input readOnly className="seat text-center" value={98}/>
                    <input readOnly className="seat text-center" value={99}/>
                    <input readOnly className="seat text-center" value={100}/>
                    <input readOnly className="seat text-center" value={101}/>
                    <input readOnly className="seat text-center" value={102}/>
                    <input readOnly className="seat text-center occupied" value={103}/>
                    <input readOnly className="seat text-center occupied" value={104}/>
                    <input readOnly className="seat text-center occupied" value={105}/>
                    <input readOnly className="seat text-center" value={106}/>
                    <input readOnly className="seat text-center" value={107}/>
                    <input readOnly className="seat text-center" value={108}/>
                    <input readOnly className="seat text-center" value={109}/>1
                    <input readOnly className="seat text-center occupied" value={110}/>
                    <input readOnly className="seat text-center" value={111}/>
                    <input readOnly className="seat text-center occupied" value={112}/>
                </div>
                <div className="rows">
                    <input readOnly className="seat text-center" value={113}/>
                    <input readOnly className="seat text-center" value={114}/>
                    <input readOnly className="seat text-center" value={115}/>
                    <input readOnly className="seat text-center occupied" value={116}/>
                    <input readOnly className="seat text-center" value={117}/>
                    <input readOnly className="seat text-center" value={118}/>
                    <input readOnly className="seat text-center" value={119}/>
                    <input readOnly className="seat text-center" value={120}/>
                    <input readOnly className="seat text-center" value={121}/>
                    <input readOnly className="seat text-center" value={122}/>
                    <input readOnly className="seat text-center occupied" value={123}/>
                    <input readOnly className="seat text-center occupied" value={124}/>
                    <input readOnly className="seat text-center" value={125}/>
                    <input readOnly className="seat text-center" value={126}/>
                    <input readOnly className="seat text-center occupied" value={127}/>
                    <input readOnly className="seat text-center occupied" value={128}/>
                </div>
                <div className="rows">
                    <input readOnly className="seat text-center" value={129}/>
                    <input readOnly className="seat text-center" value={130}/>
                    <input readOnly className="seat text-center occupied" value={131}/>
                    <input readOnly className="seat text-center occupied" value={132}/>
                    <input readOnly className="seat text-center" value={133}/>
                    <input readOnly className="seat text-center occupied" value={134}/>
                    <input readOnly className="seat text-center" value={135}/>
                    <input readOnly className="seat text-center" value={136}/>
                    <input readOnly className="seat text-center" value={137}/>
                    <input readOnly className="seat text-center" value={138}/>
                    <input readOnly className="seat text-center" value={139}/>
                    <input readOnly className="seat text-center" value={140}/>
                    <input readOnly className="seat text-center" value={141}/>
                    <input readOnly className="seat text-center" value={142}/>
                    <input readOnly className="seat text-center" value={143}/>
                    <input readOnly className="seat text-center" value={144}/>
                </div>
                <div className="rows">
                    <input readOnly className="seat text-center occupied" value={145}/>
                    <input readOnly className="seat text-center" value={146}/>
                    <input readOnly className="seat text-center" value={147}/>
                    <input readOnly className="seat text-center" value={148}/>
                    <input readOnly className="seat text-center" value={149}/>
                    <input readOnly className="seat text-center" value={150}/>
                    <input readOnly className="seat text-center" value={151}/>
                    <input readOnly className="seat text-center occupied" value={152}/>
                    <input readOnly className="seat text-center" value={153}/>
                    <input readOnly className="seat text-center" value={154}/>
                    <input readOnly className="seat text-center" value={155}/>
                    <input readOnly className="seat text-center" value={156}/>
                    <input readOnly className="seat text-center" value={157}/>
                    <input readOnly className="seat text-center" value={158}/>
                    <input readOnly className="seat text-center occupied" value={159}/>
                    <input readOnly className="seat text-center occupied" value={160}/>
                </div> */}
    
            </div>
            <div className="button w-25">
               <Button disabled={numOfSeats==0} onClick={handleShow} className='btn btn-danger w-100 m-3 px-3 rounded'>Checkout</Button>
            </div>
          </div>
          <div className="col-2">
                <div className='d-flex justify-content-center align-items-center text-light flex-column' style={{marginTop:"200px"}}>
                    
                </div>
          </div>
        </div>
        <Modal className='' show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                  <Modal.Header closeButton>
                    <h1>Invoice</h1>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="img">
                      <img src="https://www.watchstation.com/on/demandware.static/-/Library-Sites-WatchStationSharedLibrary/default/dwd759a869/customer_care/payment/Mobile_Card_View@2x.png" alt=""  style={{width:'100%'}}/>
                    </div>
                    <form action="">
                      <div className='p-2'>
                        <label htmlFor='cardnum'>Card number</label>
                        <input className='form-control w-100 rounded ' onChange={(e)=>setPaymentDetials({...paymentDetials,cardNumber:e.target.value})} value={paymentDetials.cardNumber} id='cardnum' type="text" placeholder='3451 5678 2389 3754'/>
                      </div>
                      <div className='p-2'>
                        <label htmlFor='cardname'>Name on card</label>
                        <input className='form-control w-100 rounded ' onChange={(e)=>setPaymentDetials({...paymentDetials,cardName:e.target.value})} value={paymentDetials.cardName} id='cardname' type="text" placeholder='John Emmanual'/>
                      </div>
                      <div className="d-flex gap-2 w-100">
                        <div className='p-2 w-100'>
                          <label htmlFor="date">Expiry date</label>
                          <input className='form-control w-100 rounded ' onChange={(e)=>setPaymentDetials({...paymentDetials,expiry:e.target.value})} value={paymentDetials.expiry} id='date' type="date" placeholder=''/>
                        </div>
                        <div className='p-2 w-100'>
                          <label htmlFor="code">Security code</label>
                          <input className='form-control w-100  rounded ' onChange={(e)=>setPaymentDetials({...paymentDetials,securityCode:e.target.value})}  value={paymentDetials.securityCode} id='code' type="password" placeholder='* * * *'/>
                        </div>
                      </div>
                    </form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button className='w-100' variant="primary" onClick={checkPayment}>${numOfSeats*110}</Button>
                  </Modal.Footer>
        </Modal>
    </div>
  )
}

export default SeatSlot
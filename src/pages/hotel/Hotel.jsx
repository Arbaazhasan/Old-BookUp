import "./hotel.css"
import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot,
  faCircleXmark,
  faCircleArrowLeft,
  faCircleArrowRight   } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/242710752.jpg?k=11f43404aba1d4d2c69ec7d94bf08c2d4c12f20d11d01ef0ea7af0669383099a&o=&hp=1"
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/55597035.jpg?k=c679215534b6c373adb3ed06823c247b0ff31119e50ab7216d95ead59a6efc29&o=&hp=1"
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/66127246.jpg?k=0736407576d811cfdb49cc98fd765627412e23277af094c292fd52115e36c99b&o=&hp=1"
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/59204124.jpg?k=469cb6603932b23538bda58ef3f1ad232226b365b016c16bfdf613665740b32f&o=&hp=1"
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/55597302.jpg?k=cded981ff438b69fa4fbcd138ccf516a2475b024d45a4e32030458a56e7794e5&o=&hp=1"
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/55596891.jpg?k=40d9b0a4cbb040921fea64eb0cf6d12588b5e29d11a300161bf789a558e78a8b&o=&hp=1"
    }
  ];

  const handleOpen = (i) =>{
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove=(direction) =>{
    let newSliderNumber;
    if(direction ==="")
    {
      newSliderNumber = slideNumber === 0 ? 5 : slideNumber-1
    }
    else{
      newSliderNumber = slideNumber === 5 ? 0 : slideNumber+1
    }

    setSlideNumber(newSliderNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon ={faCircleXmark} className =" close" onClick={()=>setOpen(false)}/>        
          <FontAwesomeIcon icon ={faCircleArrowLeft} className = " arrow" onClick={()=>handleMove("l")}/>        
          <div className="slideWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon ={faCircleArrowRight} className ="arrow" onClick={()=>handleMove("r")}/>        
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent Location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $144 at this property and get a free airport taxi
          </span>
          <div className="hotelmages">
            {photos.map((photo,i) => (
              <div className="hotelImgWrapper">
                <img onClick= {()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of krakow</h1>
              <p className="hotelDesc">
                Situated in Prague, 300 m from Municipal House, The Julius Prague features accommodation with a restaurant, private parking, a fitness centre and a bar. Among the facilities at this property are a 24-hour front desk and room service, along with free WiFi throughout the property. The hotel has family rooms.

                All units in the hotel are equipped with a coffee machine. Complete with a private bathroom fitted with a shower and a hairdryer, all rooms at The Julius Prague have a flat-screen TV and air conditioning, and some rooms also boast a seating area. At the accommodation the rooms are fitted with bed linen and towels.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in th ereal heart of krakow, this property has an excellent Location score of 9.8!
              </span>
              <h2>
                <b>$945</b>(9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel

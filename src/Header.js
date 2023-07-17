import React from 'react'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import hero_1 from './img/hero_1.jpg';
import hero_2 from './img/hero_1.jpg';
import dishes_2 from './img/dishes_2.jpg';


function Header() {
  return (
      <div id="container">
       <Carousel variant="dark" fade>
      <Carousel.Item interval={500}>
        <img          
        className="d-block w-100"
          src={hero_1}
          alt="First slide"
          
        />

        <Carousel.Caption>
          <p>TEST</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} fade={true}>
        <img
          
          className="d-block w-100"
          src={hero_2}
          alt="Second slide"
        />

        <Carousel.Caption>
         
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} fade={true}>
        <img
          className="d-block w-100"
          src={dishes_2}
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>    
   </div>
  )
}

export default Header

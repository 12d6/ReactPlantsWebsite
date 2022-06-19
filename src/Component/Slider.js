import React from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = () => {
  return (
    <div className="Carousel">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/fb/1c/07/fb1c07f47ee18267661e70f038bbdad3.gif"height="670px"
            alt="First slide"
          />
          <Carousel.Caption>
            
            <h1  className="textco">BLOOM WHERE YOU ARE PLANTED </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/d9/a8/75/d9a875aa4cef3baccd89f4d64ba15b3b.gif "height="670px" 
            alt="Second slide"
          />
          <Carousel.Caption>
           
            <h1 className="textco">I AM NOT AGING I JUST NEED REPOTTING.</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/1b/72/2a/1b722a7759e995bb4bc0721d45b196bd.gif"height="670px"
            alt="Third slide"
          />
          <Carousel.Caption>
            
            <h1 className="textco">
              HE WHO PLANTS A GARDEN PLANTS HAPPINESS.
           </h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;

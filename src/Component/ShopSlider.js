import React from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadComponents from "./HeadComponents";

const ShopSlider = () => {
  return (
    <div className="Carousel">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/eb/22/3f/eb223f5ce629d66ae9a02d5afeace013.gif"height="625px "
            alt="First slide"
          />
          <Carousel.Caption>
            
            <h1  className="textco">BLOOM WHERE YOU ARE PLANTED </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/62/5a/fe/625afefd509005bf4a267b851147edee.gif "height="620px" 
            alt="Second slide"
          />
          <Carousel.Caption>
           
            <h1 className="textco">I AM NOT AGING I JUST NEED REPOTTING.</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/20/e5/49/20e549cbae5f16b30242df32003d4e06.gif"height="620px"
            alt="Third slide"
          />
          <Carousel.Caption>
            
            <h1 className="textco">
              HE WHO PLANTS A GARDEN PLANTS HAPPINESS.
           </h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <HeadComponents />
    </div>
    
  );
};

export default ShopSlider;

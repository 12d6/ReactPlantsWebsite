import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeadComponents = () => {
   


    let navigate = useNavigate();
    const handleShop=()=>{
        navigate("/Shop")
    }
    const handleabout=()=>{
        navigate("/About")
    }
    const handleContact=()=>{
        navigate("/Contact")
    }
    return (
        <div>
            <div className="head-card">
      <div className="products-card">
      <img  className="size" src="https://i.pinimg.com/564x/e0/74/86/e07486f076fd4b11661f203557966f05.jpg" ></img>
      <h4>Shop</h4>
      <button onClick={handleShop}>Click here</button>
      </div>
      <div className="products-card">
      <img  className="size" src="https://i.pinimg.com/originals/72/14/09/721409a501a6122cbafc4f29eec69dc0.gif" ></img>
      <h4>About Us</h4>
      
      <button onClick={handleabout}>Click here</button>
      </div>
      <div className="products-card">
      <img  className="size" src=" https://i.pinimg.com/564x/54/87/91/548791cd7e7cebf4e440a5987fb5f09d.jpg" ></img>
      <h4>Feel Free to Contact us</h4>
      <button onClick={handleContact}>Click here</button>
      </div>

     </div>
        </div>
    );
};

export default HeadComponents;
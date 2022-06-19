import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import ShopSlider from "../Component/ShopSlider";

const Shop = () => {
  const changestyle = ({ isActive }) => {
    return {
      color: isActive ? "#51cf66" : "black",
    };
  };
  return (
    <div>
     
      

      <nav>
        <ul className="Shopping">
          <li className="Shops">
            <NavLink to="Seedsandbulbs" className="text" style={changestyle}>
              Seedsandbulbs
            </NavLink>
          </li>
          <li className="Shops">
            <NavLink to="Plantneeds" className="text" style={changestyle}>
              Plants
            </NavLink>
          </li>
          <li className="Shops">
            <NavLink to="Tools" className="text" style={changestyle}>
              Tools
            </NavLink>
          </li>
          <li className="Shops">
            <NavLink to="Decor" className="text" style={changestyle}>
              Plant Decor
            </NavLink>
          </li>
        </ul>
        
       
      </nav>
     <ShopSlider/>
      <Outlet />
      
     
      
      
      
      
    </div>
  );
};

export default Shop;

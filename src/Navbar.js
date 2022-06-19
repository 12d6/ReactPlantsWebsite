import React from "react";
import { NavLink } from "react-router-dom";
import CartImage from './CartImage.svg'



const Navbar = () => {
  const changestyle = ({ isActive }) => {
    return {
      color: isActive ? "#51cf66" : "black",
    };
  };
  return (
    <div>
      <div>
        <nav>
          <ul className="d-block w-100">
            <div>
            <img  className="logo1"src="https://i.pinimg.com/564x/b6/51/e1/b651e19af2df902c91ed5127620b63e3.jpg" height="70px" width="70px"></img>
              <h1 className="title">BLOOM</h1>
            </div>

            <li >
              <NavLink style={changestyle}  to="/" className="text">
                Home
              </NavLink>
            </li>
            <li >
              <NavLink to="Shop" style={changestyle} className="text">
                Shop
              </NavLink>
            </li>

            <li >
              <NavLink to="About" style={changestyle} className="text">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="Contact" style={changestyle} className="text">
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink to="Login" style={changestyle} className="text">
                Login
              </NavLink>
            </li>
            <li >
              <NavLink to="Register" style={changestyle} className="text">
                Register
              </NavLink>
            </li>

            <li className="cart-icon">
              <span>0</span>
              <NavLink to="Cart">
                 <img src={CartImage} width="25" alt="Cart Icon"></img>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

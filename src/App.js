import React from 'react';
import Navbar from './Navbar';
import Home from './Items/Home';
import {Route,Routes} from 'react-router-dom';
import Shop from './Items/Shop';
import './index.css'
import Contact from './Items/Contact';
import NoMatch from './Items/Nomatch';
import About from './Items/About';
import Register from './Items/Register';
import Login from './Items/Login';
import Cart from './Items/Cart';
import Seedsandbulbs from './ShopComponents/Seedsandbulbs';
import Plantneeds from './ShopComponents/Plantneeds';
import Tools from './ShopComponents/Tools';
import Decor from './ShopComponents/Decor';




const App = () => {
    return (
        <div>
            
            <Navbar/>
            <Routes>
                <Route path="/" element ={<Home/>}/>
                <Route path="Shop" element={<Shop/>}>
                <Route path="Seedsandbulbs" element={<Seedsandbulbs/>}/>
                <Route path="Plantneeds" element={<Plantneeds/>}/>
                <Route path="Tools" element={<Tools/>}/>
                <Route path="Decor" element={<Decor/>}/>
                </Route>
                <Route path="About" element={<About/>}/>
                <Route path="Contact" element={<Contact/>}/> 
                <Route path="Login" element={<Login/>}/> 
                <Route path="Register" element={<Register/>}/> 
                <Route path="Cart" element={<Cart/>}/> 
                <Route path="*" element={<NoMatch/>}/> 

                
            </Routes>
            
        </div>
    );
};

export default App;
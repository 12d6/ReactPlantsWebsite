import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    let navigate = useNavigate();
    const handleLogout=()=>{
        navigate("/Home")
    }
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>

            
        </div>
    );
};

export default Logout;
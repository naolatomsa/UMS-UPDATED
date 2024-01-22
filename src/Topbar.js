import React from "react";
import './topbar.css';
import IMG from "./img";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
function TopBar() {
  const navigate = useNavigate();
  // const access = localStorage.getItem('access');
  // const userRole = localStorage.getItem('userRole');
  // console.log(access);

  // Logout
 
  const handleLogout = () => {
    try{
    localStorage.removeItem('access');
    localStorage.removeItem('userRole');

    navigate('/');
    }catch(error){
      console.log(error)
    }
  };
    return(
      
     <div className="user-bar">
     <img src={process.env.PUBLIC_URL + '/Icons/top icon.png'} style={{ width: '26px', height: '26px' }} alt='Back'  className="topicon"/>
     <p className="Iconname">UMS</p>
    
      <p className="topbarname" style={{color:'white'}}>Naol Atomsa</p>
      <div className="left">
      <IMG style={{justfiyself:'start'}} imgName={"https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg"} 
        size={'25px'}/>
        <button className='logout' onClick={handleLogout} style={{borderRadius:'10px',cursor:'pointer'}}> logout</button>
        </div>
 

      
    </div>
  


    );
}
export default TopBar;
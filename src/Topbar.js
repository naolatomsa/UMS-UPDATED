import React from "react";
import './topbar.css';
import IMG from "./img";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useAuth } from "./Auth-context";
function TopBar(props) {
  const name = props.name;
  const imageSrc = props.imageSrc;
  const navigate = useNavigate();
  // const [userInfo, setUserInfo] = useState(useAuth)
  

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
    
      <p className="topbarname" style={{color:'white'}}>{name}</p>
      <div className="left">
      <IMG style={{justfiyself:'start'}} imgName={imageSrc} 
        size={'25px'}/>
        <button className='logout' onClick={handleLogout} style={{borderRadius:'10px',cursor:'pointer'}}> logout</button>
        </div>
 

      
    </div>
  


    );
}
export default TopBar;
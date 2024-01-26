import React from 'react'
import TopBar from './Topbar';
import IMG from './img';
import {useNavigate} from 'react-router-dom';
import { useAuth } from './Auth-context';
import './edituser.css'

const UserDashboard = () => {
  const authInfo = useAuth();
  const navigate = useNavigate();

  return (
    <>
    <TopBar name={authInfo.user.username} imageSrc={"https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg"}/>
    <div className="card auserboard">
  
    <div className="card1">
      {/* <img
        src="https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg"
        alt="User image"
        className="card__image"
      /> */}
      <div className="wrapper userprofile">
            <a className="third after" style={{fontSize:'17px'}}>My profile</a>
            <a onClick={()=>navigate('/updatepro')} className='third after' style={{fontSize:'17px'}}>Update profile</a>
         </div>

      <IMG imgName={"https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg"} 
      size={'100px'}/>
      <div className="card__text" >
      <h2>1{authInfo.user.username}</h2>
        <p style={{color: 'black'}}>Ethiopia</p>
        <p style={{color: 'black'}}>Addis Ababa</p>
      </div>
    </div>
    <ul className="card2" style={{ borderBottom: '1px solid #ccc', width:'50%',marginBottom:'0', marginLeft:'100px' }}>
      <li>
      <img src={process.env.PUBLIC_URL + '/Icons/name.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
        <span>user</span>
      </li>
      <li>
      <img src={process.env.PUBLIC_URL + '/Icons/active.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
        <span>active</span>
      </li>
      <li>
      <img src={process.env.PUBLIC_URL + '/Icons/men.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
        <span>male</span>
      </li>
    </ul>
    <ul className="card3" style={{width:'350px', marginTop:'0',marginLeft:'100px'}} >
      <li>
      <img src={process.env.PUBLIC_URL + '/Icons/email.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
        <span>email</span>
      </li>
      <li>
      <img src={process.env.PUBLIC_URL + '/Icons/phone.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
        <span>phone</span>
      </li>
    </ul>
  </div>
  </>
    );
}

export default UserDashboard;
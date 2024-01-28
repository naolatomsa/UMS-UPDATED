import React from 'react'
import TopBar from './Topbar';
import IMG from './img';
import {useNavigate} from 'react-router-dom';
import { useAuth } from './Auth-context';
import './edituser.css'

const role = localStorage.getItem('userRole')
const UserDashboard = () => {
  const authInfo = useAuth();
  const navigate = useNavigate();
  // console.log(authInfo);
  // const [loading, setLoading]

  return (
   <>
   {
    authInfo ? ( <>
      <TopBar name={authInfo.user.first_name} fname={authInfo.user.last_name} imageSrc={authInfo.user.userprofile!==null?authInfo.user.userprofile.photo:"https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg"}/>
      <div className="card auserboard">
      {/* console.log('Image URL:', authInfo.user.userprofile.photo); */}
    {/* <img src={authInfo.user.userprofile.photo} alt='userpro' /> */}
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
        <h2>{authInfo.user.first_name}  {authInfo.user.last_name}</h2>
          <p style={{color: 'black'}}>{authInfo.user.userprofile!==null?authInfo.user.userprofile.location:"-"}</p>
          {/* <p style={{color: 'black'}}>Addis Ababa</p> */}
        </div>
      </div>
      <ul className="card2" style={{ borderBottom: '1px solid #ccc', width:'50%',marginBottom:'0', marginLeft:'100px' }}>
        <li>
        <img src={process.env.PUBLIC_URL + '/Icons/name.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
          <span>{role==='Admin'?'Admin': 'User'}</span>
        </li>
        <li>
        <img src={process.env.PUBLIC_URL + '/Icons/active.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
        <span>{authInfo.user.is_active === true ? 'Active' : 'Inactive'}</span>

        </li>
        <li>
        {authInfo.user.userprofile!==null?authInfo.user.userprofile.gender==='Male'?(<img src={process.env.PUBLIC_URL + '/Icons/men.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>):
        (<img src={process.env.PUBLIC_URL + '/Icons/women.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>):"-"}
        
          <span>{authInfo.user.userprofile!==null?authInfo.user.userprofile.gender:"-"}</span>
        </li>
      </ul>
      <ul className="card3" style={{width:'350px', marginTop:'0',marginLeft:'100px'}} >
        <li>
        <img src={process.env.PUBLIC_URL + '/Icons/email.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
          <span>{authInfo.user.email}</span>
        </li>
        <li>
        <img src={process.env.PUBLIC_URL + '/Icons/phone.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
          <span>{authInfo.user.userprofile!==null?authInfo.user.userprofile.phone:"-"}</span>
        </li>
      </ul>
    </div>
    </>):(

      <h1>Loading ...</h1>
    )
   }
  </>
    );
}

export default UserDashboard;
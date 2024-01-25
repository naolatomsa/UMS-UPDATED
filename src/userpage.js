import React from 'react';
import './userpage.css';
import IMG from './img';
// import TopBar from './Topbar';
function Gule(){
    return(
    < div className='userpage'>
        <img src={process.env.PUBLIC_URL + '/Icons/back.png'} style={{ width: '26px', height: '26px', marginTop:'20px' }} alt='Back' />

    <div className="card">
      <div className="card1">
      <IMG imgName={"https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg"} 
      size={'100px'}/>
      <div className="card__text">
        
        <h2>Naol Atomsa</h2>
        <p style={{color: 'black'}}>Ethiopia</p>
        <p style={{color: 'black'}}>Addis Ababa</p>
      </div>
    </div>
    <ul className="card2">
      <li>
      <img src={process.env.PUBLIC_URL + '/Icons/name.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
        <span>Admin</span>
      </li>
      <li>
      <img src={process.env.PUBLIC_URL + '/Icons/active.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
        <span>Active</span>
      </li>
      <li>
      <img src={process.env.PUBLIC_URL + '/Icons/men.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
        <span>Male</span>
      </li>
    </ul>
    <ul className="card3">
      <li>
      <img src={process.env.PUBLIC_URL + '/Icons/email.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
        <span>naolatomsa4@gmail.com</span>
      </li>
      <li>
      <img src={process.env.PUBLIC_URL + '/Icons/phone.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
        <span>+251943134213</span>
      </li>
    </ul>
  </div>
</div>

    );
}
export default Gule;
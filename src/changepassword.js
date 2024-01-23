import React from 'react'
import { useNavigate } from 'react-router-dom';
const Changepassword = () => {
  const navigate = useNavigate();
  const handleChangepassword = () => {
    navigate('/');
  };
  return (
    <div className='all'>
    <div className='wow'>
        <div className='Naol'>
        <div id="styleec" />
        <div id="stylerec" />
        <div id="poly1" />
        <div className='midlep'>
          <h1 className='h1'>WELCOME!</h1>
          <p className='fp'>
            From chaos to clarity. Simplify user management and say goodbye to spreadsheets.
          </p>
          <p className='sp'>Your time</p>
          <p className='thp'>your data</p>
          <p className='fitp'style={{marginBottom:'0'}}>your peace of mind!</p>
        </div>
      </div>
    </div>
    <div className='form-container' style={{paddingBottom:'0'}}>
      <form className='form' onSubmit={handleChangepassword}>
        <h1 style={{color:'#36AE8B'}}>CREATE NEW PASSWORD</h1>
        {/* <div className='input1'>
          <p style={{color:'black'}}>Enter your email for the verification process, we will send 4 digits code to your email.</p>
        </div> */}
        <div className='input2'>
          <input type='password' placeholder='New password' required style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/Icons/password.png')`, backgroundSize: '20px 20px', 
                backgroundRepeat: 'no-repeat',backgroundPosition: 'left 10px center', paddingLeft: '50px'}}/>
        </div>
        <div className='input2'>
          <input type='password' placeholder='Confirm new password' required style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/Icons/password.png')`, backgroundSize: '20px 20px', 
                backgroundRepeat: 'no-repeat',backgroundPosition: 'left 10px center', paddingLeft: '50px'}}/>
        </div>
        <button type='submit' style={{marginTop: '30px'}}>Continue</button>
      </form>
    </div>
  </div>
  )
}

export default Changepassword;
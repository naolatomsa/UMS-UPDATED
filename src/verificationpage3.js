import React from 'react'
import './login.css'
import {useNavigate} from 'react-router-dom';

const Verificationpage3= () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/forget')
  }
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
          <p className='fitp' style={{marginBottom:'0'}}>your peace of mind!</p>
        </div>
      </div>
    </div>
    <div className='form-container' style={{paddingBottom:'0'}}>
      <form className='form'>
        <h1 style={{color:'#36AE8B'}}>Password reset sent</h1>
        {/* <div className='input1'>
          <p style={{color:'black'}}>Enter your email for the verification process, we will send 4 digits code to your email.</p>
        </div> */}
        <p style={{color:'black',fontSize:'17px'}}>We've emailed you instructions for setting your password,
        </p>
        {/* <div className='input2'>
          <input type='password' placeholder='password' required />
        </div> */}
        {/* <div className='input2'>
          <input type='text' placeholder='paste here' required/>
        </div> */}
        {/* <button style={{marginTop: '30px'}}>Continue</button> */}
        <p style={{color:'black',fontSize:'17px'}}>If you don't receive an email,<a style={{fontSize:'17px'}} onClick={handleBack}>Click Here</a></p>
        {/* <p style={{color:'black'}}>If you didn’t receive a code! <a style={{color:'#38A899'}}>Resend</a></p> */}
      </form>
    </div>
  </div>
  )
}

export default Verificationpage3;
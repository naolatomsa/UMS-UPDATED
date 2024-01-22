import React from 'react'
import {useNavigate} from 'react-router-dom';
const ForgetPass = () => {
  const navigate = useNavigate()
  const handleReset = () => {
    navigate('./v1')
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
            <form className='form'  onSubmit={handleReset}>
              <h1 style={{color:'#36AE8B'}}>FORGOT PASSWORD</h1>
              <div className='input1'>
                <p style={{color:'black',fontSize:'17px'}}>Enter your email for the verification process, <br></br>we will send 4 digits code to your email.</p>
              </div>
              <div className='input2'>
                <input type='email' placeholder='Email' required style={{backgroundImage: `url('${process.env.PUBLIC_URL}/Icons/email.png')`, backgroundSize: '20px 20px', 
              backgroundRepeat: 'no-repeat',backgroundPosition: 'left 10px center', paddingLeft: '50px'}}/>
              </div>
              <button type='submit' style={{marginTop: '30px'}}>Continue</button>
            </form>
          </div>
        </div>
      );
}

export default ForgetPass;
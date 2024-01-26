import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './login.css';
// import bcrypt from 'bcryptjs';

// const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;


function Login() {
  const [action, setAction] = useState('Login');
  const [isSignUp, setIsSignUp] = useState(false);
  const [Username, setUserName] = useState("")
  const [Password, setPassword] = useState("")
  const [Email, setEmail] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const navigate = useNavigate()
  const switchForm = () => {
    setIsSignUp(!isSignUp);
    setAction(isSignUp ? 'Login' : 'Sign Up');
    setUserName("");
    setPassword("");
    
    
  };

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z!@#$%^&*()_+0-9]{6,}$/;
  const isValid = passwordRegex.test(Password);
  useEffect(()=>{
   setIsValidPassword(isValid);
  }, [isValid])

  const handleForget = () => {
    navigate('./forget')
  }
  const handleSignup = async (e) => {
      e.preventDefault();
  
      if (!Username.trim() || !Password.trim() || !Email.trim() || !ConfirmPassword.trim()) {
        console.error('All fields are required.');
        return;
      }
      if (Password !== ConfirmPassword) {
        console.error('Passwords do not match.');
        return;
      }
  
      try {
        const response = await axios.post('http://192.168.0.105:8000/api/signup/', {
          Username,Email, Password, ConfirmPassword 
        });

        const {access} = response.data
        const {refresh} = response.data
        const {userRole} = response.data
  
        console.log('Form data sent successfully!', response.data);
  
        navigate('/setaccount')

        localStorage.setItem('access', access);
        localStorage.setItem('refresh', refresh);
        localStorage.setItem('userRole', userRole);
      } 
      catch (error) {
        console.error('empty', error);
        setError("Empty form")
      }

    };


    //login


    const handleLogin = async (e) => {
      e.preventDefault()
      try {
        const response = await axios.post('http://192.168.0.105:8000/api/login', {
          Username,
          Password,
        });


        const {access} = response.data
        const {refresh} = response.data
        const {userRole} = response.data
        if (userRole==="Admin"){
          navigate('/adminpro')
        }

        else{
          navigate('/userpro')
        }
        
  
        localStorage.setItem('access', access);
        localStorage.setItem('refresh', refresh);
        localStorage.setItem('userRole', userRole);

      } catch (error) {
        console.error('Empty form', error);
        setError('Empty form');
      }
    };




  return (
    <div className='all'>
      <div className='wow'>
          <div className='Naol'>
          <div id="styleec" />
          <div id="poly1" />
          
          <div className='midlep'>
          <div id="stylerec" />
          
            <h1 className='h1'>WELCOME!</h1>
            <p className='fp'>
              From chaos to clarity. Simplify user management and say goodbye 
              to spreadsheets.
            </p>
  
            <p className='sp'>Your time</p>
            <p className='thp'>your data</p>
            <p className='fitp' style={{marginBottom:'0'}}>your peace of mind!</p>
          </div>
        </div>
      </div>
      <div className='form-container' style={{paddingBottom:'0'}}>
        
        <form className='form' onSubmit={isSignUp ? handleSignup : handleLogin}>
        
          <h1 className='h2'>{action}</h1>
          
          {isSignUp && (
            <div className='input3'>
              <input type='email' placeholder='Email' required value={Email} onChange={(e)=>{setEmail(e.target.value)}}
              style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/Icons/email.png')`, backgroundSize: '20px 20px', 
              backgroundRepeat: 'no-repeat',backgroundPosition: 'left 10px center', paddingLeft: '50px' }}/>
            </div>
          )
          }
          <div className='input1'>
            <input type='text' required value={Username} onChange={(e)=>{setUserName(e.target.value)}} placeholder={error ? error : 'Username'}
        style={{ borderColor: error ? 'red' : '' , backgroundImage: `url('${process.env.PUBLIC_URL}/Icons/name.png')`, backgroundSize: '20px 20px', 
        backgroundRepeat: 'no-repeat',backgroundPosition: 'left 10px center', paddingLeft: '50px' }} />
          </div>
          <div className='input2'>
            <input type='password' required value={Password} onChange={(e)=>{setPassword(e.target.value)}} placeholder={error ? error : 'Password'}
        style={{ borderColor: error ? 'red' : '' , backgroundImage: `url('${process.env.PUBLIC_URL}/Icons/password.png')`, backgroundSize: '20px 20px', 
        backgroundRepeat: 'no-repeat',backgroundPosition: 'left 10px center', paddingLeft: '50px'}}/>
{/* 
            {isValidPassword ? (
                <p>Password is valid!</p>
              ) : (
                <p>
                  Password must be at least 6 characters long and contain at least one
                  lowercase letter, one uppercase letter, and one special character.
                </p>
              )} */}
          </div>
          {isSignUp && (
            <div className='input4'>
              <input type='password' placeholder='Confirm Password' required value={ConfirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}
                style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/Icons/password.png')`, backgroundSize: '20px 20px', 
                backgroundRepeat: 'no-repeat',backgroundPosition: 'left 10px center', paddingLeft: '50px' }}/>
            </div>
          )}
          
          {isSignUp ? (<button onClick={handleSignup}>{action}</button>):
           (<button type='submit' onClick={handleLogin}>{action}</button>)}
           {isSignUp ? '': (<a onClick={handleForget} style={{fontSize:'17px',color:'#38A899'}}>Forgot your password?</a>)}
          {/* <a href='#'>{isSignUp ? '' : 'Forgot your password?'}</a> */}
          {/* <a onClick={switchForm}> {isSignUp ? 'Login' : 'Sign Up'}</a> */}
          <p style={{ color: 'black',fontSize:'17px'}} >
            {isSignUp ? 'Already have an account?' : 'New user?'}
            <a onClick={switchForm} style={{fontSize:'17px', color:'#38A899'}}> {isSignUp ? 'Login' : 'Sign Up'}</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

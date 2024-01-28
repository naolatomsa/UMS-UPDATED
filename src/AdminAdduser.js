import React from 'react'
import { useEffect, useState } from 'react';
import TopBar from './Topbar'
import axios from 'axios'
import './edituser.css'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth-context';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

function AdminAdduser(){
  const authInfo = useAuth();
  const navigate = useNavigate();
  const [ Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");  
  const [error, setError] = useState('');
      const handleAdduser = async (e)=>{
        e.preventDefault();
        if(Password===ConfirmPassword){
          try{
            const response = await axios.post("http://127.0.0.1:8000/api/signup/", {
              Email, Password, ConfirmPassword, Username
            })

            toastr.success("You have Added new user Succesfully")
            setConfirmPassword("")
            setPassword("")
            setEmail("")
            setUsername("")
           
  
          } catch(error){

          }

        }
        else{
          toastr.warning("Password Doesn`t match")
        }

      }


  return (
    <>
    {
      authInfo? 
      <div className='Add-user'>
        <TopBar name= {authInfo.user.username} imageSrc={authInfo.user.image}/>
        <a onClick={()=>navigate('/Admin Dashbord')}><img src={process.env.PUBLIC_URL + '/Icons/back.png'} style={{ width: '26px', height: '26px', marginLeft:'100px' }} alt='Back' /></a>
        <div className='form-container adduser'>
        <form className='form editform' style={{height:"500px"}} onSubmit={handleAdduser}>
        <h1 className='htwo'>Add New User</h1>
        <div className='input3'>
            <input type='text' placeholder='username' required value={Username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
        <div className='input2'>
        <input type="email" placeholder="email" required value={Email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
            <div className='input3'>
            <input type='password' placeholder='password' required value={Password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
        <div className='input2'>
        <input type="password" placeholder="confirm password" required value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
        </div>
            <div className='input6' style={{gridColumn: '-3 / -1', paddingLeft:'240px'}}>
            <button type='submit' >Add user</button> 
            </div>
        </form>
        </div>
    </div>
    :
    <h1>Loading...</h1>
    }
    </>
  )
}

export default AdminAdduser
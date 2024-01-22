import React from 'react';
import './login.css';
import './edituser.css';
import TopBar from './Topbar';
import { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
import Gule from './userpage';
import View from './Activity';
function AdminProfile(){

    const [userInfo, setUserInfo] = useState('nameher');
    useEffect(() => {
      const access = localStorage.getItem('access')
  
      if (access) {
        const decodedUser = jwtDecode(access);
        setUserInfo(decodedUser);
      }
    }, []);
    
    return(

        <div class="edituser">
        
        <div className='tolbar1'><TopBar /></div>
       
        <Gule />
        
        <div className='form-container edittwo'>
        <form className='form editform' action='#'>
        <h1 className='htwo'>Edit Profile</h1>
        <div className='input3'>
            <input type='password' placeholder='password' required/>
            </div>
        <div className='input2'>
        <input type="text" placeholder="user name" required/>
        </div>

            <div className='input2'>
            <input type='password' placeholder='confirm password' required/>
            </div>
            <div className='input3'>
            <input type='password' placeholder='password' required/>
            </div>
        <div className='input2'>
        <input type="text" placeholder="user name" required/>
        </div>

            <div className='input2'>
            <input type='password' placeholder='confirm password' required/>
            </div>
            <div className='input3'>
            <input type='password' placeholder='password' required/>
            </div>
        <div className='input2'>
        <input type="text" placeholder="user name" required/>
        </div>
            <div className='input6'>
            <button>Save</button>
            </div>
        </form>
        <View />
        </div>
        </div>
    );
}
export default AdminProfile;
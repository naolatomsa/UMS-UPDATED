import React from 'react';
import './login.css';
import './edituser.css';
import TopBar from './Topbar';
import View from './Activity';
import Gule from './userpage';
function Edit(){
    return(
        <div class="edituser">
        
        <div className='tolbar1'><TopBar /></div>
        {/* <img src='file:///C:/Users/HP/Desktop/web/back.png' width={100} height={100}/> */}

        <Gule location='ethiopia'
            role = 'admin'
            status = 'active'
            gender = 'male'
            email = 'naol@gmail.com'
            phone = '+2519'/>
        <div className='form-container edit'>
        <form className='form editform' action='#'>
        <h1 className='htwo'>Edit User Account</h1>
        <div className='input3'>
            <input type='password' placeholder='password' required/>
            </div>
        <div className='input2'>
        <input type="text" placeholder="user name" required/>
        </div>

            <div className='inputfour'>
            <input type='password' placeholder='confirm password' required/>
            </div>
            <div className='input6'>
            <button>save</button>
            </div>
        </form>
        <View />
        </div>
        </div>
    );
}
export default Edit;
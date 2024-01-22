import React, { useState } from 'react';
import { useEffect } from 'react';
import TopBar from './Topbar';
import axios from 'axios';
import './adminDashbord.css';
// import IMG from './img';


const access = localStorage.getItem('access')
function Naol() {
  const [data, setData] = useState([]);

  //Fetch User Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user_list');
        const responseData = response.data;
        if (Array.isArray(responseData)) {
          setData(responseData);
        } else {
          console.error('Fetched data is not an array:', responseData);
          setData([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
      }
    };


    fetchData();
  }, []);


  //Handle Edit User
  const handleEdituser = async(userId)=>{

  }

  //Handle Deactivate user
  const handleDeactivate = async (userId) => {
    alert('are you sure')
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/deactivate_user ${userId}`);
      console.log('User deactivated successfully!', response.data);
  
    } catch (error) {
      console.error('Error deactivating user:', error);

    }
  };


 //Handle delete user
 const handleDelete = async (userId) => {
    alert('are you sure')
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/delete_user/${userId}`);
      console.log('User deleted successfully!', response.data);
      
    } catch (error) {
      console.error('Error deleting user:', error);
      
    }
  };


  return (
    <>
    
    <div className="page">
    <TopBar />
    <div className="user-man">
      <p style={{
      color: 'black' , fontWeight:'bold'
    }}>User Management</p>
      <input type="text" placeholder="search" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/Icons/search.png')`, backgroundSize: '20px 20px', 
                backgroundRepeat: 'no-repeat',backgroundPosition: 'left 10px center', paddingLeft: '50px'}}/>
    </div>
    <div className="user-role">
      <p style={{
      color: 'black'
    }}> UMS</p>
          <div className="selectdiv">
        <label>
            <select>
                <option value="" disabled>Status</option>
                <option>Active</option>
                <option>Inactive</option>
            </select>
        </label>
      </div>
      <div className="selectdiv">
        <label>
            <select>
                <option value="" disabled>Role</option>
                <option>Admin</option>
                <option>User</option>
            </select>
        </label>
      </div>
      <button>Filter</button>
    </div>
    <div className="user-top">
      <p style={{
      color: 'black', fontWeight:'bold'
    }}>
        User <br /> here is a list of all User
      </p>
      <button>Add User</button>
    </div>

    <table>
      <thead>
        <tr>
        <th>User Name</th>
        <th>email</th>
        <th>Role</th>
        <th>status</th>
        <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {data.map((item) => (
        <tr key={item.id}>
        <td><a onClick={handleEdituser(item.id)}>{item.username}</a></td>
        <td>{item.email}</td>
        <td>{item.id}</td>
        <td>$100</td>
        <td><a onClick={() => handleDeactivate(item.id)}><img src={process.env.PUBLIC_URL + '/Icons/deactivate.jpg'} style={{ width: '20px', height: '20px', marginRight:'15px'}} alt='Back' /></a>
        <a onClick={() => handleDelete(item.id)}><img src={process.env.PUBLIC_URL + '/Icons/delete.jpg'} style={{ width: '20px', height: '20px' }} alt='Back' /></a></td>
        </tr>
        ))}</tbody>
      </table>
  </div>
    
    </>
  );
}

export default Naol;

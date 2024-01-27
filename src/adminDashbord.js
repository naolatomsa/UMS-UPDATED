import React, { useState } from 'react';
import { useEffect } from 'react';
import TopBar from './Topbar';
import axios from 'axios';
import './adminDashbord.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth-context';
// import IMG from './img';


const access = localStorage.getItem('access')
function Naol() {
  const authInfo = useAuth();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [role, setRole] = useState('');
  // const [status, setStatus] = useState(['true'])
  const navigate = useNavigate();
  // const [item, setItem] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  console.log(search)
  //Fetch User Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user_list');
        const responseData = response.data;
        if (Array.isArray(responseData)) {
          setData(responseData.map(user => ({ ...user, status: true })));
        // if (Array.isArray(responseData)) {
        //   setData(responseData);
        console.log(response.data);
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

  //search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter(item =>
    item.username?.toLowerCase().includes(searchQuery.toLowerCase()));
  //Handle Edit User
  // const handleEdituser = async(userId)=>{
  //   navigate('/edituser/:userId')

  // }

  //Handle Deactivate user
  const handleDeactivate = async (userId) => {

    alert('are you sure')
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/deactivate_user/${userId}`);
      console.log('User deactivated successfully!', response.data);
      
      // window.location.reload();

      setData((prevData) =>
        prevData.map(user =>
          user.id === userId ? { ...user, status: !user.status } : user
        )
      );
  
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
      window.location.reload();
      // setItem(prevItems => prevItems.filter(item => item.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
      
    }
  };


  return (
    <>
    {
      authInfo ?(    <div className="page">
      <TopBar name={authInfo.user.username} imageSrc={authInfo.user.image}/>
      <div className="user-man">
        <p style={{
        color: 'black' , fontWeight:'bold'
      }}>User Management</p>
        <input type="text" placeholder="search" value={search} onChange={(e)=>setSearch(e.target.value)} style={{backgroundImage: `url('${process.env.PUBLIC_URL}/Icons/search.png')`, backgroundSize: '20px 20px', 
                  backgroundRepeat: 'no-repeat',backgroundPosition: 'left 10px center', paddingLeft: '50px'}} />
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
        <button onClick={()=>navigate('/adduser')}>Add User</button>
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
          {data.filter((item)=>{
            return search.toLocaleLowerCase()===''
            ?item
            :item.username.toLocaleLowerCase().includes(search);
           }) 
           .map((item)=>(
          <tr key={item.id}>
          <td><a onClick={()=> navigate(`/edituser/${item.id}`)}>{item.username}</a></td>
          <td>{item.email}</td>
          <td>{item.id}</td>
          <td>{item.email}</td>
          <td><a onClick={() => handleDeactivate(item.id)}>{item.is_active? (<img src={process.env.PUBLIC_URL + '/Icons/deactivate.jpg'} style={{ width: '25px', height: '25px' }} alt='Back' />):
          (<img src={process.env.PUBLIC_URL + '/Icons/activeuser.png'} style={{ width: '25px', height: '25px' }} alt='Back' />)}</a>
          <a onClick={() => handleDelete(item.id)}><img src={process.env.PUBLIC_URL + '/Icons/delete.jpg'} style={{ width: '20px', height: '20px' }} alt='Back' /></a></td>
          </tr>
          ))}</tbody>
        </table>
    </div>):
    (
      <h1>Loading...</h1>
    )
    }

    
    </>
  );
}

export default Naol;

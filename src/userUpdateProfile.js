import React from 'react'
import { useEffect, useState } from 'react';
import TopBar from './Topbar'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import './edituser.css'
import IMG from './img';
import './topbar.css'

const access = localStorage.getItem('access')
console.log(access)

const UserUpdateProfile = () => {

    const [location, setLocation] = useState('');
    const [countries, setCountries] = useState([]);
    const [showCountriesList, setShowCountriesList] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [username, setUserName] = useState('');
    const navigate = useNavigate()
    useEffect(() => {
      const fetchCountries = async () => {
        try {
          const response = await axios.get('https://restcountries.com/v2/all');
            setCountries(response.data);
          } catch (error) {
            console.error('Error fetching countries:', error);
          }
        };
    
        fetchCountries();
      }, []);
      const handleIconClick = () => {
        setShowCountriesList(!showCountriesList);
      };
    
      const handleCountryChange = (selectedCountry) => {
        setLocation(selectedCountry.name);
        setShowCountriesList(false);
      };
      const handleUserUpdateProfile = async(e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://192.168.0.111:8000/api/update_profile',
            { firstName, lastName, location, phone, gender, username, 
            },
            {
              headers: {
                Authorization: `Bearer ${access}`,
              },
            }
          );

          console.log('profile Updated seccusfully!', response.data);
  
          // navigate('/setaccount')

        }catch(error){
          console.log(error);
        }

        // navigate('/userpro')
    
      };
    
  return (
    <>
    <TopBar />
    <div className="card auserboard">


          <div className="wrapper userprofile" style={{height:'50px'}}>
            <a onClick={handleUserUpdateProfile} className="third after" style={{fontSize:'17px'}}>My profile</a>
            <a className='third after' style={{fontSize:'17px'}}>Update profile</a>
         </div>
      <IMG imgName={"https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg"} 
            size={'100px'} style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/Icons/addphoto.png')`, backgroundSize: '20px 20px', 
            backgroundRepeat: 'no-repeat',backgroundPosition: 'left 10px center', paddingLeft: '50px' }}/>
        <form className='editform' onSubmit={handleUserUpdateProfile}>
       
        <div className='input3'>
            <input type='text' placeholder='first name' required value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
            </div>
        <div className='input2'>
        <input type="text" placeholder="last name" required value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
        </div>
        <div className='input1' style={{width:'300px', height:'48px',marginTop:'8px', border: 'solid 1px #38A899 '}} >
          <label htmlFor="gender" >Gender:<br></br></label>
        <select id="gender" name="gender" value={gender} onChange={(e)=>setGender(e.target.value)}>
            <option value="male" >Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
          </div>
            <div className='input3'>
            <input type='tel' placeholder='phone' required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            </div>
            <div className='input-containeradduser'>
              <div className='inputcountry'>
                <input
                  type='text'
                  placeholder='Location'
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <span className='icon' style={{cursor: 'pointer'}}onClick={handleIconClick}>
                  &#x25BC;
                </span>
              </div>
              {showCountriesList && (
                <select  style={{width: '50px'}}
                  className='countries-list'
                  onChange={(e) =>
                    handleCountryChange(
                      countries.find((country) => country.name === e.target.value)
                    )
                  }
                >
                  {countries
                    .filter((country) =>
                      country.name.toLowerCase().includes(location.toLowerCase())
                    )
                    .map((country) => (
                      <option key={country.alpha3Code} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                </select>
              )}
            </div>

            <div className='input2'>
            <input type='text' placeholder='user name' required value={username} onChange={(e)=>setUserName(e.target.value)}/>
            </div>
            {/* <div className='input3'>
            <input type='password' placeholder='password' required/>
            </div>
        <div className='input2'>
        <input type="password" placeholder="confirm password" required/>
        </div> */}
            <div className='input6' style={{gridColumn: '-3 / -1', paddingLeft:'240px'}}>
            <button type='submit'>Update</button>
            </div>
        </form>

    </div>
    </>
  )
}

export default UserUpdateProfile;
import React from 'react'
import { useEffect, useState } from 'react';
import TopBar from './Topbar'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import './edituser.css'
import IMG from './img';
import './topbar.css'
import { useAuth } from './Auth-context';

const access = localStorage.getItem('access')
// console.log(access)

const UserUpdateProfile = () => {

  const authInfo = useAuth();
  const [location, setLocation] = useState('');
  const [countries, setCountries] = useState([]);
  const [showCountriesList, setShowCountriesList] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate()
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v2/all');
          setCountries(response.data);
        } catch (error) {
          // console.error('Error fetching countries:', error);
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
        const response = await axios.post('http://192.168.0.105:8000/api/update_profile',
          { 
            firstName, lastName, location, phone, gender, email, 
          },
          {
            headers: {
              Authorization: `Bearer ${access}`,
            },
          }
        );
        console.log('profile Updated seccusfully!', response.data);
        // window.location.reload();


        

      }catch(error){
        // console.log(error);
      }

      setEmail("")
      setPhone("")
      setLocation("")
      setGender("")
      setFirstName("")
      setLastName("")
  
    };
    
  return (
    <>
    <TopBar /*name={authInfo.user.name}*/ imageSrc={"https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg"} />
    <div className="card auserboard">


          <div className="wrapper userprofile" style={{height:'50px'}}>
            <a onClick={()=>navigate('/userpro')} className="third after" style={{fontSize:'17px'}}>My profile</a>
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
   
        <div className="gender" style={{marginTop:'7.5px'}}>
          <label>
            <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                  <option value="" disabled selected>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
              </select>
          </label>
        </div>
            <div className='input3'>
            <input type='tel' placeholder='phone' required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            </div>
            <div className='inputcountry gender' style={{marginTop:'7.5px'}} >
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value='' disabled>Select Location</option>
                  {countries.map((country) => (
                    <option key={country.alpha2Code} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>

                {showCountriesList && (
                  <div>
                    {/* Display the list of countries as needed */}
                    <ul>
                      {countries.map((country) => (
                        <li key={country.alpha2Code} onClick={() => handleCountryChange(country)}>
                          {country.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

            <div className='input2'>
            <input type='email' placeholder='email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='input6' style={{gridColumn: '-3 / -1', paddingLeft:'240px'}}>
            <button type='submit'>Update</button>
            </div>
        </form>

    </div>
    </>
  )
}

export default UserUpdateProfile;
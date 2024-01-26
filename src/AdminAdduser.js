import React from 'react'
import { useEffect, useState } from 'react';
import TopBar from './Topbar'
import axios from 'axios'
import './edituser.css'
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';


function AdminAdduser(){

  // const { userId } = useParams();
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [countries, setCountries] = useState([]);
  const [showCountriesList, setShowCountriesList] = useState(false);
  const [Username, setUserName] = useState("")
  const [Password, setPassword] = useState("")
  // const [Email, setEmail] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
    
  const [error, setError] = useState('');

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
      const handleAdduser = async (e)=>{
        e.preventDefault();
        try{
          const response = await axios.post("http://192.168.0.105:8000/api/addnew_user", {

            firstName, lastName, Password, ConfirmPassword, Location, phone, Username, gender
          })
          console(response.data)
          navigate("/Admin Dashbord")

        } catch(error){
          console.error(error);
          setError("Empty form")

        }
      }


  return (
    <div className='Add-user'>
        <TopBar /*name={authInfo.user.name}*/ imageSrc={"https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg"}/>
        <a onClick={()=>navigate('/Admin Dashbord')}><img src={process.env.PUBLIC_URL + '/Icons/back.png'} style={{ width: '26px', height: '26px', marginLeft:'100px' }} alt='Back' /></a>
        <div className='form-container adduser'>
        <form className='form editform' style={{height:"500px"}} onSubmit={handleAdduser}>
        <h1 className='htwo'>Add New User</h1>
        <div className='input3'>
            <input type='text' placeholder='first name' required value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </div>
        <div className='input2'>
        <input type="text" placeholder="last name" required value={lastName} onChange={(e) => setLastName(e.target.value)}/>
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
            <input type='tel' placeholder='phone' required value={phone} onChange={(e)=> setPhone(e.target.value)}/>
            </div>
            {/* <div className='input3'>
            <input type='email' placeholder='Email' required value={Email} onChange={(e)=> setEmail(e.target.value)}/>
            </div> */}
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
                {/* <span className='icon' style={{ cursor: 'pointer' }} onClick={handleIconClick}>
                  &#x25BC;
                </span> */}

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
            <input type='content' placeholder='user name' required value={Username} onChange={(e) => setUserName(e.target.value)}/>
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
        {/* <View /> */}
        </div>
    </div>
  )
}

export default AdminAdduser
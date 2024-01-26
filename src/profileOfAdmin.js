import React from 'react'
// import Gule from './userpage';
import TopBar from './Topbar';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
import IMG from './img';
import './proofadmin.css';
import { useAuth } from './Auth-context';


const access = localStorage.getItem('access')
// console.log(access);

const ProfileOfAdmin = () => {
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


    const handleAdminUpdateProfile = async(e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://192.168.0.105:8000/api/update_profile',{ 
          firstName, lastName, location, phone, gender, email, 
          },
          {
            headers: {
              Authorization: `Bearer ${access}`,
            },
          }
        );

        console.log('profile Updated seccusfully!', response.data);
        window.location.reload();


      }catch(error){
        // console.log(error);
      }

  
    };
  return (
    <>
    <div className='tolbar1'><TopBar /*name={authInfo.user.name}*/ imageSrc={"https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg"}/></div>
    <div className="adminpro">
    <div>

     <div className='userpage'>
        <a onClick={()=>navigate('/admin Dashbord')}><img src={process.env.PUBLIC_URL + '/Icons/back.png'} style={{ width: '26px', height: '26px' }} alt='Back' /></a>

          <div className="card" >
            <div className="card1">
            <IMG imgName={"https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg"} 
            size={'100px'}/>
            <div className="card__text">
              
              <h2>Naol Atomsa</h2>
              <p style={{color: 'black'}}>Ethiopia</p>
              <p style={{color: 'black'}}>Addis Ababa</p>
            </div>
          </div>
          <ul className="card2">
            <li>
            <img src={process.env.PUBLIC_URL + '/Icons/name.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
              <span>Admin</span>
            </li>
            <li>
            <img src={process.env.PUBLIC_URL + '/Icons/active.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
              <span>Active</span>
            </li>
            <li>
            <img src={process.env.PUBLIC_URL + '/Icons/men.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
              <span>Male</span>
            </li>
          </ul>
          <ul className="card3">
            <li>
            <img src={process.env.PUBLIC_URL + '/Icons/email.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
              <span>naolatomsa4@gmail.com</span>
            </li>
            <li>
            <img src={process.env.PUBLIC_URL + '/Icons/phone.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
              <span>+251943134213</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="form-container adminprofile" style={{marginTop:'75px'}}>
      
    <form className='form editform admin-pro' onSubmit={handleAdminUpdateProfile}>
    <h1 className='htwo'>Edit Profile</h1>
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
                  <option value='' disabled selected>Select Location</option>
                  {countries.map((country) => (
                    <option key={country.alpha2Code} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>

                {showCountriesList && (
                  <div>
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
        <div className='input6'>
        <button type='submit'>Save</button>
        </div>
    </form>

    </div>
</div>
</>
  )
}

export default ProfileOfAdmin;
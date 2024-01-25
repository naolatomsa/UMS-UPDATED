import React from 'react'
// import Gule from './userpage';
import TopBar from './Topbar';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
import IMG from './img';
import './proofadmin.css';


const access = localStorage.getItem('access')
console.log(access);

const ProfileOfAdmin = () => {
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
    //   const handleUserUpdateProfile = () => {

    //     navigate('/userpro')
    
    //   };


    const handleAdminUpdateProfile = async(e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/update_profile',
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
    <div className='tolbar1'><TopBar /*name={authInfo.user.name}*/ imageSrc={"https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg"}/></div>
    <div className="adminpro">
    <div>

     <div className='userpage'>
              <img src={process.env.PUBLIC_URL + '/Icons/back.png'} style={{ width: '26px', height: '26px', marginTop:'20px' }} alt='Back' />

          <div className="card">
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

    <div className="form-container adminprofile">
      
    <form className='form editform admin-pro' action='#'>
    <h1 className='htwo'>Edit Profile</h1>
    <div className='input3'>
        <input type='text' placeholder='first name' required value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
        </div>
    <div className='input2'>
    <input type="text" placeholder="last name" required value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
    </div>
    <div className='input1' style={{width:'300px', border: 'solid 1px #38A899 '}} >
    <label htmlFor="gender">Gender:<br></br></label>
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
        <div className='input6'>
        <button>Save</button>
        </div>
    </form>

    </div>
</div>
</>
  )
}

export default ProfileOfAdmin;
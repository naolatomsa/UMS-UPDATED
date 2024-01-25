import React from 'react';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import IMG from './img';
import './login.css';
// import { upload } from '@testing-library/user-event/dist/upload';

function SetAcount() {
  const [save, setSave] = useState('Save Changes');
  // const [clear, setClear] = useState('false');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [upload, setUpload] = useState('');
  const [countries, setCountries] = useState([]);
  const [showCountriesList, setShowCountriesList] = useState(false);

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




  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/signup/', {
        name, gender, phone, date, location,upload
      });

      console.log('Form data sent successfully!', response.data);

      navigate('/userpro')
    } 
    catch (error) {
    }
  };

  const handleClear=()=>{
    setName("");
    setGender("");
    setPhone("");
    setGender("");
    setDate("");
    setLocation("");
    setUpload("");

  }
   

  return (
    <div className='all'>
      <div className='wow'>
          <div className='Naol'>
          <div id="styleec" />
          <div id="stylerec" />
          <div id="poly1" />
          <div className='midlep'>
            <div>
            <img src={process.env.PUBLIC_URL + '/Icons/userphoto.png'} style={{backgroundImage: `url('${process.env.PUBLIC_URL}/Icons/backimage.png')`, backgroundSize: 'cover', 
              backgroundRepeat: 'no-repeat',backgroundPosition: 'center', height:'100px', width:'100px'}} alt='Back'  className="topicon"/>
            </div>
        
            <p className='fp'>
            Set up your profile. Let’s know a little bit about you.
            </p>
            <p className='fp'> This won’t take long.</p>
            <a onClick={()=>navigate('/userpro')}><img src={process.env.PUBLIC_URL + '/Icons/backpage.png'} style={{ width: '26px', height: '26px' }} alt='Back'  className="topicon"/></a>
          </div>
        </div>
      </div>
      <div className='form-container'>
        <form className='form' onSubmit={handleSave}>
          <h1 className='h2'>Finish Account Setup</h1>
          <div className='input3'>
            <input type='text' placeholder='name' required value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>
    
        <div className="gender">
          <label>
            <select>
                  <option value="" disabled selected>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
              </select>
          </label>
        </div>
          <div className='input2'>
          <input type="tel" name="phone" placeholder="Enter your phone number" required value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
          </div>
   
            <div className='input4'>
              <input type='date' placeholder='Date of birth' required value={date} onChange={(e)=>{setDate(e.target.value)}}/>
            </div>
            <div className='inputcountry gender '  >
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
            <div className='input4'>
              <input type='file' placeholder='upload picture' required value={upload} onChange={(e)=>{setUpload(e.target.value)}}/>
            </div>
            <div className='Buttons'>
            <div>
              <button type='submit'>Save Changes</button>
            </div>

            <div >
              <button type='button' className='InputClear' onClick={handleClear} >Clear</button>
              </div>
              </div>
          <p style={{ color: 'black' }}>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SetAcount;

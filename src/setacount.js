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

  const navigate = useNavigate()
  // const switchForm = () => {
    // setClear(!clear);
  //   setSave(clear ? 'Save Changes' : 'Clear');
    if(!save){
      setName("");
      setGender("");
      setPhone("");
      setGender("");
      setDate("");
      setLocation("");
      setUpload("");

    };


  const handleSave = () => {
    // Perform your login logic here

    // After successful login, navigate to the home page
    // history.push('/Naol');

    if(name && gender && date && location && phone){
      
      // console.log(Username, Password);
      navigate('/userhome')

    }
    else{
      navigate('/setaccount')
    }

  };

   

  return (
    <div className='all'>
      <div className='wow'>
          <div className='Naol'>
          <div id="styleec" />
          <div id="stylerec" />
          <div id="poly1" />
          <div className='midlep'>
            <div>
            <IMG imgName={"https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg"} 
        size={'100px'}/>
            </div>
        
            <p >
            Set up your profile. Let’s know a little bit about you.
            </p>
            <p> This won’t take long.</p>
          </div>
        </div>
      </div>
      <div className='form-container'>
        <form className='form' action='#'>
          <h1 className='h2'>Finish Account Setup</h1>
          <div className='input3'>
            <input type='text' placeholder='name' required value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>
    
          <div className='input1' style={{width:'300px', border: 'solid 1px #38A899 '}} >
          <label htmlFor="gender">Gender:<br></br></label>
        <select id="gender" name="gender" value={gender} onChange={(e)=>{setGender(e.target.value)}}>
            <option value="male" >Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
          </div>
          <div className='input2'>
          <input type="tel" name="phone" placeholder="Enter your phone number" required value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
          </div>
   
            <div className='input4'>
              <input type='date' placeholder='Date of birth' required value={date} onChange={(e)=>{setDate(e.target.value)}}/>
            </div>
            <div className='input-container'>
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
            <div className='input4'>
              <input type='file' placeholder='upload picture' required value={upload} onChange={(e)=>{setUpload(e.target.value)}}/>
            </div>
            <div className='Buttons'>
            <div>
              <button className={save==='Clear'? 'InputClear':'input5' } onClick={handleSave}>Save Changes</button>
            </div>

            <div >
              <button className={save==='Save Changes'? 'InputClear':'input5' } onClick={()=>{setSave('Save Changes')}}>Clear</button>
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

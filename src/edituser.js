import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './userpage.css';
import IMG from './img';
import './login.css';
import './edituser.css';
import TopBar from './Topbar';
import { useAuth } from './Auth-context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Edit(){
    const authInfo = useAuth();
    const [Username, setUserName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { userId } = useParams();
    const [userData, setUserData] = useState({});
    const [userActivities, setUserActivities] = useState([]);
    const navigate = useNavigate();
    // console.log(userId)
    //admin fetch user's data using their Id
    useEffect(() => {
        // Fetch user data when the component mounts
        const fetchData = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/user_profile_by_admin/${userId}`);
            setUserData(response.data);


            const activitiesResponse = await axios.get(`http://127.0.0.1:8000/api/get_user_activity/${userId}`);
            setUserActivities(activitiesResponse.data); 
            console.log(userActivities)

        } catch (error) {
            // console.error('Error fetching user data:', error);
        }
        };

        fetchData();
    }, []);




    //admin edit user

    const handleEdituser = async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.put(`http://127.0.0.1:8000/api/user_profile_by_admin/${userId}`,{
                Username, Password, confirmPassword, Email
            });
            console.log("Edited seccusfly", response.data)
        }catch(error){

        }
    }




    return(

        <> 
        <div className='tolbar1'><TopBar /*name={authInfo.user.name}*/ imageSrc={"https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg"} /></div>
        <div className='adminedituserpage'>
        < div className='userpage'>
               <a onClick={()=>navigate('/Admin Dashbord')} style={{margin:'0', height:'47px'}}> <img src={process.env.PUBLIC_URL + '/Icons/back.png'} style={{ width: '26px', height: '26px', marginTop:'20px' }} alt='Back' /></a>

            <div className="card">
            <div className="card1">
            <IMG imgName={"https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg"} 
            size={'100px'}/>
            <div className="card__text">
                
                <h2>{userData.username}</h2>
                <p style={{color: 'black'}}>{userData.location}</p>
                <p style={{color: 'black'}}>Addis Ababa</p>
            </div>
            </div>
            <ul className="card2">
            <li>
            <img src={process.env.PUBLIC_URL + '/Icons/name.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
                <span>{userData.role}</span>
            </li>
            <li>
            <img src={process.env.PUBLIC_URL + '/Icons/active.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
                <span>{userData.status}</span>
            </li>
            <li>
            <img src={process.env.PUBLIC_URL + '/Icons/men.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
                <span>{userData.gender}</span>
            </li>
            </ul>
            <ul className="card3">
            <li>
            <img src={process.env.PUBLIC_URL + '/Icons/email.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
                <span>{userData.email}</span>
            </li>
            <li>
            <img src={process.env.PUBLIC_URL + '/Icons/phone.png'} style={{ width: '15px', height: '15px',marginRight:'10px', marginTop:'20px' }} alt='Back'  className="topicon"/>
                <span>{userData.phone}</span>
            </li>
            </ul>
        </div>
        </div>

        <div className="edituser">



        <div className='form-container edit'>
        <form className='form editform' onSubmit={handleEdituser}>
        <h1 className='htwo'>Edit {userData.username}'s Account</h1>
        <div className='input2'>
        <input type="text" placeholder="username" required value={Username} onChange={(e)=>setUserName(e.target.value)}/>
        </div>
        <div className='input2'>
        <input type="email" placeholder="email" required value={Email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='input3'>
            <input type='password' placeholder='password' required value={Password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
       

            <div className='inputfour'>
            <input type='password' placeholder='confirm password' required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
            </div>
            <div className='input6'>
            <button type='submit'>save</button>
            </div>
        </form>
        
        <div className='activitybox'> 
        <table className="responsivetable activitytable" style={{width:'770px', marginLeft:'0'}}>
            <thead>
                <tr className="Date">
                <th className="col1">Date</th>
                <th className="col2">Activity</th>
                </tr>
            </thead>
            <tbody>
                {userActivities && userActivities.map((activity) => (
                <tr key={activity.id}>
                    <td className="col1">{activity.date_time}</td>
                    <td className="col2">{activity.activities}</td>
                    {console.log(activity.is_login)}
                </tr>
                ))}
            </tbody>
        </table>
        </div>
        </div>
    </div>
    </div>
        </>
    );
}
export default Edit;
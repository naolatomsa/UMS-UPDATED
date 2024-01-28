import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


import Login from "./login";
// import View from './Activity';
// import Gule from './userpage';
import Naol from './adminDashbord';
import SetAcount from './setacount';
// import AdminProfile from './adminProfile';
import Edit from './edituser';
import AdminAdduser from './AdminAdduser';
import UserDashboard from './userDashboard';
import UserUpdateProfile from './userUpdateProfile';
import ProfileOfAdmin from './profileOfAdmin';
import ForgetPass from './forgetPass';
// import Verificationpage1 from './verificationpage1';
import Verificationpage3 from './verificationpage3';
import Changepassword from './changepassword';

// import './App.css';


const access = localStorage.getItem('access')
const userRole = localStorage.getItem('userRole')
// console.log(access);


const router = createBrowserRouter([

  {
    path: "",
    element: <Login />,
  },

  {
    path: "/Admin Dashbord",
    element: access && userRole==='Admin'? <Naol />: <login/>,
  },
  {
    path: "/adduser",
    element: access && userRole==='Admin'? <AdminAdduser /> : <login/>,
  },
  // {
  //   path: "/userhome",
  //   element: <Gule />,
  // },
  // {
  //   path: "/viewactivity",
  //   element: <View />,
  // },
  {
    path: "/setaccount",
    element: <SetAcount />,
  },
  {
    path: "/edituser/:userId",
    element: access && userRole==='Admin'? <Edit />: <login/>,
  },
  {
    path: "/userpro",
    element: access && userRole==='normal_users'? <UserDashboard />: <login /> ,
  },
  {
    path: "/updatepro",
    element: access && userRole==='normal_users'? <UserUpdateProfile />: <login />,
  },
  
  {
    path: "/adminpro",
    element: access && userRole==='Admin'? <ProfileOfAdmin />: <login/> ,
  },
  {
    path: "/forget",
    element: <ForgetPass />,
  },
  {
    path: "/changepassword/:userId/:token",
    element: <Changepassword  />,
  },
  {
    path: "/v3",
    element: <Verificationpage3  />,
  },
  
  
  
  
]);
function App() {
  return (


      <>

    <RouterProvider router={router} />

       
      </>
        
   
  );
}

export default App;

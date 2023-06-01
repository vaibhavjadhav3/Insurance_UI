

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Policy from './pages/Policy';

import HospitalPage from './pages/HospitalList';
import UserDash from "./UserPages/UserDash";


import AnnouncementPage from './pages/AnnouncementList';

import AppUserHomePage from './AppUserHomePage';
import Login from './UserPages/Login';

import AdminHome from './pages/AdminHome';
import AdminLogin from "./UserPages/AdminLogin";
import PrivateRoute from "./services/PrivateRoute";
import AdminLogout from "./pages/AdminLogout";


function App() {

  const isLoggedIn=sessionStorage.getItem("token") ;
  

  return (
    <div>
      
        
     <BrowserRouter>
        <Routes>
          
         <Route path ="/" element={<AppUserHomePage/>} />
          {/* <Route path ="/announcements" element={<AnnouncementPage/>} />
          <Route path="/hospital" element={<HospitalPage/>}/>  */}
          <Route path ="/login" element={<Login/>} />
          
          <Route path ="/userdash" element={<UserDash/>}/>


          <Route path ="/admin" element={isLoggedIn?<AdminHome/>: <Login/>} />
          <Route path ="/adminlogin" element={isLoggedIn?<AdminLogin/>: <AdminLogin/>} />
          <Route path ="/admin/policy" element={isLoggedIn? <Policy/> : <Login/>} />
          <Route path ="/admin/announcements" element={isLoggedIn?<AnnouncementPage/>: <Login/>} />
          <Route path="/admin/hospital" element={isLoggedIn?<HospitalPage/>: <Login/>}/>
          <Route path="/admin/hospital" element={isLoggedIn?<HospitalPage/>: <Login/>}/>
          <Route path="/admin/logout" element={isLoggedIn?<AdminLogout/>:<AdminLogin/>}/>

          
          
          
        </Routes>
      
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;

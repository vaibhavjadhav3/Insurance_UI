

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Policy from './pages/Policy';

import HospitalPage from './pages/HospitalList';


import AnnouncementPage from './pages/AnnouncementList';

import AppUserHomePage from './AppUser';
import Login from './UserPages/Login';

import AdminHome from './pages/AdminHome';



function App() {
  return (
    <div>
        
     <BrowserRouter>
        <Routes>
          
         <Route path ="/" element={<AppUserHomePage/>} />
          {/* <Route path ="/announcements" element={<AnnouncementPage/>} />
          <Route path="/hospital" element={<HospitalPage/>}/>  */}
          <Route path ="/login" element={<Login/>} />
          <Route path ="/admin" element={<AdminHome/>} />

        
          <Route path ="/admin/policy" element={<Policy/>} />
          <Route path ="/admin/announcements" element={<AnnouncementPage/>} />
          <Route path="/admin/hospital" element={<HospitalPage/>}/>
          
          
          
        </Routes>
      
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;

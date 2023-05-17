
// import { Navbar } from 'reactstrap';

import Banner from './components/Banner';
// import NavbarTemp from './components/Navbar';
import Navbar from './components/Navbar';
// import Example from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Policy from './pages/Policy';

import HospitalPage from './pages/HospitalList';
import MyForm from './pages/Form';
import Form_list from './pages/Formpluslist';
import Acp from './pages/Announcements';

import AnnouncementPage from './pages/AnnouncementList';
import Home from './pages/Home';
import AppUserHomePage from './AppUser';
import Login from './UserPages/Login';
import DefaultNavbar from './components/DefaultNavbar';



function App() {
  return (
    <div>
        <Banner></Banner>
        <DefaultNavbar></DefaultNavbar>
     
     <BrowserRouter>
        <Routes>
          
         <Route path ="/" element={<AppUserHomePage/>} />
          {/* <Route path ="/announcements" element={<AnnouncementPage/>} />
          <Route path="/hospital" element={<HospitalPage/>}/>  */}
          <Route path="/login" element={<Login/>}/>
        </Routes>
      
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;

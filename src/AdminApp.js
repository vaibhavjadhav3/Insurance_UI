
// import { Navbar } from 'reactstrap';
import './App.css';
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
import Acp2 from './pages/Announcements2';
import AnnouncementPage from './pages/AnnouncementList';
import Home from './pages/Home';



function App() {
  return (
    <div>
      <Banner></Banner>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path ="/policy" element={<Policy/>} />
          <Route path ="/announcements" element={<AnnouncementPage/>} />
          <Route path="/hospital" element={<HospitalPage/>}/>
          <Route path="/" element={<Home></Home>}/>
        </Routes>
      
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;

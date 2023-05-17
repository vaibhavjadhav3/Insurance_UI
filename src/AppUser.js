
import Banner from "./components/Banner";
import DefaultNavbar from './components/DefaultNavbar';
import PolicyCard from "./components/PolicyCard";
import HomePageAnnouncement from "./components/HomePageAnnouncement";
import HomePageHospital from "./components/HomePageHospitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./UserPages/Login";
function AppUserHomePage() {


    //fetch hospitals
    //fetch annoucements
    //fetch policy

    return (
        <div >
            <div id="main-wrapper" className="container">
                <div className="row justify-content-center"></div>


                <div className="container-fluid" >
                    <div className="row" >
                        <div><PolicyCard /></div>
                    </div>
                    <div className="row" style={{ paddingTop: "50px", alignItems: "center" }}>
                        <div className="col-sm-6"><HomePageAnnouncement /></div>
                        <div className="col-sm-6"><HomePageHospital /></div>
                    </div>


                </div>
            </div>

        </div>);

}
export default AppUserHomePage;
import "./AdminHome.css";
import Banner from "../components/Banner"
import PolicyCard from "../components/PolicyCard";
import HomePageAnnouncement from "../components/HomePageAnnouncement";
import HomePageHospital from "../components/HomePageHospitals";
import Navbar from "../components/Navbar";
// import pagefooter from "../components/pagefooter";

function AdminHome() {
  return (
    <div>
      <Banner></Banner>
      <Navbar></Navbar>
       <div className="container-fluid" >
                    <div className="row" >
                        <div><PolicyCard /></div>
                    </div>
                    <div className="row" style={{ paddingTop: "50px", alignItems: "center" }}>
                        <div className="col-md-6 bg-white "><HomePageAnnouncement /></div>
                        <div className="col-md-6 bg-white" ><HomePageHospital /></div>

                    </div>

                  
                    
                </div>
                

        
    </div>
  );
}

export default AdminHome;

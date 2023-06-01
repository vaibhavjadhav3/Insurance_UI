import Banner from "./components/Banner";
import DefaultNavbar from "./components/DefaultNavbar";
import PolicyCard from "./components/PolicyCard";
import HomePageAnnouncement from "./components/HomePageAnnouncement";
import HomePageHospital from "./components/HomePageHospitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./UserPages/Login";
import homepagefooter from "./components/homepagefooter";
function AppUserHomePage() {
  //fetch hospitals
  //fetch annoucements
  //fetch policy

  return (
    <div>
      <div id="main-wrapper" className="container bg-light">
        <div className="row justify-content-center"></div>
        <Banner></Banner>
        <DefaultNavbar></DefaultNavbar>

        <div className="container-fluid">
          <div className="row">
            <div>
              <PolicyCard />
            </div>
          </div>
          <div
            className="row"
            style={{ paddingTop: "50px", alignItems: "center" }}
          >
            <div className="col-md-6 bg-white ">
              <HomePageAnnouncement />
            </div>
            <div className="col-md-6 bg-white">
              <HomePageHospital />
            </div>
          </div>
        </div>
      </div>

      {/* footer div */}
      <div>
        {/* <!-- Footer --> */}
        <div className=" container text-center text-lg-start bg-light ">
          {/* <!-- Section: Social media --> */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* <!-- Left --> */}

            {/* <!-- Left --> */}

            {/* <!-- Right --> */}
            <div>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-github"></i>
              </a>
            </div>
            {/* <!-- Right --> */}
          </section>
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Links  --> */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div className="row mt-3">
                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Content --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>InsureTech
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Angular
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      React
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Vue
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Laravel
                    </a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Help
                    </a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3"></i>Chattrapati
                    Sambhaginagar,India
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print me-3"></i> + 01 234 567 89
                  </p>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>
          {/* <!-- Section: Links  --> */}

          {/* <!-- Copyright --> */}
          <div
            className="text-center p-4"
            style={{ backgroundColor: "skyblue" }}
          >
            <a className="text-reset fw-bold"></a>
          </div>
          {/* <!-- Copyright --> */}
        </div>
        {/* <!-- Footer --> */}
      </div>
    </div>
  );
}
export default AppUserHomePage;

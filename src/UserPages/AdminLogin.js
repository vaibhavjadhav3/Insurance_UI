
import React, { useState } from 'react'
import Banner from '../components/Banner';
import DefaultNavbar from '../components/DefaultNavbar';
import "./Login.css"
import { useNavigate, RedirectFunction } from "react-router-dom";

import axios from 'axios'

import "./Login.css"
const AdminLogin = () => {



    // const history = useHistory()
    const [cred, setCred] = useState({
        username: '',
        password: ''
      });


    

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCred({ ...cred, [name]: value });
    
        console.log(cred)
      };

      const navigate = useNavigate();

      const handleLogin = (event) => {
        console.log("this is creds in login handler"+cred)
        event.preventDefault();
        axios.post('http://localhost:8080/api/auth/adminlogin', cred).then(response => {
          console.log("login cred submitted")
          console.log(response.data)
          if(response.status===200)
          { 
           
            console.log("JWT token:"+response.data.accessToken)
            // localStorage.setItem("token",response.data.accessToken)
            sessionStorage.setItem("token",response.data.accessToken)
            /*Directs to admin dashbboard */

            console.log("Login Succesful")
            // history.push('/admin')
            navigate('/admin')
          }
          else{console.log("No success")}
          // handle successful submission
          // setData(response.data);
    
        }).catch(error => {
          console.error(error);
          // handle error
        });
      };


    return (
        <div>
            <Banner>
            </Banner>
            
            <div id="main-wrapper" className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="card border-0">
                            <div className="card-body p-0">
                                <div className="row no-gutters">
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="mb-5">
                                                <h3 className="h4 font-weight-bold text-theme" style={{WebkitTextFillColor:'red'}}>ADMIN LOGIN</h3>
                                            </div>

                                            <h6 className="h5 mb-0">Welcome back!</h6>
                                            <p className="text-muted mt-2 mb-5">Enter your username(e-mail) and password to access admin panel.</p>

                                            <form onSubmit={handleLogin}>
                                                <div className="form-group">
                                                    <label htmlFor="username">Username:</label>
                                                    <input type="email" className="form-control" id="username" name="username"  onChange={handleInputChange}/>
                                                </div>
                                                <div className="form-group mb-5">
                                                    <label htmlFor="password">Password:</label>
                                                    <input type="password" className="form-control" id="password" name="password" onChange={handleInputChange}/>
                                                </div>
                                                {/* <button type="submit" className="btn btn-primary" style={{marginRight:'10px'}}>Submit</button>
                                               <a href="#l" style={{ marginLeft:'10px' }} className="forgot-link float-right text-primary">Forgot password?</a>
                                                <a href="/login" style={{marginleft:'50px'}} >User Login</a> */}



                                                <button type="submit" className="btn btn-primary">Submit</button>
                                                <a href="#l" style={{marginLeft:'40px'}} className="forgot-link float-right text-primary">Forgot password?</a>
                                                <a  href="/login" style={{marginLeft:"60px"}} className="btn btn-warning">User Login</a>


                                            </form>
                                            <p className="text-muted text-center mt-3 mb-0" style={{ paddingBottom: "10px" }}>Don't have an account? <a href="register.html" className="text-primary ml-1">register</a></p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 d-none d-lg-inline-block">
                                        <div className="account-block rounded-right" >

                                        </div>
                                    </div>
                                </div>


                            </div></div></div></div>

                </div>
            </div>
            )
}
            export default AdminLogin;
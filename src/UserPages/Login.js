
import React from 'react'
import Banner from '../components/Banner';
import DefaultNavbar from '../components/DefaultNavbar';
import "./Login.css"
const Login = () => {
    return (
        <div>
            <Banner>
            </Banner>
            <DefaultNavbar></DefaultNavbar>
            <div id="main-wrapper" className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="card border-0">
                            <div className="card-body p-0">
                                <div className="row no-gutters">
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="mb-5">
                                                <h3 className="h4 font-weight-bold text-theme">Login</h3>
                                            </div>

                                            <h6 className="h5 mb-0">Welcome back!</h6>
                                            <p className="text-muted mt-2 mb-5">Enter your email address and password to access admin panel.</p>

                                            <form>
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Email address</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1" />
                                                </div>
                                                <div className="form-group mb-5">
                                                    <label for="exampleInputPassword1">Password</label>
                                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                                </div>
                                                <button type="submit" className="btn btn-theme">Login</button>
                                                <a  href="/admin" style={{margin:"10px"}} className="btn btn-theme">Admin Login</a>
                                                
                                                <a href="#l" style={{ paddingLeft: "210px" }} className="forgot-link float-right text-primary">Forgot password?</a>
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
            export default Login;
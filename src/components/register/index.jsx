import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import IMG01 from "../../assets/images/logo.png";


const Register =()=> {
    return (
        <>
        <div className="main-wrapper">
    <Helmet>
        <title>Register - CRMS admin template</title>
        <meta name="description" content="Reactify Blank Page" />
    </Helmet>
        <div className="account-content">
            
            <div className="container">
            
              
                <div className="account-logo">
                    <Link to="/"><img src={IMG01} alt="Dreamguy's Technologies" /></Link>
                </div>
              
                
                <div className="account-box">
                    <div className="account-wrapper">
                        <h3 className="account-title">Register</h3>
                        <p className="account-subtitle">Access to our dashboard</p>
                        
                      
                        <form action="/login">
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input className="form-control" type="password" />
                            </div>
                            <div className="form-group">
                                <label>Repeat Password</label>
                                <input className="form-control" type="password" />
                            </div>
                            <div className="form-group text-center">
                                <button className="btn btn-primary account-btn" type="submit">Register</button>
                            </div>
                            <div className="account-footer">
                                <p>Already have an account? <Link to="/login">Login</Link></p>
                            </div>
                        </form>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
  }

export default Register;
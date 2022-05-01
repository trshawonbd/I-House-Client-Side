import React from 'react';
import './Login.css';
import login from '../../img/Login/login.gif';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Social from '../Shared/Social/Social';

const Login = () => {
    return (
        <div className='font background'>
            <div>
                <div className='d-flex justify-content-center align-items-center'>
                    <img className='img-fluid login-img' src= {login} alt="" srcset="" />
                </div>
                
                <div>
                    <h3 className='login-title'>Login</h3>
                    <form>
                        
                        <input className='email' type="email" name="email" id="" placeholder='Email' required />
                        <br  />
                        <input className='password' type="password" name="password" id="" placeholder='Password' required />
                        <br />
                        <p>You don't have any account? <Link className='login-text' to='/register'>Register</Link> </p>
                        <p>Forget Password? <button className='btn-reset' ><span className='sign'>Reset Password</span> </button> </p>
                        <input className='login' type="submit" value="Login" />
                    </form>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                <span className='hr-dividor'>
                    <hr />
                </span> <span>OR</span>  <span className='hr-dividor'>
                    <hr />
                </span>
                </div>
                <Social></Social>


            </div>
            
        </div>
    );
};

export default Login;
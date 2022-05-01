import React from 'react';
import { Link } from 'react-router-dom';
import Social from '../Shared/Social/Social';
import './Register.css';
import register from '../../img/Login/register.png'

const Register = () => {
    return (
        <div className='font background'>
            <div>
                <div className='d-flex justify-content-center align-items-center'>
                    <img className='img-fluid login-img' src= {register} alt="" srcset="" />
                </div>
                
                <div>
                    <h3 className='login-title'>Login</h3>
                    <form>
                        
                        <input className='email' type="email" name="email" id="" placeholder='Email' required />
                        <br  />
                        <input className='password' type="password" name="password" id="" placeholder='Password' required />
                        <br />
                        <input className='password' type="password" name="confirmPassword" id="" placeholder='Confirm Password' required />
                        <br />
                        <p>You have already  any account? <Link className='login-text' to='/login'>Login</Link> </p>
                        
                        <input className='login' type="submit" value="Register" />
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

export default Register;
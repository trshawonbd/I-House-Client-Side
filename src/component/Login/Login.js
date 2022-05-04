import React, { useRef } from 'react';
import './Login.css';
import login from '../../img/Login/login.gif';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Social from '../Shared/Social/Social';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import useToken from '../Hooks/useToken';

const Login = () => {
    const emailRef = useRef('');
    const location = useLocation();
    const navigate = useNavigate(); 
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [token] = useToken(user);
      let errorContainer;
      const [sendPasswordResetEmail, resetSending, resetError] = useSendPasswordResetEmail(
        auth
      );
    let from = location.state?.from?.pathname || "/";


    if (error || resetError) {
      console.log(error)
      errorContainer =  <p className='text-danger'>Error: {error.message}</p>
      }


      if (loading || resetSending) {
        return <Loading></Loading>
      }
      if (token) {
        navigate(from, { replace: true });
      }

      const handleLogin = async event =>{
          event.preventDefault();
          const email = event.target.email.value;
          const password = event.target.password.value;
          await signInWithEmailAndPassword(email, password);

          event.target.reset();

      }

      const resetPassword = async(event) => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }

    }

    return (
        <div className='font background'>
            <div>
                <div className='d-flex justify-content-center align-items-center'>
                    <img className='img-fluid login-img' src= {login} alt="" srcset="" />
                </div>
                
                <div>
                    <h3 className='login-title'>Login</h3>
                    <form onSubmit={handleLogin}>
                        
                        <input ref={emailRef} className='email' type="email" name="email" id="" placeholder='Email' required />
                        <br  />
                        <input className='password' type="password" name="password" id="" placeholder='Password' required />
                        <br />

                        <input className='login' type="submit" value="Login" />
                    </form>
                    {errorContainer}
                    <p>You don't have any account? <Link className='login-text' to='/register'>Register</Link> </p>
                    <p>Forget Password? <button  
                         onClick={resetPassword}
                        className='btn-reset' ><span className='sign'>Reset Password</span> </button> </p>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                <span className='hr-dividor'>
                    <hr />
                </span> <span>OR</span>  <span className='hr-dividor'>
                    <hr />
                </span>
                </div>
                <Social></Social>
                <ToastContainer></ToastContainer>


            </div>
            
        </div>
    );
};

export default Login;
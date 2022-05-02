import React from 'react';
import { Link } from 'react-router-dom';
import Social from '../Shared/Social/Social';
import './Register.css';
import register from '../../img/Login/register.png'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      if (error || updateError) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading || updating) {
        return <Loading></Loading>;
      }
      if (user) {
        console.log(user);
      }

    const handleRegister = async(event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        
        if (password === confirmPassword){
          await  createUserWithEmailAndPassword(email, password);
          await updateProfile ({displayName : name});
            toast('account created');
        }
        else{
            toast("Your Password and ConfirmPassword didn't match");  
        }
    }
    return (
        <div className='font background'>
            <div>
                <div className='d-flex justify-content-center align-items-center'>
                    <img className='img-fluid login-img' src= {register} alt="" srcset="" />
                </div>
                
                <div>
                    <h3 className='login-title'>Register</h3>
                    <form onSubmit={handleRegister}>
                        
                        <input className='email' type="text" name="name" id="" placeholder='Name' required />
                        <br />
                        <input className='email' type="email" name="email" id="" placeholder='Email' required />
                        <br  />
                        <input className='password' type="password" name="password" id="" placeholder='Password' required />
                        <br />
                        <input className='password' type="password" name="confirmPassword" id="" placeholder='Confirm Password' required />
                        <br />
                        <p>You have already  any account? <Link className='login-text' to='/login'>Login</Link> </p>
                        
                        <input  className='login' type="submit" value="Register" />
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
                <ToastContainer></ToastContainer>


            </div>
           
            
        </div>
        
    );
};

export default Register;
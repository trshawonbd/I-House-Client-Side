import React from 'react';
import google from '../../../img/Login/google.png';
import './Social.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (error) {
      return (
        <div>
          <p>Error: {error.message}</p>
        </div>
      );
    }
    if (loading) {
      return <Loading></Loading>
    }
    if (user) {
        console.log(user.user.displayName)
    }
    return (
        <div>
            <div className='d-flex justify-content-around' >
                <div >
                    <button onClick={() => signInWithGoogle()} className='btn-google'><img className='google-img' src={google} alt="" srcset="" /> <span className='sign'>Sign In</span></button>
                </div>

            </div>
        </div>
    );
};

export default Social;
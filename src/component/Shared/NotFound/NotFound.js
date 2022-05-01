import React from 'react';
import './NotFound.css';
import notFound from '../../../img/NotFound/Notfound.svg'

const NotFound = () => {
    return (
        <div className='container d-flex justify-content-center'>
            <img className='img-fluid' src={notFound} alt="" srcset="" />
        </div>
    );
};

export default NotFound;
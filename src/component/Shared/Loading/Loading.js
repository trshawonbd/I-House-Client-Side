import React from 'react';
import loading from '../../../img/loading/loading.gif';
import './Loading.css';


const Loading = () => {
    return (
        <div className='container d-flex justify-content-center align-items-center loading-img'>
            <img className='img-fluid ' src={loading} alt="" srcset="" />
        </div>
    );
};

export default Loading;
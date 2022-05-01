import React from 'react';
import loading from '../../../img/loading/loading.gif';

const Loading = () => {
    return (
        <div className='container d-flex justify-content-center align-items-center'>
            <img className='img-fluid' src={loading} alt="" srcset="" />
        </div>
    );
};

export default Loading;
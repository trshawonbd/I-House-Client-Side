import React from 'react';
import './ChooseUs.css';
import choose1 from '../../img/choose/choose1.svg';
import choose2 from '../../img/choose/choose2.svg';

const ChooseUs = () => {
    return (

        <div className='container'>
            <div className='what-section'>
                <h1 className='my-4'>What is I-House?</h1>
                <div>
                    <p className='what-description container text-justify'>I-House is the original product discovery platform that keeps you up to date with the latest apple tech, gear, and most incredible crowdfunding campaigns. Reaching over 31 million people per month, we also have iOS  apps that support AR and VR for next-level product exploration.</p>
                </div>
                <div className="row my-4">
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                        <h3 className='mb-3'>Why Use I-House?
                        </h3>
                        <p className=' text'>
                            We keep you updated with the latest tech product announcements for everything from the newest drones to obscure gaming gadgets. Our team discovers unique products and covers the latest crowdfunding campaigns. Save gadgets to your private or public wish lists, check out our team's expert reviews, and purchase products directly from trusted sellers.
                        </p>

                    </div>
                    <div className="col-md-6 ">
                        <img className='choose-pic' src= {choose1} alt="" srcset="" />
                    </div>
                </div>

                <div className="row my-4">
                    

                    <div className="col-md-6 ">
                        <img className='choose-pic' src= {choose2} alt="" srcset="" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <h3 className='mb-3'>Meet the Team
                        </h3>
                        <p className=' text'>
                        I-House is headquartered in New York City, and most of our team works remotely from the US and Europe. We are tech enthusiasts who love to learn about new technologies and the latest innovations. Talented individuals who are passionate about the future, we work tirelessly and love to excite you and teach you about advancements in our field.
                        </p>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default ChooseUs;
import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div class="footer-dark mt-4 font">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li>Phone</li>
                                <li>MacBook</li>
                                <li>IPad</li>
                                <li>IPod</li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li>About</li>
                                <li>Review</li>
                                <li>Goal</li>
                            </ul>
                        </div>
                        <div class="col-md-6 item text-footer">
                            <h3>Md Taibur Rahman</h3>
                            <p className='text-justify'>I-House would like to meet and get to know you in advance. Let's talk about everything related to Tech on the daily activities. We will share our recommendations at the meeting and give advice based on our past experience.</p>
                        </div>
                    </div>
                    <p class="copyright">I-House ©  {year}</p>
                </div>               
            </footer>
        </div>
    );
};

export default Footer;
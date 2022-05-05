import React from 'react';
import './About.css';
import community from '../../img/about/community.jpg'
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div className='container font'>
            <div className=''>
                <h1 className='about-title d-flex justify-content-center'>Apple makes <br /> business better.</h1>
                <p className=' about-title-des d-flex justify-content-center'>Apple hardware, software, and services work together to give your employees the power and flexibility to do whatever needs doing — whether you’re running a startup, scale-up, or global enterprise.</p>
            </div>
            <div>
                <div class="card bg-dark text-white">
                    <img src={community} class="card-img" alt="..."/>
                        <div class="card-img-overlay contain">
                            <h2 class="card-title-title">Escape from the Office</h2>
                            <h4 class="card-text-about">See how four misfits turn a brilliant idea into a booming small business with the power of Apple.</h4>
                            
                        </div>
                </div>
            </div>
            
        </div>
        
    );
    
};

export default About;
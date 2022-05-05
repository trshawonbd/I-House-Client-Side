import React from 'react';
import './Contact.css';
import profile from '../../img/profile.jpg'
const Contact = () => {
    return (
        <div className='container my-3 font'>
            <div className="card mb-3 card-border">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={profile} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Md Taibur Rahman</h5>
                            <p className="card-text"><strong>Goal:</strong>I want to be a Full stack web with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a MSC willing to be an asset for an organization.
                                Here are a Few Highlights i want to learn:
                                <div className='d-flex justify-content-center my-3'>
                                    <div className='desire '>
                                        <li>Full Stack web development</li>
                                        <li>Interactive Front End as per the design</li>
                                        <li>React and React Native</li>
                                        <li>Redux for State Management</li>
                                        <li>Building REST API</li>
                                        <li>Managing database</li>
                                        <li>Managing Firebase authentication</li>
                                    </div>

                                </div>




                            </p>
                            <p className="card-text">Email: trshawonbd@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
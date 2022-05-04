import React from 'react';

const Blog = () => {
    return (
        <div className='font'>
            <h3>Here is Blog</h3>
            <div className='container'>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                           <strong>Difference between javascript and nodejs</strong> 
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text">
                                JavaScript is a programming language to write scripts but Node JS is a runtime environment.
                                JS can run only on the web browser but with the help of node JS, JS can run outside of web browser.
                                JS is used on the client side but Node JS is used on the server side. JS supports HTML but Node JS doesnot support HTML functionality.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <strong>Differences between sql and nosql databases.</strong>
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text">                                Sql database is following relational procedure, but nosql is not- relational.
                                SQL is following prefenied schema but nosql is usning dynamic schema.
                                Sql database is table oriented but NoSql database is document oriented which has key and values.
                                SQL databases are vertically scalable, but NOSQL is horizontally scalable.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <strong>What is the purpose of jwt and how does it work?</strong>
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text">jwt JSON Web Token, is a standarize procedure to transmit data between server and client website. This system uses crytographic algorithm to encode the data which makes the data or API's more secure. JWT is a string which is created by cryptographic algorithm for 64bits which has 3 parts seperated by (.) | The first two's are header and payload which contain type of token and the request respectively. And the last one is signature which ensures the integrity of the request or token.  </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
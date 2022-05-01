import React from 'react';
import './Join.css';
import number1 from '../../img/number/one.png';
import number2 from '../../img/number/two.png';
import number3 from '../../img/number/three.png';

const Join = () => {
    return (
        <div className='text-center container font'>
            <h2 className='my-4'>Join <span className='title'>I</span>-H<span className='title'>o</span>u<span className='title'>s</span>e Today</h2>
            <p className='text-center text'>Explore the world of Gadget Flow so you know when any new tech launches—anywhere. Create your account using your email or any of our supported third-party logins, such as Google, Apple, and Facebook.</p>

            <div className='d-flex my-4'>
                <div className='d-flex align-items-center' >
                    <img className='num-img' src={number1} alt="" srcset="" />
                </div>
                <div className='container'>
                    <h4 className='text-start title'>Create Wish Lists</h4>
                    <p className='text'>Sign up to create private and public wish lists that you can share with family and friends. It’s also easy to organize your favorite gadgets into different collections, like gift guides, smart home products you love, and more.</p>

                </div>
            </div>
            <div className='d-flex my-3'>
                <div className='d-flex align-items-center' >
                    <img className='num-img' src={number2} alt="" srcset="" />
                </div>
                <div className='container'>
                    <h4 className='text-start title'>Get Product Notifications</h4>
                    <p className='text'>What do you do when you find a product that you love but aren't ready to buy? Simply create a notification! Click the three little dots by the buy now button and select Add Reminder to get notified. Receive a reminder when it's discounted, Black Friday, the next season, or any date you choose.</p>

                </div>
            </div>
            <div className='d-flex my-3'>
                <div className='d-flex align-items-center' >
                    <img className='num-img' src={number3} alt="" srcset="" />
                </div>
                <div className='container'>
                    <h4 className='text-start title'>Discover with Watch</h4>
                    <p className='text'>Now you can discover new products through our video feed. With Gadget Flow Watch, browse through your favorite categories and create playlists. Our endless selection of videos will have you discovering gadgets for hours.</p>

                </div>
            </div>

        </div>
    );
};

export default Join;
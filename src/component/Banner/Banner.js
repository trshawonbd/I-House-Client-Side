import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../img/Banner/banner1.png'
import banner2 from '../../img/Banner/banner2.png'
import banner3 from '../../img/Banner/banner3.png'
import banner4 from '../../img/Banner/banner4.png'
import banner5 from '../../img/Banner/banner5.png'

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='carousel-title'>Iphones</h3>
                    <p className='carousel-title'>Love the power.
                        Love the price.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='carousel-title'>Studio Display</h3>
                    <p className='carousel-title'>Light. Bright.
                        Full of might.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt=""
                />

                <Carousel.Caption>
                    <h3 className='carousel-title'>Full screen ahead</h3>
                    <p className='carousel-title'>Heavy on features.
                        Light on price.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner4}
                    alt=""
                />

                <Carousel.Caption>
                    <h3 className='carousel-title'>AirPods</h3>
                    <p className='carousel-title'>A magical connection to your devices.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner5}
                    alt=""
                />

                <Carousel.Caption>
                    <h3 className='carousel-title'>Mac Studio</h3>
                    <p className='carousel-title'>Incredible power.
                        Incredibly simple.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
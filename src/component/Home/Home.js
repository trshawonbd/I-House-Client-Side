import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Items from '../Items/Items';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <ChooseUs></ChooseUs>
            
        </div>
    );
};

export default Home;
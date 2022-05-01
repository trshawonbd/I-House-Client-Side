import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Items from '../Items/Items';
import Join from '../Join/Join';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <ChooseUs></ChooseUs>
            <Join></Join>
            
        </div>
    );
};

export default Home;
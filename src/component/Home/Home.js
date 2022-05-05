import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Items from '../Items/Items';
import Join from '../Join/Join';
import './Home.css';


const Home = () => {
    return (
        <div className='font'>
            <Banner></Banner>
            <Items></Items>
            
            <div className='my-4 '>
                <button className='login'><Link className='inventoryNavigate' to = '/manageInventory'>Manage Inventory</Link></button>
            </div>
            <ChooseUs></ChooseUs>
            <Join></Join>
            <Features></Features>
            
            
        </div>
    );
};

export default Home;
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import DisplayMyItem from '../DisplayMyItem/DisplayMyItem';
import './MyItems.css';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
   
    const navigate = useNavigate();
    useEffect(() => {
        const getItems = async() =>{
            const email = user?.email;
            const url = `https://intense-tor-77999.herokuapp.com/myItem?email=${email}`;
            try{
                const {data} = await axios.get(url, {
                    headers: {
                        authorization : `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setItems(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status ===403){
                    signOut(auth);
                    navigate('/login');
                } 
            }
        }
        getItems();
    } , [user])
        
    
    console.log(items, setItems)
    

    const handleItemDelete = id =>{
        const confirmation = window.confirm('Are you sure to delete this item?');
        
        if(confirmation){
            const url = `https://intense-tor-77999.herokuapp.com/item/${id}`;
            fetch (url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const rest = items.filter(item => item._id !== id)
                    setItems(rest);
                }
            })
        }
    }

    return (
        <div className='container font'>
            <h2 className='my-4'>My Items</h2>
            <div className="row  row-cols-1 row-cols-md-3 g-4">
                {
                    items.map((item) => <DisplayMyItem 
                    key={item._id}
                    item={item}
                    handleItemDelete = {handleItemDelete}
                    ></DisplayMyItem>
                    )
                }
            </div>
            <hr />
            <div className='my-4 '>
                <h3>Do You Want to add more product?</h3>
                <button className='login'><Link className='inventoryNavigate' to = '/addItem'>Add More Item</Link></button>
            </div>
        </div>
    );
};

export default MyItems;
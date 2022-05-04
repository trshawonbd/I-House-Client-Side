import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageSingleItem from '../ManageSingleItem/ManageSingleItem';
import './ManageInventory.css';

const ManageInventory = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const url = `https://intense-tor-77999.herokuapp.com/item`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])
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
            <h2 className='my-4'>Manage Inventory</h2>
            <div className="row  row-cols-1 row-cols-md-3 g-4">
                {
                    items.map((item) => <ManageSingleItem 
                    key={item._id}
                    item={item}
                    handleItemDelete = {handleItemDelete}
                    ></ManageSingleItem>
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

export default ManageInventory;
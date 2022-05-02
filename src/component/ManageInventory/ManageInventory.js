import React, { useEffect, useState } from 'react';
import useItem from '../Hooks/useItem';
import ManageSingleItem from '../ManageSingleItem/ManageSingleItem';
import './ManageInventory.css';

const ManageInventory = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const url = `http://localhost:5000/item`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])
    console.log(items, setItems)

    const handleItemDelete = id =>{
        const confirmation = window.confirm('Are you sure to delete this item?');
        if(confirmation){
            const url = `http://localhost:5000/item/${id}`;
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
        <div className='container'>
            <h2 className='my-4'>Manage Inventory</h2>
            <div className="row  row-cols-1 row-cols-md-3 g-4">
                {
                    items.map((item) => <ManageSingleItem 
                    key={item._id}
                    item={item}
                    handleItemDelete = {handleItemDelete}
                    ></ManageSingleItem>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;
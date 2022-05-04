import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useItem from '../Hooks/useItem';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {
    const [item,setItem] = useItem([]);
    
    const shuffled = item.sort(() => 0.5 - Math.random());
    console.log(shuffled)
     const sliceItems = shuffled.slice(0,6); 
    const navigate = useNavigate();

    const handleUpdate = id =>{
        const url= `https://intense-tor-77999.herokuapp.com/item/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setItem(data);
            navigate(`/item/${id}`);
        })
    }
    return (
        <div className='container font'>
            <h2 className='my-4'>Items</h2>
            
            <div className="row  row-cols-1 row-cols-md-3 g-4">
                {
                    sliceItems.map((item) => <Item
                    key={item._id}
                    products={item}
                    handleUpdate = {handleUpdate}
                    ></Item>
                    )
                } 
            </div>
            
        </div>
    );
};

export default Items;
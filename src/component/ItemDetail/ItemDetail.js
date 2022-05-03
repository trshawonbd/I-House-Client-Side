import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useItem from '../Hooks/useItem';
import './ItemDetail.css';

const ItemDetail = () => {
    const [serviceDetail, setServiceDetail] = useState({});
    const [newState, setNewState] = useState(0);
    
 
    const param = useParams();
    const {id} = param;
    const {_id, productName, price, quantity, image, supplier, description} = serviceDetail;

     const num = parseInt(quantity);


    useEffect(() =>{
        const url = `http://localhost:5000/item/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setServiceDetail(data))
    }  
    ,[id, newState])


    const handleDelivered = (id) =>{
        
        const available =(num - 1);
        
        if(available > 0){
            const updateQuantity = {quantity :  (available)};
             setNewState(updateQuantity)
        const url = `http://localhost:5000/item/${id}`;
        
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateQuantity),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);              
            })
            .catch((error) => {
                console.error('Error:', error);
            })
            

}
    
/* 
    const handleDelivered = (id) =>{
        console.log(id)
        const availble = quantityInInteger-1;
        if(availble > 0){
            const updateQuantity = {_id, productName, price, quantity:availble, image, supplier, description}
        console.log(updateQuantity)
        const url = `http://localhost:5000/item/${id}`;
        fetch(url, {
            method: 'PUT',
            headers : {
                'content-type':'application/json',
            },
            body : JSON.stringify(updateQuantity),
        } )
        .then(response => response.json())
        .then(data =>{ if (data.modifiedCount > 0) {
            const rest = items.filter(item => item._id !== id)
            setItems(rest);
            console.log('suceess:', data)
            toast('Item is delivered');
        } */
            
            
        /*     
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        }
        else{
            toast('You have not enough item available to deliver');
        }
         
        */

    }
        return (
            <div className="card mb-3 container font" >
            <div className="row g-4">
                <div className="col-md-4 d-flex align-items-center ">
                    <img src={image} className="img-fluid" alt="..." />

                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h3 className="card-title">{productName}</h3>
                    <hr />
                    <h4 className='card-price'>Price: ${price}</h4>
                    <hr />
                    <h5 className='card-quantity'>Quantity: {quantity}</h5>
                    <hr />
                    <h5 className='card-supplier'>Supplier: <span className='supplier'>{supplier}</span></h5>
                    <hr />

                    <p className="card-text">{description} </p>
                    
            
                    <hr />
                    <button    onClick={() => handleDelivered(_id)}   className='login'>Delivered</button>
                    <ToastContainer></ToastContainer>
                </div>
                   

                </div>
            </div>
        </div>
        );
    };

    export default ItemDetail;
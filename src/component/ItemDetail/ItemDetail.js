import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './ItemDetail.css';

const ItemDetail = () => {
    const [serviceDetail, setServiceDetail] = useState({});
    const quantityRef = useRef('');
    const param = useParams();
    const { id } = param;
    const {_id} = serviceDetail
    let { productName, price, quantity, image, supplier, description } = serviceDetail;
    useEffect(() => {
        const url = `https://intense-tor-77999.herokuapp.com/item/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServiceDetail(data),
            )
    } , [id,quantity])
        
    

     const handleDelivered = (id) => {        
        const newQuantity = (quantity - 1);
        if (newQuantity >= 0) {
            const newService = {...serviceDetail, quantity: newQuantity}
            setServiceDetail(newService);
            const url = `https://intense-tor-77999.herokuapp.com/item/${id}`;

            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newService),
            })
                .then(response => response.json())
                .then(data => {
                    
                    console.log('Success:', data);
                    
                })
                .catch((error) => {
                    console.error('Error:', error);
                }) 
        }
        else{
            toast(`${productName} is sold out`);
        }

    } 

    const handleRestockQuantity =  (id) => { 
        
        const getQuantity = quantityRef.current.value;
        const quantityInInt = parseInt(getQuantity);
        console.log(quantityInInt)
        const newQuantity = quantity + quantityInInt;
        console.log(newQuantity);

        if (newQuantity >0){
            const newService = {...serviceDetail, quantity : newQuantity};
            setServiceDetail(newService);
            const url = `https://intense-tor-77999.herokuapp.com/item/${id}`;

            fetch(url, {
                method: "PUT",
                headers: {'Content-Type': 'application/json',
             },
             body: JSON.stringify(newService),
             
            })
 
            .then(response => response.json())
            .then(data => {
             console.log('Success:', data);
         })
         .catch((error) => {
             console.error('Error:', error);
         })
         }
         else{
             toast("Please add atlease 1 quantity to restock")
         }
         quantityRef.current.value = '';
    }


    return (
        <div className="card mb-3 container font" >
            <div className="row g-4">
                <div className="col-md-4 d-flex align-items-center ">
                    <img src={image} className="img-fluid" alt="..." />

                </div>
                <div className="col-md-4">
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
                        <button  onClick={() => handleDelivered(_id)}  className='login'>Delivered</button>
                        <ToastContainer></ToastContainer>
                    </div>
                    


                </div>
                <div className="col-md-4">
                    <h3 className='my-4 card-title'>Restock Your: {productName}</h3>
                    <hr />
                    <div>
                        <h5>Enter Your Quantity:</h5>
                        <hr />
                        <input className='email' ref={quantityRef} type="text" name="quantity" id="" placeholder='Quantity' required />
                        <br />
                        <button  onClick={() => handleRestockQuantity(_id)}  className='login' type="submit" value="Restock Quantity">Restock Quantity</button>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>
            
            <div className='my-4 manage '>
                <button className='login '><Link className='inventoryNavigate' to = '/manageInventory'>Manage Inventory</Link></button>
            </div>
        </div>
    );
};

export default ItemDetail;
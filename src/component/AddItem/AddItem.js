import React from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './AddItem.css';

const AddItem = () => {
    const handleAddItem = (event) =>{
        event.preventDefault();
        const productName = event.target.productName.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const image = event.target.image.value;
        const supplier = event.target.supplier.value;
        const description = event.target.description.value;

        const product = {productName, price, quantity, image, supplier, description};

        console.log(product);
        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            headers : {
                'content-type':'application/json',
            },
            body : JSON.stringify(product),
        } )
        .then(response => response.json())
        .then(data => {
            console.log('suceess:', data)
            toast('Item is added');
            event.target.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
        });


    }
    return (
        <div>
            <h2 className='text-center'>Add Items</h2>
            <form onSubmit={handleAddItem}>
                <input className='email' type="text" name="productName" id="" placeholder='Product Name' required />
                <br />
                <input className='email' type="text" name="price" id="" placeholder='Price' required />
                <br />
                <input className='email' type="text" name="quantity" id="" placeholder='Quantity' required />
                <br />
                <input className='password' type="text" name="image" id="" placeholder='Image Link' required />
                <br />
                <input className='password' type="text" name="supplier" id="" placeholder='Supplier Name' required />
                <br />
                <textarea className='password' name="description" id="" cols="30"  placeholder='Description' required></textarea>
                
                <br />
                

                <input className='login' type="submit" value="Add Item" />
                <ToastContainer></ToastContainer>
            </form>
            
        </div>
    );
};

export default AddItem;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import './AddItem.css';

const AddItem = () => {
    const [user] = useAuthState(auth);
    console.log(user.email)
    const handleAddItem = (event) =>{
        event.preventDefault();
        const email = user?.email;
        const productName = event.target.productName.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const image = event.target.image.value;
        const supplier = event.target.supplier.value;
        const description = event.target.description.value;

        console.log(email)

        const product = {email, productName, price, quantity, image, supplier, description};

        console.log(product);
        const url = `https://intense-tor-77999.herokuapp.com/item`;
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
            <h2 className='text-center'>Add Item</h2>
            <form onSubmit={handleAddItem}>
                <input className='email' type="text" value={user.email} name="email" id="" placeholder='Email' required />
                <br />
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
                <textarea className='password' name="description" id="" rows="5" cols="40"  placeholder='Description' required></textarea>
                
                <br />
                

                <input className='login' type="submit" value="Add Item" />
                <ToastContainer></ToastContainer>
            </form>
            
            
        </div>
    );
};

export default AddItem;
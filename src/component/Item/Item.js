import React, { useState } from 'react';

const Item = ({products, handleUpdate}) => {
    const {_id, productName, price, quantity, image, supplier, description} = products;
    console.log(handleUpdate);
    const [showMore, setShowMore] = useState(false);
    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} className="img card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{productName}</h3>
                    <hr />
                    <h4 className='card-price'>Price: ${price}</h4>
                    <hr />
                    <h5 className='card-quantity'>Available: {quantity}</h5>
                    <hr />
                    <h5 className='card-supplier'>Supplier: <span className='supplier'>{supplier}</span></h5>
                    <hr />

                    <p className="card-text"> {showMore ? description : `${description.slice(0, 100)}`
                    }
                        <button className='btn-read-more' onClick={() => setShowMore(!showMore)}>
                            {showMore ? 'Read Less' : 'Read More'}
                        </button>  </p>
                    <hr />
                    <button  onClick={() => handleUpdate(_id)} className='login'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default Item;
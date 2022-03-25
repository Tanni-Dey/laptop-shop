import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Laptop.css'

const Laptop = ({ laptop }) => {
    const { id, brandName, img, price } = laptop;
    return (
        <div className='col-md-4 mb-3'>
            <div className='laptop'>
                <img className='img-fluid' src={img} alt="" />
                <div className='laptop-info'>
                    <h3>{brandName}</h3>
                    <p>Price : {price}</p>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Laptop;
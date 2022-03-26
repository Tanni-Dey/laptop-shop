import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillDelete } from 'react-icons/ai';
import './BuyLaptop.css'

const BuyLaptop = ({ select }) => {
    const { brandName, img } = select;
    return (
        <div className='buy-single row'>
            <div className="col-md-4">
                <img className='img-fluid' src={img} alt="" />
            </div>
            <div className="col-md-4">
                <h6>{brandName}</h6>
            </div>
            <div className="col-md-4"><AiFillDelete /></div>

        </div>
    );
};

export default BuyLaptop;
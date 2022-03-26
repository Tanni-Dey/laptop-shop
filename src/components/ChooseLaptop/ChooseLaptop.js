import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChooseLaptop.css'

const ChooseLaptop = ({ choose }) => {
    const { brandName, img } = choose;
    return (
        <div className='choose-laptop'>
            <img src={img} alt="" />
            <h6>{brandName}</h6>
        </div>
    );
};

export default ChooseLaptop;
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Laptops.css'
import Laptop from '../Laptop/Laptop';

const Laptops = () => {
    const [laptops, setLaptops] = useState([])
    useEffect(() => {
        fetch('laptops.json')
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [])
    console.log(laptops);
    return (
        <div className='row'>
            <div className='col-md-9 row'>
                {
                    laptops.map(laptop => <Laptop key={laptop.id} laptop={laptop}></Laptop>)
                }
            </div>
            <div className='col-md-3 p-3 select-laptop'>
                <h3>Selected Laptops</h3>
            </div>
        </div>
    );
};

export default Laptops;
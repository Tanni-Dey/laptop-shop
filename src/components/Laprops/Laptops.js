import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Laptops.css'
import Laptop from '../Laptop/Laptop';
import BuyLaptop from '../BuyLaptop/BuyLaptop';

const Laptops = () => {
    const [laptops, setLaptops] = useState([])
    const [buylaptops, setbuylaptops] = useState([])
    useEffect(() => {
        fetch('laptops.json')
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [])
    const handleBuyBtn = (selectLaptop) => {
        const newSelect = [...buylaptops, selectLaptop]
        setbuylaptops(newSelect);
    }
    const resetBtn = () => setbuylaptops([])
    return (
        <div className='row'>
            <div className='col-md-9 row'>
                {
                    laptops.map(laptop => <Laptop key={laptop.id} laptop={laptop} handleBuyBtn={handleBuyBtn}></Laptop>)
                }
            </div>
            <div className='col-md-3 p-3 select-laptop'>
                <div>
                    <h3>Selected Laptops</h3>

                    {
                        buylaptops.map(singleLaptop => <BuyLaptop select={singleLaptop} key={singleLaptop.id}></BuyLaptop>)
                    }
                    <button onClick={resetBtn} className='btn p-3 btn-danger'>Reset</button>
                </div>

            </div>
        </div>
    );
};

export default Laptops;
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Laptops.css'
import Laptop from '../Laptop/Laptop';
import BuyLaptop from '../BuyLaptop/BuyLaptop';
import ChooseLaptop from '../ChooseLaptop/ChooseLaptop';

const Laptops = () => {
    const [laptops, setLaptops] = useState([])
    const [buylaptops, setbuylaptops] = useState([])
    const [choose, setChoose] = useState([])
    useEffect(() => {
        fetch('laptops.json')
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [])
    const handleBuyBtn = (selectLaptop) => {
        /* const newSelect = [...buylaptops, selectLaptop]
        setbuylaptops(newSelect); */
        const newSelect = [...buylaptops, selectLaptop]
        // const e = newSelect.find(s => s.id === selectLaptop.id)
        if (newSelect.indexOf(selectLaptop) === -1) {
            alert('gh')
        }
        else {
            const newSelect = [...buylaptops, selectLaptop]
            setbuylaptops(newSelect);
        }

        // newSelect.filter(s=>s)
        /*  const f = newSelect.indexOf(selectLaptop);
         if (f !== -1) {
             // const addSelect = [...newSelect, selectLaptop]
             // setbuylaptops(addSelect);
             setbuylaptops(newSelect);
         }
         else {
 
             alert('gh')
         }
         console.log(selectLaptop); */
    }
    const resetBtn = () => {
        setbuylaptops([])
        setChoose([])
    }
    const chooseLaptop = () => {
        const buy = buylaptops[Math.floor(Math.random() * buylaptops.length)];
        setChoose(buy)
    }
    const deltLaptop = (id) => {
        const deltLaptop = buylaptops.find(delt => delt.id === id);
        const remainLaptop = buylaptops.filter(delt => deltLaptop.id !== delt.id);
        setbuylaptops(remainLaptop)
    }
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
                        buylaptops.map(singleLaptop => <BuyLaptop select={singleLaptop} dltitem={deltLaptop} key={singleLaptop.id}></BuyLaptop>)
                    }
                    <button onClick={resetBtn} className='btn p-3 btn-danger'>Reset</button><br />
                    <button onClick={chooseLaptop} className='btn mt-3 p-3 btn-warning'>Choose Laptop</button>
                    <ChooseLaptop choose={choose ? choose : ''}></ChooseLaptop>
                </div>

            </div>
        </div>
    );
};

export default Laptops;
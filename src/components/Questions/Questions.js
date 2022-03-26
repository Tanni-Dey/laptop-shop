import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='questions'>
            <h4>Q1 : How react works ?</h4>
            <p>Ans : React creates a virtual dom to compare with the real dom. React works with the Diff Algorithm to compare real dom and virtual dom. The virtual dom is a soft copy of the real dom. When a state changes on a website, the react quickly creates a virtual dom and then compares it with the real dom, showing the UI by changing the places where it has changed.</p>
            <h4>Q2 : What is difference between props and state ?</h4>
            <p>Ans : Props :<br /> 1.Props are read only.<br />2. Props are immutable. <br /> 3. Props can not be modified.<br /> 4. Props can pass data parent component to child component.<br />State : <br />1. State changes when user interact on website.<br />2. State can pass with props.<br />3.State is mutable.<br />4. state can be modified using this.setState. </p>
        </div>
    );
};

export default Questions; <h5>Q1 : How react works ?</h5>
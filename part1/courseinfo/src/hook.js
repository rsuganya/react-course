import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Button from './button.js';

const Hook = () => {
    let [count, setCount] = useState(0);
     const handleIncrement = () => setCount(count+1);
     const handleReset = () => setCount(0);
     const handleDecrement = () => setCount(count -1);
     
    return (
        <>
        <Display count={count}></Display>
        <Button handler = {handleIncrement} text="Up"/>
        <Button handler = {handleReset} text="Reset"/>
        <Button handler = {handleDecrement} text="Down"/>
        </>
    )
}

const Display = ({count}) =>  <div>{count}</div>



export default Hook;
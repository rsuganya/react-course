import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './button.js';

const LeftRight = () => {
    let [clicks, setClicks] = useState({left:0, right:0})
    let[allClicks,setAll] = useState([]);
    const rightClick = () => {
        setClicks({...clicks,right:clicks.right+1})
        setAll(allClicks.concat('R'))
    }
    const leftClick = () => {
        setClicks({...clicks,left: clicks.left+1})
        setAll(allClicks.concat('L'))
    }
    return (
    <div>
        Number of left clicks = {clicks.left}
        Number of right clicks = {clicks.right}
        <Button handler={rightClick} text="RightClick"/>
        <Button handler={leftClick} text ="LeftClick"/>
        <div>{allClicks.join(',')}</div>
    </div>
    )
}

export default LeftRight;
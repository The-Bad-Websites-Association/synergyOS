import React from 'react';
import './MenuBar.css';
import Clock from './Menu/Clock'
import Fullscreen from "./Menu/Fullscreen";

function MenuBar() {
    return (
        <div className="MenuBar">
            <Fullscreen/>
            <div className='menuClock'><Clock /></div>
            <h1>CHANGE ICON TO SVG</h1>
        </div>
    )
}

export default MenuBar;

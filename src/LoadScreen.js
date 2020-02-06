import React, { Component } from 'react';
import vid from './res/syn.mp4'
import screenfull from 'screenfull'

import './App.css'


function endVid() {
    document.querySelector('#intro').parentElement.outerHTML = ""
    document.querySelector('.desktop').classList.remove('closed')
    document.querySelector('.MenuBar').classList.remove('closed')
}

class LoadScreen extends Component{

    render() {
        return(
            <div onLoad={() => {if(window.mobilecheck === true) {endVid()}}}>
                <button id="start" onClick={(e) => { try{e.target.remove(); document.querySelector('#intro').style.display = 'block';document.querySelector('#intro').play(); } catch {endVid()}}}>Start SynergyOS</button>
                <div className="video">
                    <video id='intro' onClick={endVid} onPlay={(e) => screenfull.request(e.target)} onEnded={(e) => {screenfull.exit(); endVid()}} width='640px' height="100%" src={vid}type="video/mp4"></video>
                
                </div>
            </div> 
        )
    }
}

export default LoadScreen
import React from 'react'
import fullscreenClose from '../../Images/fullscreenClose.svg'
import fullscreenOpen from '../../Images/fullscreenOpen.svg'

const root = document.getElementById('root')

const toggleFullscreen = () => {
    if (document.webkitIsFullScreen) {
        console.log('hello')
        document.webkitExitFullscreen()
        document.getElementById('fullscreenButton').src=fullscreenOpen
    } else {
        console.log('goodbye')
        root.webkitRequestFullscreen()
        document.getElementById('fullscreenButton').src=fullscreenClose
        }
}

const Fullscreen = () => {

    return (
        <img id="fullscreenButton" src={fullscreenOpen} onClick={toggleFullscreen} />
    )
}

export default Fullscreen
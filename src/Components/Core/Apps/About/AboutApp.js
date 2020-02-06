import React from "react";
import './AboutApp.css'
import dragApp from '../AppDragger'
import resizeApp from '../AppResizer'

import alex from '../../../../res/headshots/alex.png'
import anton from '../../../../res/headshots/anton.png'
import josh from '../../../../res/headshots/josh.png'

class AboutApp extends React.Component {
    constructor(props) {
        super(props)
        let appName = this.props.name
        console.log(this.props.desktopState.currentApps[appName])
        this.state = {
            name: appName,
            visibility: this.props.desktopState.currentApps[appName],
        }

        this.style = {
            top: Math.floor(Math.random() * window.innerHeight / 2),
            left: Math.floor(Math.random() * window.innerWidth / 2)
        }

        this.props.desktopState.closeApp(appName)

    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({
                name: this.state.name,
                visibility: this.props.desktopState.currentApps[this.state.name],
            })
        }

        let app = document.getElementById(this.state.name)

        if (this.props.desktopState.activeApp === this.state.name) {
            app.classList.add('active')
        } else {
            app.classList.remove('active')
        }
    }

    activateApp = () => {
        let zIndex = this.props.desktopState.activateApp(this.state.name)
        let app = document.getElementById(this.state.name)
        app.style.zIndex = zIndex
    }

    render() {

        let appMinWidths = {minWidth: '100px', minHeight: '500px'}

        return (
            <div onClick={this.activateApp} id={this.state.name} className={'app ' + this.state.visibility}
                 style={this.style}>
                <div className="topBar" onPointerDown={e => {
                    dragApp(e.target, this.activateApp)
                }}>
                    <button onClick={() => {
                        this.props.desktopState.closeApp(this.state.name);
                        console.log(this.state.name)
                    }}>X
                    </button>
                    <div className="divider"></div>
                    <p>{this.state.name}</p>
                </div>

                <div className="app-content aboutAppContainer" style={appMinWidths}>
                    <h1>SynergyOS</h1>
                    <p>v1.0-indev</p>
                    <div className='aboutContactBoxWrapper'>
                        <div className='aboutContactBox'>
                            <img src={alex} alt='headshot' className='aboutHeadshot'/>
                            <a href='https://github.com/sudokufan' className='aboutName'>@sudokufan</a>
                        </div>
                        <br/>
                        <div className='aboutContactBox'>
                            <img src={anton} alt='headshot' className='aboutHeadshot'/>
                            <a href='https://github.com/anton25360' className='aboutName'>@anton25360</a>
                        </div>
                        <br/>
                        <div className='aboutContactBox'>
                            <img src={josh} alt='headshot' className='aboutHeadshot'/>
                            <a href='https://github.com/jdselby24' className='aboutName'>@jdselby24</a>

                        </div>
                    </div><br/>
                    <div className="credits">
                        <p>CREDITS:</p>
                        <p>Icons from <a href="https://icons8.com">Icons8</a></p>
                        <p><a href="http://windows93.net">Windows93</a> for Calculator App</p>
                        <p>Made with <a href="http://reactjs.com">React</a></p>
                    </div>
                </div>


                <div className="app-statusBar">
                    <div onPointerDown={e => {
                        resizeApp(e.target.parentElement, this.activateApp)
                    }}></div>
                </div>
            </div>
        )
    }
}

export default AboutApp
import React from "react";
import './Apps.css'

class TestApp extends React.Component {
    constructor(props){
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
    
    }

    componentDidUpdate(prevProps) {
        console.log(this.props.desktopState.currentApps[this.state.name])
        if(prevProps !== this.props) {
            this.setState({
                name: this.state.name,
                visibility: this.props.desktopState.currentApps[this.state.name],
            })
        }
    }

    dragApp(target) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0
        
        target.onmousedown = dragMouseDown;
        let elmnt = target.parentElement
        console.log(elmnt.style.width)

        function dragMouseDown(e) {
            e = e || window.event;
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;

            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
          }
    }

    render(){
        return (
            <div id={this.state.name} className={'app ' + this.state.visibility} style={this.style}>
                <div className="topBar" onPointerDown={e => this.dragApp(e.target)}>
                    <button onClick={() => {this.props.desktopState.closeApp(this.state.name); console.log(this.state.name)}}>X</button>
                    <div className="divider"></div>
                    <p>{this.state.name}</p>
                </div>
                <div className="app-content">
                    <h1>TestApp</h1>
                </div>
            </div>
        )
    }
}

export default TestApp
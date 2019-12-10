import React, { Component } from 'react'
import './App.css'
import MenuBar from './Components/MenuBar'
import Desktop from './Components/Desktop/Desktop'
import logo from './res/synergyoslogo.png'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apps: {
      },
      activeApp: '',
      currentZ: '1'
    }
  }

  setAppOpen = (appName) => {
    let currentState = this.state
    currentState.apps[appName] = 'open'
    this.setState(currentState)
  }

  setAppClosed = (appName) => {
    let currentState = this.state
    currentState.apps[appName] = 'closed'
    this.setState(currentState)
  }

  setAppActive = (appName) => {
    let currentState = this.state
    currentState.activeApp = appName
    currentState.currentZ++
    this.setState(currentState)
    return(currentState.currentZ)
  }

  render() {

    let appState = {
      currentApps: this.state.apps,
      activeApp: this.state.activeApp,
      openApp: this.setAppOpen,
      closeApp: this.setAppClosed,
      activateApp: this.setAppActive,
      currentZ: this.state.currentZ
    }

    return (
      <div>

          <Desktop background='#D8AEB6' backgroundImg={logo} appState={appState} />

          <MenuBar currentApps={this.state.apps} openApp={this.setAppOpen}/>
      </div>
    );
  }
}

export default App

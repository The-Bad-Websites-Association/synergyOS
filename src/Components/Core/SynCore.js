import React, {Component} from 'react'
import './BaseTheme.css'
import MenuBar from './MenuBar'
import Desktop from './Desktop/Desktop'
import logo from './../../res/synergyoslogo.png'
import LoadScreen from './LoadScreen'

class SynCore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentApps: {},
      activeApp: '',
      currentZ: '1',
      currentTheme: 'default',
      backgroundColor: 'pink',
      backgroundImg: logo,
      backgroundSize: '50%',
      openApp: this.setAppOpen,
      closeApp: this.setAppClosed,
      activateApp: this.setAppActive,
      setTheme: this.setCurrentTheme,
      setColor: this.setColor,
      setBackgroundImg: this.setBackgroundImg,
      setBackgroundSize: this.setBackgroundSize
    }
  }

  setAppOpen = (appName) => {
    let currentState = this.state
    currentState.currentApps[appName] = 'open'
    this.setState(currentState)
  }

  setAppClosed = (appName) => {
    let currentState = this.state
    currentState.currentApps[appName] = 'closed'
    this.setState(currentState)
  }

  setAppActive = (appName) => {
    let currentState = this.state
    currentState.activeApp = appName
    currentState.currentZ++
    this.setState(currentState)
    return (currentState.currentZ)
  }

  setCurrentTheme = (theme) => {
    let currentState = this.state
    currentState.currentTheme = theme
    this.setState(currentState)
  }

  setColor = (color) => {
    let currentState = this.state
    currentState.backgroundColor = color
    this.setState(currentState)
  }

  setBackgroundImg = (background) => {
    let currentState = this.state
    currentState.backgroundImg = background
    this.setState(currentState)
  }

  setBackgroundSize = (int) => {
    let currentState = this.state
    currentState.backgroundSize = int
    this.setState(currentState)
  }

  render() {
    document.getElementById('root').classList = ''
    document.getElementById('root').classList.add(this.state.currentTheme) 
    return (
      <div>
        <LoadScreen></LoadScreen>
        <Desktop backgroundImg={this.state.backgroundImg} appState={this.state} />
        <MenuBar currentApps={this.state.currentApps} openApp={this.setAppOpen} />
      </div>
    );
  }
}

export default SynCore

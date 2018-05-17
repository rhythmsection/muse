import React, { Component } from 'react'
import './app.css'
import UrlFormContainer from './components/url-form/container'

class App extends Component {
  render() {
    return (
      <div className="app">
       <UrlFormContainer />
      </div>
    )
  }
}

export default App

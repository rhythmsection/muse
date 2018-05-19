import React, { Component } from 'react'
import './app.css'
import UrlFormContainer from './components/url-form/container'
import DynamicRouter from './components/dynamic-router'

class App extends Component {
  render() {
    return (
      <div className="app">
        <UrlFormContainer />
        <DynamicRouter />
      </div>
    )
  }
}

export default App

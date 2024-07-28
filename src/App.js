import React, {Component} from 'react'
import {ConfigurationProvider} from './context/ConfigurationContext'
import ConfigurationController from './components/ConfigurationController'
import Layout from './components/Layout'
import './App.css'

class App extends Component {
  render() {
    return (
      <ConfigurationProvider>
        <div>
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationProvider>
    )
  }
}

export default App

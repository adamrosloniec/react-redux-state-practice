import React, { Component } from 'react'
import './App.css'
import MoviesContainer from './app/movies/components/MoviesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MoviesContainer />
      </div>
    )
  }
}

export default App

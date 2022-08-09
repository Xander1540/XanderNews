import './App.css';

// using class based complonents
import React, { Component } from 'react' //rcc
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {

  render() {
    return (
      <div>
        <NavBar/>
        <News/>
      </div>
    )
  }
}

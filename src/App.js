import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PresentationPhoto from './components/PresentationPhoto'
import campus from './assets/img/campus.jpg'

class App extends Component {
  render() {
    return (
      <PresentationPhoto
        src={campus}
        title={"asd"}
      />
    );
  }
}

export default App;

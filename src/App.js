import React, { Component } from 'react';
import PresentationPhoto from './components/PresentationPhoto'
import CardProject from './components/CardProject'
import campus from './assets/img/campus.jpg'
import logoCti from './assets/img/ctiLogoBranca.png'
import './index.css'

class App extends Component {
  render() {
    return (
      <div >
        <PresentationPhoto
          color={'#0F6B99'}
          backgroundImage={campus}
          height={"auto"}
          logo={logoCti}
        />
        <CardProject/>
      </div>
    );
  }
}

export default App;

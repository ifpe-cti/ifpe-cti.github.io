import React, { Component } from 'react';
import PresentationPhoto from './components/PresentationPhoto'
import campus from './assets/img/campus.jpg'
import logoCti from './assets/img/ctiLogoBranca.png'

class App extends Component {
  render() {
    return (
      <div>
        <PresentationPhoto
          color={'#0F6B99'}
          backgroundImage={campus}
          height={"auto"}
          logo={logoCti}
        />
        
        sadasd
      </div>
    );
  }
}

export default App;

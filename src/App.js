import React, { Component } from 'react';
import PresentationPhoto from './components/PresentationPhoto'
import campus from './assets/img/campus.jpg'

class App extends Component {
  render() {
    return (
      <div>
        <PresentationPhoto
          opacity={0.9}
          color={'#0F6B99'}
          backgroundImage={campus}
          height={"auto"}
        >

          

        </PresentationPhoto>
        sadasd
      </div>
    );
  }
}

export default App;

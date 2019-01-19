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
          logo={logoCti}/>
        <CardProject
          value={"asdpojas daos jdapos djpao"}
          name={"asadoj adsoa jdoa sjdojosa jd"}
          issuesNumber={"8"}
          contributors={"João da Silva, Aldarbeto Liro, Ademaul Sactus, Lorival Aliral"}
          language={"Java"}
          createdAt={"15/05/2018"}
          license={"nenhuma"}/>
      </div>
    );
  }
}

export default App;

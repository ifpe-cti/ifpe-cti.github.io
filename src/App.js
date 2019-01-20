import React, { Component } from 'react';
import PresentationPhoto from './components/PresentationPhoto'
import ProjectList from './components/ProjectList'
import campus from './assets/img/campus.jpg'
import logoCti from './assets/img/ctiLogoBranca.png'
import './index.css'
import { repository, generateList} from './actions/ProjectActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class App extends Component {


  render() {
    const { newValue } = this.props;

    return ( 
      <div>
        <PresentationPhoto
          color={'#0F6B99'}
          backgroundImage={campus}
          height={"auto"}
          logo={logoCti}/>

        <ProjectList/>
          {newValue}
      </div>
    );
  }
}


const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

export default connect(mapStateToProps)(App);
import React, { Component } from 'react';
import PresentationPhoto from './components/PresentationPhoto'
import ProjectList from './components/ProjectList'
import campus from './assets/img/campus.jpg'
import logoCti from './assets/img/ctiLogoBranca.png'
import './index.css'
import { repository, generateList, clickButton} from './actions/ProjectActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';


class App extends Component {

  constructor(props) {
    super(props)
    this.props.generateList()
  }

  state = {
    inputValue: ''
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const { newValue, clickButton } = this.props;
    clickButton("inputValueff")
    const { inputValue } = this.state;
    console.log(this.props.list)
    return ( 
      <div>
        <PresentationPhoto
          color={'#0F6B99'}
          backgroundImage={campus}
          height={"auto"}
          logo={logoCti}/>

        <ProjectList/>
          {/**
          <input type='text' 
          onChange={this.inputChange}
          value={inputValue}/>
        <button onClick={
          () => clickButton(inputValue)
        }>
          Click me!
        </button> */}
        <h1>{newValue}</h1>
      </div>
    );
  }
}


const mapStateToProps = store => ({
  newValue: store.clickState.newValue,
  list: store.clickState.list
});

const mapDispatchProps = dispatch => bindActionCreators({
  clickButton,
  generateList
}, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(App);
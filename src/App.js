import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={number:0}
  onClickAddNumber = ()=>{
    this.state.number++
    this.setState({number:this.state.number})
  }
  onClickMinNumber = ()=>{
    this.state.number--
    this.setState({number:this.state.number})
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.onClickAddNumber}>+</button><button onClick={this.onClickMinNumber}>-</button>
        <p>{this.state.number}</p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={number:0}
  onClickAddNumber = ()=>{
    let numberAdd1 = this.state.number+1;
    this.setState({number:numberAdd1})
  }
  onClickMinNumber = ()=>{
    let numberMin1 = this.state.number-1;
    this.setState({number:numberMin1})
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

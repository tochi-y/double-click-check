import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick(e) {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.count}回ボタンを押されました!
        </p>
        <Button variant="contained" color="primary" onClick={(e) => this.handleClick(e)}>
          連打しても無駄だよ
        </Button>
      </div>
    );
  }
}

export default App;

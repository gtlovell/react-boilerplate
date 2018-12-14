import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  increment = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  decrement = () => {
    this.setState(state => ({ count: state.count - 1 }));
  };

  state = {
    count: 0
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Hello there!</h1>
        <h2 className={count > 10 ? 'warning' : null}>Count: {count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default hot(module)(App);

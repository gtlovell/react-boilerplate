import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

const Warning = React.lazy(() => import('./Warning'));

class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  decrement = () => {
    this.setState(state => ({ count: state.count - 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Hello there!</h1>
        <img alt="" src="./logo.png" />
        <h2 className={count > 10 ? 'warning' : null}>Count: {count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        {count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    );
  }
}

export default hot(module)(App);

import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrement = (value) => {
    this.setState((prevState) => ({
      count: prevState.count + value
    }));
  };

  render() {
    return (
      <div>
        <h1>Лічильник: {this.state.count}</h1>
        <button onClick={() => this.handleIncrement(1)}>+1</button>
        <button onClick={() => this.handleIncrement(5)}>+5</button>
        <button onClick={() => this.handleIncrement(10)}>+10</button>
      </div>
    );
  }
}

export default Counter;
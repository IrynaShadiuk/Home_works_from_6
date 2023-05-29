import React from "react";
import Counter from "./components/Counter";
import MyComponent from "./components/MyComponents";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Мій додаток</h1>
        <Counter />
        <MyComponent />
      </div>
    );
  }
}

export default App;

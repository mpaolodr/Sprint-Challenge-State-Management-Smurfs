import React, { Component } from "react";

// styles
import "./App.css";

// components
import Display from "./display/Display";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display />
      </div>
    );
  }
}

export default App;

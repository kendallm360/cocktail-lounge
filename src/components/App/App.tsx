import React, { Component } from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";

interface IState {}

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;

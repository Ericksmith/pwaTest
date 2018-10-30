import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentWillMount() {
    let deferredPrompt;

    window.addEventListener("beforeinstallprompt", e => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      console.log(e);
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
    });
  }

  handlePWA = () => {
    console.log('click');
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        <button onClick={this.handlePWA}>Install PWA</button>
        </header>
      </div>
    );
  }
}

export default App;

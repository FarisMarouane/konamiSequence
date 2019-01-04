import React, { Component } from 'react';
import { fromEvent } from 'rxjs';
import logo from './logo.svg';
import './App.css';
import detectKonamiSequence from './konami';

class App extends Component {
  componentDidMount() {
    this.keysSubscription = fromEvent(document, 'keydown');
    detectKonamiSequence(this.keysSubscription).subscribe(v => console.log(v));
  }

  componentWillUnmount() {
    this.keysSubscription.unsubscribe();
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
        </header>
      </div>
    );
  }
}

export default App;

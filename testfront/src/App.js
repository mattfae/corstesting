import React from 'react';
import logo from './logo.svg';
import './App.css';


const renderDatums = () => {
  fetch('http://localhost3000/testdata')
  .then(resp => resp.json())
  .then(resp => {
    console.log(resp)
  })
}


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {renderDatums()}
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

export default App;

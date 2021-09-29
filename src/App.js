import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bienvenido a un mundo de codigo virtual infinito!</h1>
	  <body>
          <p> Esta pagina ha sido creada con la intencion de practicar el desarrollo y adaptacion de aplicaciones web </p>
          </body>
	  <a
          className="App-link"
          href="https://facebook.com/castillolacone"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sigue la energia
        </a>
      </header>
    </div>
  );
}

export default App;


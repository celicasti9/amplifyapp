import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bienvenida a una experiencia personalizada</h1>
	  <body>
          <p> Esta pagina ha sido creada con la intencion de desarrollar nuevas maneras de invitarle a compartir. La buena energia siempre llama. </p>
	  <p> Estamos seguros que de aceptar la invitacion, la velada seria de su agrado. </p>
          </body>
	  <a
          className="App-link"
          href="https://www.youtube.com/watch?v=VPWP9xzIXKg&ab_channel=LaconeTV"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click y siente la energia
        </a>
      </header>
    </div>
  );
}

export default App;


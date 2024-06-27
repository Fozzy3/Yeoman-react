require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
class AppComponent extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <header className="header">
        <img src={yeomanImage} alt="Yeoman Generator" />

          <h1>Practica Yeoman</h1>
          <p>Tendencias Avanzadas de Ingeniería de software:</p>
        </header>
        <main className="main-content">
          <ul className="names-list">
            <li>Carlos Stiven Mora Hoyos</li>
            <li>Steven Espejo Cabarcas</li>
            <li>Diego Alejandro Bautista Castañeda</li>
            <li>Jose Daniel Peña Peña</li>
          </ul>
        </main>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

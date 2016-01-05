var React = require('react');
var ReactDOM = require('react-dom');
var entorno = require('./clases/entorno');
var constantes = require('./constantes/constantes');
var FriendsContainer = require('./componentes/FriendsApp/FriendsContainer.jsx');

"use strict";

window.comItem = ReactDOM.render(
  <div>
    <FriendsContainer />
  </div>,
  document.getElementById('content')
);

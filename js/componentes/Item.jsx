var React = require('react');
var constantes = require('../constantes/constantes');

var Item = React.createClass({
  getInitialState : function () {
    return {
      title : this.props.data.APPLICATION_NAME
    }
  },
  render : function () {
    return (

      <h2>{this.state.title}</h2>
    );
  }
});

module.exports = Item;

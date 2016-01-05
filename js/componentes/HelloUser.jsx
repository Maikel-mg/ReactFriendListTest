var React = require('react');

const HelloUser  = React.createClass({
  getInitialState : function () {
    return {
      userName : 'Maikel'
    }
  },
  render: function() {
    return (
      <div>
      Hello {this.state.userName} <br/>
    Change Name: <input type="text" value={this.state.userName} onChange={this.handleChange}/>
      </div>
    );
  },
  handleChange : function (ev) {
    this.setState({
      userName : ev.target.value
    });
  }
});

module.exports = HelloUser;

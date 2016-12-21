import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Navbar from 'components/Navbar';
const io = require('socket.io-client')();


class App extends Component {

  static propTypes = {
    children: PropTypes.any,
  };

  sendData() {
    io.emit('add user', {
      username: 'Jay',
    });
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <h1>App containers rendered by default</h1>
        <button onClick={() => this.sendData()}>Add User Jay</button>
        {this.props.children}
      </div>
    );
  }
}

export default connect()(App);

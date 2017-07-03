// @flow
import React, { Component } from 'react';
import Server from '../components/Server';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class ServerPage extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Server />
      </MuiThemeProvider>
    );
  }
}

import React from 'react';
import { AppRegistry } from 'react-vr';
import App from './vr/app';

export default class react_vr extends React.Component {
  render() {
    return (
      <App />
    );
  }
};

AppRegistry.registerComponent('react_vr', () => react_vr);

/**
 * It's my first project
 *
 * Hello world!
 *
 * Author: Kim Hsiao
 */

import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class myReactNative extends Component {
  render() {
    return (
      <Text>Hello World!</Text>
    );
  }
}

AppRegistry.registerComponent('myReactNative', () => myReactNative);

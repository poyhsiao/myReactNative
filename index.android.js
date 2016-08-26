/**
 * The second project (show image box)
 *
 * Author: Kim Hsiao
 *
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Image,
  Text,
} from 'react-native';

class TextArea extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}</Text>
    );
  }
}

class myReactNative extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }

    return (
      <View style={{alignItems: 'center'}}>
        <Image source={pic} style={{width: 193, height: 110}} />
        <TextArea name='Rexxar' />
      </View>
    );
  }
}

AppRegistry.registerComponent('myReactNative', () => myReactNative);

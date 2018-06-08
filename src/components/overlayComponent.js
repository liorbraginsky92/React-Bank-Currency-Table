//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Dimensions } from 'react-native'

const DEVICE_INFO = Dimensions.get('window');
// create a component
class OverlayComponent extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      this.props.visible && 
      <View style={styles.container}>
        <ActivityIndicator size={this.props.size} />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: DEVICE_INFO.width,
    height: DEVICE_INFO.height,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

//make this component available to the app
export default OverlayComponent;

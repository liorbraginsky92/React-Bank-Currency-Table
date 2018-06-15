//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import * as GLOBAL from '@global'
// create a component
class ItemBreakevenComponent extends Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <View>
          <Text style={styles.detailFont}>Breakeven Point</Text>
          </View>
        </View>
        <View style={styles.leftRectangle}></View>
        <View style={styles.title}>
          <Text style={styles.titleText}>{this.props.values}</Text>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    width           : '30%',
    height          : GLOBAL.getDeviceHeight(180),
    backgroundColor : 'transparent',
    position        : 'relative'
  },
  mainContainer: {
    width           : GLOBAL.getDeviceWidth(360),
    height          : GLOBAL.getDeviceHeight(160),
    paddingTop      : GLOBAL.getDeviceHeight(15),
    justifyContent  : 'center',
    borderWidth     : 1,
    borderColor     : '#ff4d71',
    flexDirection   : 'row'
  },
  leftRectangle: {
    position        : 'absolute',
    width           : GLOBAL.getDeviceHeight(34),
    height          : GLOBAL.getDeviceHeight(34),
    marginLeft      : GLOBAL.getDeviceWidth(53),
    top             : GLOBAL.getDeviceHeight(140),
    backgroundColor : '#ff4d71',
  },
  title: {
    position        : 'absolute',
    width           : GLOBAL.getDeviceWidth(220),
    height          : GLOBAL.getDeviceHeight(84),
    left            : GLOBAL.getDeviceWidth(85),
    top             : GLOBAL.getDeviceHeight(115),
    backgroundColor : '#373334',
    justifyContent  : 'center'
  },
  titleText: {
    color           : '#ffffff',
    textAlign       : 'center',
    fontWeight      : 'bold',
    fontSize        : 16
  },
  detailFont: {
    fontSize        : 14,
    color           : '#ffffff',
  },
  detailvalue: {
    fontWeight      : 'bold',
    textAlign       : 'center'
  }
});

//make this component available to the app
export default ItemBreakevenComponent;

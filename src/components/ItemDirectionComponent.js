//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import * as GLOBAL from '@global'
// create a component
class ItemDirectionComponent extends Component {
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
            <Text style={styles.detailFont}>Direction</Text>
          </View>
        </View>
        {
          this.props.values === "Bullish" ? (
            <View style={styles.title}>
              <Text style={styles.titleText}>{this.props.values}</Text>
            </View>

          ) : (
            <View style={styles.titleRed}>
              <Text style={styles.titleTextWhite}>{this.props.values}</Text>
            </View>
          )
        }
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    width           : '25%',
    height          : GLOBAL.getDeviceHeight(190),
    backgroundColor : 'transparent',
    position        : 'relative'
  },
  mainContainer: {
    width           : GLOBAL.getDeviceWidth(300),
    height          : GLOBAL.getDeviceHeight(160),
    paddingTop      : GLOBAL.getDeviceHeight(15),
    justifyContent  : 'center',
    borderWidth     : 1,
    borderColor     : '#ff4d71',
    flexDirection   : 'row'
  },
  title: {
    position        : 'absolute',
    width           : GLOBAL.getDeviceWidth(220),
    height          : GLOBAL.getDeviceHeight(70),
    left            : GLOBAL.getDeviceWidth(40),
    top             : GLOBAL.getDeviceHeight(120),
    backgroundColor : '#00ff00',
    justifyContent  : 'center'
  },
  titleRed: {
    position        : 'absolute',
    width           : GLOBAL.getDeviceWidth(220),
    height          : GLOBAL.getDeviceHeight(70),
    left            : GLOBAL.getDeviceWidth(40),
    top             : GLOBAL.getDeviceHeight(120),
    backgroundColor : '#ff4d71',
    justifyContent  : 'center'
  },
  titleText: {
    color           : '#373334',
    textAlign       : 'center',
    fontSize        : 16
  },
  titleTextWhite: {
    color           : '#ffffff',
    textAlign       : 'center',
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
export default ItemDirectionComponent;

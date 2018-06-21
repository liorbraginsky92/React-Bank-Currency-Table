//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import * as GLOBAL from '@global'
// create a component
class ItemDetailComponent extends Component {
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
            <Text style={styles.detailFont}>{this.props.elements[0]}</Text>
            <Text style={styles.detailvalue}>{this.props.values[0]}</Text>
          </View>
          <View>
            <Text style={styles.detailFont}>{this.props.elements[1]}</Text>
            <Text style={styles.detailvalue}>{this.props.values[1]}</Text>
          </View>
          <View>
            <Text style={styles.detailFont}>{this.props.elements[2]}</Text>
            <Text style={styles.detailvalue}>{this.props.values[2]}</Text>
          </View>
        </View>
        <View style={styles.leftRectangle}></View>
        <View style={styles.rightRectangle}></View>
        <View style={styles.title}>
          <Text style={styles.titleText}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    width           : '100%',
    height          : GLOBAL.getDeviceHeight(269),
    backgroundColor : 'transparent',
    position        : 'relative'
  },
  mainContainer: {
    width           : GLOBAL.getDeviceWidth(1059),
    height          : GLOBAL.getDeviceHeight(231),
    marginLeft      : GLOBAL.getDeviceWidth(83),
    paddingTop      : GLOBAL.getDeviceHeight(20),
    paddingLeft     : GLOBAL.getDeviceWidth(115),
    paddingRight    : GLOBAL.getDeviceWidth(115),
    justifyContent  : 'space-between',
    borderWidth     : 2,
    borderColor     : '#373334',
    flexDirection   : 'row'
  },
  leftRectangle: {
    position        : 'absolute',
    width           : GLOBAL.getDeviceHeight(34),
    height          : GLOBAL.getDeviceHeight(34),
    marginLeft      : GLOBAL.getDeviceWidth(509),
    top             : GLOBAL.getDeviceHeight(210),
    backgroundColor : '#373334',
  },
  rightRectangle: {
    position        : 'absolute',
    width           : GLOBAL.getDeviceHeight(34),
    height          : GLOBAL.getDeviceHeight(34),
    marginLeft      : GLOBAL.getDeviceWidth(1021),
    top             : GLOBAL.getDeviceHeight(214),
    backgroundColor : '#373334',
  },
  title: {
    position        : 'absolute',
    width           : GLOBAL.getDeviceWidth(478),
    height          : GLOBAL.getDeviceHeight(87),
    left            : GLOBAL.getDeviceWidth(543),
    top             : GLOBAL.getDeviceHeight(175),
    backgroundColor : '#eaeaea',
    justifyContent  : 'center'
  },
  titleText: {
    color           : '#ff4d71',
    textAlign       : 'center',
    fontSize        : 18
  },
  detailFont: {
    fontSize        : 12,
    top             : 3
  },
  detailvalue: {
    fontWeight      : 'bold',
    textAlign       : 'center',
    top             : 12
  }
});

//make this component available to the app
export default ItemDetailComponent;

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import * as GLOBAL from '@global'
// create a component
class PerformanceItem extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
  }
  render() {
    return (
      <View style={styles.container}>
        {
          this.props.values[5] == 1 ?
            (
              <View style={styles.titleContainer1}>

                <Text style={styles.titleText}>Today {this.props.values[4]}</Text>
              </View>
            ):
            (
              <View style={styles.titleContainer}>

                <Text style={styles.titleText}>{this.props.values[4]}</Text>
              </View>
            )
        }
        <View style={styles.mainContainer}>
          <View>
            <Text style={styles.detailFont}>Total Trades</Text>
            <Text style={styles.detailvalue}>{this.props.values[0]}</Text>
          </View>
          <View>
            <Text style={styles.detailFont}>Floating Trades</Text>
            <Text style={styles.detailvalue}>{this.props.values[1]}</Text>
          </View>
          <View>
            <Text style={styles.detailFont}>Gained Pips</Text>
            <Text style={styles.detailvalue}>{this.props.values[2]}</Text>
          </View>
          <View>
            <Text style={styles.detailFont}>Profiting Factor</Text>
            <Text style={styles.detailvalue}>{this.props.values[3]}</Text>
          </View>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height          : GLOBAL.getDeviceHeight(269),
    backgroundColor: 'transparent',
    position: 'relative',
    marginTop: 10,
  },
  mainContainer: {
    width: '94%',
    height: 70,
    marginLeft: '3%',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 20,
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#373334',
    flexDirection: 'row'
  },
  detailFont: {
    fontSize: 11
  },
  detailvalue: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  titleContainer: {
    width: '30%',
    height: 30,
    backgroundColor: '#ff4d71',
    marginLeft: '3%',
    justifyContent  : 'center',
  },
  titleContainer1: {
    width: '30%',
    height: 30,
    backgroundColor: '#333333',
    justifyContent  : 'center',
    marginLeft: '3%',
  },
  titleText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#ffffff'

  }
});

//make this component available to the app
export default PerformanceItem;

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as GLOBAL from '@global';

// create a component
class PerformanceItemComponent extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <View style={styles.textPart}>
            <Text style={styles.flagText}>{'Performance'}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.viewButton} onPress={this.onView.bind(this)}>
              <Text style={styles.ButtonText}>{'View'} </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  onView () {
    this.props.onView(this.props.flag);
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {    
    marginTop : GLOBAL.getDeviceHeight(18),
    height: GLOBAL.getDeviceHeight(210),
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: GLOBAL.getDeviceWidth(36),
    marginRight: GLOBAL.getDeviceWidth(36),
    borderWidth: 2,
    borderColor: '#373334',
    height: '100%',
    backgroundColor: '#373334'    
  },
  textPart: {
    paddingTop: 0,
    width: GLOBAL.getDeviceWidth(979),
    justifyContent: 'center'
  },
  flag: {
    marginLeft: GLOBAL.getDeviceWidth(28),
    marginTop : GLOBAL.getDeviceHeight(29),
    width     : GLOBAL.getDeviceWidth(407),
    height    : GLOBAL.getDeviceHeight(150),
    resizeMode: 'contain'
  },
  flagText: {
    fontSize  : 32,
    fontFamily: 'Candara',
    color     : '#eaeaea',
    alignSelf : 'center',
    fontWeight: '900',
  },
  viewButton: {
    width     : GLOBAL.getDeviceWidth(166),
    height    : GLOBAL.getDeviceHeight(136),
    marginRight: GLOBAL.getDeviceWidth(21),
    backgroundColor: '#ff4d71',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
    alignSelf : 'center',
    alignItems  : 'flex-end'
  },
  ButtonText: {
    color : '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',    
  }
});

//make this component available to the app
export default PerformanceItemComponent;

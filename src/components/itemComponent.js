import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

// create a component
class ItemComponent extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Image style={styles.flag} source={this.getFlagImage()} />
          <Text style={styles.flagText}>{this.props.flag + ' /'}</Text>
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
  getFlagImage () {
    switch (this.props.flag) {
      case 'EURUSD':
        return require('@assets/images/home/EURUSD.png');
      case 'GBPUSD':
        return require('@assets/images/home/GBPUSD.png');
      case 'USDJPY':
        return require('@assets/images/home/USDJPY.png');
      case 'USDCAD':
        return require('@assets/images/home/USDCAD.png');
      case 'NZDUSD':
        return require('@assets/images/home/NZDUSD.png');
      case 'EURJPY':
        return require('@assets/images/home/EURJPY.png');
      case 'EURCHF':
        return require('@assets/images/home/EURCHF.png');
      case 'XAUUSD':
        return require('@assets/images/home/XAUUSD.png');
    }
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {    
    marginTop : GLOBAL.getDeviceHeight(18),
    height: GLOBAL.getDeviceHeight(210)
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: GLOBAL.getDeviceWidth(36),
    borderWidth: 2,
    borderColor: '#373334',
    height: '100%'
  },
  flag: {
    marginLeft: GLOBAL.getDeviceWidth(28),
    marginTop : GLOBAL.getDeviceHeight(29),
    width     : GLOBAL.getDeviceWidth(407),
    height    : GLOBAL.getDeviceHeight(150),
    resizeMode: 'contain'
  },
  flagText: {
    marginLeft: GLOBAL.getDeviceWidth(38),
    fontSize  : 30,
    color     : '#373334',
    alignSelf : 'center',
    fontWeight: 'bold',
  },
  viewButton: {
    width     : GLOBAL.getDeviceWidth(166),
    height    : GLOBAL.getDeviceHeight(136),
    marginRight: GLOBAL.getDeviceWidth(21),
    // alignItems: 'center',
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
  }
});

//make this component available to the app
export default ItemComponent;

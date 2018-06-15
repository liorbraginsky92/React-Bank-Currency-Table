//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import * as GLOBAL from '@global'
// create a component
class ScalpingItem extends Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <View width={70}>
            <Text style={styles.textKey1}>Item</Text>
            <Text style={styles.textKey1}>Trade Type</Text>
            <Text style={styles.textKey1}>Retracement</Text>
          </View>
          <View width={55}>
            <Text style={styles.textKey2}>{this.props.values[0]}</Text>
            {
              this.props.values[1] === "BUY" ? (

            <Text style={styles.textKey3}>{this.props.values[1]}</Text>
              ):(

            <Text style={styles.textKey4}>{this.props.values[1]}</Text>
              )
            }
            {
              this.props.values[2] === "BUY" ? (

            <Text style={styles.textKey3}>{this.props.values[2]}</Text>
              ):(

            <Text style={styles.textKey4}>{this.props.values[2]}</Text>
              )
            }
          </View>
          <View style={styles.divide1}/>
          <View width={66}>
            <Text style={styles.textKey1}>Avg Overall</Text>
            <Text style={styles.textKey1}>Ratio</Text>
          </View>
          <View width={50}>
            <Text style={styles.textKey2}>{this.props.values[3]}</Text>
            <Text style={styles.textKey2}>{this.props.values[4]}</Text>
            <Text style={styles.textKey2}>{this.props.values[5]}</Text>
          </View>
          <View style={styles.divide2}/>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    width           : '100%',
    // height          : GLOBAL.getDeviceHeight(269),
    backgroundColor : 'transparent',
    position        : 'relative',
    marginTop:10,
  },
  mainContainer: {
    width           : '94%',
    height          : 70,
    marginLeft      : '3%',
    paddingLeft     : 10,
    paddingRight    : 5,
    justifyContent  : 'space-between',
    borderWidth     : 1,
    borderColor     : '#373334',
    flexDirection   : 'row'
  },
  textKey2:{
    fontSize      : 12,
    marginTop     : 5,
    color         : '#373334',
    fontWeight    : 'bold',
    textAlign     : 'center',
  },
  textKey3:{
    fontSize      : 12,
    marginTop     :5,
    color         : '#ffffff',
    fontWeight    : 'bold',
    textAlign     : 'center',
    backgroundColor : 'green'
  },
  textKey4:{
    fontSize      : 12,
    marginTop     :5,
    color         : '#ffffff',
    fontWeight    : 'bold',
    textAlign     : 'center',
    backgroundColor : '#ff4d71'
  },
  textKey5:{
    fontSize      : 14,
    marginTop     : 8,
    color         : '#373334',
    fontWeight    : 'bold',
    textAlign     : 'center',
    height        : 20
  },
  textKey6:{
    fontSize      : 14,
    marginTop     : 0,
    textAlign     : 'center',
    color         : '#373334'
  },
  detailFont: {
    fontSize        : 11
  },
  detailvalue: {
    fontWeight      : 'bold',
    textAlign       : 'center',
    marginTop       :10,
  },
  titleContainer: {
    width           : '30%',
    height          : 30,
    backgroundColor : '#333333',
    marginLeft      : '3%',
  },
  titleText:{
    fontSize        : 14,
    color           : '#ffffff'

  },
  divide1:{
    width           :1,
    marginTop       :5,
    marginBottom    :5,
    backgroundColor :'#373334',
  },
  divide2:{
    width           :1,
    height          :'100%',
    backgroundColor : '#373334',
     
   },
   last:{
     width          : '20%',
     alignSelf      : 'center'     
   }
});

//make this component available to the app
export default ScalpingItem;

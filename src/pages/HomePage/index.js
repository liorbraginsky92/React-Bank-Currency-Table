//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Image, ScrollView } from 'react-native';

import ItemComponent from '@components/itemComponent'
import ScalpingComponent from '@components/ScalpingItem'
import PerformaceComponent from '@components/PerformanceItem'
import * as GLOBAL from '@global'
// create a component
class HomePage extends Component {
  constructor (props) {
    super(props)
    const data = this.props.navigation.state.params.datas;
    this.state = {
      arr_money : [],
      arr_performance : [],
      arr_scalping : []
    }
    this.state.arr_money = data.response.data,
    this.state.arr_performance = data.response.performance,
    this.state.arr_scalping = data.response.scalping,
    $this = this
  }
  render() {    
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image source={require('@assets/images/home/onlineMark.png')} style={styles.onlineMarker} />
          <View style={{flexDirection:'row', height: GLOBAL.getDeviceHeight(190),marginBottom: GLOBAL.getDeviceHeight(71),}}>
            <Image source={require('@assets/images/home/mark.png')} style={styles.Marker} />
            <View style={styles.MarkerConatiner}>
              <Text style={{fontSize: 20}}>SigBanc Artificial</Text>
              <Text style={{fontSize: 20}}>Intelligence Engine</Text>
            </View>
          </View>
          <ItemComponent flag={'EURUSD'} onView={this.onView.bind(this)}/>
          <ItemComponent flag={'GBPUSD'} onView={this.onView.bind(this)}/>
          <ItemComponent flag={'USDJPY'} onView={this.onView.bind(this)}/>
          <ItemComponent flag={'AUDUSD'} onView={this.onView.bind(this)}/>
          <ItemComponent flag={'USDCHF'} onView={this.onView.bind(this)}/>
          <ItemComponent flag={'USDCAD'} onView={this.onView.bind(this)}/>
          <ItemComponent flag={'NZDUSD'} onView={this.onView.bind(this)}/>
          <ItemComponent flag={'EURJPY'} onView={this.onView.bind(this)}/>
          <ItemComponent flag={'EURCHF'} onView={this.onView.bind(this)}/>
          <ItemComponent flag={'XAUUSD'} onView={this.onView.bind(this)}/>
          <ScalpingComponent onView={this.onScalping.bind(this)}/>
          <PerformaceComponent onView={this.onPerformance.bind(this)} />
          <View style={styles.WarningContainer}>
            <Text style={styles.WarningText}> <Text style={{color: '#e24348'}}> Risk Warning </Text> SigBanc LTD will not accept any liability for loos or </Text>
            <Text style={styles.WarningText}>damage as a result of reliance of the information contained within </Text>
            <Text style={styles.WarningText}>this website including data, quotes, charts, buy & sell signals,</Text>
            <Text style={styles.WarningText}>SigBanc Ai Engine, users analysis and articles. Please be fully</Text>
            <Text style={styles.WarningText}>informed regarding the risks and costs associated with trading the </Text>
            <Text style={styles.WarningText}>financial markets (forex).</Text>
          </View>
            <View height={50}/>
        </ScrollView>
      </View>
    );
  }

  onView (flag) {
    if(flag === 'XAUUSD') flag = 'GOLD'
    for(let i = 0; i < this.state.arr_money.length; i++){
      _item = this.state.arr_money[i];
      if(_item.title === flag){
        this.props.navigation.navigate('ItemPage', { data: _item})
        return;
      }
    }
  } 
  onScalping () {
    this.props.navigation.navigate('ScalpingPage', { data: this.state.arr_scalping })
  }
  onPerformance () {
    this.props.navigation.navigate('PerformancePage', {data: this.state.arr_performance })
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex      : 1,
    height    : '100%',
    backgroundColor: '#eaeaea',
    marginTop : Platform.OS === 'ios' ? 20:0
  },
  item: {
  },
  onlineMarker: {
    width     : GLOBAL.getDeviceWidth(156),
    height    : GLOBAL.getDeviceHeight(239),
    left      : GLOBAL.getDeviceWidth(1050),
    resizeMode: 'contain'
  },
  Marker: {
    marginTop : GLOBAL.getDeviceHeight(9),
    marginLeft: GLOBAL.getDeviceWidth(103),
    width     : GLOBAL.getDeviceWidth(155),
    height    : GLOBAL.getDeviceHeight(182),
    resizeMode: 'contain'    
  },
  MarkerConatiner: {    
    justifyContent:'center',
    height: GLOBAL.getDeviceHeight(182), 
    marginLeft: GLOBAL.getDeviceWidth(34)
  },
  WarningText: {
    fontSize: 10,
    alignSelf: 'center'
  },
  WarningContainer: {
    marginTop: GLOBAL.getDeviceHeight(74)
  }
});

//make this component available to the app
export default HomePage;

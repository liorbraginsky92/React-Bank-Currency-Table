//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import DetailIteam from '@components/ItemDetailComponent'
import DirectionIteam from '@components/ItemDirectionComponent'
import BreakevenItem from '@components/ItemBreakevenComponent'
import ChangingItem from '@components/ItemChangingComponent'
import * as GLOBAL from '@global'

// create a component
class ItemPage extends Component {
  constructor(props) {
    super(props)
    const data = this.props.navigation.state.params.data;
    this.state = {
      currentData: '',
      changeVS: '',
      changeVSFont: '',
      graphWidth1: '',
      graphWidth2: ''
    }
    this.state.currentData = data;
    if (data.title === 'AUDUSD') {this.state.changeVS =      'Australian Dollar vs U.S Dollar'; this.state.changeVSFont = 12;}
    else if (data.title === 'EURUSD') {this.state.changeVS = 'Euro vs U.S Dollar'; this.state.changeVSFont = 18;}
    else if (data.title === 'GBPUSD') {this.state.changeVS = 'British Pound vs U.S Dollar'; this.state.changeVSFont = 13;}
    else if (data.title === 'USDCHF') {this.state.changeVS = 'U.S Dollar vs Swiss Frank'; this.state.changeVSFont = 14;}
    else if (data.title === 'USDJPY') {this.state.changeVS = 'U.S Dollar vs Japanese Yen'; this.state.changeVSFont = 13;}
    else if (data.title === 'NZDUSD') {this.state.changeVS = 'N. Zealand Dollar vs U.S Dollar'; this.state.changeVSFont = 12;}
    else if (data.title === 'USDCAD') {this.state.changeVS = 'U.S Dollar vs Canadian Dollar'; this.state.changeVSFont = 12;}
    else if (data.title === 'EURCHF') {this.state.changeVS = 'Euro vs Swiss Frank'; this.state.changeVSFont = 18;}
    else if (data.title === 'EURJPY') {this.state.changeVS = 'Euro vs Japanese Yen'; this.state.changeVSFont = 13;}
    else if (data.title === 'GOLD') {this.state.changeVS = 'Gold vs U.S Dollar'; this.state.changeVSFont = 14;}
    this.state.graphWidth1 = data.strSingal + '%';
    this.state.graphWidth11 = 100 - data.strSingal + '%';
    this.state.graphWidth2 = data.tradingRatio + '%';
    this.state.graphWidth22 = 100 - data.tradingRatio + '%';
  }

  componentWillMount() {
    // alert(this.props.navigation.state.params.flag)
  }
  onBack() {
    this.props.navigation.dispatch({ type: 'Navigation/BACK' });
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.backContainer}>
            <TouchableOpacity style={styles.backbutton} onPress={this.onBack.bind(this)}>
              <Image source={require('@assets/images/item/backbutton.png')} style={styles.backImage} />
            </TouchableOpacity>
            <Image style={styles.onlineMarker} source={require('@assets/images/item/onlineMarker.png')} />
          </View>
          <View style={styles.MarkerContainer}>
            <Image source={require('@assets/images/item/marker.png')} style={styles.markerImage} />
            <View style={{ marginLeft: GLOBAL.getDeviceWidth(34) }}>
              <Text style={styles.BigTitle}>SigBanc Artificial</Text>
              <Text style={styles.BigTitle}>Intelligence Engine</Text>
            </View>
          </View>
          <DetailIteam title={'Trading Range'} elements={['Average Sell', 'Average Buy', 'Difference']}
            values={[this.state.currentData.trading_range.avg_sell, this.state.currentData.trading_range.avg_buy, this.state.currentData.trading_range.difference]}
          />
          <View style={{ height: 10 }} />
          <DetailIteam title={'Average Entry'} elements={['Expected Range', 'Up Target', 'Down Target']}
            values={[this.state.currentData.Average_entry.exp_range, this.state.currentData.Average_entry.up_target, this.state.currentData.Average_entry.down_target]}
          />
          <View style={[styles.currencyTitle]}>
            <View style={styles.BigTitleContainer}>
              <View style={styles.BottomBig}>
                <Text
                  numberOfLines={1}
                  adjustsFontSizeToFitWidth
                  style={{
                    width: 200,
                    color: '#373334',
                    fontSize: 45,
                    textAlign: 'right',
                    fontWeight: 'bold'
                  }}>
                  { this.state.currentData.title === 'GOLD' ? ('G O L D'):(this.state.currentData.title)}
                </Text>
                <View style={{flex: 1}}>
                  <Text
                    adjustsFontSizeToFitWidth
                    style={{
                      color: '#373334',
                      marginLeft: 20,
                      marginTop: 2,
                      fontSize: 18,
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }}>
                    Current Price
                  </Text>
                  <Text
                    adjustsFontSizeToFitWidth
                    style={{
                      color: '#373334',
                      marginLeft: 20,
                      fontSize: 30,
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }}>
                    {this.state.currentData.current_price}
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  adjustsFontSizeToFitWidth
                  style={{
                    color: '#373334',
                    marginLeft: 20,
                    marginBottom: 10,
                    fontSize: (this.state.changeVSFont),
                    textAlign: 'right',
                    width: 180,
                  }}>
                  {this.state.changeVS}
                </Text>
              </View>

            </View>
          </View>
          <View
            style={styles.priceLvel}>
            <Text
              adjustsFontSizeToFitWidth
              style={{
                color: 'white',
                marginTop: 10,
                fontSize: 24,
                textAlign: 'center'
              }}>
              Changing Price Level
          </Text>
            <View
              style={styles.priceLvelContent}>
              <DirectionIteam values={this.state.currentData.change_price.direction} />
              <BreakevenItem values={this.state.currentData.change_price.breakeven_point.toString().substr(0, 6)} />
              <ChangingItem values={this.state.currentData.change_price.change_price_level} />
            </View>
            <View
              style={styles.graphContent}>
              <Text style={styles.graphText}>
                Strength of Signal
            </Text>
              <View style={styles.graphView}>
                <View style={[styles.graphView1, { width: this.state.graphWidth1 }]}>
                  {
                    this.state.currentData.strSingal > 20 ? (
                      <Text style={styles.graphViewText}> {this.state.currentData.strSingal}%</Text>
                    ) : (
                        <Text style={styles.graphViewText}> </Text>
                      )
                  }
                </View>
                <View style={[styles.graphView2, { width: this.state.graphWidth11 }]}>
                  {/* 
                  {
                    this.state.currentData.strSingal < 80 ? (
                      <Text style={styles.graphViewText}> {100 - this.state.currentData.strSingal}%</Text>
                    ) : (
                        <Text style={styles.graphViewText}> </Text>
                      )
                  } */}
                </View>
              </View>
              <Text style={styles.graphText}>
                Trading Ratio
            </Text>
              <View style={styles.graphView}>
                <View style={[styles.graphView1, { width: this.state.graphWidth2 }]}>
                  {
                    this.state.currentData.tradingRatio > 15 ? (
                      <Text style={styles.graphViewText}> {this.state.currentData.tradingRatio}%</Text>
                    ) : (
                        <Text style={styles.graphViewText}>  </Text>
                      )
                  }
                </View>
                <View style={[styles.graphView2, { width: this.state.graphWidth22 }]}>
                  {/* {
                    this.state.currentData.tradingRatio < 80 ? (
                      <Text style={styles.graphViewText}> {100 - this.state.currentData.tradingRatio}%</Text>
                    ) : (
                        <Text style={styles.graphViewText}>  </Text>
                      )
                  } */}
                </View>
              </View>
              <View height={50} />
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  graphContent: {
    width: '100%',
    height: '100%',
    padding: 10
  },
  graphText: {
    color: 'white',
    marginTop: GLOBAL.getDeviceHeight(80),
    marginLeft: 10,
    fontSize: 20
  },
  graphView: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    marginTop: 5

  },
  graphView1: {
    backgroundColor: '#44d7f6',
    height: 20,

  },
  graphView2: {
    backgroundColor: '#ff4d71',
    height: 20,

  },
  graphViewText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center'
  },
  priceLvel: {
    width: '100%',
    height: '100%',
    backgroundColor: '#373334',
  },
  priceLvelContent: {
    width: '100%',
    height: 45,
    marginLeft: 12,
    marginTop: 10,
    flexDirection: 'row'
  },
  BottomBig: {
    width: '100%',
    height: GLOBAL.getDeviceHeight(175),
    flexDirection: 'row',
    // backgroundColor: 'green'

  },
  BigTitleContainer: {
    flex: 1,
    height: '100%',
    marginLeft: GLOBAL.getDeviceWidth(59),
    width: GLOBAL.getDeviceWidth(694),
  },
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  backContainer: {
    flexDirection: 'row',
  },
  onlineMarker: {
    // left    : GLOBAL.getDeviceWidth(1050),
    marginLeft: GLOBAL.getDeviceWidth(822),
    top: 0,
    width: GLOBAL.getDeviceWidth(156),
    height: GLOBAL.getDeviceHeight(239),
    resizeMode: 'contain'
  },
  backbutton: {
    marginLeft: GLOBAL.getDeviceWidth(60),
    top: GLOBAL.getDeviceHeight(60),
    width: GLOBAL.getDeviceWidth(200),
    height: GLOBAL.getDeviceHeight(108),
  },
  backImage: {
    width: GLOBAL.getDeviceWidth(200),
    height: GLOBAL.getDeviceHeight(108),
    resizeMode: 'contain'
  },
  MarkerContainer: {
    marginTop: GLOBAL.getDeviceHeight(9),
    height: GLOBAL.getDeviceHeight(200),
    flexDirection: 'row',
    marginBottom: GLOBAL.getDeviceHeight(81)
  },
  markerImage: {
    width: GLOBAL.getDeviceWidth(155),
    height: GLOBAL.getDeviceHeight(180),
    resizeMode: 'contain',
    marginLeft: GLOBAL.getDeviceWidth(103)
  },
  BigTitle: {
    fontSize: 20
  },
  currencyTitle: {
    marginTop: GLOBAL.getDeviceHeight(35),
    // height        : GLOBAL.getDeviceHeight(320),
    flexDirection: 'row',
  }
});

//make this component available to the app
export default ItemPage;

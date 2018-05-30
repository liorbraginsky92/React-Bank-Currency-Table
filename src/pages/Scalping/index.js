//import liraries
import React, { Component } from 'react';
import { View, 
  Text,
  FlatList,
  StyleSheet, 
  Platform,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import ScalpingItem from '@components/ItemScalpingComponent'
import * as GLOBAL from '@global'

// create a component
class ScalpingPage extends Component {
  _keyExtractor = (item, index) => index;
  constructor (props) {
    super(props)
    const data = this.props.navigation.state.params.data;
    this.state = {
      currentData:data
    };
  }

  componentWillMount () {
    // alert(this.props.navigation.state.params.flag)
  }
  onBack () {
    this.props.navigation.dispatch( {type: 'Navigation/BACK'});
  }
  renderRow({item}) {
    if(item.gain == 0){
      return (
        <ScalpingItem  values={[item.title, item.tradeType, item.retracement, item.avgOverall,item.tradeRatio,item.retracementRatio,'N/A']}/>
      );
    }else{
      return (
        <ScalpingItem  values={[item.title, item.tradeType, item.retracement, item.avgOverall,item.tradeRatio,item.retracementRatio,item.gain]}/>
      );
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <View style={styles.backContainer}>
          <TouchableOpacity style={styles.backbutton} onPress={this.onBack.bind(this)}>
            <Image source={require('@assets/images/general/backbutton.png')} style={styles.backImage} />
          </TouchableOpacity>
          <Image style={styles.onlineMarker} source={require('@assets/images/general/onlineMarker.png')} />
        </View>
        <View style={styles.MarkerContainer}>
          <Image source={require('@assets/images/general/mark_white.png')} style= {styles.markerImage} />
          <View style={{marginLeft: GLOBAL.getDeviceWidth(34), marginTop:10}}>
            <Text style={styles.BigTitle}>SigBanc Artificial</Text>
            <Text style={styles.BigTitle}>Intelligence Engine</Text>
          </View>
        </View>
        <FlatList
          data={this.state.currentData}   
          keyExtractor={this._keyExtractor}
          renderItem={this.renderRow}/>
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  graphContent :{
    width         : '100%',
    height        : '100%',
    padding    : 10
  },
  graphText       :{
    color:'white',
    marginTop:20,
    marginLeft:10,
    fontSize:20
  },
  graphView       :{
    width     : '100%',
    height    : 10,
    flexDirection : 'row',
    marginTop : 5
    
  },
  graphView1       :{
    backgroundColor: '#44d7f6',
    width     : '60%',
    height    : 10,

  },
  graphView2       :{
    backgroundColor: '#ff4d71',
    width     : '40%',
    height    : 10,

  },
  graphViewText   :{
    color:'#ffffff',
    fontSize:16,
    textAlign  : 'center' 
  },
  priceLvel:{
    width         : '100%',
    height        : '100%',
    backgroundColor: '#373334',
  },
  priceLvelContent:{
    width         : '100%',
    height        : 45,
    marginLeft    : 12,
    marginTop     :10,
    flexDirection :'row'
  },
  BottomBig: {
    width         : '100%',
    height        : GLOBAL.getDeviceHeight(170),
    flexDirection: 'row',
    // backgroundColor: 'green'
    
  },
  BigTitleContainer: {
    height        : '100%',
    marginLeft    : GLOBAL.getDeviceWidth(59),
    width         : GLOBAL.getDeviceWidth(694),
  },
  container: {
    marginTop : Platform.OS === 'ios' ? 20:0,    
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  backContainer: {
    flexDirection: 'row',
  },
  onlineMarker: {
    // left    : GLOBAL.getDeviceWidth(1050),
    marginLeft: GLOBAL.getDeviceWidth(822),
    top     : 0,
    width   : GLOBAL.getDeviceWidth(156),
    height  : GLOBAL.getDeviceHeight(239),
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
    width: '75%',
    marginTop     : GLOBAL.getDeviceHeight(6),
    flexDirection : 'row',
    marginBottom  : GLOBAL.getDeviceHeight(80),
    backgroundColor: '#373334'
  },
  markerImage: {
    width         : GLOBAL.getDeviceWidth(155),
    height        : GLOBAL.getDeviceHeight(182),
    marginLeft    : GLOBAL.getDeviceWidth(103),
    marginTop : 10,
    marginBottom : 10
  },
  BigTitle: {
    fontSize      : 20,
    color : '#ffffff'
  },
  currencyTitle: {
    marginTop     : GLOBAL.getDeviceHeight(65),
    height        : GLOBAL.getDeviceHeight(280),
    flexDirection : 'row',
  }
});

//make this component available to the app
export default ScalpingPage;

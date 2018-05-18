//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Toast, {DURATION} from 'react-native-easy-toast'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '@actions'
import OverlayComponent from '@components/overlayComponent'
import * as GLOBAL from '@global';
import HomePage from '@pages/HomePage'
// create a component

var $this;
class LoginPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      pass: '',
      overlay: false,
      isLoading:false
    }
    $this = this;
  }
  render() {
    const spinner = this.state.isLoading ?
      <ActivityIndicator size='large'/> : null;
    return (
      <KeyboardAwareScrollView style={{backgroundColor: '#373334'}}>
      <View style={styles.container}>
        <Text style={styles.title}>SigBanc Ai Engine</Text>
        <Image style={styles.mark1} source={require('@assets/images/login/mark1.png')} />
        <Image style={styles.mark2} source={require('@assets/images/login/mark2.png')}/>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>Please enter correct login details in order to login</Text>
          <Text style={styles.descriptionText}>into the system. Note if your trial or subscription has</Text>
          <Text style={styles.descriptionText}>expired, you will not be able to login and you</Text>
          <Text style={styles.descriptionText}>should renew your subscription</Text>
        </View>
        
        <View style={styles.Username}>
          <TextInput
            ref={(c) => {this.User = c}}
            placeholder={"Email or Username"}
            placeholderTextColor={'#fff'}
            textAlign={'center'}
            multiline={false}
            value={this.state.user}
            style={styles.authInfo}
            returnKeyType={'next'}
            underlineColorAndroid='transparent'
            onSubmitEditing={() => this.Password.focus()}
            onChangeText={user => this.setState({user})}
          />
        </View>
        <View style={styles.Password}>
          <TextInput
            ref={(c) => {this.Password = c}}
            placeholder={"Password"}
            placeholderTextColor={'#fff'}
            textAlign={'center'}
            multiline={false}
            value={this.state.pass}
            style={styles.authInfo}
            returnKeyType={'done'}
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onSubmitEditing={() => this.onSubmit()}
            onChangeText={pass => this.setState({pass})}
          />
        </View>
        <TouchableOpacity style={styles.LoginContainer} onPress={this.onSubmit.bind(this)}>
          <Text style={styles.LoginButton}>{"Login"}</Text>
        </TouchableOpacity>
        {spinner}
      </View>
      <OverlayComponent visible={this.state.overlay} size={"large"}/>
      <Toast ref={(c) => {this.Toast = c}}/>
      </KeyboardAwareScrollView>
    );
  }
  onSubmit () {
    if (this.inputValidation()) {
      this.setState({ isLoading:true});
      this.doLogin()
    }
  }
  inputValidation () {
    if (this.state.user.trim() === '') {
      this.Toast.show('You have to input Email or Username', DURATION.LENGTH_SHORT)
      this.User.focus();
      return false;
    } else if (this.state.pass === '') {
      this.Toast.show('You have to input Password', DURATION.LENGTH_SHORT)
      this.Password.focus();
      return false;
    }
    return true;
  }
    _userLogin = () => {
        // var value = this.refs.form.getValue();
        // if (value) { // if validation fails, value will be null
        fetch("http://members.sigbanc.com/API/TerminalAppAPI/GetMarketDirection?UserName=rafeeq&Password=TestPass!", {
            method: "POST"
        })
            .then((response) => response.json())
            .then((responseData) => {
                alert(JSON.stringify(responseData));

                this._checkJson(responseData)

            })
            .done();
        // }
    };
  doLogin () {
      fetch("http://members.sigbanc.com/API/TerminalAppAPI/GetMarketDirection?UserName="+this.state.user+"&Password="+this.state.pass, {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          method:"POST",
      })
          .then((response) => response.json())
          .then((responseData) => {
              this._checkJson(responseData)

          })
          .done();
  }
    _checkJson (jsonData) {
        // var baseData = response;
        let json = jsonData.replace(/\\/g, "").replace('["[', '[[').replace(']"]', ']]').replace(']","[', '],[');
        this.setState( {isLoading:false});
        var data = JSON.parse(json);
        if(data.success === "true"){
          this.props.navigation.navigate('HomePage', {datas: data});
        }else{
          alert(data.Message);
        }
    };
}


function mapStateToProps (state) {
  return {
    user: state.userReducers.user
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(Actions, dispatch)
}
//make this component available to the app
// export default LoginPage;
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);


// define your styles
const styles = StyleSheet.create({
  container: {
    flex      : 1,
    height    : '100%',
    backgroundColor: '#373334',
  },
  title: {
    fontSize  : 22,
    marginTop : '15%',
    textAlign : 'center',
    color     : '#fff'
  },
  mark1: {
    marginTop : GLOBAL.getDeviceHeight(87),
    width     : GLOBAL.getDeviceWidth(231),
    height    : GLOBAL.getDeviceHeight(271),
    resizeMode: 'contain',
    left      : GLOBAL.getDeviceWidth(395)
  },
  mark2: {
    position  : 'absolute',
    marginTop : GLOBAL.getDeviceHeight(30),
    width     : GLOBAL.getDeviceWidth(180),
    height    : GLOBAL.getDeviceHeight(200),
    left      : GLOBAL.getDeviceWidth(691),
    top       : GLOBAL.getDeviceHeight(374),
    resizeMode: 'contain',
  },
  description: {
    marginTop       : GLOBAL.getDeviceHeight(150),
    width     : '100%'
  },
  descriptionText : {
    color     : '#fff',
    fontSize  : 12,
    textAlign : 'center'
  },
  authInfo: {
    color     : '#fff',
    fontSize  : 15,
    height    : '100%'
  },
  Username: {
    width     : GLOBAL.getDeviceWidth(618),
    height    : GLOBAL.getDeviceHeight(120),
    left      : GLOBAL.getDeviceWidth(317),
    marginTop : GLOBAL.getDeviceHeight(51),
    borderWidth: 1,
    borderColor: '#fff',
  },
  Password: {
    width     : GLOBAL.getDeviceWidth(618),
    height    : GLOBAL.getDeviceHeight(120),
    left      : GLOBAL.getDeviceWidth(317),
    marginTop : GLOBAL.getDeviceHeight(30),
    borderWidth: 1,
    borderColor: '#fff',
  },
  LoginContainer: {
    width     : GLOBAL.getDeviceWidth(618),
    height    : GLOBAL.getDeviceHeight(108),
    left      : GLOBAL.getDeviceWidth(317),
    marginTop : GLOBAL.getDeviceHeight(30),
    backgroundColor: '#ff3859',
    justifyContent: 'center'    
  },
  LoginButton: {
    fontSize  : 12,    
    textAlign : 'center',
    textAlignVertical: 'center',
    color     : '#fff',
  }
});


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';


  


const { width, height } = Dimensions.get("window");

const background = require("./login_locks.png");
const logo = require("./logo.png");
const lockIcon = require("./login_lock.png");
const personIcon = require("./login_person.png");

export default class ProfileScreen extends Component {
 componentWillMount(){
   console.log("Account");
  
}
 constructor(props){
    super(props)

    
  }

  
  render() {
    return (
      <View style={styles.container}>
        <Image source={background} style={styles.background} resizeMode="cover">
          <View style={styles.logoWrap}>
            <Image source={logo} style={styles.logo} resizeMode="contain"/>
          </View>
          <View style={styles.wrapper}>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={personIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                placeholder="Username" 
                placeholderTextColor="#D8D8D8"
                style={styles.input} 
                returnKeyLabel = {"next"}
                onChangeText={(text) => this.setState({username:text})}
              />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                placeholderTextColor="#D8D8D8"
                placeholder="Password"
                onChangeText={(text) => this.setState({password:text})} 
                style={styles.input} 
                secureTextEntry 
              />
            </View>            
            <TouchableOpacity activeOpacity={.5}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign Innnnnnnnnn</Text>
              </View>
            </TouchableOpacity>
          </View>         
        </Image>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoWrap: {
    flex: 1,
    paddingVertical: 30,
  },
  logo: {
    width: null,
    height: null,
    flex: 1,
  },
  background: {
    width,
    height,
  },
  wrapper: {
    paddingVertical: 30,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 0,
    height: 40,
	marginBottom: 20
    
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#FF3366",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
	marginBottom: 100,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#D8D8D8"
  },
  signupLinkText: {
    color: "#FFF",
    marginLeft: 5,
  }
});

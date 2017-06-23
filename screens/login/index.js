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
import * as firebase from "firebase";
import {
  StackNavigator,
} from 'react-navigation';
import ProfileScreen from "./indexes";
const Apps = StackNavigator({ 
  Profile: { screen: ProfileScreen },
});
var config = {
    apiKey: "AIzaSyDUpeQayCdPVfKSmmu3WT3LmsSC6jI9Bts",
    authDomain: "frms-a6101.firebaseapp.com",
    databaseURL: "https://frms-a6101.firebaseio.com",
    projectId: "frms-a6101",
    storageBucket: "frms-a6101.appspot.com",
    messagingSenderId: "313513572446"
  };
  firebase.initializeApp(config);
//   async function signup(email, pass) {
//     console.log("fdf");

//     try {
//         await firebase.auth()
//             .createUserWithEmailAndPassword(email, pass);

//         console.log("Account created");

//         // Navigate to the Home page, the user is auto logged in

//     } catch (error) {
//         console.log(error.toString())
//     }

// }


const { width, height } = Dimensions.get("window");

const background = require("./login_locks.png");
const logo = require("./logo.png");
const lockIcon = require("./login_lock.png");
const personIcon = require("./login_person.png");

export default class LoginScreen extends Component {

  async login() {
    console.log("login",this.state.username,this.state.password);
    try {
        await firebase.auth()
            .signInWithEmailAndPassword(this.state.username,this.state.password);

        console.log("Logged Indd!");

        // Navigate to the Home page

    } catch (error) {
        console.log(error.toString())
    }

}
 componentWillMount(){
   console.log("Account");
  
}
 constructor(props){
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }

  _handlePress() {     
     console.log("pwd",);
      login(this.state.username,this.state.password);
  }
   static navigationOptions = {
    title: 'Welcome',
  };
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
                <Text onPress={() => this.login()} style={styles.buttonText}>Siign In</Text>
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

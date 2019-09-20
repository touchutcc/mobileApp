import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Button } from 'native-base';

export default class Logo extends Component {
  /*constructor(props){ 
    super(props);
    this.state = {
      username: '',
      password:'',
      email:'',
    };
    handleChange(event){
      this.setState
    }
  }*/

	render(){
		return(
			<View style={styles.regform}>
          <Text style={styles.header}>Registration</Text>
          <TextInput style={styles.textinput}
            type={Text}
            placeholder="Your Name"
            underlineColorAndroid={'transparent'}/>

          <TextInput style={styles.textinput}
            placeholder="Your Email"
            underlineColorAndroid={'transparent'}/>

          <TextInput style={styles.textinput}
            placeholder="Your password"
            underlineColorAndroid={'transparent'}
            secureTextEntry={true}/>

          <Button style={{ marginTop: 10 }}
            full
            rounded
            onPress={() => this.props.navigation.navigate('Login')}
            //onPress={() => this.signUpUser(this.state.email, this.state.password)}
          >
            <Text style={{ color: 'white' }}> Sign Up</Text>
          </Button>
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  header : {
    fontSize: 24,
    color:'black',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },

  regform : {
    alignSelf: 'stretch',
  },

  textinput : {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: 'black',
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },

 

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }

});
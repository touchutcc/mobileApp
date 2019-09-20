import React, { Component } from "react";
import {createStackNavigator} from 'react-navigation';
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";

export default class App extends Component{
  render(){
    return(
        <AppStackNavigator/>
    )
  }
}

const AppStackNavigator = createStackNavigator({
  Login:LoginScreen,
  Register:RegisterScreen
})

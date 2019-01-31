/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator, createAppContainer } from "react-navigation"; //Libreria React-Navigation

import Home from '.screens/Home'
import Task from './screens/Task'

const Screens = createStackNavigator({
  Home:{
    screen: Home
  },
  Task:{
    screen: Tasks
  },
  },{
    headerMode: 'none'
  });

  export default createAppContainer(Screens);

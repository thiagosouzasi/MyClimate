/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Routes from './src/Routes';
import {NavigationContainer} from  '@react-navigation/native';



export default function App(){
  
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
};





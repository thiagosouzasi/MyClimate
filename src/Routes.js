import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Pages/Home';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
           <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
    );
}

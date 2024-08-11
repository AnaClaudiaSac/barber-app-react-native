import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Preload from '../stacks/screens/Preload/preload';
import SignIn from './screens/SignIn/signIn';
import SignUp from './screens/SignUp/signUp';

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);

import React from 'react';
import SplashScreen from './src/screens/SplashScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SingInScreen from './src/screens/SingInScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import SingUpScreen from './src/screens/SingUpScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer theme={{colors: {background: '#FFF'}}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SingIn" component={SingInScreen} />
        <Stack.Screen name="SingUp" component={SingUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

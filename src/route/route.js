import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icons from 'react-native-vector-icons/AntDesign';
// Styles
import styles from '../styles/styles';

// Komponen
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import IntroScreen from '../screens/IntroScreens';
import ForgotScreen from '../screens/ForgotScreen';

import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfilScreen from '../screens/ProfilScreen';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{
        title: 'Register',
        headerStyle: {
          backgroundColor: styles.primary.color,
          elevation: 0,
        },
        headerTitleStyle: {
          color: styles.darkText.color,
        },
      }}
    />
    <Stack.Screen
      name="Forgot"
      component={ForgotScreen}
      options={{
        title: 'Forgot Password',
        headerStyle: {
          backgroundColor: styles.primary.color,
          elevation: 0,
        },
        headerTitleStyle: {
          color: styles.darkText.color,
        },
      }}
    />
  </Stack.Navigator>
);

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const ProfilStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profil"
        component={ProfilScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const TabStack = () => {
  return (
    <BottomTab.Navigator tabBarOptions={{activeTintColor:styles.accent.color,style:{elevation:0}}}>
      <BottomTab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Icons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profil"
        component={ProfilStack}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Icons name="user" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const RouteApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Intro"
          component={IntroScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tab"
          component={TabStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteApp;

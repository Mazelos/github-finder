import React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SafeScreen from './app/components/tools/SafeScreen';
import GithubFinderScreen from "./app/screens/GithubFinderScreen";
import UserInfoScreen from './app/screens/UserInfoScreen';

import colors from './app/config/colors';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeScreen style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home' mode='card' screenOptions={{headerShown: false}}>
          <Stack.Screen name='home' component={GithubFinderScreen}/>
          <Stack.Screen name='user-info' component={UserInfoScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
});

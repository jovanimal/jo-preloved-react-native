import React from 'react';
import { Button, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import AuthNavigator from './app/navigation/AuthNavigator';
import Screen from './app/components/Screen';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import AccountNavigator from './app/navigation/AccountNavigator';
import OfflineNotice from './app/components/OfflineNotice';

// If the component is not used as a Screen,
// we can use useNagivation hooks to access the navigation props
// const Link = () => {
//   const navigation = useNavigation();

//   return (
//     <Button title="Click" onPress={() => navigation.navigate('TweetDetails')} />
//   )
// }

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}

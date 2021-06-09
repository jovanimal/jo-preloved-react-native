import React, { useState, useEffect } from 'react';
import { Button, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import jwtDecode from 'jwt-decode';
import AppLoading from 'expo-app-loading';

import AuthNavigator from './app/navigation/AuthNavigator';
import Screen from './app/components/Screen';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import AccountNavigator from './app/navigation/AccountNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';

// If the component is not used as a Screen,
// we can use useNagivation hooks to access the navigation props
// const Link = () => {
//   const navigation = useNavigation();

//   return (
//     <Button title="Click" onPress={() => navigation.navigate('TweetDetails')} />
//   )
// }

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  };

  if (!isReady) {
    return (
      <AppLoading startAsync={restoreToken} onError={console.warn} onFinish={() => setIsReady(true)} />
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

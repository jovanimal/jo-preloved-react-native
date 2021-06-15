import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import { navigationRef } from './app/navigation/rootNavigation';

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

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreUser}
        onError={console.warn}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

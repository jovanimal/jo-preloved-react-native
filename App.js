import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingScreen from './app/screens/ListingScreen';
import Card from './app/components/Card';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';

export default function App() {
  return (
    <AccountScreen />
  );
}

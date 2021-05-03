import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native';

import background from '../assets/background.jpg';
import logo from '../assets/logo-red.png';

const WelcomeScreen = () => {
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginBtn}></View>
      <View style={styles.registerBtn}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginBtn: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  },
  registerBtn: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 80,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});

export default WelcomeScreen;

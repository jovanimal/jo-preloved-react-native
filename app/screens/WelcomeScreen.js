import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native';

import routes from '../navigation/routes';
import AppButton from '../components/AppButton';

import background from '../assets/background.jpg';
import logo from '../assets/logo-red.png';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={10}
      source={background}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.btnContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
        <View style={styles.registerBtn}></View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btnContainer: {
    padding: 15,
    width: '100%',
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
  tagline: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
});

export default WelcomeScreen;

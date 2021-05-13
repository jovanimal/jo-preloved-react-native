import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, View, StyleSheet } from 'react-native';

const Screen = ({ children, style }) => {
  return (
    //SafeAreaView doesn't support horizontal padding
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  }
});
export default Screen;

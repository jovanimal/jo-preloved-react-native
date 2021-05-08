import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';

import jacket from '../assets/jacket.jpg';


const ListingScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={jacket} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>RM 70</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
});
export default ListingScreen;

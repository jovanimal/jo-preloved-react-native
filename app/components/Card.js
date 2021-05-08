import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

import jacket from '../assets/jacket.jpg';

const Card = props => {
  const { title, subtitle, image } = props;

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={jacket} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',

  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;

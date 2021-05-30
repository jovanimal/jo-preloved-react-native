import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import Button from '../components/AppButton';
import Screen from '../components/Screen';
import Card from '../components/Card';
import listingsApi from '../api/listings';
import colors from '../config/colors';
import routes from '../navigation/routes';
import AppText from '../components/AppText';
import useApi from '../hooks/useApi';

const ListingScreen = ({ navigation }) => {
  const { data: listings, error, loading, request: loadListings} = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <React.Fragment>
          <AppText>Couldn't retrieve the listings</AppText>
          <Button title="Retry" onPress={loadListings} />
        </React.Fragment>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`RM ${item.price}`}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;

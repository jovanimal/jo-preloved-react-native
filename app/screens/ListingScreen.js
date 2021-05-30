import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';

import Button from '../components/AppButton';
import Screen from '../components/Screen';
import Card from '../components/Card';
import listingsApi from '../api/listing';
import colors from '../config/colors';
import routes from '../navigation/routes';
import AppText from '../components/AppText';

const ListingScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <React.Fragment>
          <AppText>Couldn't retrieve the listings</AppText>
          <Button title="Retry" onPress={loadListings} />
        </React.Fragment>
      )}
      <ActivityIndicator animating={loading} size="large" />
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

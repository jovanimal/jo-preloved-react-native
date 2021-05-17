import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Screen from './app/components/Screen';
import { Button, Image } from 'react-native';

export default function App() {
  const [imageUri, setImageUri] = useState();


  const requestPermission = async () => {

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted')
      alert('You need to enable permission to access to Library');
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri)
      
    } catch (error) {
      console.log('Error reading an image', error)
    }
  }

  return <Screen>
    <Button title="Select Image" onPress={selectImage} />
    <Image source={{ uri : imageUri }} style={{ width: 200, height: 200 }} />
  </Screen>;
}

import * as SecureStore from 'expo-secure-store';

const key = 'authToken';

const storeToken = async authToken => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log('Error storing the authtoken', error);
  }
};

const getToken = async () => {
  try {
    const authToken = await SecureStore.getItemAsync(key);
    return authToken;
  } catch (error) {
    console.log('Error getting the authtoken');
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log('Error removing the authtoken', error);
  }
};

export default { getToken, removeToken, storeToken };

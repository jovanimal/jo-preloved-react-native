import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import expoPushTokensApi from '../api/expoPushTokens';

export default useNotifications = notiListener => {
  useEffect(() => {
    registerForPushNoti();

    if (notiListener)
      Notifications.addNotificationResponseReceivedListener(notiListener);
  }, []);

  const registerForPushNoti = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const tokenObj = await Notifications.getExpoPushTokenAsync();
      const token = tokenObj.data;
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log('Error getting push token', error);
    }
  };
};

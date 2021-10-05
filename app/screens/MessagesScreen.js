import React, { useState } from 'react';
import { FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: 'Jeffrey Wang',
    description: 'Hello! Is this still available ?',
    image: require('../assets/ben.jpeg'),
  },
  {
    id: 2,
    title: 'Amir Faziq',
    description: 'I am interested in this item, may I know what is your best price?',
    image: require('../assets/amir.jpg'),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    // 1. delete the message from messages
    const newMessages = messages.filter(m => m.id !== message.id);
    setMessages(newMessages);
    // 2. call the server to delete from backend
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('from message screen', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/jovan.png'),
            },
          ]);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;

import React, {useState} from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import Card from './Card';
import ListSeparator from './tools/ListSeparator';
import ItemDelete from './tools/ItemDelete';

const CardList = ({ profiles, onItemDelete, onRefresh, onShowUserInfo }) => {
  const [refreshing, setRefreshing] = useState(false);

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={profiles}
        keyExtractor={(profile) => profile.id.toString()}
        renderItem={({ item }) => (
          <Card
            renderRightActions={() => <ItemDelete onPress={() => onItemDelete(item.id)} />}
            onShowUserInfo={onShowUserInfo}
            {...item}
          />
        )}
        ItemSeparatorComponent={() => <ListSeparator />}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: "100%",
  },
});

export default CardList;

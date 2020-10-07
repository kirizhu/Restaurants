import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const RestaurantList = ({ title, restaurants }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={restaurants}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => {
          return <Text>{item.name} </Text>;
        }}
      />
      <Text>Results: {restaurants.length}</Text>
    </View>
  );
};

export default RestaurantList;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

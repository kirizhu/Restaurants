import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import RestaurantsDetail from './RestaurantsDetail';
const RestaurantList = ({ title, restaurants }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={restaurants}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => {
          return <RestaurantsDetail restaurant={item} />;
        }}
      />
    </View>
  );
};

export default RestaurantList;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
    marginBottom: 5,
  },
  containerStyle: {
    marginBottom: 10,
  },
});

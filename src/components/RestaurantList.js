import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import RestaurantsDetail from './RestaurantsDetail';
const RestaurantList = ({ title, restaurants, navigation }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={restaurants}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
              <RestaurantsDetail restaurant={item} navigation={navigation} />
            </TouchableOpacity>
          );
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

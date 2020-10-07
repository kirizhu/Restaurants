import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import RestaurantList from '../components/RestaurantList';
import useRestaurants from '../hooks/useRestaurants';

function SearchScreen() {
  const [term, setTerm] = useState('');
  const [searchApi, restaurants, errMessage] = useRestaurants();

  const filterResultsBy = (price) => {
    return restaurants.filter((restaurant) => {
      return restaurant.price === price;
    });
  };

  return (
    <View style={{ backgroundColor: 'white' }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errMessage ? <Text>{errMessage}</Text> : null}
      <Text>We have found {restaurants.length} restaurants</Text>
      <RestaurantList restaurants={filterResultsBy('$')} title='Cheap' />
      <RestaurantList restaurants={filterResultsBy('$$')} title='Bit Pricer' />
      <RestaurantList restaurants={filterResultsBy('$$$')} title='Expensive' />
      <RestaurantList
        restaurants={filterResultsBy('$$$$')}
        title='Big Spender'
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default SearchScreen;

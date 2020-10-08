import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import RestaurantList from '../components/RestaurantList';
import useRestaurants from '../hooks/useRestaurants';

function SearchScreen({ navigation }) {
  const [term, setTerm] = useState('');
  const [searchApi, restaurants, errMessage] = useRestaurants();

  const filterResultsBy = (price) => {
    return restaurants.filter((restaurant) => {
      return restaurant.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errMessage ? <Text>{errMessage}</Text> : null}
      <ScrollView>
        <RestaurantList
          restaurants={filterResultsBy('$')}
          title='Cheap'
          navigation={navigation}
        />
        <RestaurantList
          restaurants={filterResultsBy('$$')}
          title='Bit Pricer'
          navigation={navigation}
        />
        <RestaurantList
          restaurants={filterResultsBy('$$$')}
          title='Expensive'
          navigation={navigation}
        />
        <RestaurantList
          restaurants={filterResultsBy('$$$$')}
          title='Big Spender'
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginLeft: 12,
  },
});

export default SearchScreen;

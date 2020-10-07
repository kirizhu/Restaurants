import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

function SearchScreen() {
  const [term, setTerm] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term,
        location: 'stockholm',
      },
    });
    setRestaurants(response.data.businesses);
  };

  return (
    <View style={{ backgroundColor: 'white' }}>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      <Text>We have found {restaurants.length} restaurants</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SearchScreen;

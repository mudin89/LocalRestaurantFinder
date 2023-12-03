import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import RestaurantList from '../components/RestaurantList';
import FinderHooks from '../hooks/FinderHook';

//search screen to hold and consilidate the component

function SearchPage() {
  const [term, setTerm] = useState('');
  const [searchApi, restaurants, errMessage] = FinderHooks();

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
        <RestaurantList restaurants={filterResultsBy('$')} title='Rahmah' />
        <RestaurantList
          restaurants={filterResultsBy('$$')}
          title='Standard'
        />
        <RestaurantList
          restaurants={filterResultsBy('$$$')}
          title='Expensive'
        />
        <RestaurantList
          restaurants={filterResultsBy('$$$$')}
          title='Lavish'
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

export default SearchPage;

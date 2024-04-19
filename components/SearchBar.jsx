import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';


const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
      style={styles.searchBar}
    />
  );
};


const styles = StyleSheet.create({
    searchBar: {
        margin: 10,
        borderRadius: 10,
        backgroundColor: "#EAEAEA",
        color: "black",
    },
});


export default SearchBar;
